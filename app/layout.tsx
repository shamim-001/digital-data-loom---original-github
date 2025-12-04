import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "DigitalDataLoom | Web Analytics & Conversion Tracking",
  description:
    "Web Analytics & Conversion Tracking services for agencies and paid ads marketers. GA4, GTM, server-side tracking, cross-platform attribution, and GA4/Looker Studio custom reporting by Shamim Ahsan. Get a Free Tracking Audit Call.",
  keywords:
    "Web analytics, Conversion tracking, GA4, Google Tag Manager, Server-side tracking, First-party tracking, Cross-platform attribution, Looker Studio reporting, Tracking audits, Tracking for agencies, GA4 dashboards, GTM advanced events, Shamim Ahsan",
  metadataBase: new URL("https://www.digitaldataloom.com"),
  openGraph: {
    title: "DigitalDataLoom | Web Analytics & Conversion Tracking",
    description:
      "Web Analytics & Conversion Tracking for Agencies & Paid Ads Marketers. GA4, GTM, Server-side Tracking & Cross-platform Attribution.",
    url: "https://www.digitaldataloom.com",
    type: "website",
    siteName: "DigitalDataLoom",
    images: [
      {
        url: "/images/digital-20data-20loom.png",
        width: 1200,
        height: 630,
        alt: "DigitalDataLoom - Web Analytics & Conversion Tracking",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DigitalDataLoom | Web Analytics & Conversion Tracking",
    description: "Web Analytics & Conversion Tracking for Agencies & Paid Ads Marketers.",
    creator: "@theshamimahsan",
    images: ["/images/digital-20data-20loom.png"],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <script>
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NBFCCKGK');`}
        </script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["Person", "LocalBusiness"],
              name: "Shamim Ahsan",
              url: "https://www.digitaldataloom.com",
              jobTitle: "Web Analyst & Conversion Tracking Expert",
              description:
                "Web Analyst & Conversion Tracking Expert specializing in GA4, GTM, server-side tracking, cross-platform attribution, and GA4/Looker Studio custom reporting for agencies and paid ads marketers.",
              image: "https://www.digitaldataloom.com/images/shamim-20ahsan.jpg",
              sameAs: ["https://www.linkedin.com/in/theshamimahsan/", "https://x.com/theshamimahsan"],
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "Customer Service",
                email: "digitaldataloom@gmail.com",
                telephone: "+8801749181410",
                availableLanguage: "en",
              },
              areaServed: "Worldwide",
              knowsAbout: [
                "Web Analytics",
                "Conversion Tracking",
                "GA4",
                "Google Tag Manager",
                "Server-side Tracking",
                "First-party Tracking",
                "Cross-platform Attribution",
                "Looker Studio",
              ],
            }),
          }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NBFCCKGK"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
