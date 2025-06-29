"use client"

import type { Product, ProductColor, ProductSize } from "@/types/product"
import { useCallback, useState } from "react"

export function useProduct(initialProduct?: Product) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [selectedColor, setSelectedColor] = useState<ProductColor | null>(initialProduct?.colors?.[0] || null)
  const [selectedSize, setSelectedSize] = useState<ProductSize | null>(initialProduct?.sizes?.[0] || null)
  const [quantity, setQuantity] = useState(2)

  const handleImageSelect = useCallback((index: number) => {
    setSelectedImageIndex(index)
  }, [])

  const handleColorSelect = useCallback((color: ProductColor) => {
    setSelectedColor(color)
  }, [])

  const handleSizeSelect = useCallback((size: ProductSize) => {
    if (size.available) {
      setSelectedSize(size)
    }
  }, [])

  const handleQuantityChange = useCallback((newQuantity: number) => {
    if (newQuantity >= 1) {
      setQuantity(newQuantity)
    }
  }, [])

  const handleAddToCart = useCallback(() => {
    if (!initialProduct || !selectedColor || !selectedSize) return

    const cartItem = {
      id: initialProduct.id,
      name: initialProduct.name,
      price: initialProduct.price,
      originalPrice: initialProduct.originalPrice,
      image: initialProduct.images[selectedImageIndex],
      color: selectedColor.name,
      size: selectedSize.name,
      quantity,
      selected: false,
      vendor: initialProduct.seller.name,
    }

    // Here you would typically dispatch to a cart context or state management
    console.log("Adding to cart:", cartItem)
    alert("Product added to cart!")
  }, [initialProduct, selectedColor, selectedSize, selectedImageIndex, quantity])

  return {
    selectedImageIndex,
    selectedColor,
    selectedSize,
    quantity,
    handleImageSelect,
    handleColorSelect,
    handleSizeSelect,
    handleQuantityChange,
    handleAddToCart,
  }
}
