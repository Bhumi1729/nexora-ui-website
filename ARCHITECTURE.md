# RekitUI Component Library - Architecture Guide

## Overview
This is a scalable, data-driven component library built with Next.js 14, TypeScript, and Tailwind CSS. The architecture separates component data from UI rendering, making it easy to scale to hundreds of components.

## Key Features

### 🗂️ Data-Driven Architecture
- All component metadata stored in `/data/components.json`
- Easy to add new components without touching UI code
- Automatic sidebar navigation generation
- Dynamic routing for component pages

### 🎨 Professional UI/UX
- **Sidebar Navigation**: Categorized component browser
- **Component Pages**: Individual documentation with preview, code, and props
- **Overview Page**: Category-based component cards with mini previews
- **Dark/Light Mode**: Full theme support

### 📱 Responsive Design
- Mobile-friendly sidebar navigation
- Responsive component previews
- Adaptive layout for all screen sizes

## File Structure

```
├── app/
│   ├── components/
│   │   ├── page.tsx              # Components overview with sidebar
│   │   └── [slug]/page.tsx       # Dynamic component documentation pages
│   ├── docs/page.tsx            # Documentation
│   └── page.tsx                 # Homepage
├── components/
│   ├── ui/                      # Actual UI components (Button, Card, Input)
│   ├── layout/
│   │   ├── sidebar.tsx          # Sidebar navigation component
│   │   ├── header.tsx           # Site header
│   │   └── footer.tsx           # Site footer
│   ├── docs/
│   │   ├── component-preview.tsx # Component preview with code/preview toggle
│   │   └── code-block.tsx       # Syntax highlighted code blocks
│   └── theme/                   # Theme provider and toggle
├── data/
│   └── components.json          # All component metadata
└── lib/
    └── utils.ts                 # Utility functions
```

## Adding New Components

### 1. Add Component Data
Edit `/data/components.json` and add your component:

```json
{
  "id": "new-component",
  "name": "New Component",
  "description": "Description of the component",
  "category": "Form", // Must match existing category
  "preview": {
    "type": "new-component-preview"
  },
  "code": "import { NewComponent } from '@/components/ui/new-component'...",
  "usage": "How to use this component...",
  "props": [
    {
      "name": "variant",
      "type": "string",
      "default": "default",
      "description": "Component variant"
    }
  ]
}
```

### 2. Add Preview Type
Update `/components/docs/component-preview.tsx` to handle the new preview type:

```tsx
if (component?.preview.type === "new-component-preview") {
  return (
    <div>
      {/* Your component preview JSX */}
    </div>
  )
}
```

### 3. Add Mini Preview
Update `/app/components/page.tsx` to show a mini preview in the overview:

```tsx
{component.id === 'new-component' && (
  <div>Mini preview for cards</div>
)}
```

### 4. Create the Actual Component
Create your component in `/components/ui/new-component.tsx`

## Current Components

### Form Components
- **Button**: Multiple variants (default, destructive, outline, secondary, ghost, link)
- **Input**: Text, email, password inputs with proper accessibility

### Layout Components  
- **Card**: Flexible card with header, content, and description sub-components

### Display Components
- **Badge**: Status indicators with multiple variants
- **Avatar**: User profile images with fallback initials

### Navigation Components
- **Accordion**: Collapsible content sections
- **Tabs**: Layered content organization

## Scaling Strategy

This architecture supports scaling to 100+ components by:

1. **JSON-First**: All metadata in structured data
2. **Dynamic Routing**: Automatic page generation for each component
3. **Category System**: Organized navigation as library grows
4. **Preview System**: Standardized component demonstrations
5. **Props Documentation**: Automatic prop tables for each component

## Development Workflow

1. Add component metadata to JSON
2. Implement preview render logic
3. Create actual UI component
4. Test in development server
5. Documentation is automatically generated

This approach ensures consistency, maintainability, and scalability as the component library grows.
