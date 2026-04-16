# VoltSafe — Electrician Website Template

Scaleify template #1 of 3 — a production-ready landing site for licensed-electrician businesses. Single-page scroll site with Home / Privacy / Terms / 404 pages, cookie consent, chatbot widget, contact form, and local-business SEO.

## Stack

- Vite + React 19 + TypeScript
- Tailwind CSS 3 + Radix primitives
- React Router + React Helmet Async
- Lucide icons

## Per-client customization

Edit **`src/config/site.ts`** — this is the only file that changes per client. Every other file reads from it.

- Brand name, phone, email, address
- Service city list
- Hero copy + CTAs
- Rolling deal banner messages
- Services grid (8 items)
- "Why choose us" benefits (6 items)
- Process steps (4 steps)
- Stats counters
- Testimonials
- FAQ items

## Environment variables

Create `.env` locally or set in Vercel:

```
VITE_CONTACT_WEBHOOK=https://n8n.example.com/webhook/voltsafe-lead
```

The contact form POSTs JSON to this URL. If unset, it simulates a success for dev previews.

## Develop

```bash
bun install
bun run dev
```

## Build

```bash
bun run build
```

Production output goes to `dist/`. Vercel auto-detects Vite and uses the right settings.

## Deployment

Push to GitHub → connect to Vercel → set `VITE_CONTACT_WEBHOOK` env var → deploy.

Deploy path: `<client-slug>.scaleify.co` or custom domain.

## License

Proprietary — © Scaleify.
