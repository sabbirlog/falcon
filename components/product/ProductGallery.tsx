/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { cn } from "@/lib/utils"
import Image from "next/image"

interface ProductGalleryProps {
  images: any,
  thumbnail?: string
  productName: string
  selectedIndex: number
  onImageSelect: (index: number) => void
}

export default function ProductGallery({ images, productName, thumbnail, selectedIndex, onImageSelect }: Readonly<ProductGalleryProps>) {

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
        <Image
          src={thumbnail ?? "/placeholder.svg?height=500&width=500"}
          alt={productName}
          width={500}
          height={500}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Thumbnail Images */}
      <div className="flex space-x-2 overflow-x-auto">
        {images && typeof images === 'object' ? Object?.values(images)?.map((image: any, index: number) => (
          <button
            key={index}
            onClick={() => onImageSelect(index)}
            className={cn(
              "flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors",
              selectedIndex === index ? "border-emerald-500" : "border-gray-200 hover:border-gray-300",
            )}
          >
            <Image
              src={image?.url || "/placeholder.svg?height=80&width=80"}
              alt={`${productName} view ${index + 1}`}
              width={80}
              height={80}
              className="w-full h-full object-cover"
            />
          </button>
        )) : images?.map((image: any, index: number) => (
          <button
            key={index}
            onClick={() => onImageSelect(index)}
            className={cn(
              "flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors",
              selectedIndex === index ? "border-emerald-500" : "border-gray-200 hover:border-gray-300",
            )}
          >
            <Image
              src={image?.url || "/placeholder.svg?height=80&width=80"}
              alt={`${productName} view ${index + 1}`}
              width={80}
              height={80}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  )
}
