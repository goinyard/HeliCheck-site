"use client";

import { Button } from "@/components/ui/button";

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