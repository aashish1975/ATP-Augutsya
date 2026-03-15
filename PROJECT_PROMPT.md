# ATP-Augutsya Project Prompt

## Project Overview

**ATP-Augutsya** is a premium techno-commercial consulting website built with React 19 and Vite. It features a sophisticated black and white monochrome design with glass morphism effects, interactive 3D elements, and comprehensive business tools.

## Technology Stack

### Core Technologies
- **React 19** - Latest React with modern hooks and features
- **Vite 7** - Fast build tool and development server
- **React Router DOM 7** - Client-side routing
- **Framer Motion 12** - Advanced animations and transitions
- **Three.js 0.182** - 3D graphics and WebGL
- **React Globe.gl 2.37** - Interactive globe visualization
- **Cobe 0.6.5** - 3D globe component
- **Google Generative AI 0.24** - AI-powered features

### Development Tools
- **ESLint 9** - Code linting and quality
- **Vite Plugin React** - React integration for Vite

## Design System

### Color Palette
- **Primary**: Black (#000000)
- **Secondary**: Dark grays (#0A0A0A, #111111)
- **Accent**: White (#FFFFFF)
- **Text**: White with varying opacity levels
- **Glass**: Semi-transparent white overlays

### Typography
- **Font Family**: Inter (system fallbacks)
- **Headings**: Custom font with tight letter-spacing
- **Body**: Clean, readable sans-serif

### Spacing System
- CSS Custom Properties for consistent spacing
- Responsive scale from xs (0.25rem) to 5xl (8rem)
- Container max-width: 1200px

## Component Architecture

### Core Components

#### Navigation & Layout
- **Header** - Navigation with glass morphism effect
- **Footer** - Comprehensive footer with links
- **PageTransition** - Smooth page transitions

#### Hero Section
- **Hero** - Main landing section with animated text
- **Globe** - Interactive 3D globe visualization
- **ParticleBackground** - Animated particle effects
- **AnimatedCounter** - Statistics with counting animation

#### Business Features
- **AIChatWidget** - AI-powered chat interface
- **BookingSystem** - Appointment scheduling
- **ContactForm** - Lead generation form
- **InvoiceGenerator** - Business document creation
- **ROICalculator** - Return on investment calculator

#### Utility Tools
- **BusinessNameGenerator** - Startup name suggestions
- **TaxCalendar** - Important tax dates
- **QuoteGenerator** - Business quote creation
- **DocumentChecklist** - Business document tracker
- **ServiceRecommender** - AI service recommendations

#### Interactive Elements
- **CustomCursor** - Custom mouse cursor
- **ScrollIndicator** - Scroll progress indicator
- **BackToTop** - Quick navigation button
- **ThemeToggle** - Dark/light mode switching
- **LoadingScreen** - Page loading animation

#### Content Sections
- **ServiceCard** - Service presentation cards
- **Testimonials** - Customer reviews showcase
- **ClientLogos** - Partner/client display
- **StatsSection** - Business metrics display
- **TeamSection** - Team member profiles
- **FAQ** - Accordion-style Q&A

### UI Components
- **GlassCard** - Glass morphism card component
- **UtilityCard** - Reusable utility card
- **EtherealShadow** - Advanced shadow effects
- **ScrollReveal** - Scroll-triggered animations
- **CookieBanner** - GDPR compliance
- **ChatHoursIndicator** - Availability status

## Page Structure

### Main Pages
- **Home** - Landing page with hero and features
- **About** - Company information and story
- **Services** - Detailed service offerings
- **Portfolio** - Work showcase
- **Contact** - Contact information and form
- **Blog** - Articles and insights
- **Pricing** - Service pricing plans

### Utility Pages
- **Calculators** - Collection of business calculators
- **Utilities** - Business productivity tools
- **Privacy** - Privacy policy
- **Terms** - Terms of service
- **NotFound** - 404 error page

## Key Features

### Interactive Elements
- 3D globe with country highlighting
- Particle background system
- Smooth scroll animations
- Custom cursor tracking
- Glass morphism effects throughout

### Business Tools
- AI-powered chat widget
- Document generation (invoices, quotes)
- ROI and tax calculators
- Business name generator
- Service recommendation engine

### User Experience
- Responsive design (mobile-first)
- Fast loading with Vite
- SEO-optimized structure
- Accessibility considerations
- Cross-browser compatibility

## Development Guidelines

### Code Structure
- Component-based architecture
- CSS custom properties for theming
- Modular CSS files per component
- Consistent naming conventions
- React hooks for state management

### Performance Optimizations
- Lazy loading for components
- Optimized images and assets
- Efficient animation with Framer Motion
- Code splitting with React Router
- Minimal bundle size with Vite

### Styling Approach
- Pure CSS (no CSS frameworks)
- Glass morphism design system
- Smooth animations and transitions
- Responsive grid layouts
- Custom scrollbars

## Deployment & Build

### Development
```bash
npm run dev      # Start development server
npm run lint     # Run ESLint
```

### Production
```bash
npm run build    # Build for production
npm run preview  # Preview production build
```

## Environment Variables
- Google Generative AI API key for AI features
- Other API keys for external integrations

## Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- WebGL support for 3D features
- JavaScript ES2020+ features

## Future Enhancements
- TypeScript migration
- Progressive Web App features
- Advanced AI integrations
- Real-time collaboration tools
- Enhanced analytics dashboard

## Security Considerations
- Input validation on forms
- API key protection
- XSS prevention
- CSRF protection
- Secure data handling

## Performance Metrics
- Core Web Vitals optimization
- Fast page load times
- Smooth 60fps animations
- Efficient memory usage
- Minimal network requests
