"use client"
import { cn } from "@/lib/utils"
import Image from "next/image"

interface ProductGalleryProps {
  images: string[]
  productName: string
  selectedIndex: number
  onImageSelect: (index: number) => void
}

export default function ProductGallery({ images, productName, selectedIndex, onImageSelect }: Readonly<ProductGalleryProps>) {
  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
        <Image
          src={images[selectedIndex] || "/placeholder.svg?height=500&width=500"}
          alt={productName}
          width={500}
          height={500}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Thumbnail Images */}
      <div className="flex space-x-2 overflow-x-auto">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => onImageSelect(index)}
            className={cn(
              "flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors",
              selectedIndex === index ? "border-emerald-500" : "border-gray-200 hover:border-gray-300",
            )}
          >
            <Image
              src={image || "/placeholder.svg?height=80&width=80"}
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
