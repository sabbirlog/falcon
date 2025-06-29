export interface CartItem {
  id: number
  name: string
  color: string
  size: string
  price: string
  originalPrice: string
  quantity: number
  image: string
  selected?: boolean
}

export interface CartState {
  items: CartItem[]
  selectAll: boolean
  couponCode: string
  agreeToTerms: boolean
}
