import fs from 'fs';
import path from 'path';

const devPath = path.resolve('index.dev.html');
const prodPath = path.resolve('index.html');

if (fs.existsSync(devPath)) {
  fs.copyFileSync(devPath, prodPath);
  console.log('[prebuild] Restored index.html from index.dev.html for Vite compilation.');
}
