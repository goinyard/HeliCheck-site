"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { Send } from "lucide-react"

interface FooterProps {
  className?: string
}

export function Footer({ className }: FooterProps) {
  const [email, setEmail] = React.useState("")
  const hasInput = email.trim().length > 0

  return (
    <footer className={cn("relative border-t bg-gray-50 text-foreground", className)}>
      <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-12">
          <div className="relative lg:col-span-4">
            <Link href="/" className="mb-6 inline-block">
              <Image 
                src="/images/logo.png" 
                alt="HeliCheck Logo" 
                width={180} 
                height={40} 
                className="h-12 w-auto"
              />
            </Link>
            <p className="mb-6 text-muted-foreground max-w-md">
              Industry leaders in helicopter geophysical surveys for mineral exploration, delivering high-quality data and actionable insights.
            </p>
            <form className="relative max-w-md">
              <Input
                type="email"
                placeholder="Enter your email"
                className="pr-12 backdrop-blur-sm"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button
                type="submit"
                size="icon"
                className={cn(
                  "absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full transition-all",
                  hasInput 
                    ? "bg-[var(--brand)] text-white hover:bg-[var(--brand)]/90 hover:scale-105" 
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                )}
                disabled={!hasInput}
              >
                <Send className="h-4 w-4" />
                <span className="sr-only">Subscribe</span>
              </Button>
            </form>
          </div>
          <div className="lg:col-span-2">
            <h3 className="mb-4 text-lg font-bold text-black">Quick Links</h3>
            <nav className="space-y-2 text-sm">
              <Link href="#" className="block transition-colors hover:underline">
                Home
              </Link>
              <Link href="#services" className="block transition-colors hover:underline">
                Services
              </Link>
              <Link href="#case-studies" className="block transition-colors hover:underline">
                Case Studies
              </Link>
              <Link href="#hsec" className="block transition-colors hover:underline">
                HSEC
              </Link>
              <Link href="#news" className="block transition-colors hover:underline">
                News
              </Link>
              <Link href="#contact" className="block transition-colors hover:underline">
                Contact
              </Link>
            </nav>
          </div>
          <div className="lg:col-span-2">
            <h3 className="mb-4 text-lg font-bold text-black">Sections</h3>
            <nav className="space-y-2 text-sm">
              <Link 
                href="#services" 
                className="block transition-colors hover:underline"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Services
              </Link>
              <Link 
                href="#testimonials" 
                className="block transition-colors hover:underline"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("testimonials")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Testimonials
              </Link>
              <Link 
                href="#global-presence" 
                className="block transition-colors hover:underline"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("global-presence")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Locations
              </Link>
              <Link 
                href="#team" 
                className="block transition-colors hover:underline"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("team")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Our Team
              </Link>
              <Link 
                href="#faq" 
                className="block transition-colors hover:underline"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("faq")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                FAQ
              </Link>
            </nav>
          </div>
          <div className="lg:col-span-2">
            <h3 className="mb-4 text-lg font-bold text-black">Our Services</h3>
            <nav className="space-y-2 text-sm">
              <Link href="/services/helicheck-em" className="block transition-colors hover:underline">
                Helicopter EM Surveys
              </Link>
              <Link href="/services/sam" className="block transition-colors hover:underline">
                Sub-Audio Magnetics
              </Link>
              <Link href="/services/samson" className="block transition-colors hover:underline">
                SAMSON
              </Link>
              <Link href="/services/borehole" className="block transition-colors hover:underline">
                Borehole Surveys
              </Link>
              <Link href="/services/ip" className="block transition-colors hover:underline">
                Induced Polarisation
              </Link>
              <Link href="/services/surface-em" className="block transition-colors hover:underline">
                Surface EM
              </Link>
              <Link href="/services/environmental" className="block transition-colors hover:underline">
                Environmental Surveys
              </Link>
            </nav>
          </div>
          <div className="lg:col-span-2">
            <h3 className="mb-4 text-lg font-bold text-black">Contact Us</h3>
            <address className="space-y-3 text-sm not-italic">
              <p>HeliCheck Geophysical Surveys</p>
              <p>2131 Airport Drive<br></br> Saskatoon  SK S7L 7E1, Canada</p>
              
              <div className="flex items-center">
                <a 
                  href="tel:+13067006442" 
                  className="flex items-center hover:underline text-foreground"
                >
                  <div className="h-5 w-5 rounded-full bg-[var(--brand)]/5 flex items-center justify-center text-[var(--brand)] flex-shrink-0 mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  </div>
                  +1 (306) 700-6442
                </a>
              </div>
              <div className="flex items-center">
                <a 
                  href="mailto:info@helicheck.com" 
                  className="flex items-center hover:underline text-foreground"
                >
                  <div className="h-5 w-5 rounded-full bg-[var(--brand)]/5 flex items-center justify-center text-[var(--brand)] flex-shrink-0 mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  </div>
                  info@helicheck.com
                </a>
              </div>
            </address>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 text-center md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} HeliCheck Geophysical Surveys. All rights reserved.
          </p>
          <nav className="flex gap-4 text-sm">
            <Link href="#privacy" className="transition-colors hover:underline">
              Privacy Policy
            </Link>
            <Link href="#terms" className="transition-colors hover:underline">
              Terms of Service
            </Link>
            <Link href="#cookies" className="transition-colors hover:underline">
              Cookie Settings
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
