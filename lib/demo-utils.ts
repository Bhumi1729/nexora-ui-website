import fs from 'fs'
import path from 'path'

export function getDemoSource(demoFile: string): string {
  try {
    // Convert @/components/demos/button-demo to actual file path
    const filePath = demoFile.replace('@/', './') + '.tsx'
    const fullPath = path.join(process.cwd(), filePath)
    
    if (fs.existsSync(fullPath)) {
      return fs.readFileSync(fullPath, 'utf-8')
    }
    
    return ''
  } catch (error) {
    console.error('Error reading demo source:', error)
    return ''
  }
}
