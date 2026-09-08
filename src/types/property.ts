export type PropertyPurpose = 'comprar' | 'alugar'

export type PropertyType = 'apartamento' | 'casa' | 'terreno' | 'comercial'

export interface Property {
  id: string
  title: string
  purpose: PropertyPurpose
  type: PropertyType
  city: string
  neighborhood: string
  price: number
  bedrooms: number
  bathrooms: number
  parkingSpaces: number
  areaM2: number
  featured?: boolean
  imageTone: 'navy' | 'sand' | 'olive' | 'slate' | 'terracotta' | 'stone'
}
