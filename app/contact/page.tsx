import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { SectionWrapper } from "@/components/section-wrapper"
import { SocialLinks } from "@/components/social-links"
import CalendlyEmbed from "@/components/calendly-embed"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact | Free Tracking Audit Call",
  description:
    "Get in touch with Shamim Ahsan for a free tracking audit. Discuss your web analytics, GA4 setup, GTM implementation, and conversion tracking challenges.",
  keywords: "contact Shamim Ahsan, Free tracking audit, Web analytics expert, book consultation",
}

export default function ContactPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <div
        className="py-16 md:py-24 bg-cover bg-center bg-fixed relative"
        style={{
          backgroundImage: "url(/contact-bg.jpg)",
        }}
      >
        <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
        <div className="relative z-10">
          <SectionWrapper className="py-16 md:py-24">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
                Fix Your Tracking & Build Reliable Analytics
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Ready to audit your current setup and implement bulletproof web analytics? Reach out through your
                preferred channel below.
              </p>
            </div>
          </SectionWrapper>
        </div>
      </div>

      {/* Contact Methods */}
      <SectionWrapper>
        <div className="max-w-3xl mx-auto grid md:grid-cols-3 gap-6 mb-12">
          <a
            href="https://calendly.com/digitaldataloom/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="p-8 rounded-lg border border-border hover:border-primary hover:shadow-lg transition-all duration-300 text-center space-y-2"
          >
            <div className="text-2xl" aria-hidden="true">
              📅
            </div>
            <h2 className="font-semibold text-lg text-foreground">Book a Call</h2>
            <p className="text-sm text-muted-foreground">Free 30-min tracking audit on Calendly</p>
            <div className="text-primary font-semibold text-sm pt-2">View Calendar →</div>
          </a>

          <a
            href="https://wa.me/8801749181410"
            target="_blank"
            rel="noopener noreferrer"
            className="p-8 rounded-lg border border-border hover:border-primary hover:shadow-lg transition-all duration-300 text-center space-y-2"
          >
            <div className="text-2xl" aria-hidden="true">
              💬
            </div>
            <h2 className="font-semibold text-lg text-foreground">WhatsApp</h2>
            <p className="text-sm text-muted-foreground">Quick chat and updates</p>
            <div className="text-primary font-semibold text-sm pt-2">Message Now →</div>
          </a>

          <a
            href="mailto:digitaldataloom@gmail.com"
            className="p-8 rounded-lg border border-border hover:border-primary hover:shadow-lg transition-all duration-300 text-center space-y-2"
          >
            <div className="text-2xl" aria-hidden="true">
              ✉️
            </div>
            <h2 className="font-semibold text-lg text-foreground">Email</h2>
            <p className="text-sm text-muted-foreground">digitaldataloom@gmail.com</p>
            <div className="text-primary font-semibold text-sm pt-2">Send Email →</div>
          </a>
        </div>
      </SectionWrapper>

      {/* Calendly Embed */}
      <SectionWrapper className="bg-muted/30">
        <div className="max-w-2xl mx-auto space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Schedule Your Free Tracking Audit Call</h2>
            <p className="text-muted-foreground leading-relaxed">
              Let's discuss your current tracking setup, identify gaps, and create a plan to build accurate web
              analytics and conversion attribution for your campaigns.
            </p>
          </div>
          <CalendlyEmbed />
        </div>
      </SectionWrapper>

      {/* Social Links */}
      <SectionWrapper>
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-4">Connect on Social Media</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Stay updated with web analytics tips, conversion tracking insights, and best practices on social media.
            </p>
            <div className="flex justify-center">
              <SocialLinks />
            </div>
          </div>

          <div className="pt-8 border-t border-border">
            <h3 className="font-semibold text-foreground mb-6 text-lg">Frequently Asked Questions</h3>
            <div className="space-y-6 text-left">
              <div>
                <h4 className="font-semibold text-foreground mb-2">What's your main expertise?</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  I specialize in web analytics and conversion tracking. I help agencies and paid ads marketers fix
                  broken tracking, implement GA4 & GTM properly, and build reliable attribution systems using
                  server-side tracking and first-party data.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">What platforms do you work with?</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  I work across Google Ads, Meta, TikTok, LinkedIn, and other advertising platforms. I also have
                  experience implementing tracking on WordPress, Shopify, Webflow, and custom websites.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Do you offer one-time audits or ongoing support?</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Both. I can conduct tracking audits, implement GA4/GTM setup, or provide ongoing optimization and
                  reporting support. We'll discuss your specific needs and timeline during our call.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">What happens in the free tracking audit call?</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We'll review your current tracking setup, GA4 configuration, and identify gaps or issues. I'll explain
                  the problems, discuss their impact on your optimization and scaling, and create a tailored plan to fix
                  them.
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <Footer />
    </>
  )
}
