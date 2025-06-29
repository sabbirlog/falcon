import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { ShoppingCart, Star } from "lucide-react"

const products = [
  {
    id: 1,
    name: "Wireless Bluetooth Headphones",
    price: 79.99,
    originalPrice: 99.99,
    rating: 4.5,
    reviews: 128,
    image: "/placeholder.svg?height=200&width=200",
    badge: "Best Seller",
  },
  {
    id: 2,
    name: "Smart Home Security Camera",
    price: 149.99,
    originalPrice: 199.99,
    rating: 4.8,
    reviews: 89,
    image: "/placeholder.svg?height=200&width=200",
    badge: "New",
  },
  {
    id: 3,
    name: "Portable Power Bank 20000mAh",
    price: 39.99,
    originalPrice: 59.99,
    rating: 4.3,
    reviews: 256,
    image: "/placeholder.svg?height=200&width=200",
    badge: "Sale",
  },
  {
    id: 4,
    name: "Wireless Charging Pad",
    price: 29.99,
    originalPrice: 39.99,
    rating: 4.2,
    reviews: 94,
    image: "/placeholder.svg?height=200&width=200",
    badge: "Hot",
  },
  {
    id: 5,
    name: "Smart Fitness Watch",
    price: 199.99,
    originalPrice: 249.99,
    rating: 4.6,
    reviews: 167,
    image: "/placeholder.svg?height=200&width=200",
    badge: "Featured",
  },
  {
    id: 6,
    name: "Bluetooth Speaker",
    price: 59.99,
    originalPrice: 79.99,
    rating: 4.4,
    reviews: 203,
    image: "/placeholder.svg?height=200&width=200",
    badge: "Popular",
  },
]

export default function ProductGrid() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Products</h2>
        <p className="text-gray-600">Discover our most popular items</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="group hover:shadow-lg transition-shadow">
            <CardContent className="p-4">
              <div className="relative mb-4">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <Badge className="absolute top-2 left-2 bg-emerald-500">{product.badge}</Badge>
              </div>

              <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{product.name}</h3>

              <div className="flex items-center mb-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-500 ml-2">({product.reviews})</span>
              </div>

              <div className="flex items-center space-x-2 mb-4">
                <span className="text-2xl font-bold text-gray-900">${product.price}</span>
                <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
              </div>
            </CardContent>

            <CardFooter className="p-4 pt-0">
              <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                <ShoppingCart className="h-4 w-4 mr-2" />
                Add to Cart
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
