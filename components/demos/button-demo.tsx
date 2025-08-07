import { Button } from '@/components/ui/button'

export default function ButtonDemo() {
  return (
    <div className="flex flex-wrap gap-3">
      <Button className="hover-lift">Default</Button>
      <Button variant="destructive" className="hover-lift">Destructive</Button>
      <Button variant="outline" className="hover-lift">Outline</Button>
      <Button variant="secondary" className="hover-lift">Secondary</Button>
      <Button variant="ghost" className="hover-lift">Ghost</Button>
      <Button variant="link" className="hover-lift">Link</Button>
    </div>
  )
}
