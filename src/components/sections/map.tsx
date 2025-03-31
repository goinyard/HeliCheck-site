"use client";

import { cn } from "@/lib/utils";
import { WorldMap } from "@/components/ui/world-map";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface Location {
  name: string;
  country: string;
  lat: number;
  lng: number;
  address?: string;
  postalCode?: string;
  phone?: string;
  region?: string;
}

interface MapProps {
  title?: {
    bold: string;
    light: string;
  };
  subtitle?: string;
  locations?: Location[];
  className?: string;
}

export function Map({
  title = {
    bold: "Global",
    light: "Availability"
  },
  subtitle = "HeliCheck provides helicopter EM and other surveys worldwide",
  locations = [
    { 
      name: "Saskatoon", 
      country: "Canada", 
      region: "North America",
      lat: 52.1332, 
      lng: -106.6700,
      address: "2131 Airport Drive, Saskatoon, SK S7L 7E1",
      phone: "+1 306.700.6442"
    },
    { 
      name: "Santiago", 
      country: "Chile", 
      region: "South America",
      lat: -33.4489, 
      lng: -70.6693,
      address: "Av. Tajamar 481, Torre Sur, Piso 14, Las Condes",
      phone: "+56 2.2519.2900"
    },
    { 
      name: "Copenhagen", 
      country: "Denmark", 
      region: "Europe",
      lat: 55.6761, 
      lng: 12.5683,
      address: "Rådhuspladsen 16, 1550 Copenhagen",
      phone: "+45 33.36.71.00"
    },
    { 
      name: "Johannesburg", 
      country: "South Africa", 
      region: "Africa",
      lat: -26.2041, 
      lng: 28.0473,
      address: "138 West Street, Sandton, 2196",
      phone: "+27 11.568.2800"
    },
    { 
      name: "Beijing", 
      country: "China", 
      region: "Asia",
      lat: 39.9042, 
      lng: 116.4074,
      address: "Tower 2, 79 Jianguo Road, Chaoyang District",
      phone: "+86 10.5969.5888"
    },
    { 
      name: "Brisbane", 
      country: "Australia", 
      region: "Oceania",
      lat: -27.4698, 
      lng: 153.0251,
      address: "31 Newmarket Rd, Windsor, Queensland 4030",
      phone: "+61 7.3846.0999"
    },
  ],
  className,
}: MapProps) {
  const mapRef = useRef(null);
  const isInView = useInView(mapRef, { once: true, amount: 0.3 });

  // Create connections between locations for the map
  const connections = locations.slice(1).map((location) => ({
    start: { 
      lat: locations[0].lat,
      lng: locations[0].lng,
      label: locations[0].name
    },
    end: { 
      lat: location.lat,
      lng: location.lng,
      label: location.name
    }
  }));

  return (
    <section id="global-presence" className={cn("py-20 bg-white", className)}>
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="mb-4 px-3 py-1 rounded-full bg-[var(--brand)]/10 text-[var(--brand)] inline-flex items-center text-sm font-medium">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
            Worldwide Network
          </div>
          <h2 className="text-4xl font-bold tracking-tight mb-4">
            {title.bold} {title.light}
          </h2>
          <p className="text-gray-500 text-lg max-w-3xl mb-6">
            {subtitle}
          </p>
          <div className="h-1 w-20 bg-[var(--brand)] rounded-full"></div>
        </div>

        <div ref={mapRef} className="mb-12 flex justify-center items-center h-[224px] max-w-[56%] mx-auto">
          <WorldMap 
            dots={isInView ? connections : []} 
            lineColor="var(--brand)"
            playOnce={true}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {locations.map((location) => (
            <div 
              key={`${location.name}-${location.country}`}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all overflow-hidden group"
            >
              <div className="flex items-center mb-3">
                <span className="text-sm font-medium text-[var(--brand)] bg-[var(--brand)]/5 px-3 py-1 rounded-full">
                  {location.region}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 group-hover:text-[var(--brand)] transition-colors mb-4">
                {location.name === "Saskatoon" ? `${location.name} (Headquarters)` : location.name}
              </h3>
              
              <div className="space-y-4">
                {/* Physical Address */}
                <div className="flex">
                  <div className="h-5 w-5 rounded-full bg-[var(--brand)]/5 flex items-center justify-center text-[var(--brand)] flex-shrink-0 mr-3 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  </div>
                  <div className="text-sm text-slate-600 leading-tight flex flex-col">
                    <span className="font-medium text-slate-700">{location.address}</span>
                    <span className="font-medium text-slate-700">{location.country}</span>
                  </div>
                </div>
                
                {/* Phone Number */}
                <div className="flex items-center">
                  <div className="h-5 w-5 rounded-full bg-[var(--brand)]/5 flex items-center justify-center text-[var(--brand)] flex-shrink-0 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  </div>
                  <a href={`tel:${location.phone?.replace(/\./g, '')}`} className="text-sm font-medium text-[var(--brand)] hover:underline">
                    {location.phone}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 