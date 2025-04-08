"use client";

import { cn } from "@/lib/utils";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { SectionHeader } from "@/components/ui/section-header";
import { MessageSquare } from "lucide-react";
import { useEffect } from "react";

interface TestimonialsProps {
  className?: string;
}

export function Testimonials({ className }: TestimonialsProps) {
  // Mark as client-side rendered after mount
  useEffect(() => {
    // Initialize client-side code
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
        {/* Using the SectionHeader component */}
        <SectionHeader 
          pillText="Client Testimonials"
          pillIcon={MessageSquare}
          heading="What are People Saying?"
          description="Discover why exploration companies trust HeliCheck for their critical geophysical survey needs."
          align="center"
        />

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