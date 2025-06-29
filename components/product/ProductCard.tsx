'use client'

import { Product } from "@/types/product"
import { ShoppingCart, Star } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Badge } from "../ui/badge"
import { Button } from "../ui/button"
import { Card, CardContent, CardFooter } from "../ui/card"

export default function ProductCard ({
    product
}: Readonly<{
    product: Product
}>) {

    const router = useRouter();

    return (
        <Card key={product.id} className="group shadow-none border border-gray-100">
            <CardContent className="p-4">
                <div className="relative mb-4">
                    <Image
                        src={product.thumbnail || "/placeholder.svg"}
                        alt={product.name}
                        height={48}
                        width={100}
                        className="w-full h-48 object-cover rounded-lg"
                    />
                    {
                        product?.badges?.map((b) =>
                            <Badge key={b?.id} className="absolute top-2 left-2 text-white bg-emerald-500">{b?.name}</Badge>
                        )
                    }
                </div>
    
                <h3 className="font-semibold text-gray-900 hover:text-emerald-500 cursor-pointer mb-2 line-clamp-2" onClick={() => router.push(`/product/${product.slug}`)}>{product.name}</h3>
    
                <div className="flex items-center mb-2">
                    <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                            <Star
                                key={i}
                                className={`h-4 w-4 ${i < Math.floor(product.rating_count) ? "text-yellow-400 fill-current" : "text-gray-300"
                                    }`}
                            />
                        ))}
                    </div>
                    <span className="text-sm text-gray-500 ml-2">({product.rating_avg})</span>
                </div>
    
                <div className="flex items-center space-x-2 mb-4">
                    <span className="text-2xl font-bold text-gray-900">৳{product.discount_price}</span>
                    <span className="text-sm text-gray-500 line-through">৳{product.regular_price}</span>
                </div>
            </CardContent>
    
            <CardFooter className="p-4 pt-0">
                <Button className="w-full text-white cursor-pointer bg-emerald-600 hover:bg-emerald-700">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add to Cart
                </Button>
            </CardFooter>
        </Card>
    )
}