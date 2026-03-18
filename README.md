# ClassRecord - School Management & Student Engagement Platform

ClassRecord is a modern, responsive web platform designed for school management and student engagement in emerging markets. Built with cutting-edge Next.js and React technologies, it provides seamless interaction between schools, teachers, students, and parents.

![Status](https://img.shields.io/badge/status-active-brightgreen)
![License](https://img.shields.io/badge/license-MIT-blue)
![Next.js](https://img.shields.io/badge/Next.js-16.1.6-000000)
![React](https://img.shields.io/badge/React-19.2.3-61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6)

---

## 🚀 Tech Stack

### Core Framework
- **Next.js 16.1.6** - React framework with App Router for server-side rendering and static generation
- **React 19.2.3** - UI library for building interactive components
- **React DOM 19.2.3** - React package for working with the DOM
- **TypeScript 5** - Type-safe JavaScript for better development experience

### Styling & UI Components
- **Tailwind CSS 4** - Utility-first CSS framework with responsive design utilities
- **shadcn/ui** - High-quality reusable components built on Radix UI and Tailwind CSS
- **Radix UI** - Unstyled, accessible component primitives for building design systems
- **@radix-ui/react-slot** - Compose component functionality with slots and asChild patterns
- **class-variance-authority 0.7.1** - Manage component variants with type-safe CSS patterns
- **clsx 2.1.1** - Utility for conditionally building className strings
- **tailwind-merge 3.5.0** - Merge Tailwind CSS classes intelligently without conflicts
- **tw-animate-css 1.4.0** - Animation utilities for Tailwind CSS

### Animations & Motion
- **Framer Motion 12.36.0** - Production-ready motion library for smooth animations and gestures
  - Staggered animations
  - Scroll-triggered effects
  - Entrance/exit animations
  - Gesture support

### Icons
- **Lucide React 0.577.0** - Beautiful, consistent icon library with 400+ SVG icons
  - GraduationCap, SendHorizontal, Menu, X, Network, School icons used throughout

### Data Fetching & State Management
- **TanStack React Query 5.90.21** - Powerful async state management and data fetching
  - Server state management
  - Caching strategies
  - Automatic background syncing
- **@tanstack/react-query-devtools 5.91.3** - DevTools for debugging React Query

### Development & Build Tools
- **ESLint 9** - JavaScript linter for code quality
- **eslint-config-next 16.1.6** - ESLint configuration for Next.js projects
- **TypeScript** - Static type checking and enhanced IDE support
- **Tailwind CSS PostCSS Plugin** - PostCSS integration for Tailwind CSS v4

### Utilities
- **client-only 0.0.1** - Package to ensure code only runs on client-side
- **server-only 0.0.1** - Package to ensure code only runs on server-side
- **shadcn 4.0.6** - CLI for adding Radix UI components to projects

---

## 📁 Project Structure

```
classrecord/
├── app/
│   ├── components/
│   │   ├── navbar.tsx              # Responsive navigation with animations
│   │   ├── heroSection.tsx         # Hero section with donut background
│   │   ├── problemSection.tsx      # Problem cards with gradient borders
│   │   ├── whySection.tsx          # Three-section benefits layout
│   │   ├── howSection.tsx          # Step-by-step process section
│   │   └── footerSection.tsx       # Footer with animations
│   ├── ui/
│   │   └── button.tsx              # Reusable Button component with variants
│   ├── types/
│   │   └── common.ts               # Common TypeScript types
│   ├── interfaces/
│   │   └── entities.ts             # Entity interfaces (Student, Class)
│   ├── lib/
│   │   └── utils.ts                # Utility functions (cn - class merging)
│   ├── globals.css                 # Global styles & CSS variables
│   ├── layout.tsx                  # Root layout wrapper
│   └── page.tsx                    # Landing page orchestrator
├── data/
│   └── problemData.tsx             # JSON data for problem section
├── public/                         # Static assets
├── components.json                 # shadcn/ui configuration
├── next.config.ts                  # Next.js configuration
├── tailwind.config.ts              # Tailwind CSS configuration
├── tsconfig.json                   # TypeScript configuration
├── postcss.config.mjs              # PostCSS configuration
├── eslint.config.mjs               # ESLint configuration
└── package.json                    # Project dependencies
```

---

## 🎨 Key Features

### 1. **Responsive Design**
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px), 2xl (1536px)
- Adaptive layouts for all screen sizes

### 2. **Smooth Animations**
- Staggered entrance animations for elements
- Scroll-triggered animations
- Hover effects and transitions
- Motion components for interactive elements

### 3. **Color Scheme**
- Primary Blue: `#021F59` (Deep Navy)
- Accent Purple: `#7186FF` (Periwinkle)
- Secondary Purple: `#DCC8FD` (Light Lavender)
- Supporting: `#009AFF` (Sky Blue), `#C089F8` (Orchid)

### 4. **Typography**
- **Fredoka** - Bold, modern heading font
- **Host Grotesk** - Clean, readable body font
- **Geist** - System UI font

### 5. **Components**
- **Navbar** - Sticky navigation with mobile hamburger menu
- **Hero Section** - Eye-catching donut-shaped background with CTA
- **Problem Section** - Gradient-bordered cards with problem statements
- **Why Section** - Three-column layout highlighting benefits for Schools, Teachers, and Parents
- **How Section** - Step-by-step process visualization
- **Footer** - Branded footer section with animations

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ or 20+
- npm, yarn, or pnpm package manager

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd classrecord
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Set up environment variables** (if needed for future API integration)
```bash
cp .env.example .env.local
```

4. **Run development server**
```bash
npm run dev
```

5. **Open browser**
Navigate to [http://localhost:3000](http://localhost:3000) to see the landing page.

---

## 📜 Available Scripts

```bash
# Development server with hot reload
npm run dev

# Production build
npm run build

# Start production server (requires build first)
npm start

# Run ESLint to check code quality
npm run lint
```

---

## 🎯 Component Documentation

### Navbar Component
- **Location**: `app/components/navbar.tsx`
- **Features**: 
  - Animated entrance with Framer Motion
  - Desktop centered menu
  - Mobile hamburger menu with backdrop blur
  - Click-outside detection for menu closing
  - Escape key handler
  - Hover effects with smooth transitions

### Hero Section
- **Location**: `app/components/heroSection.tsx`
- **Features**:
  - Donut-shaped background using CSS gradients
  - Animated text and buttons
  - Responsive image handling
  - Call-to-action buttons

### Problem Section
- **Location**: `app/components/problemSection.tsx`
- **Features**:
  - Gradient-bordered cards
  - Data-driven from `data/problemData.tsx`
  - Staggered animations
  - Responsive grid layout

### Why Section
- **Location**: `app/components/whySection.tsx`
- **Features**:
  - Three-column layout (Schools, Teachers, Parents/Students)
  - Mobile-first responsive design
  - Icon integration from Lucide React
  - Smooth animations with Framer Motion

### How Section
- **Location**: `app/components/howSection.tsx`
- **Features**:
  - Step-by-step process visualization
  - Numbered cards (01-04)
  - Gradient dividers
  - Staggered animations

### Footer Section
- **Location**: `app/components/footerSection.tsx`
- **Features**:
  - Full-screen centered layout
  - Animated entrance for all elements
  - Watermark-style branding
  - Responsive typography

### Button Component
- **Location**: `app/ui/button.tsx`
- **Variants**: Primary, Secondary
- **Sizes**: Small, Medium, Large
- **Features**: Icon support, customizable styling with CVA

---

## 🛠️ Configuration Files

### `tailwind.config.ts`
Configured with:
- Custom colors (brand palette)
- Custom fonts (Fredoka, Host Grotesk, Geist)
- Extend theme with additional utilities
- Responsive breakpoints

### `next.config.ts`
- TypeScript support enabled
- Optimized image loading
- App Router configuration

### `tsconfig.json`
- Strict type checking enabled
- Path aliases configured
- Modern JavaScript support

### `components.json`
- shadcn/ui CLI configuration
- Typescript support
- Tailwind CSS setup

---

## 📦 Dependency Highlights

### Why Framer Motion?
- Declarative animation API
- Hardware-accelerated performance
- Gesture support (drag, hover, tap)
- Easy staggering and orchestration
- Perfect for landing page animations

### Why TanStack React Query?
- Automatic caching and background syncing
- Optimistic updates support
- Devtools for debugging
- Perfect for future API integration with Laravel backend

### Why shadcn/ui?
- Radix UI primitives (accessibility first)
- Fully customizable with Tailwind CSS
- Copy-paste component strategy (no new dependencies)
- Type-safe components

### Why Tailwind CSS v4?
- Utility-first approach for faster development
- Responsive design made simple
- PostCSS plugin for gradient syntax like `bg-linear-to-b`
- Smaller bundle size with tree-shaking

---

## 🔗 Integration Points

### Future Backend Integration (Laravel)
The project is structured for easy integration with a Laravel backend:
- React Query is configured but not yet connected to endpoints
- TypeScript interfaces in `app/interfaces/entities.ts` ready for API responses
- Client-only utilities for browser-specific operations
- Server-only utilities for future server-side logic

### API Structure (Ready for Implementation)
```typescript
// Example for future API integration
const fetchClasses = async () => {
  const response = await fetch('/api/classes');
  return response.json();
};

// Use with React Query
useQuery({
  queryKey: ['classes'],
  queryFn: fetchClasses
});
```

---

## 🎨 Design Patterns

### Animation Strategy
- **Entrance Animations**: Staggered delays for sequential appearance
- **Hover States**: Smooth 300ms color transitions
- **Responsive Animations**: Reduced motion on smaller screens (future enhancement)

### Component Architecture
- **Server Components**: Default for static content
- **Client Components**: For interactivity and state management
- **Layout Pattern**: Wrapper components for consistent spacing

### Styling Approach
- **Utility-First**: Tailwind CSS for rapid development
- **Component Variants**: CVA for variant management
- **CSS Variables**: Global color system in `globals.css`

---

## 📱 Responsive Breakpoints

| Breakpoint | Width | Usage |
|-----------|-------|-------|
| Mobile | < 640px | Base default |
| Tablet (sm) | 640px | Small devices |
| Medium (md) | 768px | Tablets |
| Large (lg) | 1024px | Desktops |
| XL | 1280px | Large screens |
| 2XL | 1536px | Extra large screens |

---

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Docker
The project can be containerized for deployment:
```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
CMD ["npm", "start"]
```

---

## 📝 Best Practices Implemented

✅ **Type Safety** - Full TypeScript coverage
✅ **Performance** - Optimized images, code splitting
✅ **Accessibility** - Radix UI primitives + semantic HTML
✅ **Responsive Design** - Mobile-first approach
✅ **Animation Best Practices** - Hardware-accelerated with Framer Motion
✅ **Code Organization** - Clean folder structure with separation of concerns
✅ **Reusable Components** - DRY principle throughout
✅ **Error Handling** - Prepared for future API integration
✅ **SEO Ready** - Next.js built-in optimizations
✅ **Developer Experience** - ESLint, TypeScript, hot reload

---

## 🐛 Troubleshooting

### Port 3000 Already in Use
```bash
# Use a different port
npm run dev -- -p 3001
```

### Tailwind Classes Not Applying
- Ensure file is in the content array in `tailwind.config.ts`
- Rebuild TypeScript cache with `npm run build`

### Animations Not Smooth
- Check browser DevTools for performance issues
- Verify Framer Motion version compatibility
- Test on different browsers

---

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion)
- [shadcn/ui](https://ui.shadcn.com)
- [Radix UI](https://www.radix-ui.com)
- [TypeScript](https://www.typescriptlang.org)
- [TanStack Query](https://tanstack.com/query/latest)

---

## 📄 License

This project is private and proprietary software for ClassRecord.

---

## 🤝 Contributing

For development guidelines and contribution process, please refer to the team documentation.

---

**Last Updated**: March 2026
**Version**: 0.1.0
**Status**: Active Development
