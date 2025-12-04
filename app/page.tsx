import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { SectionWrapper } from "@/components/section-wrapper"
import { ServiceCard } from "@/components/service-card"
import { CaseStudyCard } from "@/components/case-study-card"
import { Button } from "@/components/ui/button"
import { SocialLinks } from "@/components/social-links"
import Link from "next/link"
import { BarChart3, Settings2, Zap, TrendingUp, CheckCircle2, Gauge } from "lucide-react"
import Image from "next/image"
import CalendlyEmbed from "@/components/calendly-embed"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "DigitalDataLoom | Web Analytics & Conversion Tracking",
  description:
    "Web Analytics & Conversion Tracking services for agencies and paid ads marketers. GA4, GTM, server-side tracking, cross-platform attribution, and GA4/Looker Studio custom reporting.",
  openGraph: {
    title: "DigitalDataLoom | Web Analytics & Conversion Tracking",
    description: "Fix Broken Tracking & Build Bulletproof Web Analytics for Your Campaigns.",
    type: "website",
    url: "https://www.digitaldataloom.com",
    siteName: "DigitalDataLoom",
    images: [
      {
        url: "https://www.digitaldataloom.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "DigitalDataLoom | Web Analytics & Conversion Tracking",
      },
    ],
  },
}

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section
        className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 relative min-h-screen flex items-center"
        style={{
          backgroundImage: "url('/hero-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />

        {/* Content with relative positioning to appear above overlay */}
        <div className="mx-auto max-w-7xl relative z-10 w-full">
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white text-balance leading-tight">
              Bulletproof <span className="text-blue-300">Web Analytics</span> &{" "}
              <span className="text-blue-300">Conversion Tracking</span> for Agencies & Paid Ads Marketers
            </h1>
            <p className="text-lg text-blue-100 text-balance leading-relaxed">
              I'm <span className="font-semibold text-white">Shamim Ahsan</span>, a Web Analyst & Conversion Tracking
              Expert. I help agencies and paid ads marketers fix broken tracking, implement GA4 & GTM properly, and
              build reliable reporting systems with server-side tracking and cross-platform attribution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild size="lg" className="text-base">
                <a href="#contact">Free Tracking Audit Call</a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-base bg-white/10 border-white/20 text-white hover:bg-white/20"
              >
                <Link href="/case-studies">View Case Studies</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <SectionWrapper className="bg-muted/30">
        <div className="space-y-12">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Web Analytics & Conversion Tracking Services
            </h2>
            <p className="text-muted-foreground">
              GA4, GTM, server-side tracking, and cross-platform attribution for agencies managing paid ads campaigns.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard
              icon={<Settings2 />}
              title="GA4 & GTM Setup (Basic → Advanced Events)"
              description="Complete GA4 and Google Tag Manager implementation with custom dimensions, cross-domain tracking, and advanced event architecture for accurate data collection."
            />
            <ServiceCard
              icon={<BarChart3 />}
              title="Server-side & First-party Tracking Implementation"
              description="Build reliable first-party data collection and server-side tracking to recover lost conversions, reduce reliance on third-party cookies, and improve attribution accuracy."
            />
            <ServiceCard
              icon={<TrendingUp />}
              title="Cross-platform Conversion Attribution"
              description="Map conversions across Google Ads, Meta, TikTok, LinkedIn, and other platforms. Understand which channels truly drive value with accurate cross-platform attribution."
            />
            <ServiceCard
              icon={<Gauge />}
              title="Custom GA4 & Looker Studio Dashboards"
              description="Build actionable GA4 dashboards and Looker Studio reports tailored to your business. Clear visibility into campaign performance, ROI, and attribution data."
            />
            <ServiceCard
              icon={<CheckCircle2 />}
              title="Tracking Audits & Cleanup"
              description="Identify broken tracking, duplicate tags, and data quality issues. Fix implementation problems so you can rely on accurate data for optimization decisions."
            />
            <ServiceCard
              icon={<Zap />}
              title="Conversion Tracking for Agencies & Paid Ads Teams"
              description="Specialized tracking setup for agency workflows. Accurate conversion attribution, multi-client reporting, and data governance for scaling paid ads campaigns."
            />
          </div>
        </div>
      </SectionWrapper>

      {/* Featured Case Studies */}
      <SectionWrapper>
        <div className="space-y-12">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Results from Real Clients</h2>
            <p className="text-muted-foreground">
              How I've helped agencies and paid ads marketers fix broken tracking, recover lost conversions, and build
              accurate reporting systems.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <CaseStudyCard
              id="tracking-recovery"
              clientType="Digital Agency"
              headline="Recovered $40K/Month in Lost Conversions with Server-side Tracking"
              problem="Agency's clients were losing 30% of conversion data due to browser tracking limitations. Google Ads couldn't accurately report conversions, hindering campaign optimization."
              results={[
                "$40K monthly conversions recovered",
                "Attribution accuracy improved to 95%+",
                "Client ad spend scaled confidently",
              ]}
            />
            <CaseStudyCard
              id="ga4-implementation"
              clientType="E-commerce Agency"
              headline="Fixed GA4 & GTM for Accurate Cross-platform Attribution"
              problem="GA4 implementation was incomplete. The agency couldn't see which ads drove actual conversions across Google, Meta, and TikTok, wasting $50K/month in ad spend."
              results={[
                "GA4 advanced events configured properly",
                "Cross-platform attribution clarity achieved",
                "Monthly reporting time reduced by 70%",
              ]}
            />
            <CaseStudyCard
              id="looker-studio"
              clientType="Performance Marketing Firm"
              headline="Built Looker Studio Dashboards Reducing Reporting Time by 75%"
              problem="Firm spent 15+ hours weekly building manual reports. Client reporting was delayed, and decision-making was slow due to data accessibility."
              results={[
                "Automated Looker Studio dashboards created",
                "Weekly reporting time reduced to 2 hours",
                "Real-time performance visibility for clients",
              ]}
            />
          </div>
          <div className="text-center pt-4">
            <Button asChild variant="outline">
              <Link href="/case-studies">View All Case Studies</Link>
            </Button>
          </div>
        </div>
      </SectionWrapper>

      {/* About Section */}
      <SectionWrapper className="bg-muted/30">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="flex justify-center mb-8">
            <Image
              src="/images/shamim-20ahsan.jpg"
              alt="Shamim Ahsan - Web Analyst & Conversion Tracking Expert"
              width={200}
              height={200}
              className="rounded-full shadow-lg object-cover"
              priority={false}
            />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center">About Shamim Ahsan</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            I'm <span className="font-semibold text-foreground">Shamim Ahsan</span>, a Web Analyst & Conversion Tracking
            Expert. I help agencies and paid ads marketers overcome the biggest challenge in digital marketing:
            unreliable tracking data. When conversion data is broken or incomplete, you can't optimize campaigns,
            measure ROI, or scale confidently.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            My expertise is building bulletproof tracking systems using GA4, Google Tag Manager, server-side tracking,
            and first-party data collection. I specialize in cross-platform attribution so you understand exactly which
            campaigns and channels drive real conversions—not just clicks or impressions.
          </p>
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground text-lg">My 3-Step Process</h3>
            <ul className="space-y-2">
              <li className="flex gap-3 text-muted-foreground">
                <span className="text-primary font-bold">1.</span>{" "}
                <strong>Build First-party Tracking Foundation</strong>— Implement GA4, GTM, and first-party data
                collection to replace unreliable third-party cookie tracking.
              </li>
              <li className="flex gap-3 text-muted-foreground">
                <span className="text-primary font-bold">2.</span> <strong>Implement Server-side Tracking</strong> —
                Deploy server-side tracking and enhanced conversion mapping to recover lost conversions and improve
                attribution accuracy across platforms.
              </li>
              <li className="flex gap-3 text-muted-foreground">
                <span className="text-primary font-bold">3.</span> <strong>Deliver Actionable Reports</strong> — Create
                GA4 dashboards and Looker Studio reports that show exactly what's working, enabling confident scaling
                decisions.
              </li>
            </ul>
          </div>
          <div className="pt-4 border-t border-border">
            <p className="text-muted-foreground mb-4">
              Ready to fix your tracking and build reliable data systems? Let's start with a{" "}
              <strong>Free Tracking Audit Call</strong> to identify gaps and create a plan.
            </p>
            <p className="font-semibold text-foreground mb-3">Connect with me:</p>
            <SocialLinks />
          </div>
        </div>
      </SectionWrapper>

      {/* Process Section */}
      <SectionWrapper>
        <div className="space-y-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center">How I Work With Clients</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Tracking Audit & Assessment",
                description:
                  "I analyze your current tracking setup, GA4 configuration, and identify gaps, broken tags, or data quality issues.",
              },
              {
                step: "02",
                title: "Build Tracking Infrastructure",
                description:
                  "I implement GA4, GTM, server-side tracking, and first-party data collection tailored to your business model.",
              },
              {
                step: "03",
                title: "Map Cross-platform Attribution",
                description:
                  "I configure conversion tracking across Google Ads, Meta, TikTok, LinkedIn, and other channels you use.",
              },
              {
                step: "04",
                title: "Deliver Reports & Training",
                description:
                  "I create GA4 dashboards and Looker Studio reports, then train your team so you can make data-driven decisions.",
              },
            ].map((item) => (
              <div key={item.step} className="relative">
                <div className="absolute -left-4 -top-4 text-6xl font-bold text-primary/10">{item.step}</div>
                <div className="relative space-y-2">
                  <h3 className="font-semibold text-lg text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Contact Section */}
      <SectionWrapper id="contact" className="bg-muted/30">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Ready to Fix Your Tracking?</h2>
            <p className="text-lg text-muted-foreground">
              Let's audit your current tracking setup and create a plan to build reliable analytics and accurate
              conversion attribution. Book a free tracking audit call.
            </p>
          </div>

          {/* Contact Options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <a
              href="https://calendly.com/digitaldataloom/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-all text-center"
            >
              <div className="font-semibold text-foreground mb-1">Book a Call</div>
              <p className="text-sm text-muted-foreground">Free 30-min tracking audit</p>
            </a>
            <a
              href="https://wa.me/8801749181410"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-all text-center"
            >
              <div className="font-semibold text-foreground mb-1">WhatsApp</div>
              <p className="text-sm text-muted-foreground">Message anytime</p>
            </a>
            <a
              href="mailto:digitaldataloom@gmail.com"
              className="p-6 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-all text-center"
            >
              <div className="font-semibold text-foreground mb-1">Email</div>
              <p className="text-sm text-muted-foreground">digitaldataloom@gmail.com</p>
            </a>
          </div>

          {/* Calendly Embed */}
          <div className="pt-8 border-t border-border">
            <div className="text-center mb-6">
              <p className="text-muted-foreground">Use the calendar below to book your free tracking audit call:</p>
            </div>
            <CalendlyEmbed />
          </div>
        </div>
      </SectionWrapper>

      <Footer />
    </>
  )
}
