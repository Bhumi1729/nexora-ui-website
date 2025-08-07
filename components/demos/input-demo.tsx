import { Input } from '@/components/ui/input'

export default function InputDemo() {
  return (
    <div className="space-y-4 w-full max-w-md">
      <Input placeholder="Enter your name" />
      <Input type="email" placeholder="Enter your email" />
      <Input type="password" placeholder="Enter your password" />
    </div>
  )
}
