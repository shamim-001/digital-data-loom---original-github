import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { SectionWrapper } from "@/components/section-wrapper"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Web Analytics & Conversion Tracking Case Studies",
  description:
    "Real case studies showing how I fixed broken tracking, implemented GA4 & GTM, and improved attribution accuracy for agencies and paid ads marketers.",
  keywords:
    "Web analytics case study, Conversion tracking case study, GA4 implementation, GTM setup, Server-side tracking, Attribution improvements",
}

const caseStudies = [
  {
    id: "tracking-recovery",
    clientType: "Digital Agency",
    headline: "Recovered $40K/Month in Lost Conversions with Server-side Tracking",
    challenge:
      "Digital agency's client campaigns were losing 30% of conversion data due to browser restrictions and incomplete tracking. Google Ads wasn't accurately reporting conversions, making campaign optimization impossible.",
    solution: [
      "Conducted comprehensive tracking audit identifying data gaps and cookie-based tracking limitations",
      "Implemented server-side tracking using Google Tag Manager and GA4",
      "Set up first-party data collection to replace unreliable third-party cookies",
      "Configured cross-platform conversion mapping for Google Ads and Meta",
      "Built automated GA4 dashboards for real-time attribution visibility",
    ],
    results: [
      "$40K monthly conversions recovered and accurately tracked",
      "Attribution accuracy improved from 65% to 95%+",
      "Campaign optimization decisions now data-driven and confident",
      "Client ad spend scaled from $20K to $50K/month monthly",
      "Monthly reporting time reduced by 60%",
    ],
  },
  {
    id: "ga4-migration",
    clientType: "E-commerce Agency",
    headline: "Fixed GA4 & GTM Implementation for Accurate Cross-platform Attribution",
    challenge:
      "Agency's GA4 setup was incomplete and misconfigured. They couldn't track conversions across Google Ads, Meta, and TikTok campaigns. This led to wasted ad spend and poor client relationships.",
    solution: [
      "Conducted complete GA4 audit and identified configuration gaps",
      "Rebuilt GA4 event structure with custom dimensions and conversion goals",
      "Implemented Google Tag Manager with proper event tracking",
      "Set up conversion mapping across all advertising platforms",
      "Created automated attribution reports in Looker Studio",
    ],
    results: [
      "GA4 advanced events configured correctly for all conversion types",
      "Cross-platform attribution clarity—now understanding which ads drive conversions",
      "Monthly reporting time reduced from 15 hours to 3 hours",
      "Client confidence increased, leading to 40% increase in ad budget",
      "Conversion tracking accuracy improved from 78% to 99%",
    ],
  },
  {
    id: "looker-studio-dashboards",
    clientType: "Performance Marketing Firm",
    headline: "Built Looker Studio Dashboards Reducing Reporting Time by 75%",
    challenge:
      "Firm was spending 15+ hours weekly building manual reports from multiple data sources. Clients were unhappy with delayed reporting, and the team couldn't react quickly to performance changes.",
    solution: [
      "Analyzed current data sources and reporting requirements",
      "Built interconnected Looker Studio dashboards pulling from GA4, Google Ads, and Meta",
      "Set up automated daily updates with real-time performance metrics",
      "Created client-specific dashboard variations",
      "Provided team training on dashboard use and data interpretation",
    ],
    results: [
      "Weekly reporting time reduced from 15 hours to 3 hours (75% reduction)",
      "Real-time performance visibility for all clients",
      "Clients now accessing dashboards directly—improved transparency",
      "Firm capacity increased, enabling 5 additional clients without adding staff",
      "Team morale improved with focus on strategy vs. manual reporting",
    ],
  },
  {
    id: "first-party-tracking",
    clientType: "Scaling SaaS Startup",
    headline: "Built First-party Tracking Foundation to Replace Third-party Cookies",
    challenge:
      "Startup relied on third-party cookie tracking for Google Ads conversion attribution. As browser restrictions increased, tracking data became unreliable. The business couldn't measure campaign ROI or make scaling decisions with confidence.",
    solution: [
      "Implemented GA4 with custom event architecture aligned to product funnel",
      "Built server-side tracking using Google Tag Manager",
      "Set up first-party data collection via server-side API calls",
      "Configured enhanced conversion tracking for offline customer data",
      "Created real-time GA4 dashboards tracking signup → trial → paid conversion",
    ],
    results: [
      "Conversion tracking reliability improved from 71% to 98%",
      "Shift to first-party tracking eliminated Google Ads accuracy issues",
      "Ad ROI clarity enabled confident scaling from $5K to $30K/month ad spend",
      "Customer LTV tracking accuracy improved by 45%",
      "Team can now make daily optimization decisions based on reliable data",
    ],
  },
]

export default function CaseStudiesPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <div
        className="py-16 md:py-24 bg-cover bg-center bg-fixed relative"
        style={{
          backgroundImage: "url(/case-studies-bg.jpg)",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10">
          <SectionWrapper className="py-16 md:py-24">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-white text-balance">
                Web Analytics & Conversion Tracking Case Studies
              </h1>
              <p className="text-lg text-gray-100 leading-relaxed">
                Real results from agencies and paid ads marketers who fixed broken tracking, recovered lost conversions,
                and built reliable attribution systems.
              </p>
            </div>
          </SectionWrapper>
        </div>
      </div>

      {/* Case Studies */}
      <SectionWrapper>
        <div className="space-y-12">
          {caseStudies.map((study, idx) => (
            <div
              key={study.id}
              id={study.id}
              className="pb-12 border-b border-border last:border-0 last:pb-0 scroll-mt-20"
            >
              <div className="space-y-6">
                <div>
                  <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4">
                    {study.clientType}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground text-balance mb-2">{study.headline}</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">{study.challenge}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                      <span className="text-primary">→</span> Solution
                    </h3>
                    <ul className="space-y-3">
                      {study.solution.map((item, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex gap-3 leading-relaxed">
                          <span className="text-primary font-bold flex-shrink-0">◆</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                      <span className="text-accent">✓</span> Results
                    </h3>
                    <ul className="space-y-3">
                      {study.results.map((item, i) => (
                        <li key={i} className="text-sm font-medium text-foreground leading-relaxed">
                          <span className="text-accent">+</span> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper className="bg-muted/30">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold text-foreground">Ready to Fix Your Tracking?</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Let's audit your current tracking setup and build a reliable analytics and attribution system for your
            campaigns.
          </p>
          <Button asChild size="lg" className="text-base">
            <a href="/#contact">Free Tracking Audit Call</a>
          </Button>
        </div>
      </SectionWrapper>

      <Footer />
    </>
  )
}
