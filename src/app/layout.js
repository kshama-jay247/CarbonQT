import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { siteContent } from "@/content/site-content";
import { DownloadMenuProvider } from "@/components/DownloadMenuContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: siteContent.metadata.title,
  description: siteContent.metadata.description,
  keywords: siteContent.metadata.keywords,
  authors: [{ name: siteContent.brand.author.name }],
  creator: siteContent.brand.author.name,
  publisher: siteContent.brand.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || siteContent.brand.siteUrl
  ),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteContent.metadata.openGraphTitle,
    description: siteContent.metadata.openGraphDescription,
    url: "/",
    siteName: siteContent.brand.name,
    images: [
      {
        url: "/logo.svg",
        width: 512,
        height: 512,
        alt: `${siteContent.brand.name} Logo`,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteContent.metadata.twitterTitle,
    description: siteContent.metadata.twitterDescription,
    images: ["/logo.svg"],
    creator: siteContent.brand.author.twitterHandle,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [{ url: "/favicon.ico", sizes: "any" }],
    shortcut: ["/favicon.ico"],
  },
  manifest: "/site.webmanifest",
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: siteContent.brand.name,
    applicationCategory: siteContent.metadata.jsonLd.applicationCategory,
    operatingSystem: siteContent.metadata.jsonLd.operatingSystem,
    description: siteContent.metadata.jsonLd.description,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      ratingCount: "1",
    },
    author: {
      "@type": "Person",
      name: siteContent.brand.author.name,
      url: siteContent.brand.author.githubUrl,
    },
    downloadUrl: siteContent.metadata.jsonLd.downloadUrl,
    softwareVersion: siteContent.metadata.jsonLd.softwareVersion,
    softwareHelp: {
      "@type": "CreativeWork",
      url: siteContent.brand.documentationUrl,
    },
    screenshot: "/logo.svg",
    featureList: siteContent.metadata.jsonLd.featureList,
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {/* Context provider wraps the entire app */}
          <DownloadMenuProvider>
            {children}
          </DownloadMenuProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
