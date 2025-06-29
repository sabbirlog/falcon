"use client"

import Breadcrumb from "@/components/Breadcrumb"
import { CartHeader } from "@/components/cart/CartHeader"
import { CartItemComponent } from "@/components/cart/CartItem"
import { OrderSummary } from "@/components/cart/OrderSummary"
import { useCart } from "@/hooks/useCart"

export default function CartPage() {
    const {
        cartState,
        updateQuantity,
        removeItem,
        toggleItemSelection,
        toggleSelectAll,
        clearAll,
        updateCouponCode,
        toggleAgreeToTerms,
        totalPrice,
        totalItems,
    } = useCart()

    const handleProceedToCheckout = () => {
        if (cartState.agreeToTerms && totalItems > 0) {
            // Handle checkout logic here
            console.log("Proceeding to checkout with:", {
                selectedItems: cartState.items.filter((item) => item.selected),
                totalPrice,
                couponCode: cartState.couponCode,
            })
            alert("Proceeding to checkout!")
        }
    }

    const breadcrumbItems = [{ label: "Home", href: "/" }, { label: "My Cart", href: '/' }]

    return (
        <main className="min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <Breadcrumb items={breadcrumbItems} />

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Cart Items */}
                    <div className="lg:col-span-2">
                        <CartHeader
                            itemCount={cartState.items.length}
                            selectAll={cartState.selectAll}
                            onToggleSelectAll={toggleSelectAll}
                            onClearAll={clearAll}
                        />

                        <div className="bg-white rounded-lg border border-gray-200 p-6">
                            {cartState.items.length === 0 ? (
                                <div className="text-center py-12">
                                    <p className="text-gray-500 text-lg">Your cart is empty</p>
                                </div>
                            ) : (
                                cartState.items.map((item) => (
                                    <CartItemComponent
                                        key={item.id}
                                        item={item}
                                        onQuantityChange={updateQuantity}
                                        onRemove={removeItem}
                                        onToggleSelect={toggleItemSelection}
                                    />
                                ))
                            )}
                        </div>
                    </div>

                    {/* Order Summary */}
                    <div className="lg:col-span-1">
                        <OrderSummary
                            totalItems={totalItems}
                            totalPrice={totalPrice}
                            couponCode={cartState.couponCode}
                            agreeToTerms={cartState.agreeToTerms}
                            onCouponChange={updateCouponCode}
                            onToggleTerms={toggleAgreeToTerms}
                            onProceedToCheckout={handleProceedToCheckout}
                        />
                    </div>
                </div>
            </div>
        </main> 
    )
}
