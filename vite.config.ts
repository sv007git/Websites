import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Websites/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@webforge/schema': path.resolve(__dirname, './src/modules/webbuilder/packages/schema/src'),
      '@webforge/design-system': path.resolve(__dirname, './src/modules/webbuilder/packages/design-system/src'),
      '@webforge/editor-core': path.resolve(__dirname, './src/modules/webbuilder/packages/editor-core/src'),
      '@webforge/block-registry': path.resolve(__dirname, './src/modules/webbuilder/packages/block-registry/src'),
      '@webforge/template-registry': path.resolve(__dirname, './src/modules/webbuilder/packages/template-registry/src'),
      '@webforge/backend-adapters': path.resolve(__dirname, './src/modules/webbuilder/packages/backend-adapters/src'),
      '@webforge/codegen': path.resolve(__dirname, './src/modules/webbuilder/packages/codegen/src'),
      '@webforge/integrations': path.resolve(__dirname, './src/modules/webbuilder/packages/integrations/src'),
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    chunkSizeWarningLimit: 3000,
  },
});
