# Kavya Labs · Week 2: User authentication

Week 2 of the Kavya Labs build (Finlatics ANDP Virtual Startup simulator). It adds **user authentication with NextAuth.js and Google OAuth** on top of the Week 1 landing page.

> Week 2 brief from the founder, Rohan Mehta: *User authentication: NextAuth + Google OAuth.*

## Features

| Feature | How it works | File |
|---|---|---|
| **NextAuth.js** | NextAuth v4 API route handling sign-in, callbacks, sessions and sign-out | `pages/api/auth/[...nextauth].js`, `lib/auth.js` |
| **Google OAuth** | Google provider (OpenID Connect: `openid email profile`). Only Google accounts with a verified email are accepted | `lib/auth.js` |
| **Custom sign-in page** | Branded `/login` page with a "Continue with Google" button and friendly error messages | `pages/login.js` |
| **Protected routes** | NextAuth middleware redirects signed-out visitors from `/dashboard` to `/login?callbackUrl=/dashboard`; the page also checks the session on the server | `middleware.js`, `pages/dashboard.js` |
| **Sessions** | Signed, encrypted JWT session cookie. `useSession` drives the navbar; `getServerSession` protects server-rendered pages | `pages/_app.js`, `components/Navbar.jsx` |
| **User dashboard** | Profile photo, name, email, role, member-since date, last sign-in and total sign-ins, plus sign-out | `pages/dashboard.js` |
| **Users saved to the database** | Every sign-in creates or updates the user in Postgres (Supabase) via Prisma: name, email, photo, role, login count, last login | `lib/auth.js`, `prisma/schema.prisma` |
| **Roles** | Emails listed in `ADMIN_EMAILS` get the `admin` role, ready for the Week 3 admin dashboard | `lib/auth.js` |
| **Session-aware navbar** | Signed out: "Sign in" and "Get started". Signed in: avatar, "Dashboard" and "Sign out" | `components/Navbar.jsx` |

Everything from Week 1 (hero, features, how it works, pricing, FAQ, footer) is still on the home page.

## How to test it

**Without signing in** (as a reviewer):

1. Open the live site. The navbar shows **Sign in** and **Get started**; the hero button "Get started free" goes to `/login`.
2. Open **`/dashboard`**. You're redirected to **`/login?callbackUrl=%2Fdashboard`**, which shows the route is protected.
3. On `/login`, **Continue with Google** sends you to Google's real OAuth consent screen.
4. **`/api/auth/providers`** returns the configured Google provider as JSON.

**With a Google account:** click **Continue with Google**, approve, and you land on `/dashboard` with your profile. The navbar switches to your avatar, and **Sign out** returns you to the home page.

## Auth flow

```
/login ─► "Continue with Google" ─► Google consent ─► /api/auth/callback/google
   ▲                                                         │
   │ middleware redirect (signed out)                        ▼
/dashboard ◄──── JWT session cookie ◄──── NextAuth: verify email, save user (Prisma), set role
```

## Tech stack

Next.js 14 (Pages Router) · NextAuth.js v4 · Google OAuth 2.0 · Prisma · Supabase Postgres · Tailwind CSS · Vercel

## Setup

1. **Google OAuth client:** Google Cloud Console → APIs & Services → Credentials → Create credentials → OAuth client ID → Web application.
   - Authorized JavaScript origin: `https://<your-app>.vercel.app`
   - Authorized redirect URI: `https://<your-app>.vercel.app/api/auth/callback/google`
2. Copy `.env.example` to `.env` (or add the same variables in Vercel) and fill in every value.
3. `npm install`, then `npm run dev`.

Tables are created automatically on each build (`scripts/db-push.js`), inside a separate `kavya` Postgres schema so the database can be shared with other projects safely.
