import Link from "next/link"
import { Linkedin, Twitter, Youtube } from "lucide-react"
import Image from "next/image"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Image
                src="/images/digital-20data-20loom.png"
                alt="DigitalDataLoom Logo"
                width={32}
                height={32}
                className="h-8 w-8 object-contain"
              />
              <h3 className="font-bold text-lg">DigitalDataLoom</h3>
            </div>
            <p className="text-sm text-muted-foreground">Digital marketing & conversion tracking done right.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-foreground transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-muted-foreground hover:text-foreground transition">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Contact</h4>
            <a
              href="mailto:digitaldataloom@gmail.com"
              className="block text-sm text-muted-foreground hover:text-foreground transition mb-2"
            >
              digitaldataloom@gmail.com
            </a>
            <a
              href="https://wa.me/8801749181410"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-sm text-muted-foreground hover:text-foreground transition"
            >
              WhatsApp
            </a>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Follow</h4>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/theshamimahsan/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-muted-foreground hover:text-primary transition"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://x.com/theshamimahsan"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="text-muted-foreground hover:text-primary transition"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://www.youtube.com/@digitaldataloom"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="DigitalDataLoom YouTube channel"
                className="text-muted-foreground hover:text-primary transition"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-border pt-8">
          <p className="text-sm text-center text-muted-foreground">
            © {currentYear} DigitalDataLoom. All rights reserved. | Conversion Tracking & GTM Expert
          </p>
        </div>
      </div>
    </footer>
  )
}
