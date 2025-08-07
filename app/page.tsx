import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Copy, Download, Zap } from "lucide-react";
import Link from "next/link";
import { CodeBlock } from "@/components/docs/code-block";

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="container mx-auto px-4 py-24 text-center relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>
        
        <div className="mx-auto max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border mb-8 animate-in fade-in-0 slide-in-from-bottom-4 duration-1000">
            <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm text-muted-foreground">Open Source • Modern • Professional</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-200">
            Build faster with{" "}
            <span className="gradient-text">Nexora UI</span>
          </h1>
          
          <p className="text-xl md:text-2xl leading-relaxed text-muted-foreground mb-12 max-w-3xl mx-auto animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-400">
            A modern TypeScript-based CLI tool for installing React + Tailwind UI components.
            <br className="hidden md:block" />
            <span className="text-lg">Professional, accessible, and beautifully designed.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-600">
            <Button asChild size="lg" className="hover-lift text-lg px-8 py-6 h-auto">
              <Link href="/docs" className="flex items-center gap-2">
                Get Started
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="hover-lift text-lg px-8 py-6 h-auto">
              <Link href="/components" className="flex items-center gap-2">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                Browse Components
              </Link>
            </Button>
          </div>
          
          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-800">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Components</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">TypeScript</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">0</div>
              <div className="text-sm text-muted-foreground">Dependencies</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="text-center p-6 rounded-lg border hover-lift animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-1000">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
            <p className="text-muted-foreground">Copy-paste components in seconds. No complex setup required.</p>
          </div>
          
          <div className="text-center p-6 rounded-lg border hover-lift animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-1200">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Accessible</h3>
            <p className="text-muted-foreground">Built with accessibility in mind. WCAG compliant components.</p>
          </div>
          
          <div className="text-center p-6 rounded-lg border hover-lift animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-1400">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17v4a2 2 0 002 2h4M13 13h4a2 2 0 012 2v4a2 2 0 01-2 2h-4m-6-4a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Customizable</h3>
            <p className="text-muted-foreground">Fully customizable with CSS variables and Tailwind CSS.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
