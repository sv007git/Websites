import fs from 'fs';
import path from 'path';

function copyDir(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

const distDir = path.resolve('dist');
const rootDir = path.resolve('.');

if (fs.existsSync(distDir)) {
  // 1. Copy dist/assets to ./assets
  const distAssets = path.join(distDir, 'assets');
  if (fs.existsSync(distAssets)) {
    copyDir(distAssets, path.join(rootDir, 'assets'));
  }

  // 2. Copy root files from dist to .
  const filesToCopy = [
    'index.html',
    'manifest.webmanifest',
    'registerSW.js',
    'sw.js'
  ];

  for (const file of filesToCopy) {
    const src = path.join(distDir, file);
    if (fs.existsSync(src)) {
      fs.copyFileSync(src, path.join(rootDir, file));
    }
  }

  // 3. Copy workbox files
  const distFiles = fs.readdirSync(distDir);
  for (const f of distFiles) {
    if (f.startsWith('workbox-')) {
      fs.copyFileSync(path.join(distDir, f), path.join(rootDir, f));
    }
  }

  console.log('Successfully published dist artifacts to root for direct GitHub Pages branch serving!');
}
