import { Linkedin, Twitter, Youtube } from "lucide-react"

export function SocialLinks() {
  return (
    <div className="flex gap-4 items-center">
      <a
        href="https://www.linkedin.com/in/theshamimahsan/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="p-2 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-all duration-300"
      >
        <Linkedin className="h-5 w-5 text-foreground" />
      </a>
      <a
        href="https://x.com/theshamimahsan"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="X (Twitter)"
        className="p-2 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-all duration-300"
      >
        <Twitter className="h-5 w-5 text-foreground" />
      </a>
      <a
        href="https://www.youtube.com/@digitaldataloom"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="DigitalDataLoom YouTube channel"
        className="p-2 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-all duration-300"
      >
        <Youtube className="h-5 w-5 text-foreground" />
      </a>
    </div>
  )
}
