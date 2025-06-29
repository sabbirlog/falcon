"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ChevronDown, ChevronUp } from "lucide-react"
import { useState } from "react"

interface SeeMoreToggleProps {
  children: React.ReactNode
  maxLines?: number
  className?: string
  buttonClassName?: string
  showMoreText?: string
  showLessText?: string
}

export default function SeeMoreToggle({
  children,
  maxLines = 3,
  className,
  buttonClassName,
  showMoreText = "See More",
  showLessText = "See Less",
}: SeeMoreToggleProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <div className={cn("space-y-4", className)}>
      <div
        className={cn(
          "text-gray-700 leading-relaxed transition-all duration-300 ease-in-out",
          !isExpanded && "overflow-hidden",
        )}
        style={{
          display: !isExpanded ? "-webkit-box" : "block",
          WebkitLineClamp: !isExpanded ? maxLines : "unset",
          WebkitBoxOrient: !isExpanded ? "vertical" : "unset",
        }}
      >
        {children}
      </div>

      <div className="flex justify-center">
        <Button
          variant="ghost"
          onClick={toggleExpanded}
          className={cn(
            "text-gray-600 hover:text-gray-900 font-medium flex items-center space-x-1 hover:bg-gray-50",
            buttonClassName,
          )}
        >
          <span>{isExpanded ? showLessText : showMoreText}</span>
          {isExpanded ? (
            <ChevronUp className="h-4 w-4 transition-transform duration-200" />
          ) : (
            <ChevronDown className="h-4 w-4 transition-transform duration-200" />
          )}
        </Button>
      </div>
    </div>
  )
}
