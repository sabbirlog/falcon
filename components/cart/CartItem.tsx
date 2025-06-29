"use client"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import type { CartItem } from "@/types/cart"
import { Minus, Plus, Trash2 } from "lucide-react"

interface CartItemProps {
  item: CartItem
  onQuantityChange: (id: string, quantity: number) => void
  onRemove: (id: string) => void
  onToggleSelect: (id: string) => void
}

export function CartItemComponent({ item, onQuantityChange, onRemove, onToggleSelect }: Readonly<CartItemProps>) {
  return (
    <div className="border-b border-gray-200 pb-6 mb-6">
      {/* Vendor Header */}
      <div className="flex items-center mb-4">
        <Checkbox checked={item.selected} onCheckedChange={() => onToggleSelect(item.id)} className="mr-3" />
        <div className="flex items-center text-gray-600">
          <div className="w-6 h-6 border border-gray-300 rounded mr-2 flex items-center justify-center">
            <span className="text-xs">🏪</span>
          </div>
          <span className="font-medium">{item.vendor}</span>
          <span className="ml-2 text-gray-400">›</span>
        </div>
      </div>

      {/* Product Details */}
      <div className="flex items-start space-x-4 ml-9">
        <Checkbox checked={item.selected} onCheckedChange={() => onToggleSelect(item.id)} className="mt-2" />

        <div className="w-20 h-20 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
          <img src={item.image || "/placeholder.svg"} alt={item.name} className="w-full h-full object-cover" />
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="text-gray-900 font-medium mb-2 line-clamp-2">{item.name}</h3>
          <p className="text-gray-500 text-sm mb-4">
            Color: {item.color}; Size: {item.size}
          </p>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Button
                variant="outline"
                size="sm"
                onClick={() => onQuantityChange(item.id, item.quantity - 1)}
                disabled={item.quantity <= 1}
                className="h-8 w-8 p-0"
              >
                <Minus className="h-4 w-4" />
              </Button>

              <span className="font-medium text-lg min-w-[2rem] text-center">
                {item.quantity.toString().padStart(2, "0")}
              </span>

              <Button
                variant="outline"
                size="sm"
                onClick={() => onQuantityChange(item.id, item.quantity + 1)}
                className="h-8 w-8 p-0"
              >
                <Plus className="h-4 w-4" />
              </Button>

              <Button
                variant="ghost"
                size="sm"
                onClick={() => onRemove(item.id)}
                className="h-8 w-8 p-0 text-gray-400 hover:text-red-500"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>

            <div className="text-right">
              <div className="text-lg font-semibold text-gray-900">৳{item.price}</div>
              <div className="text-sm text-gray-500 line-through">৳{item.originalPrice}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
