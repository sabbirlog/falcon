"use client"

import type { CartItem, CartState } from "@/types/cart"
import { useCallback, useMemo, useState } from "react"

const initialCartItems: CartItem[] = [
  {
    id: "1",
    name: "Bestway Brand Air Inflatable 5 In 1 semi Double Sofa",
    color: "red",
    size: "M",
    price: 1139,
    originalPrice: 1539,
    quantity: 2,
    image: "/placeholder.svg?height=100&width=100",
    vendor: "BD FASHION HOUSE",
    selected: false,
  },
  {
    id: "2",
    name: "Bestway Brand Air Inflatable 5 In 1 semi Double Sofa",
    color: "red",
    size: "M",
    price: 1139,
    originalPrice: 1539,
    quantity: 2,
    image: "/placeholder.svg?height=100&width=100",
    vendor: "BD FASHION HOUSE",
    selected: false,
  },
  {
    id: "3",
    name: "Bestway Brand Air Inflatable 5 In 1 semi Double Sofa",
    color: "red",
    size: "M",
    price: 1139,
    originalPrice: 1539,
    quantity: 2,
    image: "/placeholder.svg?height=100&width=100",
    vendor: "BD FASHION HOUSE",
    selected: false,
  },
]

export function useCart() {
  const [cartState, setCartState] = useState<CartState>({
    items: initialCartItems,
    selectAll: false,
    couponCode: "",
    agreeToTerms: false,
  })

  const updateQuantity = useCallback((id: string, newQuantity: number) => {
    if (newQuantity < 1) return
    setCartState((prev) => ({
      ...prev,
      items: prev.items.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)),
    }))
  }, [])

  const removeItem = useCallback((id: string) => {
    setCartState((prev) => ({
      ...prev,
      items: prev.items.filter((item) => item.id !== id),
    }))
  }, [])

  const toggleItemSelection = useCallback((id: string) => {
    setCartState((prev) => ({
      ...prev,
      items: prev.items.map((item) => (item.id === id ? { ...item, selected: !item.selected } : item)),
    }))
  }, [])

  const toggleSelectAll = useCallback(() => {
    setCartState((prev) => {
      const newSelectAll = !prev.selectAll
      return {
        ...prev,
        selectAll: newSelectAll,
        items: prev.items.map((item) => ({ ...item, selected: newSelectAll })),
      }
    })
  }, [])

  const clearAll = useCallback(() => {
    setCartState((prev) => ({
      ...prev,
      items: [],
      selectAll: false,
    }))
  }, [])

  const updateCouponCode = useCallback((code: string) => {
    setCartState((prev) => ({ ...prev, couponCode: code }))
  }, [])

  const toggleAgreeToTerms = useCallback(() => {
    setCartState((prev) => ({ ...prev, agreeToTerms: !prev.agreeToTerms }))
  }, [])

  const selectedItems = useMemo(() => {
    return cartState.items.filter((item) => item.selected)
  }, [cartState.items])

  const totalPrice = useMemo(() => {
    return selectedItems.reduce((total, item) => total + item.price * item.quantity, 0)
  }, [selectedItems])

  const totalItems = useMemo(() => {
    return selectedItems.reduce((total, item) => total + item.quantity, 0)
  }, [selectedItems])

  return {
    cartState,
    updateQuantity,
    removeItem,
    toggleItemSelection,
    toggleSelectAll,
    clearAll,
    updateCouponCode,
    toggleAgreeToTerms,
    selectedItems,
    totalPrice,
    totalItems,
  }
}
