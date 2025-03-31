"use client";

import { cn } from "@/lib/utils";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { useEffect, useState } from "react";

interface TestimonialsProps {
  className?: string;
}

export function Testimonials({ className }: TestimonialsProps) {
  // Add client-side only state to prevent hydration mismatch
  const [isClient, setIsClient] = useState(false);

  // Mark as client-side rendered after mount
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Testimonial data
  const testimonials = [
    {
      quote: "HeliCheck's helicopter EM survey identified a significant deposit that conventional methods had missed. Their technical expertise and data interpretation were instrumental to our discovery.",
      name: "John Richardson",
      designation: "Chief Geologist, Aurora Mining Corp",
      src: "https://i.imgur.com/S0qfTU6.png",
    },
    {
      quote: "We've partnered with HeliCheck for all our exploration projects across Australia. Their HeliSAM technology has consistently delivered exceptional results and helped us make informed investment decisions.",
      name: "Sarah Thompson",
      designation: "VP Exploration, Meridian Resources",
      src: "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg",
    },

    {
      quote: "Working with HeliCheck transformed our exploration strategy. Their deep target identification capabilities helped us discover a new ore body that has completely changed our project economics.",
      name: "Benjamin Wano",
      designation: "Exploration Manager, Horizon Mining",
      src: "https://images.pexels.com/photos/7163464/pexels-photo-7163464.jpeg",
    },
  ];


  return (
    <section id="testimonials" className={cn("py-12 bg-white", className)}>
      <div className="container px-4 md:px-6 mx-auto">
        {/* Section Header - Updated to match Services style */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="mb-4 px-3 py-1 rounded-full bg-[var(--brand)]/10 text-[var(--brand)] inline-flex items-center text-sm font-medium">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
            Client Testimonials
          </div>
          <h2 className="text-4xl font-bold tracking-tight mb-4"> What are People Saying?          </h2>
          <p className="text-gray-500 text-lg max-w-3xl mb-6">
            Discover why exploration companies trust HeliCheck for their critical geophysical survey needs.
          </p>
        </div>

        {/* Animated Testimonials Component */}
        <AnimatedTestimonials
          testimonials={testimonials}
          autoplay={true}
          className="mb-16"
        />

        {/* Trust Indicators */}
        
      </div>
    </section>
  );
} 