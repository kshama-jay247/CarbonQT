"use client";

import React from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MenuToggleIcon } from "@/components/ui/menu-toggle-icon";
import { useScroll } from "@/components/ui/use-scroll";
import { createPortal } from "react-dom";
import { Moon, Sun, Download } from "lucide-react";
import { useTheme } from "next-themes";
import { FaApple, FaWindows, FaLinux, FaGithub } from "react-icons/fa";
import { siteContent } from "@/content/site-content";
import { Logo } from "@/components/ui/logo";

const platformIcons = {
  apple: FaApple,
  linux: FaLinux,
  windows: FaWindows,
};

export function Header() {
  const [open, setOpen] = React.useState(false);
  const [downloadOpen, setDownloadOpen] = React.useState(false);
  const scrolled = useScroll(10);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn("sticky top-0 z-999 w-full border-b border-transparent", {
        "bg-background/95 supports-backdrop-filter:bg-background/50 border-border backdrop-blur-lg":
          scrolled,
      })}
    >
      <nav className="mx-auto flex h-14 w-3/4 items-center justify-between px-4">
        <a href="/" className="hover:bg-accent rounded-md p-2">
          <Logo />
        </a>
        <div className="hidden items-center gap-1 md:flex">
          {siteContent.navigation.links.map((link) => (
            <a
              key={link.label}
              className={buttonVariants({ variant: "ghost" })}
              href={link.href}
            >
              {link.label}
            </a>
          ))}

          {mounted && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
          )}
          <div className="relative">
            <Button onClick={() => setDownloadOpen(!downloadOpen)}>
              <Download className="h-4 w-4 mr-2" />
              {siteContent.navigation.downloadMenu.label}
            </Button>
            {downloadOpen && (
              <div className="absolute right-0 mt-2 w-72 rounded-lg border bg-popover p-4 shadow-sm">
                <div className="space-y-4">
                  {siteContent.navigation.downloadMenu.groups.map(
                    (group, groupIndex) => (
                      <div
                        key={group.title}
                        className={
                          groupIndex === 0
                            ? "space-y-2"
                            : "border-t pt-3 space-y-2"
                        }
                      >
                        <h3 className="font-semibold text-sm">{group.title}</h3>
                        {group.items.map((item, itemIndex) => {
                          const isRepo = item.label
                            .toLowerCase()
                            .includes("repo");
                          const Icon = isRepo
                            ? FaGithub
                            : platformIcons[item.platform];
                          const variant =
                            groupIndex === 0 ? "outline" : "default";

                          // Expandable CLI platform buttons
                          if (!isRepo && group.title.includes("CLI")) {
                            return (
                              <ExpandablePlatformButton
                                key={`${group.title}-${item.label}-${itemIndex}`}
                                platform={item.platform}
                                label={item.label}
                                Icon={Icon}
                                amdHref={item.amdHref}
                                armHref={item.armHref}
                              />
                            );
                          }

                          return (
                            <Button
                              key={`${group.title}-${item.label}-${itemIndex}`}
                              variant={variant}
                              className="w-full justify-start"
                              asChild
                            >
                              <a href={item.href}>
                                <Icon className="h-4 w-4 mr-3" />
                                {item.label}
                              </a>
                            </Button>
                          );
                        })}
                      </div>
                    )
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
        <Button
          size="icon"
          variant="outline"
          onClick={() => setOpen(!open)}
          className="md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Toggle menu"
        >
          <MenuToggleIcon open={open} className="size-5" duration={300} />
        </Button>
      </nav>
      <MobileMenu open={open} className="flex flex-col justify-between gap-2">
        <div className="grid gap-y-2">
          {siteContent.navigation.links.map((link) => (
            <a
              key={link.label}
              className={buttonVariants({
                variant: "ghost",
                className: "justify-start",
              })}
              href={link.href}
            >
              {link.label}
            </a>
          ))}
          <a
            className={buttonVariants({
              variant: "ghost",
              className: "justify-start",
            })}
            href="/get-started"
          >
            Get Started
          </a>
        </div>
        <div className="flex flex-col gap-2">
          {mounted && (
            <Button
              variant="outline"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="w-full"
            >
              {theme === "dark" ? (
                <>
                  <Sun className="h-5 w-5 mr-2" />
                  Light Mode
                </>
              ) : (
                <>
                  <Moon className="h-5 w-5 mr-2" />
                  Dark Mode
                </>
              )}
            </Button>
          )}
          <Button variant="outline" className="w-full">
            <Download className="h-4 w-4 mr-2" />
            {siteContent.navigation.downloadMenu.label}
          </Button>
        </div>
      </MobileMenu>
    </header>
  );
}

function ExpandablePlatformButton({ platform, label, Icon, amdHref, armHref }) {
  const [expanded, setExpanded] = React.useState(false);

  return (
    <div className="space-y-2">
      <Button
        variant="outline"
        className="w-full justify-start"
        onClick={() => setExpanded(!expanded)}
      >
        <Icon className="h-4 w-4 mr-3" />
        {label}
      </Button>
      {expanded && (
        <div className="pl-6 space-y-2">
          <Button variant="ghost" className="w-full justify-start" asChild>
            <a href={amdHref}>AMD Version</a>
          </Button>
          <Button variant="ghost" className="w-full justify-start" asChild>
            <a href={armHref}>ARM Version</a>
          </Button>
        </div>
      )}
    </div>
  );
}


function MobileMenu({ open, children, className, ...props }) {
  if (!open || typeof window === "undefined") return null;

  return createPortal(
    <div
      id="mobile-menu"
      className={cn(
        "bg-background/95 supports-backdrop-filter:bg-background/50 backdrop-blur-lg",
        "fixed top-12 right-0 bottom-0 left-0 z-40 flex flex-col overflow-hidden border-y md:hidden"
      )}
    >
      <div
        data-slot={open ? "open" : "closed"}
        className={cn(
          "data-[slot=open]:animate-in data-[slot=open]:zoom-in-97 ease-out",
          "size-full p-4",
          className
        )}
        {...props}
      >
        {children}
      </div>
    </div>,
    document.body
  );
}
