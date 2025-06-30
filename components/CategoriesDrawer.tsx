"use client"

import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import type { Category, Subcategory } from "@/types/product"
import { ArrowLeft, ChevronRight, Menu } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

interface CategoriesDrawerProps {
  categories: Category[]
}

export default function CategoriesDrawer({ categories }: Readonly<CategoriesDrawerProps>) {
  const [isOpen, setIsOpen] = useState(false)
  const [currentLevel, setCurrentLevel] = useState<"main" | "subcategory" | "subchild">("main")
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null)
  const [selectedSubcategory, setSelectedSubcategory] = useState<Subcategory | null>(null)

  const handleCategoryClick = (category: Category) => {
    if (category.subcategories.length > 0) {
      setSelectedCategory(category)
      setCurrentLevel("subcategory")
    } else {
      console.log("Navigate to category:", category.slug)
      setIsOpen(false)
    }
  }

  const handleSubcategoryClick = (subcategory: Subcategory) => {
    if (subcategory.subchilds.length > 0) {
      setSelectedSubcategory(subcategory)
      setCurrentLevel("subchild")
    } else {
      console.log("Navigate to subcategory:", subcategory.slug)
      setIsOpen(false)
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubchildClick = (subchild: any) => {
    // Navigate to subchild page
    console.log("Navigate to subchild:", subchild.slug)
    setIsOpen(false)
  }

  const handleBack = () => {
    if (currentLevel === "subchild") {
      setCurrentLevel("subcategory")
      setSelectedSubcategory(null)
    } else if (currentLevel === "subcategory") {
      setCurrentLevel("main")
      setSelectedCategory(null)
    }
  }

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open)
    if (!open) {
      setCurrentLevel("main")
      setSelectedCategory(null)
      setSelectedSubcategory(null)
    }
  }

  const renderMainCategories = () => (
    <div className="space-y-1">
      {categories.map((category) => (
        <Button
          key={category.id}
          variant="ghost"
          className="w-full justify-between h-auto p-3 text-left hover:bg-gray-100 border-0"
          onClick={() => handleCategoryClick(category)}
        >
          <div className="flex items-center space-x-3">
            {category.image && (
              <Image
                src={category.image || "/placeholder.svg"}
                alt={category.name}
                height={6}
                width={50}
                className="w-6 h-6 rounded object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = "none"
                }}
              />
            )}
            <span className="text-sm font-medium">{category.name}</span>
          </div>
          {category.subcategories.length > 0 && <ChevronRight className="h-4 w-4 text-gray-400" />}
        </Button>
      ))}
    </div>
  )

  const renderSubcategories = () => (
    <div className="space-y-1">
      <Button
        variant="ghost"
        className="w-full justify-start h-auto p-3 text-left border-0 hover:bg-gray-100"
        onClick={handleBack}
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        <span className="text-sm font-medium">{selectedCategory?.name}</span>
      </Button>
      {selectedCategory?.subcategories.map((subcategory) => (
        <Button
          key={subcategory.id}
          variant="ghost"
          className="w-full justify-between h-auto p-3 text-left hover:bg-gray-100"
          onClick={() => handleSubcategoryClick(subcategory)}
        >
          <div className="flex items-center space-x-3">
            {subcategory.image && (
              <Image
                src={subcategory.image || "/placeholder.svg"}
                alt={subcategory.name}
                className="w-6 h-6 rounded object-cover"
                height={6}
                width={50}
                onError={(e) => {
                  e.currentTarget.style.display = "none"
                }}
              />
            )}
            <span className="text-sm">{subcategory.name}</span>
          </div>
          {subcategory.subchilds.length > 0 && <ChevronRight className="h-4 w-4 text-gray-400" />}
        </Button>
      ))}
    </div>
  )

  const renderSubchilds = () => (
    <div className="space-y-1">
      <Button
        variant="ghost"
        className="w-full justify-start h-auto p-3 text-left border-0 hover:bg-gray-100"
        onClick={handleBack}
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        <span className="text-sm font-medium">{selectedSubcategory?.name}</span>
      </Button>
      {selectedSubcategory?.subchilds.map((subchild) => (
        <Button
          key={subchild.id}
          variant="ghost"
          className="w-full justify-start h-auto p-3 text-left hover:bg-gray-100"
          onClick={() => handleSubchildClick(subchild)}
        >
          <div className="flex items-center space-x-3">
            {subchild.image && (
              <Image
                src={subchild.image || "/placeholder.svg"}
                alt={subchild.name}
                className="w-6 h-6 rounded object-cover"
                  height={6}
                width={50}
                onError={(e) => {
                  e.currentTarget.style.display = "none"
                }}
              />
            )}
            <span className="text-sm">{subchild.name}</span>
          </div>
        </Button>
      ))}
    </div>
  )

  return (
    <Sheet open={isOpen} onOpenChange={handleOpenChange}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="text-emerald-600 hover:text-emerald-700 font-medium whitespace-nowrap hover:bg-emerald-50"
          onClick={() => setIsOpen(true)}
        >
          <Menu className="h-4 w-4 mr-2" />
          Categories
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-80 p-0 border-r border-gray-50">
        <SheetHeader className="p-4 border-b border-gray-100 shadow-sm bg-white">
          <SheetTitle className="text-left text-lg font-semibold">
            {currentLevel === "main" && "Categories"}
            {currentLevel === "subcategory" && selectedCategory?.name}
            {currentLevel === "subchild" && selectedSubcategory?.name}
          </SheetTitle>
        </SheetHeader>
        <ScrollArea className="h-[calc(100vh-60px)] bg-white">
          <div className="p-4">
            {currentLevel === "main" && renderMainCategories()}
            {currentLevel === "subcategory" && renderSubcategories()}
            {currentLevel === "subchild" && renderSubchilds()}
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  )
}
