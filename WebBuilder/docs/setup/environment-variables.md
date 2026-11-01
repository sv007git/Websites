# WebForge Studio: Environment Variables Reference

## Studio & Builder Environment (`apps/studio/.env`)

| Variable | Description | Default | Required |
| :--- | :--- | :--- | :--- |
| `VITE_API_URL` | Endpoint for WebForge backend API proxy | `http://localhost:4000` | No |
| `VITE_STORAGE_PREFIX` | LocalStorage key prefix for project autosave | `webforge_` | No |
| `VITE_AI_MODEL` | Default AI model provider | `gemini-1.5-pro` | No |

---

## Target A: Generated Next.js + Supabase Application (`.env.local`)

| Variable | Description | Example Placeholder | Required |
| :--- | :--- | :--- | :--- |
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase Project REST URL | `https://xyzproject.supabase.co` | **Yes** |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Public Anon Client Key (Safe for browser) | `eyJhbGciOi...` | **Yes** |
| `SUPABASE_SERVICE_ROLE_KEY` | Admin Service Role Key (Server-only!) | `eyJhbGciOi...` | Only for admin ops |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`| Stripe publishable key | `pk_test_sample...` | If Stripe enabled |
| `STRIPE_SECRET_KEY` | Stripe secret server key | `sk_test_sample...` | If Stripe enabled |
| `RESEND_API_KEY` | Resend transactional email API key | `re_123456...` | If Email enabled |

> [!CAUTION]
> Never commit real production secrets, API keys, or service role keys to Git repositories. Always use `.env.local` or managed secrets in Vercel / Netlify.

---

## Target B: Generated PHP 8.x + MySQL Application

| Variable | Description | Default | Required |
| :--- | :--- | :--- | :--- |
| `DB_HOST` | MySQL database hostname | `127.0.0.1` | **Yes** |
| `DB_PORT` | MySQL database port | `3306` | **Yes** |
| `DB_NAME` | Database schema name | `webforge_app` | **Yes** |
| `DB_USER` | MySQL database user | `root` | **Yes** |
| `DB_PASS` | MySQL database password | `""` | **Yes** |
