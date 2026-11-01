import { defineConfig } from 'vitest/config';
import path from 'path';

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
  },
  resolve: {
    alias: {
      '@webforge/schema': path.resolve(__dirname, './packages/schema/src'),
      '@webforge/design-system': path.resolve(__dirname, './packages/design-system/src'),
      '@webforge/editor-core': path.resolve(__dirname, './packages/editor-core/src'),
      '@webforge/block-registry': path.resolve(__dirname, './packages/block-registry/src'),
      '@webforge/template-registry': path.resolve(__dirname, './packages/template-registry/src'),
      '@webforge/backend-adapters': path.resolve(__dirname, './packages/backend-adapters/src'),
      '@webforge/codegen': path.resolve(__dirname, './packages/codegen/src'),
      '@webforge/integrations': path.resolve(__dirname, './packages/integrations/src'),
      '@webforge/testing': path.resolve(__dirname, './packages/testing/src'),
    },
  },
});
