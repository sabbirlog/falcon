"use client"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"

interface CartHeaderProps {
  itemCount: number
  selectAll: boolean
  onToggleSelectAll: () => void
  onClearAll: () => void
}

export function CartHeader({ itemCount, selectAll, onToggleSelectAll, onClearAll }: Readonly<CartHeaderProps>) {
  return (
    <div className="flex items-center justify-between mb-8">
      <h1 className="text-3xl font-bold text-gray-900">My Cart ({itemCount})</h1>

      <div className="flex items-center space-x-6">
        <div className="flex items-center space-x-2">
          <Checkbox checked={selectAll} onCheckedChange={onToggleSelectAll} />
          <span className="text-gray-600">Select All</span>
        </div>

        <Button variant="ghost" onClick={onClearAll} className="text-gray-600 hover:text-red-500 p-0">
          Clear All
        </Button>
      </div>
    </div>
  )
}
