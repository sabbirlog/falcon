"use client"

import { use } from "react"

import Breadcrumb from "@/components/Breadcrumb"
import DeliveryInfo from "@/components/product/DeliveryInfo"
import ProductGallery from "@/components/product/ProductGallery"
import ProductInfo from "@/components/product/ProductInfo"
import { useProduct } from "@/hooks/useProduct"
import type { Product } from "@/types/product"

// Mock product data
const mockProduct: Product = {
    id: "1",
    name: "Men's Stylish & Fashionable Trendy Good Looking Long Sleeve Casual Shirt.",
    price: 1139.33,
    originalPrice: 1500,
    rating: 4.7,
    reviewCount: 2254,
    images: [
        "/placeholder.svg?height=500&width=500",
        "/placeholder.svg?height=500&width=500",
        "/placeholder.svg?height=500&width=500",
        "/placeholder.svg?height=500&width=500",
        "/placeholder.svg?height=500&width=500",
    ],
    colors: [
        { name: "Beige", value: "#F5F5DC" },
        { name: "Red", value: "#DC143C" },
        { name: "Navy Blue", value: "#000080" },
        { name: "Black", value: "#000000" },
    ],
    sizes: [
        { name: "XL", available: true },
        { name: "XS", available: true },
        { name: "S", available: true },
        { name: "M", available: false },
        { name: "L", available: true },
    ],
    description: "High-quality casual shirt perfect for everyday wear.",
    seller: {
        name: "BD FASHION HOUSE",
        verified: true,
        rating: 4.8,
        shipOnTime: 100,
        chatResponse: 90,
        shopRating: 99.8,
    },
    promotion: "Min. spend ৳550",
}

const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Tops", href: "/tops" },
    { label: "T-Shirts", href: "/t-shirts" },
]

interface ProductPageProps {
    params: Promise<{ id: string }>
}

export default function ProductPage({ params }: ProductPageProps) {
    const { id } = use(params)

    const {
        selectedImageIndex,
        selectedColor,
        selectedSize,
        quantity,
        handleImageSelect,
        handleColorSelect,
        handleSizeSelect,
        handleQuantityChange,
        handleAddToCart,
    } = useProduct(mockProduct)

    return (
        <main className="min-h-screen flex flex-col flex-1">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <Breadcrumb items={breadcrumbItems} />

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Product Gallery */}
                    <div className="lg:col-span-1">
                        <ProductGallery
                            images={mockProduct.images}
                            productName={mockProduct.name}
                            selectedIndex={selectedImageIndex}
                            onImageSelect={handleImageSelect}
                        />
                    </div>

                    {/* Product Info */}
                    <div className="lg:col-span-1">
                        <ProductInfo
                            product={mockProduct}
                            selectedColor={selectedColor}
                            selectedSize={selectedSize}
                            quantity={quantity}
                            onColorSelect={handleColorSelect}
                            onSizeSelect={handleSizeSelect}
                            onQuantityChange={handleQuantityChange}
                            onAddToCart={handleAddToCart}
                        />
                    </div>

                    {/* Delivery Info */}
                    <div className="lg:col-span-1">
                        <DeliveryInfo seller={mockProduct.seller} />
                    </div>
                </div>
            </div>
        </main>
    )
}
