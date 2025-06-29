'use client'

import ProductCardSkeleton from "./ProductCardSkeleton"

interface ProductGridSkeletonProps {
  count?: number
}

export default function ProductGridSkeleton({ count = 6 }: Readonly<ProductGridSkeletonProps>) {
  return (
    <div className="container text-center mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <div className="h-8 w-64 bg-gray-200 rounded-md mx-auto mb-4 animate-pulse" />
        <div className="h-4 w-48 bg-gray-200 rounded-md mx-auto animate-pulse" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: count }, (_, index) => (
          <ProductCardSkeleton key={index} />
        ))}
      </div>
    </div>
  )
}
