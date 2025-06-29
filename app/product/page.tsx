"use client"

import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function ProductRedirect() {
  const router = useRouter()

  useEffect(() => {
    router.push("/product/1")
  }, [router])

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-xl font-semibold mb-2">Redirecting...</h2>
        <p className="text-gray-600">Taking you to the product page</p>
      </div>
    </div>
  )
}
