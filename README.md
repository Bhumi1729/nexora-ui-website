# Nexora UI

<div align="center">

![Nexora UI Logo](https://img.shields.io/badge/Nexora-UI-000000?style=for-the-badge&logo=react&logoColor=white)

**A modern, professional React component library built with TypeScript and Tailwind CSS**

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![TypeScript](https://img.shields.io/badge/TypeScript-100%25-blue.svg)](https://www.typescriptlang.org/)
[![Next.js](https://img.shields.io/badge/Next.js-15.4.2-black.svg)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38B2AC.svg)](https://tailwindcss.com/)

[Demo](https://nexora-ui.vercel.app) • [Documentation](https://nexora-ui.vercel.app/docs) • [Components](https://nexora-ui.vercel.app/components)

</div>

## ✨ Overview

Nexora UI is a cutting-edge React component library that combines modern design principles with exceptional developer experience. Built with TypeScript and powered by Tailwind CSS v4, it offers professional-grade components that are accessible, customizable, and production-ready.

### 🎯 Why Choose Nexora UI?

- **🎨 Professional Design** - Sleek, modern components with a sophisticated black theme
- **⚡ Lightning Fast** - Optimized for performance with minimal bundle size
- **🔒 Type Safety** - 100% TypeScript with comprehensive type definitions
- **♿ Accessibility First** - WCAG compliant components built with Radix UI primitives
- **🎭 Theme Support** - Beautiful dark/light mode with smooth transitions
- **📱 Responsive** - Mobile-first design that works on all devices
- **🔧 Developer Experience** - IntelliSense support and comprehensive documentation

## 🚀 Quick Start

### Installation

```bash
npm install nexora-ui
# or
yarn add nexora-ui
# or
pnpm add nexora-ui
```

### Basic Usage

```tsx
import { Button, Card, CardContent, CardHeader, CardTitle } from 'nexora-ui'

function App() {
  return (
    <Card className="w-96">
      <CardHeader>
        <CardTitle>Welcome to Nexora UI</CardTitle>
      </CardHeader>
      <CardContent>
        <Button>Get Started</Button>
      </CardContent>
    </Card>
  )
}
```

## 🎨 Design System

### Color Scheme
Nexora UI features a professional black color scheme designed for modern applications:

```css
/* Primary Colors */
--primary: 0 0% 9%        /* Deep black */
--secondary: 0 0% 96%     /* Light gray */
--accent: 0 0% 14.9%      /* Dark gray */
--muted: 0 0% 96%         /* Subtle gray */

/* Dark Mode Support */
--primary-dark: 0 0% 98%  /* Near white */
--secondary-dark: 0 0% 14.9% /* Dark gray */
```

### Typography
- **Font Family**: Geist Sans for UI, Geist Mono for code
- **Scale**: Responsive typography that adapts to screen size
- **Weight**: Carefully chosen font weights for hierarchy

### Animations
- **Hover Effects**: Subtle lift and glow animations
- **Transitions**: Smooth 300ms cubic-bezier transitions
- **Micro-interactions**: Delightful feedback for user actions

## 🏗️ Project Architecture

```
nexora-ui/
├── app/                      # Next.js App Router
│   ├── components/          # Component showcase pages
│   │   ├── [slug]/         # Individual component pages
│   │   └── page.tsx        # Components overview
│   ├── docs/               # Documentation pages
│   ├── api/                # API routes for demos
│   ├── globals.css         # Global styles & design tokens
│   ├── layout.tsx          # Root layout with providers
│   └── page.tsx            # Homepage with hero section
├── components/              # React component library
│   ├── ui/                 # Core UI components
│   │   ├── button.tsx      # Button component with variants
│   │   ├── card.tsx        # Card system components
│   │   ├── input.tsx       # Input field component
│   │   └── ...             # Additional UI components
│   ├── layout/             # Layout components
│   │   ├── header.tsx      # Navigation header
│   │   ├── footer.tsx      # Site footer
│   │   └── sidebar.tsx     # Component navigation
│   ├── docs/               # Documentation components
│   │   ├── component-preview.tsx  # Live preview system
│   │   └── code-block.tsx  # Syntax highlighted code
│   ├── demos/              # Component demonstrations
│   └── theme/              # Theme management
├── data/                   # Static data and configuration
│   └── components.json     # Component metadata
└── lib/                    # Utilities and helpers
    ├── utils.ts            # Utility functions
    └── demo-utils.ts       # Demo helper functions
```

## 🛠️ Technology Stack

### Core Technologies
- **[Next.js 15.4.2](https://nextjs.org/)** - React framework with App Router
- **[React 19.1.0](https://react.dev/)** - Latest React with concurrent features
- **[TypeScript](https://www.typescriptlang.org/)** - Static type checking
- **[Tailwind CSS v4](https://tailwindcss.com/)** - Utility-first CSS framework

### UI & Styling
- **[Radix UI](https://www.radix-ui.com/)** - Unstyled, accessible components
- **[class-variance-authority](https://cva.style/)** - Type-safe component variants
- **[Framer Motion](https://www.framer.com/motion/)** - Production-ready animations
- **[Lucide React](https://lucide.dev/)** - Beautiful icon library

### Developer Experience
- **[next-themes](https://github.com/pacocoursey/next-themes)** - Theme switching
- **[tailwind-merge](https://github.com/dcastil/tailwind-merge)** - Merge Tailwind classes
- **ESLint & Prettier** - Code quality and formatting

## 🚀 Development

### Prerequisites
- Node.js 18+ 
- npm/yarn/pnpm

### Local Development

```bash
# Clone the repository
git clone https://github.com/Bhumi1729/nexora-ui-website.git
cd nexora-ui-website

# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000
```

### Building for Production

```bash
# Create production build
npm run build

# Start production server
npm start
```

### Code Quality

```bash
# Lint code
npm run lint

# Format code
npm run format

# Type check
npm run type-check
```

## 📖 Documentation

### Component Documentation
Each component includes:
- **Live Preview** - Interactive component demonstrations
- **Code Examples** - Copy-paste ready code snippets
- **Props API** - Comprehensive prop documentation
- **Accessibility** - ARIA compliance and keyboard navigation
- **Customization** - Styling and variant options

### Design Guidelines
- **Design Principles** - Core design philosophy
- **Color System** - Comprehensive color documentation
- **Typography** - Font usage and hierarchy
- **Spacing** - Consistent spacing system
- **Animation** - Motion design principles

## 🔗 Related Projects

- **[Nexora UI CLI](https://github.com/Bhumi1729/nexora-ui)** - Command-line tool for installing Nexora UI components
- **[NPM Package](https://www.npmjs.com/package/nexora-ui)** - Published CLI package on npm registry

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Workflow
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) - Inspiration for component architecture
- [Radix UI](https://www.radix-ui.com/) - Accessible component primitives
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Vercel](https://vercel.com/) - Deployment and hosting platform

---

<div align="center">

**Built with ❤️ by the Bhumika Yadav**

[Website](https://nexora-ui.vercel.app) • [GitHub](https://github.com/Bhumi1729/nexora-ui-website) • [NPM](https://www.npmjs.com/package/nexora-ui)

</div>


