/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { getCategories } from "@/api/product"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { selectCartTotalItems } from "@/redux/features/cart/cartSlice"
import { useAppSelector } from "@/redux/hooks"
import { useQuery } from "@tanstack/react-query"
import { HelpCircle, Menu, Package, Search, ShoppingCart, Store, User } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import CategoriesDrawer from "./CategoriesDrawer"
import { Logo } from "./icons"
import HeaderSkeleton from "./skeletons/HeaderSkeleton"

const utilityLinks = [
  { icon: Package, label: "TRACK ORDER" },
  { icon: HelpCircle, label: "HELP CENTER" },
  { icon: Store, label: "SELL WITH US" },
]

export default function Header() {
    const { data: getCategoriesData, isLoading: CTGLoading } = useQuery({
    queryKey: ["category-data"],
    queryFn: getCategories,
  });

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const totalItems = useAppSelector(selectCartTotalItems)

  if(CTGLoading) {
    return <HeaderSkeleton />
  }


  return (
    <header className="w-full sticky top-0 z-50">
      {/* Main Header */}
      <div className="bg-[#0F172A] text-white">
        <div className="container mx-auto">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href='/' className="flex items-center space-x-2 flex-shrink-0">
              <span className="text-slate-800 font-bold text-sm">
                <Logo />
              </span>
              <span className="text-xl lg:text-2xl font-bold">FALCON</span>
            </Link>

            {/* Search Bar - Hidden on mobile */}
            <div className="hidden md:flex flex-1 max-w-2xl mx-4 lg:mx-8">
              <div className="relative w-full">
                <Input
                  type="text"
                  placeholder="Search for anything...."
                  className="w-full h-12 pr-12 text-gray-900 bg-white border-0 rounded-l-md focus:ring-2 focus:ring-emerald-500"
                />
                <Button
                  size="sm"
                  className="absolute right-0 top-0 h-12 px-4 bg-emerald-500 hover:bg-emerald-600 rounded-l-none rounded-r-md"
                >
                  <Search className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Right Icons */}
            <div className="flex items-center space-x-2 lg:space-x-4">
              {/* Mobile Search Button */}
              <Button variant="ghost" size="sm" className="md:hidden text-white hover:bg-slate-700">
                <Search className="h-5 w-5" />
              </Button>

              {/* Cart */}
              <a href="/cart">
                <Button variant="ghost" size="sm" className="relative text-white hover:bg-slate-700">
                  <ShoppingCart className="h-5 w-5 lg:h-6 lg:w-6" />
                  {
                    totalItems > 0 && (
                      <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 bg-red-500 text-white text-xs">
                        {
                          totalItems
                        }
                      </Badge>
                    )
                  }

                </Button>
              </a>

              {/* User */}
              <Button variant="ghost" size="sm" className="text-white hover:bg-slate-700">
                <User className="h-5 w-5 lg:h-6 lg:w-6" />
              </Button>

              {/* Mobile Menu Button */}
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="sm" className="lg:hidden text-white hover:bg-slate-700">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-80">
                  <SheetHeader>
                    <SheetTitle>Menu</SheetTitle>
                  </SheetHeader>
                  <div className="mt-6 space-y-4">
                    {/* Mobile Search */}
                    <div className="relative">
                      <Input type="text" placeholder="Search for anything...." className="w-full pr-10" />
                      <Button
                        size="sm"
                        className="absolute right-0 top-0 h-full px-3 bg-emerald-500 hover:bg-emerald-600"
                      >
                        <Search className="h-4 w-4" />
                      </Button>
                    </div>

                    {/* Categories - Simple list for mobile */}
                    <div className="space-y-2">
                      <h3 className="font-semibold text-emerald-600">Categories</h3>
                      <div className="space-y-1">
                        {getCategoriesData?.data.slice(0, 8).map((category: any) => (
                          <Button
                            key={category.id}
                            variant="ghost"
                            className="w-full justify-start text-sm"
                            onClick={() => {
                              console.log("Navigate to category:", category.slug)
                              setIsMobileMenuOpen(false)
                            }}
                          >
                            {category.name}
                          </Button>
                        ))}
                      </div>
                    </div>

                    {/* Utility Links */}
                    <div className="space-y-2 pt-4 border-t">
                      {utilityLinks.map((link) => (
                        <Button key={link.label} variant="ghost" className="w-full justify-start">
                          <link.icon className="h-4 w-4 mr-1" />
                          {link.label}
                        </Button>
                      ))}
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>

      <div className="md:hidden bg-white border-b px-4 py-3">
        <div className="relative">
          <Input type="text" placeholder="Search for anything...." className="w-full pr-12" />
          <Button size="sm" className="absolute right-0 top-0 h-full px-3 bg-emerald-500 hover:bg-emerald-600">
            <Search className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="hidden lg:block bg-gray-50 border-b border-gray-50 shadow-sm">
        <div className="container mx-auto">
          <div className="flex items-center justify-between h-12 overflow-x-auto">
            {/* Categories */}
            <div className="flex items-center">
              {getCategoriesData?.data.length > 0 && <CategoriesDrawer categories={getCategoriesData?.data} />}
              {getCategoriesData?.data.slice(0, 3).map((category: any) => (
                <Button
                  key={category.id}
                  variant="ghost"
                  className="text-[#0F172A] font-medium whitespace-nowrap text-[12px]"
                >
                  {category.name}
                </Button>
              ))}
            </div>

            <div className="flex items-center">
              {utilityLinks?.map((link) => (
                <Button
                  key={link.label}
                  variant="ghost"
                  className="text-[12px]"
                >
                  <link.icon className="h-4 w-4 mr-1" />
                  <span className="text-[#475569] text-[10px] font-medium">
                    {link.label}
                  </span>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
