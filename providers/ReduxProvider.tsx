"use client"

import type React from "react"

import { initializeCart } from "@/redux/features/cart/cartSlice"
import { store } from "@/redux/store"
import { useEffect, useRef } from "react"
import { Provider } from "react-redux"

export default function ReduxProvider({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const initialized = useRef(false)

  useEffect(() => {
    if (!initialized.current) {
      store.dispatch(initializeCart())
      initialized.current = true
    }
  }, [])

  return <Provider store={store}>{children}</Provider>
}
