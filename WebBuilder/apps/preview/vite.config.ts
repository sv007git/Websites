import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  base: './',
  plugins: [react()],
  resolve: {
    alias: {
      '@webforge/schema': path.resolve(__dirname, '../../packages/schema/src'),
      '@webforge/block-registry': path.resolve(__dirname, '../../packages/block-registry/src'),
    },
  },
  server: {
    port: 3001,
  },
});
