# CENTRALBIZ

Telegram Mini App game about buying, managing and growing a business empire of players.

## Stack
- Next.js
- TypeScript
- TailwindCSS
- Supabase
- Telegram Mini Apps SDK
- Vercel

## Setup

```bash
npm install
npm run dev
```

Create `.env.local`

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
NEXT_PUBLIC_BOT_USERNAME=centralbiz_bot
```

## Deploy
- Push to GitHub
- Import project into Vercel
- Add ENV variables
- Connect Telegram Bot Mini App URL

## Core Mechanics
- Users have a price
- Users generate passive income
- Users can buy other users
- Prices increase after each purchase
- Referral ownership system