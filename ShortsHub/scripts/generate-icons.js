import fs from 'fs';
import path from 'path';
import zlib from 'zlib';

function crc32(buf) {
  let table = new Uint32Array(256);
  for (let i = 0; i < 256; i++) {
    let c = i;
    for (let k = 0; k < 8; k++) {
      c = (c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1);
    }
    table[i] = c;
  }
  let c = 0 ^ (-1);
  for (let i = 0; i < buf.length; i++) {
    c = (c >>> 8) ^ table[(c ^ buf[i]) & 0xFF];
  }
  return (c ^ (-1)) >>> 0;
}

function makeChunk(type, data) {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length, 0);
  const typeBuf = Buffer.from(type, 'binary');
  const body = Buffer.concat([typeBuf, data]);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(body), 0);
  return Buffer.concat([len, body, crc]);
}

function createPng(size, isMaskable = false) {
  const width = size;
  const height = size;

  const rawRows = [];
  const cx = width / 2;
  const cy = height / 2;
  const r = size * 0.44;

  for (let y = 0; y < height; y++) {
    const row = Buffer.alloc(1 + width * 4);
    row[0] = 0; // Filter: None
    for (let x = 0; x < width; x++) {
      const offset = 1 + x * 4;
      const dx = x - cx;
      const dy = y - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);

      // Play icon triangle coordinates
      const inTriangle = (
        x >= cx - size * 0.12 &&
        x <= cx + size * 0.22 &&
        y >= cy - (x - (cx - size * 0.12)) * 0.65 - size * 0.05 &&
        y <= cy + (x - (cx - size * 0.12)) * 0.65 + size * 0.05
      );

      if (inTriangle) {
        // Crisp White Play Button
        row[offset] = 255;
        row[offset + 1] = 255;
        row[offset + 2] = 255;
        row[offset + 3] = 255;
      } else if (dist <= r || isMaskable) {
        // Red-Rose Brand Gradient
        const t = (x + y) / (width + height);
        row[offset] = Math.round(244 - t * 40);     // R: 244 -> 204
        row[offset + 1] = Math.round(63 - t * 30);  // G: 63 -> 33
        row[offset + 2] = Math.round(94 - t * 30);  // B: 94 -> 64
        row[offset + 3] = 255;
      } else {
        // Dark background
        row[offset] = 9;
        row[offset + 1] = 10;
        row[offset + 2] = 15;
        row[offset + 3] = 255;
      }
    }
    rawRows.push(row);
  }

  const rawBuffer = Buffer.concat(rawRows);
  const deflated = zlib.deflateSync(rawBuffer);

  const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
  const ihdrData = Buffer.alloc(13);
  ihdrData.writeUInt32BE(width, 0);
  ihdrData.writeUInt32BE(height, 4);
  ihdrData[8] = 8; // bit depth
  ihdrData[9] = 6; // color type: RGBA
  ihdrData[10] = 0; // compression
  ihdrData[11] = 0; // filter
  ihdrData[12] = 0; // interlace

  const ihdr = makeChunk('IHDR', ihdrData);
  const idat = makeChunk('IDAT', deflated);
  const iend = makeChunk('IEND', Buffer.alloc(0));

  return Buffer.concat([signature, ihdr, idat, iend]);
}

const outDir = path.resolve('public/icons');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

fs.writeFileSync(path.join(outDir, 'icon-192.png'), createPng(192));
fs.writeFileSync(path.join(outDir, 'icon-512.png'), createPng(512));
fs.writeFileSync(path.join(outDir, 'icon-maskable-512.png'), createPng(512, true));
fs.writeFileSync(path.resolve('public/favicon.ico'), createPng(48));

console.log('Successfully generated PWA icons and favicon!');
