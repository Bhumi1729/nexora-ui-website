# RekitUI Website

A modern, professional website for RekitUI component library built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- 🎨 **Beautiful Design** - Modern and clean interface inspired by shadcn/ui
- 🌙 **Dark/Light Mode** - Seamless theme switching with next-themes
- 📱 **Responsive Design** - Mobile-first responsive layout
- 🧩 **Interactive Previews** - Live component previews with code toggle
- 📋 **Copy-Paste Ready** - One-click code copying functionality
- ⚡ **Fast Performance** - Optimized with Next.js 14 and Tailwind CSS
- 🔍 **SEO Optimized** - Proper meta tags and structured data

## Getting Started

### Development

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Building

To build the project for production:

```bash
npm run build
npm start
```

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── components/        # Components showcase
│   ├── docs/             # Documentation
│   ├── globals.css       # Global styles with design system
│   ├── layout.tsx        # Root layout with theme provider
│   └── page.tsx          # Homepage
├── components/            # React components
│   ├── ui/               # RekitUI components (Button, Card, Input)
│   ├── layout/           # Layout components (Header, Footer)
│   ├── docs/             # Documentation components
│   └── theme/            # Theme components
└── lib/                  # Utilities and helpers
    └── utils.ts          # cn utility and helper functions
```

## Key Features

### Component Library
- **Button** - Multiple variants and sizes
- **Card** - Flexible card system with sub-components
- **Input** - Styled form inputs with accessibility

### Documentation System
- Interactive component previews
- Copy-to-clipboard functionality
- Code syntax highlighting
- Responsive design patterns

### Theme System
- CSS variables for consistent theming
- Dark/light mode support
- Smooth transitions and animations

## Technologies Used

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety and developer experience
- **Tailwind CSS** - Utility-first CSS framework
- **next-themes** - Theme switching functionality
- **Lucide React** - Beautiful icons
- **class-variance-authority** - Component variants
- **clsx & tailwind-merge** - Conditional styling

## Related Projects

- [RekitUI CLI](https://github.com/Atharvajoshiii/rekitui) - The CLI tool for installing components
- [NPM Package](https://www.npmjs.com/package/rekitui) - Published CLI package

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.

---

Built with ❤️ by [Atharva Joshi](https://github.com/Atharvajoshiii)

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
