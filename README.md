# HausMama PNG - Service Marketplace

A modern service marketplace platform connecting Papua New Guinea families with trusted local service providers for child care, senior care, housekeeping, gardening, pet care, tutoring, and more.

## 🚀 Features

- **Service Categories**: Child care, senior care, housekeeping, gardening, pet care, tutoring, cooking, and laundry services
- **Provider Profiles**: Detailed profiles with ratings, reviews, experience, and skills
- **Search & Filters**: Find providers by location, experience, price, and availability
- **Booking System**: Easy booking and scheduling functionality
- **Messaging**: Direct communication between clients and providers
- **Reviews & Ratings**: Transparent feedback system
- **Verification**: Background-checked and verified providers
- **Responsive Design**: Mobile-friendly interface for all devices

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: Custom components with shadcn/ui patterns
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: NextAuth.js
- **Icons**: Lucide React
- **State Management**: Zustand

## 📋 Prerequisites

- Node.js 20+ or higher
- pnpm (recommended) or npm
- PostgreSQL database

## 🔧 Installation

1. **Install dependencies**
   ```bash
   pnpm install
   ```

2. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` and add your configuration:
   - Database URL
   - NextAuth secret
   - OAuth credentials (optional)

3. **Set up the database**
   ```bash
   pnpm prisma generate
   pnpm prisma db push
   ```

4. **Run the development server**
   ```bash
   pnpm dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
hausmama/
├── app/                      # Next.js app router
│   ├── services/            # Service category pages
│   ├── layout.tsx           # Root layout with navbar & footer
│   └── page.tsx             # Landing page
├── components/              # React components
│   ├── ui/                  # Reusable UI components
│   ├── navbar.tsx           # Navigation bar
│   └── footer.tsx           # Footer
├── lib/                     # Utility functions
├── prisma/                  # Database schema
├── types/                   # TypeScript types
└── public/                  # Static assets
```

## 🚦 Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

## 🎨 Customization for PNG

This platform is specifically designed for Papua New Guinea with:

- PNG Kina (K) currency support
- Local cities and regions
- PNG-specific service categories
- Culturally appropriate design

## 📱 Responsive Design

The platform works seamlessly on desktop, tablet, and mobile devices.

## 🗺️ Roadmap

- [ ] Payment integration (mobile money support)
- [ ] SMS notifications
- [ ] Mobile app (iOS/Android)
- [ ] Multi-language support (Tok Pisin, Hiri Motu)
- [ ] Background check integration

---

**HausMama PNG** - Making life easier for PNG families

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
