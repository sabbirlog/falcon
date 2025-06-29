"use client"

import Breadcrumb from "@/components/Breadcrumb"
import { CartHeader } from "@/components/cart/CartHeader"
import { CartItemComponent } from "@/components/cart/CartItem"
import { OrderSummary } from "@/components/cart/OrderSummary"
import { clearCart, removeFromCart, selectAllItems, selectCartItems, selectCartTotalItems, toggleItemSelection, updateQuantity } from "@/redux/features/cart/cartSlice"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { useState } from "react"

export default function CartPage() {
    const dispatch = useAppDispatch()
    const cartItems = useAppSelector(selectCartItems)
    const totalItems = useAppSelector(selectCartTotalItems)
    
    const [agreeToTerms, setAgreeToTerms] = useState<boolean>(false)

    const allSelected = cartItems.length > 0 && cartItems.every((item) => item.selected)

    const handleUpdateQuantity = (id: number, quantity: number) => {
        dispatch(updateQuantity({ id, quantity }))
    }

    const handleRemoveItem = (id: number) => {
        dispatch(removeFromCart(id))
    }

    const handleToggleItemSelection = (id: number) => {
        dispatch(toggleItemSelection(id))
    }

    const handleToggleSelectAll = () => {
        dispatch(selectAllItems(!allSelected))
    }

    const handleClearAll = () => {
        if (window.confirm("Are you sure you want to clear all items from your cart?")) {
            dispatch(clearCart())
        }
    }

    const handleProceedToCheckout = () => {
        if (agreeToTerms && totalItems > 0) {
            const selectedItems = cartItems.filter((item) => item.selected)
            console.log("Proceeding to checkout with:", selectedItems)
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
                            itemCount={cartItems.length}
                            selectAll={allSelected}
                            onToggleSelectAll={handleToggleSelectAll}
                            onClearAll={handleClearAll}
                        />

                        <div className="bg-white rounded-lg border border-gray-200 p-6">
                            {cartItems?.length === 0 ? (
                                <div className="text-center py-12">
                                    <p className="text-gray-500 text-lg">Your cart is empty</p>
                                </div>
                            ) : (
                                cartItems?.map((item) => (
                                    <CartItemComponent
                                        key={item.id}
                                        item={item}
                                        onQuantityChange={handleUpdateQuantity}
                                        onRemove={handleRemoveItem}
                                        onToggleSelect={handleToggleItemSelection}
                                    />
                                ))
                            )}
                        </div>
                    </div>

                    {/* Order Summary */}
                    <div className="lg:col-span-1">
                        <OrderSummary
                            totalItems={totalItems}
                            agreeToTerms={agreeToTerms}
                            onToggleTerms={() => setAgreeToTerms(!agreeToTerms)}
                            onProceedToCheckout={handleProceedToCheckout}
                        />
                    </div>
                </div>
            </div>
        </main>
    )
}
