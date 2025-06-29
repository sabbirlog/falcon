'use client'

import { Button } from "@/components/ui/button"
import { ArrowRight, Headphones, Shield, Truck } from "lucide-react"

export default function HeroSection() {
  return (
    <div className="bg-gradient-to-r from-slate-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
            Welcome to <span className="text-emerald-600">Falcon</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover amazing products at unbeatable prices. From electronics to home essentials, we&apos;ve got everything
            you need with fast, reliable delivery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-white bg-emerald-600 hover:bg-emerald-700">
              Shop Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline">
              Browse Categories
            </Button>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto">
              <Truck className="h-8 w-8 text-emerald-600" />
            </div>
            <h3 className="text-xl font-semibold">Free Shipping</h3>
            <p className="text-gray-600">Free delivery on orders over $50</p>
          </div>
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto">
              <Shield className="h-8 w-8 text-emerald-600" />
            </div>
            <h3 className="text-xl font-semibold">Secure Payment</h3>
            <p className="text-gray-600">100% secure payment processing</p>
          </div>
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto">
              <Headphones className="h-8 w-8 text-emerald-600" />
            </div>
            <h3 className="text-xl font-semibold">24/7 Support</h3>
            <p className="text-gray-600">Round-the-clock customer service</p>
          </div>
        </div>
      </div>
    </div>
  )
}
