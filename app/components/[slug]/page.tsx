import { notFound } from 'next/navigation'
import { Sidebar } from '@/components/layout/sidebar'
import { ComponentPreview } from '@/components/docs/component-preview'
import { CodeBlock } from '@/components/docs/code-block'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import componentsData from '@/data/components.json'

interface ComponentData {
  id: string
  name: string
  description: string
  category: string
  preview: {
    type: string
  }
  demoKey?: string
  componentFile?: string
  code?: string
  usage: string
  props: Array<{
    name: string
    type: string
    default?: string
    description: string
  }>
}

interface ComponentPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return componentsData.components.map((component) => ({
    slug: component.id,
  }))
}


export default async function ComponentPage({ params }: ComponentPageProps) {
  // Await params as required by Next.js App Router
  const { slug } = await Promise.resolve(params)
  const component = componentsData.components.find(c => c.id === slug) as ComponentData | undefined

  if (!component) {
    notFound()
  }

  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 ml-64 p-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">{component.name}</h1>
            <p className="text-xl text-muted-foreground mb-2">{component.description}</p>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 dark:bg-blue-950 dark:text-blue-300 dark:ring-blue-300/10">
                {component.category}
              </span>
            </div>
          </div>

          {/* Preview */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Preview</h2>
            <ComponentPreview component={component} />
          </section>

          {/* Usage */}
          {component.usage && (
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Usage</h2>
              <p className="text-muted-foreground">{component.usage}</p>
            </section>
          )}

          {/* Code Example */}
          {(component.code || component.demoKey) && (
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Code Example</h2>
              {component.code ? (
                <CodeBlock code={component.code} language="tsx" />
              ) : component.demoKey ? (
                <div className="text-muted-foreground">
                  Code will be displayed when you view the component preview above and switch to the "Code" tab.
                </div>
              ) : null}
            </section>
          )}

          {/* Props */}
          {component.props && component.props.length > 0 && (
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Props</h2>
              <Card>
                <CardHeader>
                  <CardTitle>Component Props</CardTitle>
                  <CardDescription>Available props for the {component.name} component</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-2 font-medium">Prop</th>
                          <th className="text-left py-2 font-medium">Type</th>
                          <th className="text-left py-2 font-medium">Default</th>
                          <th className="text-left py-2 font-medium">Description</th>
                        </tr>
                      </thead>
                      <tbody>
                        {component.props.map((prop, index) => (
                          <tr key={index} className="border-b last:border-b-0">
                            <td className="py-2 font-mono text-sm">{prop.name}</td>
                            <td className="py-2 font-mono text-sm text-blue-600 dark:text-blue-400">{prop.type}</td>
                            <td className="py-2 font-mono text-sm text-muted-foreground">
                              {prop.default || '-'}
                            </td>
                            <td className="py-2 text-muted-foreground">{prop.description}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </section>
          )}
        </div>
      </main>
    </div>
  )
}
