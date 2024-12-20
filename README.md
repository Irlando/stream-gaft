# LiveStream Platform

A modern streaming platform built with React, TypeScript, and Tailwind CSS that allows content creators to host and monetize their live streams.

## Features

- 🎥 Stream Integration with YouTube and Twitch
- 💰 Flexible Pricing Options (One-time & Subscription)
- 👥 User Authentication & Authorization
- 📊 Dashboard for Content Creators
- 🎨 Modern UI with Tailwind CSS and shadcn/ui
- 📱 Fully Responsive Design

## Tech Stack

- **Frontend Framework**: React with TypeScript
- **Routing**: React Router v6
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **State Management**: Zustand
- **Form Handling**: React Hook Form + Zod
- **Icons**: Lucide React

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

## Project Structure

```
src/
├── components/         # Reusable UI components
│   ├── auth/          # Authentication related components
│   ├── layout/        # Layout components
│   ├── stream/        # Stream related components
│   └── ui/            # Base UI components (shadcn/ui)
├── hooks/             # Custom React hooks
├── lib/               # Utilities and type definitions
├── pages/             # Page components
│   ├── auth/          # Authentication pages
│   ├── dashboard/     # Dashboard pages
│   └── stream/        # Stream pages
└── routes/            # Route configuration
```

## Key Features

### Authentication
- Email/Password authentication
- Protected routes
- User profile management

### Streaming
- Integration with YouTube and Twitch
- Custom pricing options
- Subscription plans
- Stream scheduling

### Dashboard
- Stream analytics
- Subscriber management
- Revenue tracking
- Settings management

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.