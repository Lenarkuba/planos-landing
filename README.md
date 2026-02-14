# PlanOS - Landing Page

A modern, animated landing page for PlanOS - the professional casting and talent management platform.

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations
- **Lucide React** - Beautiful icons

## Getting Started

### Install dependencies

```bash
npm install
```

### Run development server

```bash
npm run dev
```

The site will be available at [http://localhost:3002](http://localhost:3002)

### Build for production

```bash
npm run build
npm start
```

## Project Structure

```
landing-page/
├── src/
│   ├── app/
│   │   ├── globals.css      # Global styles & animations
│   │   ├── layout.tsx       # Root layout with metadata
│   │   └── page.tsx         # Main landing page
│   ├── components/
│   │   ├── navbar.tsx       # Navigation header
│   │   ├── hero.tsx         # Hero section
│   │   ├── pain-points.tsx  # Problem section
│   │   ├── video-demo.tsx   # Video demo section
│   │   ├── value-pillars.tsx # 3 pillars section
│   │   ├── features.tsx     # Feature grid
│   │   ├── security.tsx     # Security section
│   │   ├── cta-section.tsx   # Call to action
│   │   ├── footer.tsx       # Footer
│   │   └── index.ts         # Component exports
│   └── lib/
│       └── utils.ts         # Utility functions
└── public/                  # Static assets
```

## Customization

### Adding Your Demo Video

1. Place your video file in `/public/demo-video.mp4`
2. Add a poster image at `/public/video-poster.jpg`
3. Uncomment the `<video>` element in `src/components/video-demo.tsx`

### Changing Colors

Edit the color palette in `tailwind.config.ts`:

```typescript
colors: {
  primary: { ... },  // Main brand color (currently sky blue)
  accent: { ... },   // Accent color (currently purple)
}
```

### Adding a Logo

Replace the `Clapperboard` icon in `navbar.tsx` and `footer.tsx` with your logo:

```tsx
import Image from 'next/image';
<Image src="/logo.svg" alt="Logo" width={40} height={40} />
```

## Deployment

This landing page is ready to deploy on:

- **Vercel** - `npx vercel`
- **Netlify** - Connect your repo
- **Any static host** - Run `npm run build` and deploy the `.next` folder

## Notes

- The landing page runs on port 3002 to avoid conflicts with the main app
- All external links currently point to `mailto:` - update with actual URLs when ready
- The video section shows a mockup placeholder until you add your recorded demo
