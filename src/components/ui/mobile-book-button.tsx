"use client";

import { Button } from "@/components/ui/button";

/**
 * MobileBookButton Component
 * 
 * A fixed position "Book a Survey" call-to-action button that appears only on mobile devices.
 * This component creates a persistent, accessible action point for mobile users to quickly
 * navigate to the contact section of the page.
 * 
 * Features:
 * - Fixed positioning at the bottom of the viewport
 * - Only visible on mobile devices (hidden on md breakpoint and above)
 * - Smooth scrolling to the contact section
 * - High visibility with brand styling
 * - Full-width for easy touch target accessibility
 * 
 * @example
 * // Add to page layout
 * <MobileBookButton />
 */
export function MobileBookButton() {
  return (
    <div className="fixed bottom-4 left-0 right-0 px-4 md:hidden z-50">
      <Button 
        variant="brand" 
        className="w-full py-5 text-lg font-semibold shadow-lg"
        onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
      >
        Book a Survey
      </Button>
    </div>
  );
} 