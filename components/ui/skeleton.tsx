import { cn } from "@/lib/utils"
import type React from "react"

function Skeleton({ className, ...props }: Readonly<React.HTMLAttributes<HTMLDivElement>>) {
  return <div className={cn("animate-pulse rounded-md bg-gray-100", className)} {...props} />
}

export { Skeleton }
