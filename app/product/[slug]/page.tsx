/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"


import { getSingleProduct } from "@/api/product"
import Breadcrumb from "@/components/Breadcrumb"
import DeliveryInfo from "@/components/product/DeliveryInfo"
import ProductDescription from "@/components/product/ProductDescription"
import ProductGallery from "@/components/product/ProductGallery"
import ProductInfo from "@/components/product/ProductInfo"
import ProductSpecification from "@/components/product/Specification"
import { useProduct } from "@/hooks/useProduct"
import { addToCart } from "@/redux/features/cart/cartSlice"
import { useAppDispatch } from "@/redux/hooks"
import { useQuery } from "@tanstack/react-query"
import { useParams } from "next/navigation"

const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Tops", href: "/tops" },
    { label: "T-Shirts", href: "/t-shirts" },
]

export default function ProductPage() {
    const params = useParams();
    const dispatch = useAppDispatch();

    const { data: getProductData, isLoading: productLoading } = useQuery({
        queryKey: ["product-data", params?.slug],
        queryFn: () => getSingleProduct(params?.slug as string),
    });

    const handleAddToCart = (product: any) => {
        const cartItem = {
            id: product.id,
            name: product.name,
            price: product?.product_detail.discount_price,
            originalPrice: product?.product_detail?.regular_price,
            image: product.thumbnail,
            color: "Default",
            size: "Default",
            quantity: 1,
        }

        dispatch(addToCart(cartItem))
        alert(`${product.name} added to cart!`)
    }

    const {
        selectedImageIndex,
        selectedColor,
        selectedSize,
        quantity,
        handleImageSelect,
        handleColorSelect,
        handleSizeSelect,
        handleQuantityChange,
    } = useProduct(getProductData?.data)

    if (productLoading) {
        return <p>
            Loading
        </p>
    }

    return (
        <main className="min-h-screen flex flex-col flex-1">
            <div className="container mx-auto">
                <Breadcrumb items={breadcrumbItems} />
            </div>
            <div className="px-4 sm:px-6 lg:px-8 py-8 bg-white">

                <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-1">
                        <ProductGallery
                            images={getProductData?.data?.image}
                            thumbnail={getProductData?.data?.thumbnail}
                            productName={getProductData?.data?.name}
                            selectedIndex={selectedImageIndex}
                            onImageSelect={handleImageSelect}
                        />
                    </div>

                    <div className="lg:col-span-1">
                        <ProductInfo
                            productDetails={getProductData?.data}
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
                        <DeliveryInfo seller={getProductData?.data?.merchant} />
                    </div>
                </div>
            </div>
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
                <section className="lg:col-span-2">
                    <ProductDescription description={getProductData?.data?.description} />
                </section>
                <section className="lg:col-span-2">
                    <ProductSpecification specification={getProductData?.data?.brand} />
                </section>
                <div className="lg:col-span-1"></div>
            </div>
        </main>
    )
}
