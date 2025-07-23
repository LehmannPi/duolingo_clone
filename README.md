![Cover](./.github/cover.png)

## Lingo Project

(Still on development)

Lingo is a project of a language learning SaaS, similar to Duolingo.
Users will be able to choose a language course, and have guided lessons with beautiful design, characters, audio & visual effects.

## Prerequisites

Before running the development server, you need to set up your environment variables. Follow the guides below to create a Neon database and obtain Clerk authentication keys.

### Setting up Neon Database

1. **Create a Neon account**

   - Go to [neon.tech](https://neon.tech) and sign up for a free account
   - Verify your email address

2. **Create a new project**

   - Click "Create New Project"
   - Choose a project name (e.g., "lingo-app")
   - Select a region closest to you
   - Click "Create Project"

3. **Get your database connection string**

   - In your project dashboard, click on "Connection Details"
   - Copy the connection string that looks like:
     ```
     postgresql://username:password@ep-xxx-xxx-xxx.region.aws.neon.tech/database
     ```

4. **Set up your environment variables**
   - Create a `.env` file in the root of your project
   - Add your database URL:
     ```
     DATABASE_URL="your_neon_connection_string_here"
     ```

### Setting up Clerk Authentication

1. **Create a Clerk account**

   - Go to [clerk.com](https://clerk.com) and sign up
   - Create a new application

2. **Configure your application**

   - In your Clerk dashboard, go to "API Keys"
   - Copy both the "Publishable Key" and "Secret Key"

3. **Add Clerk keys to your environment**

   - Add these to your `.env` file:
     ```
     NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_your_publishable_key_here
     CLERK_SECRET_KEY=sk_test_your_secret_key_here
     ```

4. **Configure allowed origins**
   - In your Clerk dashboard, go to "Domains"
   - Add `http://localhost:3000` for development
   - Add your production domain when deploying

### Running the Development Server

Once you have your environment variables set up, open a terminal on the root folder and run:

```bash
npm i
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Key features

The finished project will have the following features:

- 🌐 Next.js 14 & server actions
- 🗣 AI Voices using Elevenlabs AI
- 🎨 Beautiful component system using Shadcn UI
- 🎭 Amazing characters thanks to KenneyNL
- 🔐 Auth using Clerk
- 🔊 Sound effects
- ❤️ Hearts system
- 🌟 Points / XP system
- 💔 No hearts left popup
- 🚪 Exit confirmation popup
- 🔄 Practice old lessons to regain hearts
- 🏆 Leaderboard
- 🗺 Quests milestones
- 🛍 Shop system to exchange points with hearts
- 💳 Pro tier for unlimited hearts using Stripe
- 🏠 Landing page
- 📊 Admin dashboard React Admin
- 🌧 ORM using DrizzleORM
- 💾 PostgresDB using NeonDB
- 🚀 Deployment on Vercel
- 📱 Mobile responsiveness

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
