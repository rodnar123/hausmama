# HausMama PNG - Development Guide

## Project Overview

HausMama PNG is a service marketplace platform connecting Papua New Guinea families with local service providers. The platform supports multiple service categories including child care, senior care, housekeeping, gardening, pet care, tutoring, cooking, and laundry services.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: NextAuth.js with JWT
- **State Management**: Zustand
- **Icons**: Lucide React
- **Form Handling**: React hooks
- **Password Hashing**: bcryptjs

## Project Structure

```
hausmama/
├── app/                          # Next.js App Router
│   ├── api/                     # API routes
│   │   └── auth/               # Authentication endpoints
│   │       ├── [...nextauth]/  # NextAuth handler
│   │       └── register/       # User registration
│   ├── booking/                # Booking page
│   ├── become-provider/        # Provider signup page
│   ├── login/                  # Login page
│   ├── messages/               # Messaging system
│   ├── providers/              # Provider pages
│   │   └── [id]/              # Individual provider profile
│   ├── services/               # Service category pages
│   │   └── [category]/        # Dynamic service pages
│   ├── signup/                 # User registration page
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Landing page
│   └── globals.css             # Global styles
├── components/                  # React components
│   ├── ui/                     # Reusable UI components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   └── input.tsx
│   ├── footer.tsx              # Site footer
│   └── navbar.tsx              # Site navigation
├── lib/                        # Utility functions
│   ├── auth.ts                 # NextAuth configuration
│   ├── prisma.ts               # Prisma client
│   └── utils.ts                # Helper utilities
├── prisma/                     # Database
│   └── schema.prisma           # Database schema
├── types/                      # TypeScript types
│   └── index.ts                # Shared types
├── .env.example                # Environment variables template
└── README.md                   # Project documentation
```

## Database Setup

### 1. Install PostgreSQL

For local development, install PostgreSQL:
- Download from: https://www.postgresql.org/download/
- Or use Docker: `docker run -p 5432:5432 -e POSTGRES_PASSWORD=password postgres`

### 2. Configure Environment Variables

Create a `.env` file from `.env.example`:

```bash
cp .env.example .env
```

Update the database URL:
```
DATABASE_URL="postgresql://username:password@localhost:5432/hausmama_db"
```

### 3. Run Prisma Migrations

```bash
# Generate Prisma Client
pnpm prisma generate

# Push schema to database
pnpm prisma db push

# (Optional) Seed database with sample data
pnpm prisma db seed
```

### 4. View Database

Use Prisma Studio to view and edit your data:
```bash
pnpm prisma studio
```

## Database Schema

### Key Models

**User**
- id, name, email, password, role (CLIENT/PROVIDER/ADMIN)
- Relations: bookings, reviews, messages, provider profile

**Provider**
- id, userId, bio, experience, hourlyRate, location, verified
- Relations: services, bookings, reviews, availability

**Service**
- id, name, category, description
- Categories: CHILDCARE, SENIORCARE, HOUSEKEEPING, etc.

**Booking**
- id, userId, providerId, serviceId, date, duration, status
- Status: PENDING, CONFIRMED, COMPLETED, CANCELLED

**Review**
- id, userId, providerId, rating (1-5), comment

**Message**
- id, senderId, receiverId, content, read status

## Authentication Flow

### User Registration
1. User fills signup form (`/signup`)
2. POST to `/api/auth/register`
3. Password is hashed with bcrypt (12 rounds)
4. User created in database
5. Redirect to login page

### User Login
1. User enters credentials (`/login`)
2. NextAuth validates via CredentialsProvider
3. Compares hashed password
4. Creates JWT session
5. Stores session in cookie

### Protected Routes
```typescript
// Check authentication status
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"

const session = await getServerSession(authOptions)
if (!session) {
  redirect("/login")
}
```

## API Routes

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/[...nextauth]` - NextAuth handler (login/logout)

### Future API Routes (to implement)
- `GET /api/providers` - List providers
- `GET /api/providers/[id]` - Get provider details
- `POST /api/bookings` - Create booking
- `GET /api/bookings` - List user bookings
- `POST /api/messages` - Send message
- `GET /api/messages` - Get conversations
- `POST /api/reviews` - Create review

## Key Features Implemented

### ✅ Landing Page
- Hero section with search
- Service categories grid
- How it works section
- Features showcase
- Call-to-action sections

### ✅ Service Category Pages
- Dynamic routing for 8 service types
- Provider listings with filters
- Location, experience, and price filters
- Provider cards with ratings and reviews

### ✅ Provider Profile Pages
- Detailed provider information
- Skills and certifications
- Availability calendar
- Reviews and ratings
- Booking interface
- Messaging button

### ✅ Authentication System
- User registration
- Login/logout
- Role-based access (Client/Provider)
- Session management with JWT
- Password hashing

### ✅ Booking System
- Service selection
- Date and time picker
- Duration selection
- Price calculation
- Special instructions
- Booking summary

### ✅ Messaging System
- Conversation list
- Real-time messaging interface
- Message search
- Unread message indicators

## Running the Project

### Development Mode
```bash
pnpm dev
```
Access at: http://localhost:3000

### Build for Production
```bash
pnpm build
pnpm start
```

### Linting
```bash
pnpm lint
```

## Environment Variables

Required variables in `.env`:

```bash
# Database
DATABASE_URL="postgresql://..."

# NextAuth
NEXTAUTH_SECRET="generate-a-random-secret"
NEXTAUTH_URL="http://localhost:3000"

# Optional: OAuth Providers
GOOGLE_CLIENT_ID=""
GOOGLE_CLIENT_SECRET=""
```

Generate NEXTAUTH_SECRET:
```bash
openssl rand -base64 32
```

## Styling Guidelines

### Tailwind Classes
- Primary color: `blue-600`
- Success: `green-600`
- Error: `red-600`
- Gray scale: `gray-50` to `gray-900`

### Component Patterns
- Use `Card` components for content containers
- Use `Button` with variants: default, outline, ghost, link
- Consistent spacing: `gap-4`, `space-y-4`, `px-4`

## Next Steps for Development

### High Priority
1. **API Implementation**: Create actual API routes for bookings, messages, reviews
2. **Database Seeding**: Add sample providers and services
3. **Search Functionality**: Implement search with filters
4. **Payment Integration**: Add payment processing (consider PNG mobile money)
5. **Email Notifications**: Send booking confirmations and updates

### Medium Priority
6. **Provider Dashboard**: Allow providers to manage bookings and profile
7. **User Dashboard**: Show booking history and favorites
8. **Advanced Filtering**: More filter options on service pages
9. **Reviews System**: Complete review submission and moderation
10. **File Uploads**: Provider photos and documents

### Future Enhancements
11. **SMS Notifications**: Integrate with PNG telecom providers
12. **Mobile App**: React Native or Flutter app
13. **Multi-language**: Add Tok Pisin and Hiri Motu
14. **Background Checks**: Integration with verification services
15. **Insurance Options**: Provider insurance offerings
16. **Analytics Dashboard**: Admin panel with statistics

## PNG-Specific Considerations

### Currency
- Use PNG Kina (K) throughout
- Format: `K25.00`

### Locations
Major cities to support:
- Port Moresby (NCD)
- Lae (Morobe)
- Madang
- Mount Hagen
- Goroka
- Kokopo
- Wewak

### Services Popular in PNG
- Child care (hausmaids, nannies)
- Gardening (yard maintenance)
- Security services
- Cooking (traditional and modern)
- Laundry services
- Elder care

### Cultural Considerations
- Family-oriented messaging
- Community trust and verification
- References and recommendations important
- Wantok system consideration

## Deployment Options

### Recommended: Vercel
1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

### Database Hosting
- **Supabase**: Free PostgreSQL (recommended for MVP)
- **Railway**: PostgreSQL with free tier
- **Render**: PostgreSQL databases
- **AWS RDS**: Production-grade

### Other Platforms
- Railway (full-stack)
- Render
- AWS Amplify
- DigitalOcean App Platform

## Troubleshooting

### Prisma Issues
```bash
# Clear Prisma cache
pnpm prisma generate --force

# Reset database
pnpm prisma migrate reset
```

### Build Errors
```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

### Type Errors
```bash
# Regenerate Prisma types
pnpm prisma generate
```

## Contributing

1. Create feature branch
2. Make changes
3. Test thoroughly
4. Submit pull request

## License

Proprietary - HausMama PNG

## Support

For development questions, contact the development team.
