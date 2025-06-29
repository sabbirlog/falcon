"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { Seller } from "@/types/product"
import { CheckCircle, Clock, MessageCircle, Package } from "lucide-react"

interface DeliveryInfoProps {
  seller: Seller
}

export default function DeliveryInfo({ seller }: Readonly<DeliveryInfoProps>) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-gray-900">Delivery Options</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Delivery Options */}
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <Package className="h-5 w-5 text-emerald-500" />
            <div>
              <span className="font-medium text-gray-900">Regular</span>
              <p className="text-sm text-gray-600">Delivery within 2-3 days</p>
            </div>
          </div>
          <div className="flex items-center space-x-3 opacity-50">
            <Clock className="h-5 w-5 text-gray-400" />
            <div>
              <span className="font-medium text-gray-400">Express</span>
              <p className="text-sm text-red-500">Not Available</p>
              <p className="text-sm text-gray-400">Delivery within 24 Hours</p>
            </div>
          </div>
        </div>

        {/* Seller Information */}
        <div className="border-t pt-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-medium text-gray-700">Sold by</span>
          </div>

          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">P&G</span>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2">
                <span className="font-medium text-gray-900">{seller.name}</span>
                {seller.verified && <CheckCircle className="h-4 w-4 text-blue-500" />}
              </div>
              <Badge className="bg-orange-500 text-white text-xs">Rising Star</Badge>
            </div>
          </div>

          <div className="flex space-x-2 mb-4">
            <Button variant="outline" size="sm" className="flex-1 bg-transparent">
              <MessageCircle className="h-4 w-4 mr-1 text-emerald-500" />
              Chat Now
            </Button>
            <Button variant="outline" size="sm" className="flex-1 bg-transparent">
              View Shop
            </Button>
          </div>

          {/* Seller Metrics */}
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-sm text-gray-600">Ship on Time</div>
              <div className="text-lg font-bold text-gray-900">{seller.shipOnTime}%</div>
            </div>
            <div>
              <div className="text-sm text-gray-600">Chat Response</div>
              <div className="text-lg font-bold text-gray-900">{seller.chatResponse}%</div>
            </div>
            <div>
              <div className="text-sm text-gray-600">Shop Rating</div>
              <div className="text-lg font-bold text-gray-900">{seller.shopRating}%</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
