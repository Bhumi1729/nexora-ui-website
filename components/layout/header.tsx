"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme/theme-toggle"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Components", href: "/components" },
  { name: "Docs", href: "/docs" },
  { name: "Examples", href: "/examples" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-200">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center transition-transform duration-200 group-hover:scale-110">
                <span className="text-primary-foreground font-bold text-sm">N</span>
              </div>
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-primary/20 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 blur-sm" />
            </div>
            <span className="font-bold text-xl gradient-text transition-transform duration-200 group-hover:scale-105">Nexora UI</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "transition-all duration-200 hover:text-foreground relative group px-2 py-1 rounded-md",
                  pathname === item.href
                    ? "text-foreground bg-muted/50"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/30"
                )}
              >
                {item.name}
                <span className={cn(
                  "absolute -bottom-1 left-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-4 group-hover:left-1/2 transform -translate-x-1/2",
                  pathname === item.href ? "w-4" : ""
                )} />
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2">
            <ThemeToggle />
            <Button variant="ghost" size="sm" asChild className="hover-lift">
              <Link href="https://github.com/Atharvajoshiii/rekitui" className="flex items-center gap-2">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </Link>
            </Button>
          </div>
          
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden hover-lift"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-background/95 backdrop-blur animate-in slide-in-from-top-2 duration-200">
          <div className="container py-4 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "block px-3 py-2 text-base font-medium transition-colors duration-200 hover:bg-accent rounded-md",
                  pathname === item.href
                    ? "text-foreground bg-accent"
                    : "text-muted-foreground"
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-2 border-t">
              <Button variant="ghost" size="sm" asChild className="w-full justify-start">
                <Link href="https://github.com/Atharvajoshiii/rekitui" className="flex items-center gap-2">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
