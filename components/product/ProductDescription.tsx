"use client"

import SeeMoreToggle from "@/components/ui/see-more-toogle"
import clsx from "clsx"

interface ProductDescriptionProps {
  title?: string
  description: string
  className?: string
}

export default function ProductDescription({ title = "Description", description, className }: Readonly<ProductDescriptionProps>) {
  return (
    <div className={clsx(`bg-white py-[22px] px-[27px] rounded-[4px] mt-[15px] ${className}`)}>
      <h2 className="text-[24px] font-medium text-[#252B42] mb-[16px]">{title}</h2>

      <SeeMoreToggle maxLines={4} className="text-base">
        <div className="space-y-4">
          {description.split("\n\n").map((paragraph, index) => (
            <p key={index} className="text-gray-700 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </SeeMoreToggle>
    </div>
  )
}
