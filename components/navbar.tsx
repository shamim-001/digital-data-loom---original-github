"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <Image
              src="/images/digital-20data-20loom.png"
              alt="DigitalDataLoom Logo"
              width={40}
              height={40}
              className="h-8 w-8 object-contain"
            />
            <span className="hidden sm:inline">DigitalDataLoom</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-foreground hover:text-primary transition">
              Home
            </Link>
            <Link href="/case-studies" className="text-foreground hover:text-primary transition">
              Case Studies
            </Link>
            <Link href="/contact" className="text-foreground hover:text-primary transition">
              Contact
            </Link>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex gap-3">
            <Button asChild variant="outline">
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border py-4 space-y-3">
            <Link href="/" className="block text-foreground hover:text-primary py-2">
              Home
            </Link>
            <Link href="/case-studies" className="block text-foreground hover:text-primary py-2">
              Case Studies
            </Link>
            <Link href="/contact" className="block text-foreground hover:text-primary py-2">
              Contact
            </Link>
            <Button asChild className="w-full">
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>
        )}
      </nav>
    </header>
  )
}
