import type { CartItem } from "@/types/cart"
import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

interface CartState {
  items: CartItem[]
  totalItems: number
  subtotal: number
  discount: number
  shippingFee: number
  tax: number
  totalPrice: number
  couponCode: string
  couponDiscount: number
  freeShippingThreshold: number
  taxRate: number
  isLoading: boolean
}

const initialState: CartState = {
  items: [],
  totalItems: 0,
  subtotal: 0,
  discount: 0,
  shippingFee: 0,
  tax: 0,
  totalPrice: 0,
  couponCode: "",
  couponDiscount: 0,
  freeShippingThreshold: 500, 
  taxRate: 0.00,
  isLoading: false,
}

// Helper function to calculate all totals and fees
const calculateCartTotals = (
  items: CartItem[],
  couponDiscount: number,
  taxRate: number,
  freeShippingThreshold: number,
) => {
  const totalItems = items.reduce((total, item) => total + item.quantity, 0)
  const subtotal = items.reduce((total, item) => total + Number(item.price) * item.quantity, 0)

  const originalTotal = items.reduce((total, item) => total + Number(item.originalPrice) * item.quantity, 0)
  const discount = originalTotal - subtotal

  let shippingFee = 0
  if (subtotal > 0 && subtotal < freeShippingThreshold) {
    shippingFee = 50 
  }

  const taxableAmount = Math.max(0, subtotal - couponDiscount)
  const tax = taxableAmount * taxRate

  // Calculate final total
  const totalPrice = subtotal - couponDiscount + shippingFee + tax

  return {
    totalItems,
    subtotal,
    discount,
    shippingFee,
    tax,
    totalPrice: Math.max(0, totalPrice),
  }
}

const calculateSelectedTotals = (
  items: CartItem[],
  couponDiscount: number,
  taxRate: number,
  freeShippingThreshold: number,
) => {
  const selectedItems = items.filter((item) => item.selected)
  return calculateCartTotals(selectedItems, couponDiscount, taxRate, freeShippingThreshold)
}

const loadCartFromStorage = (): { items: CartItem[]; couponCode: string; couponDiscount: number } => {
  if (typeof window !== "undefined") {
    try {
      const savedCart = localStorage.getItem("falcon-cart")
      const savedCoupon = localStorage.getItem("falcon-coupon")

      const items = savedCart ? JSON.parse(savedCart) : []
      const couponData = savedCoupon ? JSON.parse(savedCoupon) : { code: "", discount: 0 }

      return {
        items,
        couponCode: couponData.code,
        couponDiscount: couponData.discount,
      }
    } catch (error) {
      console.error("Error loading cart from localStorage:", error)
      return { items: [], couponCode: "", couponDiscount: 0 }
    }
  }
  return { items: [], couponCode: "", couponDiscount: 0 }
}

const saveCartToStorage = (items: CartItem[]) => {
  if (typeof window !== "undefined") {
    try {
      localStorage.setItem("falcon-cart", JSON.stringify(items))
    } catch (error) {
      console.error("Error saving cart to localStorage:", error)
    }
  }
}

const saveCouponToStorage = (couponCode: string, couponDiscount: number) => {
  if (typeof window !== "undefined") {
    try {
      localStorage.setItem("falcon-coupon", JSON.stringify({ code: couponCode, discount: couponDiscount }))
    } catch (error) {
      console.error("Error saving coupon to localStorage:", error)
    }
  }
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    initializeCart: (state) => {
      const { items, couponCode, couponDiscount } = loadCartFromStorage()
      state.items = items
      state.couponCode = couponCode
      state.couponDiscount = couponDiscount

      const totals = calculateCartTotals(items, couponDiscount, state.taxRate, state.freeShippingThreshold)
      Object.assign(state, totals)
    },

    // Add item to cart
    addToCart: (state, action: PayloadAction<Omit<CartItem, "selected">>) => {
      const newItem = { ...action.payload, selected: false }
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === newItem.id && item.color === newItem.color && item.size === newItem.size,
      )

      if (existingItemIndex >= 0) {
        state.items[existingItemIndex].quantity += newItem.quantity
      } else {
        state.items.push(newItem)
      }

      // Recalculate totals
      const totals = calculateCartTotals(state.items, state.couponDiscount, state.taxRate, state.freeShippingThreshold)
      Object.assign(state, totals)

      // Save to localStorage
      saveCartToStorage(state.items)
    },

    // Remove item from cart
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)

      // Recalculate totals
      const totals = calculateCartTotals(state.items, state.couponDiscount, state.taxRate, state.freeShippingThreshold)
      Object.assign(state, totals)

      // Save to localStorage
      saveCartToStorage(state.items)
    },

    // Update item quantity
    updateQuantity: (state, action: PayloadAction<{ id: number; quantity: number }>) => {
      const { id, quantity } = action.payload
      const itemIndex = state.items.findIndex((item) => item.id === id)

      if (itemIndex >= 0) {
        if (quantity <= 0) {
          // Remove item if quantity is 0 or less
          state.items.splice(itemIndex, 1)
        } else {
          state.items[itemIndex].quantity = quantity
        }

        // Recalculate totals
        const totals = calculateCartTotals(
          state.items,
          state.couponDiscount,
          state.taxRate,
          state.freeShippingThreshold,
        )
        Object.assign(state, totals)

        // Save to localStorage
        saveCartToStorage(state.items)
      }
    },

    // Toggle item selection
    toggleItemSelection: (state, action: PayloadAction<number>) => {
      const itemIndex = state.items.findIndex((item) => item.id === action.payload)
      if (itemIndex >= 0) {
        state.items[itemIndex].selected = !state.items[itemIndex].selected
        // Save to localStorage
        saveCartToStorage(state.items)
      }
    },

    // Select all items
    selectAllItems: (state, action: PayloadAction<boolean>) => {
      state.items.forEach((item) => {
        item.selected = action.payload
      })
      // Save to localStorage
      saveCartToStorage(state.items)
    },

    // Apply coupon
    applyCoupon: (state, action: PayloadAction<string>) => {
      const couponCode = action.payload.toUpperCase()
      let discount = 0

      // Mock coupon validation
      switch (couponCode) {
        case "SAVE10":
          discount = state.subtotal * 0.1 
          break
        case "SAVE20":
          discount = state.subtotal * 0.2 
          break
        case "FLAT50":
          discount = 50
          break
        case "WELCOME":
          discount = state.subtotal * 0.15
          break
        default:
          discount = 0
      }

      discount = Math.min(discount, state.subtotal)

      state.couponCode = couponCode
      state.couponDiscount = discount

      const totals = calculateCartTotals(state.items, discount, state.taxRate, state.freeShippingThreshold)
      Object.assign(state, totals)

      saveCouponToStorage(couponCode, discount)
    },

    // Remove coupon
    removeCoupon: (state) => {
      state.couponCode = ""
      state.couponDiscount = 0

      const totals = calculateCartTotals(state.items, 0, state.taxRate, state.freeShippingThreshold)
      Object.assign(state, totals)

      if (typeof window !== "undefined") {
        localStorage.removeItem("falcon-coupon")
      }
    },

    clearCart: (state) => {
      state.items = []
      state.totalItems = 0
      state.subtotal = 0
      state.discount = 0
      state.shippingFee = 0
      state.tax = 0
      state.totalPrice = 0
      state.couponCode = ""
      state.couponDiscount = 0

      // Clear localStorage
      if (typeof window !== "undefined") {
        localStorage.removeItem("falcon-cart")
        localStorage.removeItem("falcon-coupon")
      }
    },

    // Set loading state
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    },
  },
})

export const {
  initializeCart,
  addToCart,
  removeFromCart,
  updateQuantity,
  toggleItemSelection,
  selectAllItems,
  applyCoupon,
  removeCoupon,
  clearCart,
  setLoading,
} = cartSlice.actions

export default cartSlice.reducer

// Enhanced Selectors
export const selectCartItems = (state: { cart: CartState }) => state.cart.items
export const selectCartTotalItems = (state: { cart: CartState }) => state.cart.totalItems
export const selectCartSubtotal = (state: { cart: CartState }) => state.cart.subtotal
export const selectCartDiscount = (state: { cart: CartState }) => state.cart.discount
export const selectCartShippingFee = (state: { cart: CartState }) => state.cart.shippingFee
export const selectCartTax = (state: { cart: CartState }) => state.cart.tax
export const selectCartTotalPrice = (state: { cart: CartState }) => state.cart.totalPrice
export const selectCouponCode = (state: { cart: CartState }) => state.cart.couponCode
export const selectCouponDiscount = (state: { cart: CartState }) => state.cart.couponDiscount
export const selectFreeShippingThreshold = (state: { cart: CartState }) => state.cart.freeShippingThreshold
export const selectCartLoading = (state: { cart: CartState }) => state.cart.isLoading

// Selected items selectors
export const selectSelectedItems = (state: { cart: CartState }) => state.cart.items.filter((item) => item.selected)
export const selectSelectedTotals = (state: { cart: CartState }) => {
  const selectedItems = state.cart.items.filter((item) => item.selected)
  return calculateSelectedTotals(
    selectedItems,
    state.cart.couponDiscount,
    state.cart.taxRate,
    state.cart.freeShippingThreshold,
  )
}

export const selectIsEligibleForFreeShipping = (state: { cart: CartState }) =>
  state.cart.subtotal >= state.cart.freeShippingThreshold

export const selectAmountNeededForFreeShipping = (state: { cart: CartState }) =>
  Math.max(0, state.cart.freeShippingThreshold - state.cart.subtotal)

export const selectCartSummary = (state: { cart: CartState }) => ({
  itemCount: state.cart.totalItems,
  subtotal: state.cart.subtotal,
  discount: state.cart.discount,
  couponDiscount: state.cart.couponDiscount,
  shippingFee: state.cart.shippingFee,
  tax: state.cart.tax,
  total: state.cart.totalPrice,
  savings: state.cart.discount + state.cart.couponDiscount,
})
