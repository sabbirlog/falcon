"use client"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"

interface OrderSummaryProps {
  totalItems: number
  totalPrice: number
  couponCode: string
  agreeToTerms: boolean
  onCouponChange: (code: string) => void
  onToggleTerms: () => void
  onProceedToCheckout: () => void
}

export function OrderSummary({
  totalItems,
  totalPrice,
  couponCode,
  agreeToTerms,
  onCouponChange,
  onToggleTerms,
  onProceedToCheckout,
}: Readonly<OrderSummaryProps>) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 h-fit">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Order summary</h2>

      <div className="space-y-4 mb-6">
        <div className="flex justify-between">
          <span className="text-gray-600">Price ({totalItems} items)</span>
          <span className="font-medium">৳{totalPrice}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-600">Shipping fee</span>
          <span className="text-blue-500 text-sm">To be added</span>
        </div>
      </div>

      <div className="mb-6">
        <div className="flex space-x-2">
          <Input
            placeholder="Store / Falcon coupon"
            value={couponCode}
            onChange={(e) => onCouponChange(e.target.value)}
            className="flex-1"
          />
          <Button className="bg-emerald-500 hover:bg-emerald-600 px-6">Apply</Button>
        </div>
      </div>

      <div className="border-t border-gray-200 pt-4 mb-6">
        <div className="flex justify-between text-lg font-semibold">
          <span>Sub Total</span>
          <span>৳{totalPrice}</span>
        </div>
      </div>

      <Button
        className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-3 text-lg font-medium mb-4"
        onClick={onProceedToCheckout}
        disabled={!agreeToTerms || totalItems === 0}
      >
        Proceed to Checkout
      </Button>

      <div className="flex items-start space-x-2">
        <Checkbox id="terms" checked={agreeToTerms} onCheckedChange={onToggleTerms} className="mt-0.5" />
        <label htmlFor="terms" className="text-sm text-gray-600 leading-relaxed">
          I have read and agree to the Terms and Conditions, Privacy Policy and Refund and Return Policy
        </label>
      </div>
    </div>
  )
}
