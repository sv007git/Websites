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

  // 2. Copy dist/modules to ./modules
  const distModules = path.join(distDir, 'modules');
  if (fs.existsSync(distModules)) {
    copyDir(distModules, path.join(rootDir, 'modules'));
  }

  // 3. Copy root artifacts (index.html, 404.html, .nojekyll)
  const filesToCopy = ['index.html', '404.html', '.nojekyll'];
  for (const file of filesToCopy) {
    const src = path.join(distDir, file);
    if (fs.existsSync(src)) {
      fs.copyFileSync(src, path.join(rootDir, file));
    }
  }

  console.log('[postbuild] Successfully published production bundle directly to repository root for zero-config GitHub Pages serving!');
}
