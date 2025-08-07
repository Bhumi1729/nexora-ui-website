export default function AvatarDemo() {
  return (
    <div className="flex items-center gap-4">
      <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-sm font-medium hover-lift">
        JD
      </div>
      <div className="h-10 w-10 rounded-full bg-secondary border flex items-center justify-center text-secondary-foreground text-sm font-medium hover-lift">
        AB
      </div>
      <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground text-sm font-medium hover-lift">
        +2
      </div>
    </div>
  )
}
