"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { Brand, Media, Merchant, ProductColor, ProductDetail, ProductSize, ShopProduct } from "@/types/product"
import { Heart, Minus, Plus, Share2 } from "lucide-react"
import { Badge } from "../ui/badge"

const sizes = [
  { name: "XL", available: true },
  { name: "XS", available: true },
  { name: "S", available: true },
  { name: "M", available: false },
  { name: "L", available: true },
]

const colors = [
  { name: "Beige", value: "#F5F5DC" },
  { name: "Red", value: "#DC143C" },
  { name: "Navy Blue", value: "#000080" },
  { name: "Black", value: "#000000" },
]

interface ProductInfoProps {
  productDetails: {
    name: string
    rating_count: number
    rating_avg: number
    product_detail: ProductDetail
    merchant: Merchant
    media: Media
    brand: Brand
    shopProduct: ShopProduct
  },
  selectedColor: ProductColor | null
  selectedSize: ProductSize | null
  quantity: number
  onColorSelect: (color: ProductColor) => void
  onSizeSelect: (size: ProductSize) => void
  onQuantityChange: (quantity: number) => void
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onAddToCart: (e: any) => void
}

export default function ProductInfo({
  productDetails,
  selectedColor,
  selectedSize,
  quantity,
  onColorSelect,
  onSizeSelect,
  onQuantityChange,
  onAddToCart,
}: Readonly<ProductInfoProps>) {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={cn("text-lg", i < Math.floor(rating) ? "text-yellow-400" : "text-gray-300")}>
        ★
      </span>
    ))
  }

  return (
    <div className="space-y-6">
      {/* Product Title */}
      <div>
        <h1 className="text-[20px] font-medium text-[#0F172A] leading-tight">{productDetails?.name}</h1>
      </div>

      {/* Rating and Actions */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="flex items-center">{renderStars(productDetails?.rating_count || 5)}</div>
          <span className="text-sm font-medium text-gray-900">{productDetails?.rating_avg}</span>
          {/* <span className="text-sm text-gray-500">({product.reviewCount.toLocaleString()})</span> */}
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="sm">
            <Heart className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="sm">
            <Share2 className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Price */}
      <div className="flex items-center space-x-3">
        <span className="text-3xl font-bold text-emerald-600">৳{productDetails?.product_detail.discount_price.toLocaleString()}</span>
        <span className="text-lg text-gray-500 line-through">৳{productDetails?.product_detail?.regular_price.toLocaleString()}</span>
      </div>

      {/* Promotion */}
      <div className="flex items-center space-x-2">
        <span className="text-sm text-gray-600">Promotion</span>
        <Badge className="bg-orange-500 text-white">Min. spend ৳550</Badge>
      </div>

      {/* Available Colors */}
      <div className="space-y-3">
        <div className="flex items-center space-x-2">
          <span className="text-sm font-medium text-gray-700">Available Color:</span>
          <span className="text-sm text-gray-900">{selectedColor?.name ?? "Navy Blue"}</span>
        </div>
        <div className="flex space-x-2">
          {colors?.map((color) => (
            <button
              key={color.name}
              onClick={() => onColorSelect(color)}
              className={cn(
                "w-12 h-12 rounded border-2 transition-colors",
                selectedColor?.name === color.name ? "border-emerald-500" : "border-gray-300 hover:border-gray-400",
              )}
              style={{ backgroundColor: color.value }}
              title={color.name}
            />
          ))}
        </div>
      </div>

      {/* Size Selection */}
      <div className="space-y-3">
        <div className="flex items-center space-x-2">
          <span className="text-sm font-medium text-gray-700">Select Size:</span>
          <span className="text-sm text-gray-900">{selectedSize?.name || "XS"}</span>
        </div>
        <div className="flex space-x-2">
          {sizes?.map((size) => (
            <button
              key={size.name}
              onClick={() => onSizeSelect(size)}
              disabled={!size.available}
              className={cn(
                "px-4 py-2 border rounded-md text-sm font-medium transition-colors",
                selectedSize?.name === size.name
                  ? "border-emerald-500 bg-emerald-50 text-emerald-700"
                  : size.available
                    ? "border-gray-300 text-gray-700 hover:border-gray-400"
                    : "border-gray-200 text-gray-400 cursor-not-allowed",
              )}
            >
              {size.name}
            </button>
          ))}
        </div>
      </div>

      {/* Quantity */}
      <div className="space-y-3">
        <span className="text-sm font-medium text-gray-700">Quantity</span>
        <div className="flex items-center space-x-3">
          <Button variant="outline" size="sm" onClick={() => onQuantityChange(quantity - 1)} disabled={quantity <= 1}>
            <Minus className="h-4 w-4" />
          </Button>
          <span className="text-lg font-medium w-12 text-center">{quantity.toString().padStart(2, "0")}</span>
          <Button variant="outline" size="sm" onClick={() => onQuantityChange(quantity + 1)}>
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Add to Cart Button */}
      <Button
        onClick={() => onAddToCart(productDetails)}
        className="w-full h-12 bg-emerald-500 hover:bg-emerald-600 text-white font-medium"
        disabled={!selectedColor || !selectedSize}
      >
        Add to Cart
      </Button>
    </div>
  )
}
