# Streaming Platform

A modern streaming platform that allows users to share and monetize their content globally.

## Features

- User authentication (login/signup)
- Stream management (create, delete)
- Subscription plans
- Geographic restrictions
- Subscriber-only content

## Demo Account

Use these credentials to test the platform:

- Email: `demo@gaft.cv`
- Password: `demo123456`

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Tech Stack

- React
- TypeScript
- Tailwind CSS
- Supabase (Authentication & Database)
- Vite
- React Router

## Environment Variables

The following environment variables are required:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
  ├── components/     # Reusable UI components
  ├── pages/         # Page components
  ├── stores/        # State management
  ├── utils/         # Utility functions
  ├── lib/           # External library configurations
  └── routes/        # Route definitions
```
