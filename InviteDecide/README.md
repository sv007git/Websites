# InviteDecide

**Intelligent Event Invitation, RSVP, Catering, Seating & Venue Management SaaS Platform**

[![Deploy to GitHub Pages](https://github.com/sv007git/InviteDecide/actions/workflows/deploy.yml/badge.svg)](https://github.com/sv007git/InviteDecide/actions/workflows/deploy.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

InviteDecide transforms traditional digital invitations into an intelligent event planning and participation system tailored for Indian weddings, celebrations, corporate events, and large social gatherings.

---

## 🌟 Key Capabilities

1. **Digital Invitation Designer**: Visual drag-and-drop canvas with premium ethnic, modern, and royal wedding templates, custom typography, decorative motifs, and dynamic guest personalization.
2. **Guest & Family Hierarchy**: Track households, VIP status, relationships, and individual attendees. Full CSV/Excel import and export.
3. **WhatsApp-Only Communication**: Official Meta WhatsApp Business Cloud API integration and instant 1-click WhatsApp web/mobile fallback links. No email or SMS dependencies.
4. **Account-Free Guest Portal**: Mobile-first invitation view, multi-attendee RSVP, dietary preferences, and arrival time slot reservation.
5. **Catering Quantity Engine**: Attendee-level food selections, dietary restrictions (Veg, Non-Veg, Jain, Vegan), automated portion calculations, and configurable buffer percentages.
6. **Interactive Seating Studio**: 2D venue floor plan designer with round/rectangular tables, automatic family-first seating allocator, and manual fine-tuning.
7. **Secure QR Passes & Mobile Check-in**: Cryptographically hashed SHA-256 tokens, instant camera scanner for gate staff, partial family check-in, and real-time arrival metrics.
8. **Vendor Restricted Portals**: Caterers and vendors access only the specific preparation lists and time schedules they need, keeping private guest contact data secure.
9. **GitHub Pages Ready**: Client-side hash routing (`HashRouter`) and automated GitHub Actions CI/CD deployment.

---

## 🚀 Quick Start

### Installation

```bash
git clone https://github.com/sv007git/InviteDecide.git
cd InviteDecide
npm install
npm run dev
```

Visit `http://localhost:5173` in your browser.

### Interactive Enterprise Demo Mode
InviteDecide comes pre-seeded with the comprehensive **"InviteDecide Wedding Demo"** featuring 500 families, 1,000+ attendees, 4 wedding functions (Mehendi, Sangeet, Ceremony, Reception), custom catering menus, time slot reservations, and live seating allocations. You can test all features right in the browser!

---

## 📚 Documentation Directory

- [Setup & Environment Guide](docs/SETUP.md)
- [Database Schema & Migrations](docs/DATABASE.md)
- [GitHub Pages Deployment](docs/DEPLOYMENT.md)
- [Security & Compliance](docs/SECURITY.md)
- [WhatsApp Cloud API Integration](docs/WHATSAPP_SETUP.md)
- [API & Edge Functions](docs/API_DOCUMENTATION.md)
- [User & Organizer Guide](docs/USER_GUIDE.md)
- [Implementation Status Tracker](docs/IMPLEMENTATION_STATUS.md)

---

## 🛠️ Technology Stack

- **Frontend**: React 18, TypeScript, Vite, Tailwind CSS, Lucide Icons, Framer Motion, Recharts.
- **Backend & Database**: PostgreSQL on Supabase, Row Level Security (RLS), Supabase Edge Functions.
- **Tools**: Vitest, React Testing Library, jsPDF, html5-qrcode, xlsx, date-fns.
