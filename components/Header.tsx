"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import type { Category } from "@/types/product"
import { HelpCircle, Menu, Package, Search, ShoppingCart, Store, User } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import CategoriesDrawer from "./CategoriesDrawer"
import { Logo } from "./icons"

const mockCategories: Category[] = [
  {
    id: 1,
    name: "Women's & Girls' Fashion",
    slug: "womens-girls-fashion",
    image: "http://157.230.240.97:9999/storage/media/20250628_153959_bfb3d170-2bfc-4b69-87f5-c201b7452035.png",
    subcategories: [
      {
        id: 1,
        name: "Bag",
        slug: "womens-girls-fashion-bag",
        image: "",
        subchilds: [
          { id: 1, name: "Wallets", slug: "bag-wallets-1", image: "" },
          { id: 2, name: "Bag Charms & Accessories", slug: "bag-bag-charms-accessories-1", image: "" },
          { id: 3, name: "Crossbody & Shoulder Bags", slug: "bag-crossbody-shoulder-bags-1", image: "" },
          { id: 4, name: "Tote Bags", slug: "bag-tote-bags-1", image: "" },
          { id: 5, name: "Backpacks", slug: "bag-backpacks-1", image: "" },
        ],
      },
      {
        id: 2,
        name: "Watches",
        slug: "womens-girls-fashion-watches",
        image: "",
        subchilds: [
          { id: 9, name: "Accessories", slug: "watches-accessories-2", image: "" },
          { id: 10, name: "Sports", slug: "watches-sports-2", image: "" },
          { id: 11, name: "Fashion", slug: "watches-fashion-2", image: "" },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Men's & Boys' Fashion",
    slug: "mens-boys-fashion",
    image: "http://157.230.240.97:9999/storage/media/20250628_154010_3b9aa256-ea7c-42e7-830d-a9f3d2c3721e.png",
    subcategories: [
      {
        id: 8,
        name: "Eye Wear",
        slug: "mens-boys-fashion-eye-wear",
        image: "",
        subchilds: [{ id: 40, name: "Eyeglasses", slug: "eye-wear-eyeglasses-8", image: "" }],
      },
      {
        id: 10,
        name: "Accessories",
        slug: "mens-boys-fashion-accessories",
        image: "",
        subchilds: [
          { id: 41, name: "Brooches And Cufflinks", slug: "accessories-brooches-and-cufflinks-10", image: "" },
          { id: 42, name: "Umbrellas", slug: "accessories-umbrellas-10", image: "" },
          { id: 43, name: "Ties", slug: "accessories-ties-10", image: "" },
        ],
      },
    ],
  },
  {
    id: 3,
    name: "Electronic Accessories",
    slug: "electronic-accessories",
    image: "http://157.230.240.97:9999/storage/media/20250628_154022_728712a7-2393-4a3c-a582-033ff2cf833b.png",
    subcategories: [
      {
        id: 13,
        name: "Computer Accessories",
        slug: "electronic-accessories-computer-accessories",
        image: "",
        subchilds: [
          { id: 57, name: "Keyboards", slug: "computer-accessories-keyboards-13", image: "" },
          { id: 58, name: "Mice & Keyboard Combos", slug: "computer-accessories-mice-keyboard-combos-13", image: "" },
        ],
      },
    ],
  },
  {
    id: 4,
    name: "TV & Home Appliances",
    slug: "tv-home-appliances",
    image: "http://157.230.240.97:9999/storage/media/20250628_154032_de45926b-ce2c-451b-b455-a05fcab66254.png",
    subcategories: [],
  },
  {
    id: 5,
    name: "Electronics Device",
    slug: "electronics-device",
    image: "http://157.230.240.97:9999/storage/media/20250628_154041_7908c4d9-b1fb-4768-acc0-1b0170ec84c5.png",
    subcategories: [],
  },
]

const utilityLinks = [
  { icon: Package, label: "TRACK ORDER" },
  { icon: HelpCircle, label: "HELP CENTER" },
  { icon: Store, label: "SELL WITH US" },
]

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="w-full sticky top-0 z-50">
      {/* Main Header */}
      <div className="bg-[#0F172A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 bg-red-500 text-white text-xs">
                    12
                  </Badge>
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
                        {mockCategories.slice(0, 8).map((category) => (
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
                          <link.icon className="h-4 w-4 mr-2" />
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

      <div className="hidden lg:block bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-12 overflow-x-auto">
            {/* Categories */}
            <div className="flex items-center">
              {mockCategories.length > 0 && <CategoriesDrawer categories={mockCategories} />}
              {mockCategories.slice(0, 5).map((category) => (
                <Button
                  key={category.id}
                  variant="ghost"
                  className="text-[#0F172A] font-medium whitespace-nowrap text-[14px]"
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
                  className="text-sm"
                >
                  <link.icon className="h-4 w-4 mr-1" />
                  <span className="text-[#475569] !text-sm font-medium">
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
