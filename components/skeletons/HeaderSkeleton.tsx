'use client'

import { Skeleton } from "@/components/ui/skeleton"

export default function HeaderSkeleton() {
  return (
    <header className="w-full sticky top-0 z-50">
      {/* Main Header */}
      <div className="bg-slate-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo Skeleton */}
            <div className="flex items-center space-x-2 flex-shrink-0">
              <Skeleton className="w-8 h-8 rounded bg-slate-600" />
              <Skeleton className="h-6 w-20 bg-slate-600" />
            </div>

            {/* Search Bar Skeleton - Hidden on mobile */}
            <div className="hidden md:flex flex-1 max-w-2xl mx-4 lg:mx-8">
              <div className="relative w-full">
                <Skeleton className="w-full h-12 rounded-l-md bg-slate-600" />
                <Skeleton className="absolute right-0 top-0 h-12 w-12 rounded-r-md bg-slate-500" />
              </div>
            </div>

            {/* Right Icons Skeleton */}
            <div className="flex items-center space-x-2 lg:space-x-4">
              {/* Mobile Search Button */}
              <Skeleton className="md:hidden w-10 h-10 rounded bg-slate-600" />

              {/* Cart */}
              <div className="relative">
                <Skeleton className="w-10 h-10 rounded bg-slate-600" />
                <Skeleton className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-slate-500" />
              </div>

              {/* User */}
              <Skeleton className="w-10 h-10 rounded bg-slate-600" />

              {/* Mobile Menu Button */}
              <Skeleton className="lg:hidden w-10 h-10 rounded bg-slate-600" />
            </div>
          </div>
        </div>
      </div>

      <div className="md:hidden bg-white border-b px-4 py-3">
        <div className="relative">
          <Skeleton className="w-full h-10 rounded" />
          <Skeleton className="absolute right-0 top-0 h-10 w-10 rounded-r" />
        </div>
      </div>

      <div className="hidden lg:block bg-white border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-12">
            {/* Categories Skeleton */}
            <div className="flex items-center space-x-6">
              <Skeleton className="h-6 w-20 bg-gray-100" />
              <Skeleton className="h-6 w-24 bg-gray-100" />
              <Skeleton className="h-6 w-28 bg-gray-100" />
              <Skeleton className="h-6 w-22 bg-gray-100" />
              <Skeleton className="h-6 w-26 bg-gray-100" />
            </div>

            {/* Utility Links Skeleton */}
            <div className="flex items-center space-x-6">
              <Skeleton className="h-6 w-24 bg-gray-100" />
              <Skeleton className="h-6 w-20 bg-gray-100" />
              <Skeleton className="h-6 w-22 bg-gray-100" />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
