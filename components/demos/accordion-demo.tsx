"use client"

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function AccordionDemo() {
  const [openItem, setOpenItem] = useState<string | null>('item-1')

  const toggleItem = (item: string) => {
    setOpenItem(openItem === item ? null : item)
  }

  return (
    <div className="w-full space-y-2">
      <div className="border rounded-lg hover-lift">
        <button 
          className="w-full px-4 py-3 text-left font-medium hover:bg-muted transition-colors duration-200 flex items-center justify-between"
          onClick={() => toggleItem('item-1')}
        >
          Is it accessible?
          <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${openItem === 'item-1' ? 'rotate-180' : ''}`} />
        </button>
        {openItem === 'item-1' && (
          <div className="px-4 pb-3 text-sm text-muted-foreground animate-in slide-in-from-top-2 duration-200">
            Yes. It adheres to the WAI-ARIA design pattern.
          </div>
        )}
      </div>
      <div className="border rounded-lg hover-lift">
        <button 
          className="w-full px-4 py-3 text-left font-medium hover:bg-muted transition-colors duration-200 flex items-center justify-between"
          onClick={() => toggleItem('item-2')}
        >
          Is it styled?
          <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${openItem === 'item-2' ? 'rotate-180' : ''}`} />
        </button>
        {openItem === 'item-2' && (
          <div className="px-4 pb-3 text-sm text-muted-foreground animate-in slide-in-from-top-2 duration-200">
            Yes. It comes with beautiful default styles that you can customize.
          </div>
        )}
      </div>
    </div>
  )
}
