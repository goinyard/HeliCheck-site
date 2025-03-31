// src/components/layout/header.tsx
"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  NavigationMenu, 
  NavigationMenuContent, 
  NavigationMenuItem, 
  NavigationMenuLink, 
  NavigationMenuList, 
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & {
    title: string;
  }
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-slate-500">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

// Custom style for navigation links - text only with hover effect
const textWithHoverStyle = cn(
  "group inline-flex h-9 w-max items-center justify-center px-4 py-2 text-sm font-medium transition-colors",
  "hover:bg-accent hover:text-accent-foreground hover:rounded-md",
  "focus:bg-accent focus:text-accent-foreground focus:rounded-md focus-visible:outline-none"
);

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handler for smooth scrolling to sections
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  const mobileLinks = [
    { href: "#services", label: "Services", isSection: true },
    { href: "#case-studies", label: "Case Studies", isSection: true },
    { href: "#team", label: "Team", isSection: true },
    { href: "/hsec", label: "HSEC", isSection: false },
    { href: "/contact", label: "Contact Us", isSection: false },
  ];

  return (
    <header className={cn(
      "fixed top-0 w-full z-[100] transition-all duration-200", 
      isScrolled 
        ? "bg-white/80 backdrop-blur-md border-b border-slate-200 py-3" 
        : "bg-white py-4"
    )}>
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center z-10">
          {/* Placeholder for logo - replace with your actual logo path */}
          <Image 
            src="/images/logo.svg" 
            alt="HeliCheck Logo" 
            width={260} 
            height={62} 
            className="h-10 w-auto sm:h-12 md:h-13"
            style={{ maxHeight: "3.25rem" }}
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:space-x-4">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link 
                  href="#services" 
                  legacyBehavior 
                  passHref
                >
                  <NavigationMenuLink 
                    className={textWithHoverStyle}
                    onClick={(e) => scrollToSection(e, "services")}
                  >
                    Services
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link 
                  href="#case-studies" 
                  legacyBehavior 
                  passHref
                >
                  <NavigationMenuLink 
                    className={textWithHoverStyle}
                    onClick={(e) => scrollToSection(e, "case-studies")}
                  >
                    Case Studies
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link 
                  href="#team" 
                  legacyBehavior 
                  passHref
                >
                  <NavigationMenuLink 
                    className={textWithHoverStyle}
                    onClick={(e) => scrollToSection(e, "team")}
                  >
                    Team
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link 
                  href="/hsec" 
                  legacyBehavior 
                  passHref
                >
                  <NavigationMenuLink className={textWithHoverStyle}>
                    HSEC
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link 
                  href="/contact" 
                  legacyBehavior 
                  passHref
                >
                  <NavigationMenuLink className={textWithHoverStyle}>
                    Contact Us
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Button 
            size="lg" 
            variant="brand"
            className="hidden md:inline-flex"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Book a Survey
          </Button>
        </div>

        {/* Mobile menu - Drawer implementation */}
        <Drawer direction="bottom" open={isOpen} onOpenChange={setIsOpen}>
          <DrawerTrigger asChild>
            <button 
              className="flex md:hidden items-center justify-center z-10 w-10 h-10"
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6 text-slate-900" />
            </button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader className="text-center">
              <DrawerTitle className="sr-only">Navigation Menu</DrawerTitle>
            </DrawerHeader>
            <div className="px-4 py-2 pb-10">
              <nav className="flex flex-col">
                {mobileLinks.map((link) => (
                  <DrawerClose asChild key={link.href}>
                    <Link 
                      href={link.href}
                      className="py-3 text-lg font-medium text-slate-900 hover:text-[var(--brand)]"
                      onClick={(e) => {
                        if (link.isSection) {
                          e.preventDefault();
                          setIsOpen(false);
                          const id = link.href.replace('#', '');
                          setTimeout(() => {
                            document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
                          }, 100);
                        }
                      }}
                    >
                      {link.label}
                    </Link>
                  </DrawerClose>
                ))}
                <div className="mt-8 pt-4">
                  <DrawerClose asChild>
                    <Button 
                      variant="brand" 
                      className="w-full py-6 text-lg font-semibold"
                      onClick={() => {
                        setTimeout(() => {
                          document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                        }, 100);
                      }}
                    >
                      Book a Survey
                    </Button>
                  </DrawerClose>
                </div>
              </nav>
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </header>
  );
}