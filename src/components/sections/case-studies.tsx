"use client";

import { cn } from "@/lib/utils";
import { Gallery4 } from "@/components/blocks/gallery4";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { CarouselApi } from "@/components/ui/carousel";

interface CaseStudiesProps {
  className?: string;
}

export function CaseStudies({ className }: CaseStudiesProps) {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!carouselApi) {
      return;
    }
    const updateSelection = () => {
      // Keeping the update function for future use if needed
    };
    updateSelection();
    carouselApi.on("select", updateSelection);
    return () => {
      carouselApi.off("select", updateSelection);
    };
  }, [carouselApi]);

  const caseStudies = [
    {
      id: "case-1",
      title: "Deep Mineral Exploration in Northern Canada",
      description:
        "How our HeliSAM surveys revealed a previously undetected copper-gold deposit at depths beyond conventional survey capabilities.",
      href: "/case-studies/northern-canada",
      image: "https://images.unsplash.com/photo-1682686581413-0a0ec9bb35bb?q=80&w=1600&auto=format&fit=crop",
    },
    {
      id: "case-2",
      title: "High-Resolution Mapping in Complex Terrain",
      description:
        "Using advanced helicopter-mounted sensors to map mineral potential in mountainous regions inaccessible to ground crews.",
      href: "/case-studies/mountainous-terrain",
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1600&auto=format&fit=crop",
    },
    {
      id: "case-3",
      title: "Remote Sensing for Gold Exploration in Australia",
      description:
        "How our EM survey technology detected subtle geological signatures leading to a significant gold discovery in Western Australia.",
      href: "/case-studies/western-australia",
      image: "https://images.unsplash.com/photo-1508592931388-95bc7b61033d?q=80&w=1600&auto=format&fit=crop",
    },
    {
      id: "case-4",
      title: "Multi-Parameter Surveys for Lithium Exploration",
      description:
        "Combining multiple geophysical methods in a single helicopter survey to rapidly identify lithium-bearing formations in South America.",
      href: "/case-studies/lithium-exploration",
      image: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=80&w=1600&auto=format&fit=crop",
    },
    {
      id: "case-5",
      title: "Environmental Baseline Assessment in Protected Areas",
      description:
        "Conducting non-invasive geophysical surveys to map groundwater resources while minimizing environmental impact in ecologically sensitive regions.",
      href: "/case-studies/environmental-assessment",
      image: "https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=1600&auto=format&fit=crop",
    },
  ];

  return (
    <section className={cn("py-20 mt-8 sm:mt-0 bg-gray-50", className)} id="case-studies">
      <div className="container mx-auto mb-6">
        <div className="flex flex-col items-center text-center mb-4">
          <div className="mb-4 px-3 py-1 rounded-full bg-[var(--brand)]/10 text-[var(--brand)] inline-flex items-center text-sm font-medium">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>
            Case Studies
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Project Success Stories
          </h2>
          <p className="text-gray-500 md:text-lg max-w-3xl">
            Explore how our advanced helicopter geophysical surveys have led to significant discoveries and project success for our clients across the globe.
          </p>
        </div>
        
        {/* Navigation Controls - Removed to improve visibility */}
      </div>
      
      {/* Gallery component extends beyond container */}
      <div className="sm:-mt-6 mt-4">
        <Gallery4
          items={caseStudies}
          title="" 
          description=""
          setCarouselApi={setCarouselApi}
          indicatorCount={3}
        />
      </div>
      
      {/* CTA Button */}
      <div className="container mx-auto mt-6 sm:mb-[-40px] mb-4 flex justify-center">
        <Button variant="brand" size="lg" className="font-medium tracking-wide" asChild>
          <a href="/case-studies">View All Case Studies</a>
        </Button>
      </div>
    </section>
  );
} 