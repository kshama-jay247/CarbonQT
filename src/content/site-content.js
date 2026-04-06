export const siteContent = {
  brand: {
    name: "CarbonQT",
    tagline: "Monitor. Analyze. Reduce.",
    shortDescription:
      "A lightweight system monitoring tool with real-time insights into CPU, RAM, processes, and energy usage.",
    siteUrl: "http://localhost:3000",
    repositoryUrl: "https://github.com/kshama-jay247/CarbonQT",
    releasesUrl: "#download",
    documentationUrl: "#docs",
    author: {
      name: "Your Name",
      githubUrl: "https://github.com/your-username",
      linkedinUrl: "#",
      twitterUrl: "#",
      twitterHandle: "",
    },
  },
  metadata: {
    title: {
      default: "CarbonQt - System Monitoring & Energy Insights",
      template: "%s | CarbonQt",
    },
    description:
      "CarbonQt is a system monitoring tool that tracks CPU, RAM, processes, and energy usage with a GUI and CLI.",
    keywords: [
      "system monitor",
      "cpu usage",
      "ram usage",
      "linux monitoring",
      "energy tracking",
      "carbon footprint",
      "process monitoring",
    ],
    openGraphTitle: "CarbonQt",
    openGraphDescription:
      "Real-time system monitoring with energy insights.",
    twitterTitle: "CarbonQt",
    twitterDescription:
      "Monitor CPU, RAM, processes and energy usage in real-time.",
    jsonLd: {
      applicationCategory: "DeveloperApplication",
      operatingSystem: "Linux",
      description:
        "CarbonQt is a lightweight system monitoring tool with energy tracking.",
      downloadUrl: "#download",
      softwareVersion: "1.0.0",
      featureList: [
        "Real-time CPU & RAM monitoring",
        "Process and thread visualization",
        "Energy & CO2 estimation",
        "CLI + GUI support",
      ],
    },
  },
  navigation: {
    links: [
      { label: "Features", href: "#features" },
      { label: "FAQ", href: "#faq" },
    ],
    primaryCta: {
      label: "Download",
      href: "https://github.com/kshama-jay247/CarbonQT/releases",
      external: true
    },
    downloadMenu: {
      label: "Download",
      groups: [
        {
          title: "GUI App (Qt)",
          items: [
            {
              label: "Linux (.AppImage)",
              href: "https://github.com/kshama-jay247/CarbonQT_GUI/releases",
              platform: "linux"
            }
          ]
        },
        {
          title: "CLI Tool (Go)",
          items: [
            {
              label: "Download CLI",
              href: "https://github.com/YOUR_USERNAME/carbonqt-cli/releases",
              platform: "linux"
            },
            {
              label: "View CLI Repo",
              href: "https://github.com/kshama-jay247/CarbonQT_CLI",
              platform: "linux"
            }
          ]
        }
      ]
    },
  },
  hero: {
    badge: {
      label: "Open Source System Monitor",
      href: "https://github.com/kshama-jay247/CarbonQT",
      external: true,
    },
    titlePrefix: "Carbon",
    titleSuffix: "Qt",
    description:
      "Monitor CPU, RAM, processes and energy usage in real-time with an intuitive GUI and powerful CLI.",
    primaryCta: {
      label: "Download GUI",
      href: "https://github.com/YOUR_USERNAME/carbonqt-cli/releases",
      external: true
    },
    secondaryCta: {
      label: "View GitHub",
      href: "https://github.com/kshama-jay247/CarbonQT",
      external: true,
    },
  },
  bucketChips: [
    {
      id: 1,
      title: "Real-Time Monitoring",
      description: "CPU, RAM, processes live",
      icon: "zap"
    },
    {
      id: 2,
      title: "Energy Tracking",
      description: "Estimate power & CO₂ usage",
      icon: "sparkles"
    },
    {
      id: 3,
      title: "Process Insights",
      description: "Threads, PIDs, performance",
      icon: "story"
    },
    {
      id: 4,
      title: "CLI Support",
      description: "Run monitoring from terminal",
      icon: "security"
    }
  ],
  featuresSection: {
    id: "features",
    title: "Core Features",
    description:
      "Everything you need to monitor and understand your system performance.",

    items: [
      {
        name: "Real-Time Monitoring",
        className: "col-span-3 lg:col-span-2",
        icon: "activity",
        description:
          "Track CPU and RAM usage live with smooth visualizations.",
        href: "#",
        cta: "Explore",
        backgroundClassName:
          "absolute inset-0 bg-linear-to-br from-green-50 to-emerald-50",
      },
      {
        name: "Process Analysis",
        className: "col-span-3 lg:col-span-1",
        icon: "zap",
        description:
          "View processes, threads, and system load distribution.",
        href: "#",
        cta: "View",
        backgroundClassName:
          "absolute inset-0 bg-linear-to-br from-blue-50 to-indigo-50",
      },
      {
        name: "Energy Estimation",
        className: "col-span-3 lg:col-span-1",
        icon: "sparkles",
        description:
          "Estimate power consumption and CO₂ emissions.",
        href: "#",
        cta: "Learn",
        backgroundClassName:
          "absolute inset-0 bg-linear-to-br from-purple-50 to-pink-50",
      },
      {
        name: "CLI + GUI",
        className: "col-span-3 lg:col-span-2",
        icon: "terminal",
        description:
          "Use CarbonQt via desktop UI or command-line interface.",
        href: "#",
        cta: "View CLI",
        backgroundClassName:
          "absolute inset-0 bg-linear-to-br from-orange-50 to-yellow-50",
      },
    ],
  },
  testimonialsSection: {
    id: "testimonials",
    title: "Customer",
    highlightedTitle: "Stories",
    highlightedEmoji: "★",
    emptyTitle: "No testimonials added yet",
    emptyDescription: "Replace this with social proof, quotes, or customer feedback.",
    cta: {
      label: "Add Testimonial",
      href: "https://example.com/testimonials",
      external: true,
    },
  },
  faqSection: {
    id: "faq",
    eyebrow: "FAQ",
    title: "Frequently Asked Questions",
    description:
      "Everything you need to know about CarbonQt.",

    items: [
      {
        question: "What is CarbonQt?",
        answer:
          "A system monitoring tool that tracks performance and energy usage.",
      },
      {
        question: "Does it support CLI?",
        answer:
          "Yes, CarbonQt includes a fully functional CLI for monitoring.",
      },
      {
        question: "How is energy calculated?",
        answer:
          "Using CPU and RAM usage with configurable power models.",
      },
      {
        question: "Is it open source?",
        answer:
          "Yes, available on GitHub.",
      },
    ],
  },
  footer: {
    resourceLinks: [
      { label: "Documentation", href: "https://github.com/kshama-jay247/CarbonQT#readme", external: true },
      { label: "Repository", href: "https://github.com/kshama-jay247/CarbonQT", external: true },
      { label: "Features", href: "#features" },
      { label: "FAQ", href: "#faq" },
    ],
    downloadLinks: [
      { label: "Resource One", href: "#resource-one" },
      { label: "Resource Two", href: "#resource-two" },
      { label: "Download Page", href: "https://example.com/download", external: true },
    ],
    legalLinks: [
      { label: "Privacy Policy", href: "/legal/privacy-policy" },
      { label: "Terms", href: "/legal/tos" },
      { label: "Your Name", href: "https://example.com/about", external: true },
    ],
    socialLinks: [
      {
        label: "GitHub",
        href: "https://github.com/your-handle",
        external: true,
        icon: "github",
      },
      {
        label: "LinkedIn",
        href: "https://linkedin.com/in/your-handle",
        external: true,
        icon: "linkedin",
      },
      {
        label: "X (formerly Twitter)",
        href: "https://x.com/your-handle",
        external: true,
        icon: "twitter",
      },
    ],
  },
};
