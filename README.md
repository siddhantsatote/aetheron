# AETHERON Tech Fest 🚀

A 3-day college tech festival website featuring **Ideathon**, **Hackathon**, and **eSports (BGMI)** — built with Next.js, TailwindCSS, Framer Motion, and Supabase.

**Live on Vercel** — Frontend + Backend API routes in a single deployment.

---

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** TailwindCSS + custom neon glow CSS
- **Animations:** Framer Motion
- **Database:** Supabase (PostgreSQL)
- **Deployment:** Vercel (zero-config)

---

## Getting Started

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd "web 3"
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up Supabase

1. Create a free project at [supabase.com](https://supabase.com)
2. Go to **SQL Editor** and run the contents of `supabase-schema.sql`
3. Go to **Settings → API** and copy your **Project URL** and **anon public key**

### 4. Configure environment variables

Copy `.env.example` to `.env.local` and fill in your Supabase credentials:

```bash
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

### 5. Run the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 6. Add your logo

Replace `public/logo.png` with your AETHERON logo image.

---

## Deploy to Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) → **Import Project**
3. Select your repository
4. Add environment variables:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
5. Click **Deploy** — done! ✅

---

## Project Structure

```
├── app/
│   ├── layout.jsx              # Root layout (fonts, navbar, footer)
│   ├── page.jsx                # Landing page (Home)
│   ├── globals.css             # Tailwind + neon glow CSS
│   ├── register/
│   │   ├── page.jsx            # Registration hub (event selector)
│   │   ├── ideathon/page.jsx   # Ideathon registration form
│   │   ├── hackathon/page.jsx  # Hackathon registration form
│   │   └── esports/page.jsx    # eSports/BGMI registration form
│   └── api/register/
│       ├── ideathon/route.js   # POST API — ideathon registration
│       ├── hackathon/route.js  # POST API — hackathon registration
│       ├── esports/route.js    # POST API — esports registration
│       └── count/route.js      # GET API — registration counts
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── EventCard.jsx
│   ├── FormInput.jsx
│   ├── GlowButton.jsx
│   └── ParticleBackground.jsx
├── hooks/
│   └── useRegistration.js      # Custom hook for form submission
├── lib/
│   ├── supabase.js             # Supabase client
│   └── validators.js           # Form validation
├── public/
│   └── logo.png                # Your logo here
├── supabase-schema.sql         # Database schema
└── README.md
```

---

## API Endpoints

| Method | Endpoint                  | Description                 |
| ------ | ------------------------- | --------------------------- |
| POST   | `/api/register/ideathon`  | Register for Ideathon       |
| POST   | `/api/register/hackathon` | Register for Hackathon      |
| POST   | `/api/register/esports`   | Register for eSports (BGMI) |
| GET    | `/api/register/count`     | Get registration counts     |

---

## Events

| Day | Event     | Description                              |
| --- | --------- | ---------------------------------------- |
| 1   | Ideathon  | Pitch innovative ideas to solve problems |
| 2   | Hackathon | 24-hour coding sprint                    |
| 3   | eSports   | BGMI tournament (Solo & Squad)           |

---

Built with 💜 for AETHERON Tech Fest
