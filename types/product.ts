export interface Category {
  id: number
  name: string
  slug: string
  image: string
  subcategories: Subcategory[]
}

export interface Subcategory {
  id: number
  name: string
  slug: string
  image: string
  subchilds: SubChild[]
}

export interface SubChild {
  id: number
  name: string
  slug: string
  image: string
}

export interface Product {
  id: string
  name: string
  price: number
  originalPrice: number
  rating: number
  reviewCount: number
  images: string[]
  colors: ProductColor[]
  sizes: ProductSize[]
  description: string
  seller: Seller
  promotion?: string
}

export interface ProductColor {
  name: string
  value: string
  image?: string
}

export interface ProductSize {
  name: string
  available: boolean
}

export interface Seller {
  name: string
  verified: boolean
  rating: number
  shipOnTime: number
  chatResponse: number
  shopRating: number
}

export interface CartItem {
  id: string
  name: string
  price: number
  originalPrice: number
  image: string
  color: string
  size: string
  quantity: number
  selected: boolean
  vendor: string
}
