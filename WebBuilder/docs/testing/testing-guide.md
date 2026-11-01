# WebForge Studio: Testing Guide

## Automated Test Architecture

WebForge Studio uses **Vitest** for unit, integration, and end-to-end lifecycle testing across all workspace packages and apps.

### Running Tests

```bash
# Run all test suites once
npm test

# Run tests in watch mode during development
npm run test:watch
```

### Test Suite Structure

1. **`packages/testing/tests/schema.test.ts`**:
   * Validates project creation, schema serialization, and Zod type constraints.
   * Tests database table definitions, foreign keys, and RLS policy schemas.

2. **`packages/testing/tests/blocks.test.ts`**:
   * Verifies all 55+ distinct blocks are registered across all 16 categories.
   * Asserts default props and valid render functions for every block.

3. **`packages/testing/tests/templates.test.ts`**:
   * Asserts all 12 multi-page starter templates are valid.
   * Tests template cloning and entity ID remapping.

4. **`packages/testing/tests/codegen.test.ts`**:
   * Tests Next.js 14 App Router code generation and PostgreSQL DDL with RLS.
   * Tests PHP 8.x MVC code generation, PDO router, and MySQL DDL.
   * Tests static HTML export and JSZip package generation.

5. **`packages/testing/tests/ai.test.ts`**:
   * Tests natural language AI prompt parsing for themes and database tables.

6. **`packages/testing/tests/e2e-workflow.test.ts`**:
   * Exercises complete Definition of Done lifecycle from project creation to export.
