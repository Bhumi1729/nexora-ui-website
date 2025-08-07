import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const demoKey = searchParams.get('file')

  if (!demoKey) {
    return NextResponse.json({ error: 'File parameter is required' }, { status: 400 })
  }

  try {
    // Convert demo key to file path
    const filePath = path.join(process.cwd(), 'components', 'demos', `${demoKey}.tsx`)
    
    if (fs.existsSync(filePath)) {
      const source = fs.readFileSync(filePath, 'utf-8')
      return new NextResponse(source, {
        headers: {
          'Content-Type': 'text/plain',
        },
      })
    } else {
      return NextResponse.json({ error: 'Demo file not found' }, { status: 404 })
    }
  } catch (error) {
    console.error('Error reading demo source:', error)
    return NextResponse.json({ error: 'Failed to read demo source' }, { status: 500 })
  }
}
