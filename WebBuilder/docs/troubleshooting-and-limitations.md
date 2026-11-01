# WebForge Studio: Troubleshooting & Known Limitations

## Troubleshooting Guide

### 1. Build fails with missing module errors
* Ensure you ran `npm install` from the root workspace directory.
* Verify TypeScript versions align with `^5.4.5`.

### 2. Exported Next.js project fails to connect to database
* Check that `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` are defined in `.env.local`.
* Ensure that the migration script in `supabase/migrations/00001_initial_schema.sql` was executed in the Supabase SQL Editor.

### 3. PHP project returns 404 on API routes
* Verify that Apache `mod_rewrite` is enabled on your web server.
* Ensure `.htaccess` in the `public/` directory is readable and `AllowOverride All` is set in your Apache VirtualHost configuration.

---

## Known Limitations & Roadmap

1. **Database Schema Alterations**:
   * Currently, adding new tables and columns generates initial DDL migrations. Complex `ALTER TABLE DROP COLUMN` operations in existing production databases should be verified with database backups.
2. **Dynamic Custom Block Components**:
   * Users can configure and customize props and styles on all 55+ built-in blocks. Hand-writing custom raw JSX directly inside the canvas will be expanded in v2.0 via Monaco Editor live AST compiling.
3. **Multi-Region Distributed Database Routing**:
   * Supported via Supabase Global Edge Functions or distributed MySQL clusters configured at the infrastructure tier.
