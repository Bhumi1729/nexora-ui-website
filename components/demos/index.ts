// Demo component exports
export { default as AccordionDemo } from './accordion-demo'
export { default as AiTelecallingHeroDemo } from './ai-telecalling-hero-demo'
export { default as AvatarDemo } from './avatar-demo'
export { default as BadgeDemo } from './badge-demo'
export { default as ButtonDemo } from './button-demo'
export { default as CardDemo } from './card-demo'
export { default as InputDemo } from './input-demo'
export { default as TabsDemo } from './tabs-demo'

// Demo component registry
import AccordionDemo from './accordion-demo'
import AiTelecallingHeroDemo from './ai-telecalling-hero-demo'
import AvatarDemo from './avatar-demo'
import BadgeDemo from './badge-demo'
import ButtonDemo from './button-demo'
import CardDemo from './card-demo'
import InputDemo from './input-demo'
import TabsDemo from './tabs-demo'

const demoRegistry: Record<string, React.ComponentType> = {
  'accordion-demo': AccordionDemo,
  'ai-telecalling-hero-demo': AiTelecallingHeroDemo,
  'avatar-demo': AvatarDemo,
  'badge-demo': BadgeDemo,
  'button-demo': ButtonDemo,
  'card-demo': CardDemo,
  'input-demo': InputDemo,
  'tabs-demo': TabsDemo,
  // Also support shorter keys for flexibility
  'accordion': AccordionDemo,
  'ai-telecalling-hero': AiTelecallingHeroDemo,
  'avatar': AvatarDemo,
  'badge': BadgeDemo,
  'button': ButtonDemo,
  'card': CardDemo,
  'input': InputDemo,
  'tabs': TabsDemo,
}

export function getDemoComponent(key: string): React.ComponentType | null {
  return demoRegistry[key] || null
}