'use client'

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export default function ProductCardSkeleton() {
  return (
    <Card className="group border border-gray-100 shadow-none">
      <CardContent className="p-4">
        <div className="relative mb-4">
          <Skeleton className="w-full h-48 rounded-lg" />
          <Skeleton className="absolute top-2 left-2 h-6 w-16 rounded-full" />
        </div>

        <div className="space-y-2 mb-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
        </div>

        {/* Price Skeleton */}
        <div className="flex items-center space-x-2 mb-4">
          <Skeleton className="h-6 w-20" />
          <Skeleton className="h-4 w-16" />
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        {/* Button Skeleton */}
        <Skeleton className="w-full h-10 rounded-md" />
      </CardFooter>
    </Card>
  )
}
