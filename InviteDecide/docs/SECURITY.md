# InviteDecide — Security & Compliance Architecture

Security and privacy are foundational pillars in InviteDecide.

## 1. Multi-Tenant Organization Isolation (Supabase RLS)
- Every business table enforces PostgreSQL Row Level Security.
- Organization data access checks confirm the active user's presence in `organization_members` for the specific `organization_id`.
- Cross-tenant querying is blocked at the database engine level.

## 2. Token Security & Anti-Guessing Protection
- **Invitation Tokens**: Generated using 256-bit cryptographic pseudorandom bytes (hex-encoded string). Guessing a valid token by brute force is statistically infeasible ($2^{256}$ search space).
- **QR Pass Token Hashing**: Plaintext QR tokens are never stored in the database. The database records only the `SHA-256` hash of the pass token. Even if an attacker gains read access to the database, they cannot forge or reconstruct scannable QR passes.

## 3. Atomic Concurrency & Anti-Double-Booking Protection
- Check-ins use the `atomic_checkin` stored procedure with explicit `SELECT ... FOR UPDATE` row locking. Multiple gate operators scanning the same QR pass or family member concurrently across different devices cannot cause double check-ins.
- Time-slot bookings enforce strict capacity constraints using `reserve_time_slot_atomic` row locks.

## 4. Vendor Portal Scoping
- Caterers and third-party vendors access scoped portals using dedicated vendor tokens.
- Caterers only see dish totals, meal counts, and dietary requirements. Private guest identities, contact numbers, and invitation tokens are strictly withheld from vendor endpoints.

## 5. WhatsApp Credential Protection
- Meta API tokens (`WHATSAPP_ACCESS_TOKEN`, `WHATSAPP_APP_SECRET`) are never exposed to browser clients or committed to version control.
- Edge Functions authenticate requests server-side, logging only sanitised message status metadata.
