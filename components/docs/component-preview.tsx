"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { CodeBlock } from "./code-block"
import { Eye, Code } from "lucide-react"
import { cn } from "@/lib/utils"
import { getDemoComponent } from "@/components/demos"

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

interface ComponentPreviewProps {
  component?: ComponentData
  name?: string
  description?: string
  children?: React.ReactNode
  code?: string
  className?: string
}

export function ComponentPreview({ 
  component,
  name, 
  description, 
  children,
  code, 
  className 
}: ComponentPreviewProps) {
  const [view, setView] = useState<"preview" | "code">("preview")
  const [DemoComponent, setDemoComponent] = useState<React.ComponentType | null>(null)
  const [demoSource, setDemoSource] = useState<string>("")
  const [isLoading, setIsLoading] = useState(true)

  // Support both old and new prop patterns
  const displayName = component?.name || name || "Component"
  const displayDescription = component?.description || description || ""
  const displayCode = component?.code || demoSource || code || ""

  useEffect(() => {
    const loadDemoComponent = async () => {
      if (component?.demoKey && component?.preview?.type === "dynamic") {
        try {
          setIsLoading(true)
          
          // Get demo component from registry
          const DemoComp = getDemoComponent(component.demoKey)
          if (DemoComp) {
            setDemoComponent(() => DemoComp)
          }
          
          // Fetch the source code
          const response = await fetch(`/api/demo-source?file=${encodeURIComponent(component.demoKey)}`)
          if (response.ok) {
            const source = await response.text()
            setDemoSource(source)
          }
        } catch (error) {
          console.error('Error loading demo component:', error)
        } finally {
          setIsLoading(false)
        }
      } else {
        setIsLoading(false)
      }
    }

    loadDemoComponent()
  }, [component?.demoKey, component?.preview?.type])

  // Render the actual component based on the preview type
  const renderPreview = () => {
    if (children) {
      return children
    }

    // Use dynamic component if available
    if (component?.preview?.type === "dynamic" && DemoComponent) {
      return <DemoComponent />
    }

    // Loading state for dynamic components
    if (component?.preview?.type === "dynamic" && isLoading) {
      return (
        <div className="flex items-center justify-center py-8">
          <div className="text-muted-foreground">Loading preview...</div>
        </div>
      )
    }

    // Fallback to hardcoded implementations for backward compatibility
    if (component?.preview.type === "button-variants") {
      return (
        <div className="flex flex-wrap gap-2">
          <Button>Default</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </div>
      )
    }

    if (component?.preview.type === "card-basic") {
      return (
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card description goes here</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              This is the card content area.
            </p>
          </CardContent>
        </Card>
      )
    }

    if (component?.preview.type === "input-variants") {
      return (
        <div className="space-y-4 w-full max-w-md">
          <Input placeholder="Enter your name" />
          <Input type="email" placeholder="Enter your email" />
          <Input type="password" placeholder="Enter your password" />
        </div>
      )
    }

    if (component?.preview.type === "badge-variants") {
      return (
        <div className="flex flex-wrap gap-2">
          <span className="inline-flex items-center rounded-full bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">Default</span>
          <span className="inline-flex items-center rounded-full bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">Secondary</span>
          <span className="inline-flex items-center rounded-full bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">Destructive</span>
          <span className="inline-flex items-center rounded-full px-2 py-1 text-xs font-medium text-gray-900 ring-1 ring-inset ring-gray-300">Outline</span>
        </div>
      )
    }

    if (component?.preview.type === "avatar-variants") {
      return (
        <div className="flex items-center gap-4">
          <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center text-white text-sm font-medium">
            JD
          </div>
          <div className="h-10 w-10 rounded-full bg-green-500 flex items-center justify-center text-white text-sm font-medium">
            AB
          </div>
        </div>
      )
    }

    if (component?.preview.type === "accordion-basic") {
      return (
        <div className="w-full space-y-2">
          <div className="border rounded-lg">
            <button className="w-full px-4 py-3 text-left font-medium hover:bg-muted">
              Is it accessible? ▼
            </button>
            <div className="px-4 pb-3 text-sm text-muted-foreground">
              Yes. It adheres to the WAI-ARIA design pattern.
            </div>
          </div>
        </div>
      )
    }

    if (component?.preview.type === "tabs-basic") {
      return (
        <div className="w-[400px]">
          <div className="flex border-b">
            <button className="px-4 py-2 text-sm font-medium border-b-2 border-blue-500 text-blue-600">
              Account
            </button>
            <button className="px-4 py-2 text-sm font-medium text-muted-foreground">
              Password
            </button>
          </div>
          <div className="p-4 text-sm">
            Account settings and preferences.
          </div>
        </div>
      )
    }

    if (component?.preview.type === "ai-telecalling-hero") {
      const AITelecallingHero = require("@/components/ui/ai-telecalling-hero").default;
      return <AITelecallingHero />;
    }
    if (component?.preview.type === "hero-22") {
      const Hero22 = require("@/components/ui/hero-22").default;
      return <Hero22 />;
    }
    return <div className="text-muted-foreground">Preview not available</div>
  }

  return (
    <div className={cn("w-full", className)}>
      <div className="flex items-center justify-between mb-4">
        <div>
          <span className="block text-xl font-semibold">{displayName}</span>
          <span className="block text-muted-foreground text-base">{displayDescription}</span>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant={view === "preview" ? "default" : "outline"}
            size="sm"
            onClick={() => setView("preview")}
          >
            <Eye className="h-4 w-4 mr-1" />
            Preview
          </Button>
          <Button
            variant={view === "code" ? "default" : "outline"}
            size="sm"
            onClick={() => setView("code")}
          >
            <Code className="h-4 w-4 mr-1" />
            Code
          </Button>
        </div>
      </div>
      {view === "preview" ? (
        <div
          className={
            cn(
              "flex items-center justify-center min-h-[200px] p-6 border border-dashed rounded-lg w-full"
            )
          }
        >
          {renderPreview()}
        </div>
      ) : (
        <CodeBlock code={displayCode} language="tsx" showCopy />
      )}
    </div>
  )
}
