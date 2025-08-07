import { Sidebar } from '@/components/layout/sidebar'
import { ComponentPreview } from '@/components/docs/component-preview'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import componentsData from '@/data/components.json'
import Link from 'next/link'

export default function ComponentsPage() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 ml-64 p-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8 animate-in fade-in-0 slide-in-from-bottom-4 duration-1000">
            <h1 className="text-4xl font-bold mb-4">Components</h1>
            <p className="text-xl text-muted-foreground">
              Beautifully designed components built with Radix UI and Tailwind CSS.
            </p>
          </div>

          {/* Categories Overview */}
          <div className="grid gap-6 mb-8">
            {componentsData.categories.map((category, index) => {
              const categoryComponents = componentsData.components.filter(
                component => component.category.toLowerCase() === category.id
              )
              
              return (
                <Card 
                  key={category.id} 
                  className="hover-lift animate-in fade-in-0 slide-in-from-bottom-4 duration-1000"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <CardTitle>{category.name}</CardTitle>
                    <CardDescription>{category.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {categoryComponents.map((component, componentIndex) => (
                        <Link 
                          key={component.id} 
                          href={`/components/${component.id}`}
                          className="block p-4 rounded-lg border hover:border-primary transition-all duration-200 hover-lift group"
                        >
                          <h3 className="font-medium mb-2 group-hover:text-primary transition-colors duration-200">{component.name}</h3>
                          <p className="text-sm text-muted-foreground mb-3">
                            {component.description}
                          </p>
                          {/* Mini Preview */}
                          <div className="flex items-center justify-center p-3 bg-muted rounded-md group-hover:bg-muted/80 transition-colors duration-200">
                            {component.id === 'button' && (
                              <Button size="sm" className="hover-lift">Preview</Button>
                            )}
                            {component.id === 'input' && (
                              <Input placeholder="Preview" className="w-24" />
                            )}
                            {component.id === 'card' && (
                              <div className="w-16 h-12 border rounded bg-background hover-lift"></div>
                            )}
                            {component.id === 'badge' && (
                              <span className="inline-flex items-center rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary ring-1 ring-inset ring-primary/20">Badge</span>
                            )}
                            {component.id === 'avatar' && (
                              <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-xs font-medium hover-lift">A</div>
                            )}
                            {component.id === 'accordion' && (
                              <div className="w-20 h-8 border rounded flex items-center justify-center text-xs hover-lift">Accordion</div>
                            )}
                            {component.id === 'tabs' && (
                              <div className="flex gap-1">
                                <div className="w-12 h-6 bg-primary/20 rounded text-xs flex items-center justify-center hover-lift">Tab</div>
                                <div className="w-12 h-6 bg-muted rounded text-xs flex items-center justify-center hover-lift">Tab</div>
                              </div>
                            )}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Getting Started */}
          <Card className="hover-lift animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-400">
            <CardHeader>
              <CardTitle>Getting Started</CardTitle>
              <CardDescription>
                Start building with our component library
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Browse the components in the sidebar or click on any component above to see detailed documentation, 
                  code examples, and props reference.
                </p>
                <div className="flex gap-2">
                  <Button asChild className="hover-lift">
                    <Link href="/docs">View Documentation</Link>
                  </Button>
                  <Button variant="outline" asChild className="hover-lift">
                    <Link href="/components/button">Browse Components</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
