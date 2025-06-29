"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import type { Seller } from "@/types/product"
import { Clock, Package } from "lucide-react"
import { Chat, Verified } from "../icons"

interface DeliveryInfoProps {
  seller: Seller
}

export default function DeliveryInfo({ seller }: Readonly<DeliveryInfoProps>) {
  return (
    <Card className="border-none shadow-none">
      <CardContent className="space-y-6">
        <div className="space-y-3 border border-[#E2E8F0] rounded-[12px] px-[16px] py-[12px]">
          <h2 className="text-[18px] font-medium text-[#475569] mb-[12px]">Delivery Options</h2>
          <div className="flex items-center space-x-3">
            <Package className="h-5 w-5 text-emerald-500" />
            <div className="ml-[8px]">
              <span className="font-medium text-base text-[#334155] mb-[4px]">Regular</span>
              <p className="text-sm font-normal text-[#475569]">Delivery within 2-3 days</p>
            </div>
          </div>
          <div className="flex items-center space-x-3 opacity-50">
            <Clock className="h-5 w-5 text-gray-400" />
            <div className="ml-[8px]">
              <div className="flex">
                <p className="text-[18px] font-medium text-[#CBD5E1]">Express</p>
                <span className="text-[10px] text-red-500 ml-[12px]">Not Available</span>
              </div>
              <p className="text-sm font-normal text-[#CBD5E1]">Delivery within 24 Hours</p>
            </div>
          </div>
        </div>

        {/* Seller Information */}
        <div className="border border-[#E2E8F0] rounded-[12px] px-[16px] py-[12px]">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-medium text-gray-700">Sold by</span>
          </div>

          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">P&G</span>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2">
                <span className="font-medium text-gray-900">{seller?.shop_name}</span>
                {seller?.verified && <Verified />}
              </div>
              <Badge className="bg-orange-500 text-white text-xs">Rising Star</Badge>
            </div>
          </div>

          <div className="flex space-x-2 mb-4">
            <Button variant="ghost" size="sm" className="flex-1 bg-[#E6F8F4]">
              <Chat />
              <span className="text-[#00A788] text-[14px] font-medium ml-[8px]">
                Chat Now
              </span>
            </Button>
            <Button variant="ghost" size="sm" className="flex-1 bg-[#F1F5F9] text-[14px] font-medium ">
              View Shop
            </Button>
          </div>

          {/* Seller Metrics */}
          <div className="grid grid-cols-3 gap-4 text-center pt-[16px] border-t border-t-[#E2E8F0]">
            <div>
              <div className="text-[12px] text-[#475569]">Ship on Time</div>
              <div className="text-[28px] font-normal text-[#64748B]">{seller?.shipOnTime ?? 100}%</div>
            </div>
            <div>
              <div className="text-[12px] text-[#475569]">Chat Response</div>
              <div className="text-[28px] font-normal text-[#64748B]">{seller?.chatResponse ?? 90}%</div>
            </div>
            <div>
              <div className="text-[12px] text-[#475569]">Shop Rating</div>
              <div className="text-[28px] font-normal text-[#64748B]">{seller?.shopRating ?? 99.8}%</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
