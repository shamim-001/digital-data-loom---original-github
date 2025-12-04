import Link from "next/link"
import { Button } from "@/components/ui/button"

interface CaseStudyCardProps {
  id: string
  clientType: string
  headline: string
  problem: string
  results: string[]
}

export function CaseStudyCard({ id, clientType, headline, problem, results }: CaseStudyCardProps) {
  return (
    <div className="p-6 rounded-lg border border-border bg-card hover:border-primary/50 transition-all duration-300">
      <div className="mb-2 inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
        {clientType}
      </div>
      <h3 className="font-semibold text-lg mb-3 text-foreground line-clamp-2">{headline}</h3>
      <p className="text-sm text-muted-foreground mb-4">{problem}</p>
      <div className="mb-6 space-y-2">
        {results.map((result, idx) => (
          <p key={idx} className="text-sm text-foreground flex gap-2">
            <span className="text-primary font-bold">+</span> {result}
          </p>
        ))}
      </div>
      <Button asChild variant="outline" className="w-full bg-transparent">
        <Link href={`/case-studies#${id}`}>Read Full Case Study</Link>
      </Button>
    </div>
  )
}
