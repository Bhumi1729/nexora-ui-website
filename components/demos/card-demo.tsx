import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function CardDemo() {
  return (
    <Card className="w-full max-w-md hover-lift border-glow">
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
