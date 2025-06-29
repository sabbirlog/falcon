'use client'

import { getProducts } from "@/api/product"
import { Product } from "@/types/product"
import { useQuery } from "@tanstack/react-query"
import ProductCard from "./product/ProductCard"
import ProductGridSkeleton from "./skeletons/ProductGridSkeletons"

export default function ProductGrid() {

  const { data: getProductsData, isLoading: productLoading } = useQuery({
    queryKey: ["products-data"],
    queryFn: getProducts,
  });

  if(productLoading) {
    return <ProductGridSkeleton count={8}/>
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Products</h2>
        <p className="text-gray-600">Discover our most popular items</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {
            getProductsData?.data?.map((product: Product) => (
              <ProductCard key={product?.id} product={product} />
            ))
        }
      </div>
    </div>
  )
}
