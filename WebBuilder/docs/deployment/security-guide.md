# WebForge Studio: Security Architecture & Best Practices

## 1. Secure Defaults

WebForge Studio follows a strict "secure by default" philosophy across both the visual builder and generated applications:

1. **Row Level Security (RLS) Everywhere**:
   * PostgreSQL tables have RLS enabled automatically (`ALTER TABLE ... ENABLE ROW LEVEL SECURITY`).
   * No queries execute with service-role permissions in client browser bundles.
   * Declarative access rules are partitioned strictly between `anon`, `authenticated`, and `admin` roles.

2. **SQL Injection Defense**:
   * Target A leverages Supabase / PostgREST parameterized queries.
   * Target B strictly utilizes PDO prepared statements with bounded parameters (`$stmt->prepare(...)` and `$stmt->execute($input)`). No direct string interpolation into SQL queries.

3. **Cross-Site Scripting (XSS)**:
   * React automatically escapes JSX expressions.
   * PHP views utilize `htmlspecialchars($val, ENT_QUOTES, 'UTF-8')`.

4. **Cross-Site Request Forgery (CSRF)**:
   * PHP sessions utilize secure cookie options (`SameSite=Lax`, `HttpOnly=true`, `Secure=true` over HTTPS).
   * Cryptographic tokens generated via `random_bytes(32)` validated with `hash_equals()`.

5. **Secrets & Credential Isolation**:
   * Builder project persistence never stores secret keys or database passwords in the project AST.
   * Generated client bundles only reference `NEXT_PUBLIC_` prefixed keys. Server secrets reside strictly in `.env.local` or environment stores.
