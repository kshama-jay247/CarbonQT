import FaqSections from "@/components/faq-sections";
import { Component as FooterTapedDesign } from "@/components/footer-taped-design";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { Zap, Activity, ShieldCheck, TrendingUp, RocketIcon, ArrowRightIcon } from "lucide-react";
import { Header } from "@/components/header";
import Bucket from "@/components/bucket";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import { DownloadButton } from "@/components/download-button";
import { siteContent } from "@/content/site-content";
import { useDownloadMenu } from "@/components/Header";
import CopyCodeBlock from "@/components/CopyCodeBlock";
import DownloadLink from "@/components/DownloadLink";

const featureIcons = {
  activity: Activity,
  "shield-check": ShieldCheck,
  "trending-up": TrendingUp,
  zap: Zap,
};

export default function Home() {
  return (
    <div className="flex w-full flex-col">
      <Header />

      <main className="grow">
        {/* Hero Section */}
        <section className="mx-auto w-full max-w-7xl lg:min-h-[calc(100vh-3.5rem)]">
          {/* Top Shades */}
          <div
            aria-hidden="true"
            className="absolute inset-0 isolate hidden overflow-hidden contain-strict lg:block"
          >
            <div className="absolute inset-0 -top-14 isolate -z-10 bg-[radial-gradient(35%_80%_at_49%_0%,hsl(var(--foreground)/.08),transparent)] contain-strict" />
          </div>

          {/* X Bold Faded Borders */}
          <div
            aria-hidden="true"
            className="absolute inset-0 mx-auto hidden min-h-screen w-full max-w-7xl lg:block"
          >
            <div className="mask-y-from-80% mask-y-to-100% absolute inset-y-0 left-0 z-10 h-full w-px bg-foreground/15" />
            <div className="mask-y-from-80% mask-y-to-100% absolute inset-y-0 right-0 z-10 h-full w-px bg-foreground/15" />
          </div>

          {/* main content */}
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center pt-20 sm:pt-24 lg:pt-0 pb-16 sm:pb-20 lg:pb-0 px-4 sm:px-6 lg:min-h-[calc(100vh-3.5rem)]">{/* X Content Faded Borders */}
            <div
              aria-hidden="true"
              className="absolute inset-0 -z-1 size-full overflow-hidden"
            >
              <div className="absolute inset-y-0 left-6 w-px bg-linear-to-b from-transparent via-border to-border" />
              <div className="absolute inset-y-0 right-6 w-px bg-linear-to-b from-transparent via-border to-border" />
            </div>

            {/* Left Side - Text Content */}
            <div className="flex flex-col gap-4 sm:gap-6 lg:pr-12">
              <a
                className={cn(
                  "group mx-auto lg:mx-0 flex w-fit items-center gap-3 rounded-full border bg-card px-3 py-1 shadow",
                  "fade-in slide-in-from-bottom-10 animate-in fill-mode-backwards transition-all delay-500 duration-500 ease-out"
                )}
                href={siteContent.hero.badge.href}
                target={siteContent.hero.badge.external ? "_blank" : undefined}
                rel={siteContent.hero.badge.external ? "noreferrer" : undefined}
              >
                <RocketIcon className="size-3 text-muted-foreground" />
                <span className="text-xs">{siteContent.hero.badge.label}</span>
                <span className="block h-5 border-l" />
                <ArrowRightIcon className="size-3 duration-150 ease-out group-hover:translate-x-1" />
              </a>

              <h1
                className={cn(
                  "fade-in slide-in-from-bottom-10 animate-in text-balance fill-mode-backwards text-center lg:text-left text-4xl tracking-tight delay-100 duration-500 ease-out md:text-5xl lg:text-6xl font-bold",
                  "text-shadow-[0_0px_50px_hsl(var(--foreground)/.2)]"
                )}
              >
                <AnimatedGradientText>{siteContent.hero.titlePrefix}</AnimatedGradientText>{" "}
                {siteContent.hero.titleSuffix}
              </h1>

              <p className="fade-in slide-in-from-bottom-10 mx-auto lg:mx-0 max-w-lg animate-in fill-mode-backwards text-center lg:text-left text-base text-foreground/80 tracking-wide delay-200 duration-500 ease-out sm:text-lg">
                {siteContent.hero.description}
              </p>

              <div className="fade-in slide-in-from-bottom-10 flex animate-in flex-row flex-wrap items-center justify-center lg:justify-start gap-3 fill-mode-backwards pt-2 delay-300 duration-500 ease-out">
                <DownloadButton />
                <Button className="rounded-full" size="lg" variant="secondary" asChild>
                  <a href={siteContent.hero.secondaryCta.href} target="_blank" rel="noreferrer">
                    {siteContent.hero.secondaryCta.label}
                    <ArrowRightIcon className="size-4 ms-2" />
                  </a>
                </Button>
              </div>
            </div>

            {/* Right Side - Bucket Component */}
            <div className="fade-in slide-in-from-bottom-10 animate-in fill-mode-backwards delay-400 duration-500 ease-out flex items-center justify-center lg:justify-end">
              <div className="w-full max-w-sm sm:max-w-md lg:max-w-full scale-75 sm:scale-90 lg:scale-100">
                <Bucket />
              </div>
            </div>
          </div>
        </section>

        {/* Bento Grid Section */}
        <section id={siteContent.featuresSection.id} className="min-h-screen py-24 px-6">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              {/* Keep adaptive colors here */}
              <h2 className="text-4xl font-bold mb-4">
                {siteContent.featuresSection.title}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {siteContent.featuresSection.description}
              </p>
            </div>
            <BentoGrid>
              {siteContent.featuresSection.items.map((feature) => (
                <BentoCard
                  key={feature.name}
                  name={feature.name}
                  className={feature.className}
                  Icon={featureIcons[feature.icon]}
                  description={feature.description}
                  href={feature.href}
                  cta={feature.cta}
                  background={<div className={feature.backgroundClassName} />}
                />
              ))}
            </BentoGrid>
          </div>
        </section>

        {/* Get Started Section */}
        <section
          id={siteContent.getStartedSection.id}
          className="min-h-screen py-24 px-6 bg-green-50 dark:bg-black"
        >
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-green-700 dark:text-green-300">
                {siteContent.getStartedSection.title}
              </h2>
              <p className="text-lg text-green-700 dark:text-green-200 max-w-2xl mx-auto">
                {siteContent.getStartedSection.description}
              </p>
            </div>

            <div className="space-y-12">
              {siteContent.getStartedSection.steps.map((step) => (
                <div key={step.number}>
                  <h3 className="text-2xl font-semibold text-green-700 dark:text-green-300 mb-4">
                    {step.number}. {step.title}
                  </h3>
                  <p className="text-green-700 dark:text-green-200 mb-2">
                    {step.description}
                  </p>

                  {step.links && (
                    <ul className="list-disc list-inside text-green-700 dark:text-green-200">
                      {step.links.map((link, idx) => (
                        <li key={idx}>
                          <DownloadLink label={link.label} />
                        </li>
                      ))}
                    </ul>
                  )}

                  {step.codeBlocks &&
                    step.codeBlocks.map((block, idx) => (
                      <CopyCodeBlock key={idx} code={block.code} />
                    ))}

                  {step.details && (
                    <p className="mt-2 text-green-700 dark:text-green-200">
                      {step.details}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* FAQ Section */}
        <section id={siteContent.faqSection.id} className="py-24 px-6">
          <div className="container mx-auto max-w-7xl">
            <FaqSections />
          </div>
        </section>
      </main>

      {/* Footer */}
      <FooterTapedDesign />
    </div>
  );
}
