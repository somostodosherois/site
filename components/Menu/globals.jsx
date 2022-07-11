export const navigationLeft = [
  { name: 'Sobre nós', href: '/sobrenos' },
  { name: 'Loja', href: '/loja' }
]

export const navigationRigth = [
  { name: 'Transparência', href: '/portal-transparencia' },
  { name: 'Missões', href: '/missoes' }
]

export function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}