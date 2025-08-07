"use client"

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronDown, ChevronRight, Package } from 'lucide-react'
import { cn } from '@/lib/utils'
import componentsData from '@/data/components.json'

interface SidebarProps {
  className?: string
}

export function Sidebar({ className }: SidebarProps) {
  const pathname = usePathname()
  // Get all category IDs to expand all categories by default
  const allCategoryIds = componentsData.categories.map(category => category.id)
  const [expandedCategories, setExpandedCategories] = useState<string[]>(allCategoryIds)

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories(prev =>
      prev.includes(categoryId)
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    )
  }

  const groupedComponents = componentsData.categories.map(category => ({
    ...category,
    components: componentsData.components.filter(
      component => component.category.toLowerCase() === category.id
    )
  }))

  return (
    <div className={cn("fixed top-16 left-0 w-64 h-[calc(100vh-4rem)] border-r bg-muted/30 backdrop-blur overflow-y-auto", className)}>
      <div className="p-4 pt-6">
        <div className="flex items-center gap-2 mb-6 group">
          <Package className="h-6 w-6 transition-transform duration-200 group-hover:scale-110" />
          <h2 className="font-semibold text-lg">Components</h2>
        </div>
        
        <nav className="space-y-2">
          {groupedComponents.map((category, index) => (
            <div 
              key={category.id}
              className="animate-in fade-in-0 slide-in-from-left-4 duration-500"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <button
                onClick={() => toggleCategory(category.id)}
                className="flex items-center justify-between w-full text-left text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-200 py-2 px-2 rounded-md hover:bg-muted/50 group"
              >
                <span className="group-hover:translate-x-1 transition-transform duration-200">{category.name}</span>
                {expandedCategories.includes(category.id) ? (
                  <ChevronDown className="h-4 w-4 transition-transform duration-200" />
                ) : (
                  <ChevronRight className="h-4 w-4 transition-transform duration-200" />
                )}
              </button>
              
              {expandedCategories.includes(category.id) && (
                <div className="ml-4 space-y-1 animate-in fade-in-0 slide-in-from-top-2 duration-300">
                  {category.components.map((component, componentIndex) => (
                    <Link
                      key={component.id}
                      href={`/components/${component.id}`}
                      className={cn(
                        "block text-sm text-muted-foreground hover:text-foreground transition-all duration-200 py-1.5 px-2 rounded-md hover:bg-muted/50 hover:translate-x-1 relative group border-l border-transparent hover:border-primary/30",
                        pathname === `/components/${component.id}` && "text-foreground bg-muted/50 font-medium border-primary"
                      )}
                      style={{ animationDelay: `${componentIndex * 50}ms` }}
                    >
                      {component.name}
                      <span className="absolute left-0 top-0 w-0.5 h-full bg-primary scale-y-0 group-hover:scale-y-100 transition-transform duration-200 origin-top" />
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </div>
  )
}
