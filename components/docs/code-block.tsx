"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Copy, Check } from "lucide-react"
import { cn } from "@/lib/utils"

interface CodeBlockProps {
  code: string
  language: string
  showCopy?: boolean
  className?: string
}

export function CodeBlock({ code, language, showCopy = false, className }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy text: ", err)
    }
  }

  return (
    <div className={cn("relative", className)}>
      <pre className="overflow-x-auto rounded-lg border bg-muted p-4">
        <code className={`language-${language}`}>
          {code}
        </code>
      </pre>
      {showCopy && (
        <Button
          size="sm"
          variant="ghost"
          className="absolute top-2 right-2"
          onClick={copyToClipboard}
        >
          {copied ? (
            <Check className="h-4 w-4" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
        </Button>
      )}
    </div>
  )
}
