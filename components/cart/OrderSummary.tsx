"use client"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { applyCoupon, removeCoupon, selectCartShippingFee, selectCartSubtotal, selectCartTotalPrice, selectCouponCode, selectCouponDiscount } from "@/redux/features/cart/cartSlice"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { Badge, Tag, X } from "lucide-react"
import { useState } from "react"

interface OrderSummaryProps {
  totalItems: number
  agreeToTerms: boolean
  onToggleTerms: () => void
  onProceedToCheckout: () => void
}

export function OrderSummary({
  totalItems, agreeToTerms, onToggleTerms, onProceedToCheckout
}: Readonly<OrderSummaryProps>) {

  const dispatch = useAppDispatch()
  const [couponInput, setCouponInput] = useState<string>("")
  const [couponError, setCouponError] = useState<string>("")

  const subtotal = useAppSelector(selectCartSubtotal)
  const totalPrice = useAppSelector(selectCartTotalPrice)
  const couponCode = useAppSelector(selectCouponCode)
  const shippingFee = useAppSelector(selectCartShippingFee)
  const couponDiscount = useAppSelector(selectCouponDiscount)



  const validCoupons = ["SAVE10", "SAVE20", "FLAT50", "WELCOME"]

  const handleApplyCoupon = () => {
    if (!couponInput.trim()) {
      setCouponError("Please enter a coupon code")
      return
    }


    const upperCoupon = couponInput.toUpperCase()

    if (validCoupons.includes(upperCoupon)) {
      dispatch(applyCoupon(couponInput))
      setCouponInput("")
      setCouponError("")
    } else {
      setCouponError("Invalid coupon code")
    }
  }

  const handleRemoveCoupon = () => {
    dispatch(removeCoupon())
    setCouponError("")
  }
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 h-fit">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Order summary</h2>

      <div className="space-y-4 mb-6">
        <div className="border-t border-gray-200 pt-4 mb-6">
          <div className="flex justify-between text-xl font-bold">
            <span>Price ({totalItems} items)</span>
            <span className="text-emerald-600">৳{subtotal.toFixed(2)}</span>
          </div>
        </div>
        {couponDiscount > 0 && (
          <div className="flex justify-between text-green-600">
            <div className="flex items-center space-x-2">
              <span>Coupon Discount</span>
              <Badge className="text-xs">
                {couponCode}
              </Badge>
            </div>
            <span>-৳{couponDiscount.toFixed(2)}</span>
          </div>
        )}
        <div className="flex justify-between">
          <span className="text-gray-600">Shipping Fee</span>
          {shippingFee === 0 ? (
            <span className="text-green-600 font-medium">FREE</span>
          ) : (
            <span className="font-medium">৳{shippingFee.toFixed(2)}</span>
          )}
        </div>
      </div>

      <div className="mb-6">
        <div className="mb-6 pb-4 border-b border-dashed border-[#CBD5E1]">
          {couponCode ? (
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-200">
              <div className="flex items-center space-x-2">
                <Tag className="h-4 w-4 text-green-600" />
                <span className="text-sm font-medium text-green-800">Coupon {`"${couponCode}"`} applied</span>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleRemoveCoupon}
                className="h-6 w-6 p-0 text-green-600 hover:text-green-800"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          ) : (
            <div className="space-y-2">
              <div className="flex space-x-2">
                <Input
                  placeholder="Enter coupon code"
                  value={couponInput}
                  onChange={(e) => {
                    setCouponInput(e.target.value)
                    setCouponError("")
                  }}
                  className="flex-1"
                />
                <Button
                  onClick={handleApplyCoupon}
                  className="bg-emerald-500 hover:bg-emerald-600 px-6"
                  disabled={!couponInput.trim()}
                >
                  Apply
                </Button>
              </div>
              {couponError && <p className="text-sm text-red-600">{couponError}</p>}
              <div className="text-xs text-gray-500">
                Try:{" "}
                {validCoupons?.map((t, i) => (
                  <span key={i} className="mr-1">
                    {t}
                  </span>
                ))}
              </div>

            </div>
          )}
        </div>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-600">Subtotal</span>
        <span className="font-medium">৳{totalPrice.toFixed(2)}</span>
      </div>

      <Button
        className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-3 text-lg font-medium mb-4"
        onClick={onProceedToCheckout}
        disabled={!agreeToTerms || totalItems === 0}
      >
        Proceed to Checkout
      </Button>

      {/* Terms Checkbox */}
      <div className="flex items-start space-x-2">
        <Checkbox id="terms" checked={agreeToTerms} onCheckedChange={onToggleTerms} className="mt-0.5" />
        <label htmlFor="terms" className="text-sm text-gray-600 leading-relaxed">
          I have read and agree to the Terms and Conditions, Privacy Policy and Refund and Return Policy
        </label>
      </div>
    </div>
  )
}
