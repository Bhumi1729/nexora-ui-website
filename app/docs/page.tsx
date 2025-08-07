import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CodeBlock } from "@/components/docs/code-block";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function DocsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl">
        <div className="animate-in fade-in-0 slide-in-from-bottom-4 duration-1000">
          <h1 className="text-4xl font-bold mb-4">Documentation</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Get started with Nexora UI and start building beautiful components.
          </p>
        </div>

        <div className="space-y-8">
          <Card className="hover-lift animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-200">
            <CardHeader>
              <CardTitle>Installation</CardTitle>
              <CardDescription>
                Add RekitUI components to your project with a single command.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <h3 className="text-lg font-semibold">Quick Start</h3>
              <CodeBlock
                code="npx rekitui add button"
                language="bash"
                showCopy
              />
              <p className="text-sm text-muted-foreground">
                This will add the button component to your project in the <code className="bg-muted px-1 rounded">components/ui</code> directory.
              </p>
            </CardContent>
          </Card>

          <Card className="hover-lift animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-400">
            <CardHeader>
              <CardTitle>Requirements</CardTitle>
              <CardDescription>
                Make sure your project meets these requirements.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li>React 18+ project</li>
                <li>Tailwind CSS configured</li>
                <li>TypeScript (recommended)</li>
                <li>Node.js 16+ for CLI usage</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover-lift animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-600">
            <CardHeader>
              <CardTitle>CLI Commands</CardTitle>
              <CardDescription>
                Available commands for the Nexora UI CLI.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Add Component</h4>
                <CodeBlock
                  code="npx rekitui add [component-name]"
                  language="bash"
                  showCopy
                />
              </div>
              <div>
                <h4 className="font-semibold mb-2">List Components</h4>
                <CodeBlock
                  code="npx rekitui list"
                  language="bash"
                  showCopy
                />
              </div>
              <div>
                <h4 className="font-semibold mb-2">Get Help</h4>
                <CodeBlock
                  code="npx rekitui --help"
                  language="bash"
                  showCopy
                />
              </div>
            </CardContent>
          </Card>

          <div className="flex gap-4 animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-800">
            <Button asChild className="hover-lift">
              <Link href="/components">View Components</Link>
            </Button>
            <Button variant="outline" asChild className="hover-lift">
              <Link href="https://github.com/Atharvajoshiii/rekitui">GitHub</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
