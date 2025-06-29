export interface CartItem {
  id: string
  name: string
  color: string
  size: string
  price: number
  originalPrice: number
  quantity: number
  image: string
  vendor: string
  selected: boolean
}

export interface CartState {
  items: CartItem[]
  selectAll: boolean
  couponCode: string
  agreeToTerms: boolean
}
