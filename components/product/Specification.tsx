"use client"

import SeeMoreToggle from "@/components/ui/see-more-toogle"
import { Brand } from "@/types/product"
import clsx from "clsx"

interface ProductSpecificationProps {
    title?: string
    specification: Brand
    className?: string
}

export default function ProductSpecification({ title = "Specifications", specification, className }: Readonly<ProductSpecificationProps>) {
    return (
        <div className={clsx(`bg-white py-[22px] px-[27px] rounded-[4px] mb-6 ${className}`)}>
            <h2 className="text-[24px] font-medium text-[#252B42] mb-[16px]">{title}</h2>

            <SeeMoreToggle maxLines={4} className="text-base">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                        <div className="flex justify-between py-2">
                            <span className="text-gray-600">Brand</span>
                            <span className="font-medium">{specification?.name}</span>
                        </div>
                    </div>
                </div>
            </SeeMoreToggle>
        </div>
    )
}
