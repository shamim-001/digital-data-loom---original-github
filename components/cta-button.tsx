import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface CTAButtonProps {
  href: string
  children: React.ReactNode
  variant?: "primary" | "secondary"
  size?: "sm" | "md" | "lg"
}

export function CTAButton({ href, children, variant = "primary", size = "md" }: CTAButtonProps) {
  const sizeClass = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  }

  return (
    <Button asChild className={sizeClass[size]}>
      <Link href={href}>{children}</Link>
    </Button>
  )
}
