"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState, useEffect } from "react";

interface ServicesProps {
  className?: string;
}

export function Services({ className }: ServicesProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section id="services" className={cn("bg-white", className)}>
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="mb-4 px-3 py-1 rounded-full bg-[var(--brand)]/10 text-[var(--brand)] inline-flex items-center text-sm font-medium">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
            Geophysical Services
          </div>
          <h2 className="text-4xl font-bold tracking-tight mb-4">
            Our Survey Solutions
          </h2>
          <p className="text-gray-500 text-lg max-w-3xl mb-6">
            Our surveys deliver unparalleled data quality capabilities for mineral exploration worldwide.
          </p>
        </div>

        {/* Featured Service Card */}
        <div className="max-w-7xl mx-auto bg-[var(--brand)]/5 p-6 sm:p-10 rounded-2xl mb-12">
          <div className="mb-4">
            <span className="bg-[var(--brand)] text-white px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase">
              Featured Service
            </span>
          </div>
          
          <h3 className="text-4xl font-bold text-gray-900 mb-2 tracking-tight">
            Helicopter Airborne Electromagnetic Survey 
          </h3>
          <div className="w-24 h-1 bg-[var(--brand)] rounded-full mb-6"></div>
          
          <div className="md:grid grid-cols-12 gap-8 items-start">
            {/* Left column - Image */}
            <div className="col-span-5 mb-6 md:mb-0">
              <div className="bg-[var(--brand)]/10 rounded-2xl aspect-[4/3] overflow-hidden shadow-lg">
                {isMounted && (
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  >
                    <source src="https://videos.pexels.com/video-files/8761462/8761462-uhd_2560_1440_30fps.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>
            </div>
            
            {/* Right column - Content */}
            <div className="col-span-7">
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                HeliCheck specializes in helicopter-borne electromagnetic (EM) surveys that deliver unmatched data quality for mineral exploration worldwide. 
                Our helicopter EM technology enables geologists and data scientists to identify promising mineral deposits that ground-based surveys might miss entirely. 
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 mb-10">
                <div className="flex items-start group">
                  <div className="mt-1 mr-4 flex-shrink-0 h-8 w-8 rounded-full bg-[var(--brand)]/10 flex items-center justify-center group-hover:bg-[var(--brand)]/20 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[var(--brand)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
                  </div>
                  <div className="whitespace-nowrap">
                    <h4 className="font-semibold text-gray-900 mb-1">Industry-Leading</h4>
                    <p className="text-sm text-gray-500">Survey technology</p>
                  </div>
                </div>
                <div className="flex items-start group">
                  <div className="mt-1 mr-4 flex-shrink-0 h-8 w-8 rounded-full bg-[var(--brand)]/10 flex items-center justify-center group-hover:bg-[var(--brand)]/20 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[var(--brand)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
                  </div>
                  <div className="whitespace-nowrap">
                    <h4 className="font-semibold text-gray-900 mb-1">Higher Resolution</h4>
                    <p className="text-sm text-gray-500">Data accuracy</p>
                  </div>
                </div>
                <div className="flex items-start group">
                  <div className="mt-1 mr-4 flex-shrink-0 h-8 w-8 rounded-full bg-[var(--brand)]/10 flex items-center justify-center group-hover:bg-[var(--brand)]/20 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[var(--brand)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                  </div>
                  <div className="whitespace-nowrap">
                    <h4 className="font-semibold text-gray-900 mb-1">Global Standard</h4>
                    <p className="text-sm text-gray-500">Compliance</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-[var(--brand)] hover:bg-[var(--brand)]/80 text-white px-6 py-3 rounded-lg font-medium transition-colors shadow-sm hover:shadow cursor-pointer">
                  Book a Survey
                </button>
                <Link 
                  href="/services/helicheck-em"
                  className="border border-[var(--brand)] text-[var(--brand)] hover:bg-[var(--brand)]/5 px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center cursor-pointer"
                >
                  <span className="mr-2">Explore HeliCheck EM</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                </Link>
              </div>
            </div>
          </div>
        </div>

       
            
          
        
        {/* Services Grid - Clean Minimalist Cards with Added Technical Information */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold mb-8 text-center">Other Survey Services</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Service 1 */}
            <Link href="/services/sam" className="block h-full group">
              <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 h-full cursor-pointer border border-gray-100 hover:border-[var(--brand)]/20">
                <div className="aspect-video bg-gray-200 relative overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt="Sub-Audio Magnetics" 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="font-bold text-lg text-gray-800 group-hover:text-[var(--brand)] transition-colors duration-300">Sub-Audio Magnetics</h4>
                    <span className="bg-[var(--brand)]/5 text-[var(--brand)] text-xs px-3 py-1.5 rounded-full font-semibold">Ground Survey</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    Simultaneous measurement of magnetic and electrical properties of the sub-surface.
                  </p>
                  <div className="text-xs text-gray-500 mb-4 border-t border-gray-100 pt-3"><span className="font-semibold">Depth:</span> 100-400m</div>
                  <div className="mt-auto flex items-center text-[var(--brand)] font-medium text-sm">
                    <span className="mr-2 group-hover:mr-3 transition-all duration-300">Explore SAM</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                  </div>
                </div>
              </div>
            </Link>
            
            {/* Service 2 */}
            <Link href="/services/samson" className="block h-full group">
              <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 h-full cursor-pointer border border-gray-100 hover:border-[var(--brand)]/20">
                <div className="aspect-video bg-gray-200 relative overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/29035007/pexels-photo-29035007/free-photo-of-archaeological-survey-at-perigueux-ruins.jpeg" 
                    alt="SAMSON" 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="font-bold text-lg text-gray-800 group-hover:text-[var(--brand)] transition-colors duration-300">SAMSON</h4>
                    <span className="bg-[var(--brand)]/5 text-[var(--brand)] text-xs px-3 py-1.5 rounded-full font-semibold">Ground Survey</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    Low frequency technology for deep exploration with enhanced signal penetration.
                  </p>
                  <div className="text-xs text-gray-500 mb-4 border-t border-gray-100 pt-3"><span className="font-semibold">Depth:</span> 200-800m</div>
                  <div className="mt-auto flex items-center text-[var(--brand)] font-medium text-sm">
                    <span className="mr-2 group-hover:mr-3 transition-all duration-300">Explore SAMSON</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                  </div>
                </div>
              </div>
            </Link>
            
            {/* Service 3 */}
            <Link href="/services/borehole" className="block h-full group">
              <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 h-full cursor-pointer border border-gray-100 hover:border-[var(--brand)]/20">
                <div className="aspect-video bg-gray-200 relative overflow-hidden">
                  <img 
                    src="https://www.engineerlive.com/sites/engineerlive/files/Renishaw%20198ce103e0f9498f8b03ffc5c5f11358.jpg" 
                    alt="Borehole Surveys" 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="font-bold text-lg text-gray-800 group-hover:text-[var(--brand)] transition-colors duration-300">Borehole Surveys</h4>
                    <span className="bg-[var(--brand)]/5 text-[var(--brand)] text-xs px-3 py-1.5 rounded-full font-semibold">Subsurface</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    EM and MMR sub-surface measurements for detailed underground analysis.
                  </p>
                  <div className="text-xs text-gray-500 mb-4 border-t border-gray-100 pt-3"><span className="font-semibold">Depth:</span> Variable</div>
                  <div className="mt-auto flex items-center text-[var(--brand)] font-medium text-sm">
                    <span className="mr-2 group-hover:mr-3 transition-all duration-300">Explore Borehole</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                  </div>
                </div>
              </div>
            </Link>
            
            {/* Service 4 */}
            <Link href="/services/ip" className="block h-full group">
              <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 h-full cursor-pointer border border-gray-100 hover:border-[var(--brand)]/20">
                <div className="aspect-video bg-gray-200 relative overflow-hidden">
                  <img 
                    src="https://zonge.com.au/wp-content/uploads/2019/07/Techknology.jpg" 
                    alt="Induced Polarisation" 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="font-bold text-lg text-gray-800 group-hover:text-[var(--brand)] transition-colors duration-300">Induced Polarisation</h4>
                    <span className="bg-[var(--brand)]/5 text-[var(--brand)] text-xs px-3 py-1.5 rounded-full font-semibold">Ground Survey</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    Mapping ground resistivity and chargeability in time or frequency mode.
                  </p>
                  <div className="text-xs text-gray-500 mb-4 border-t border-gray-100 pt-3"><span className="font-semibold">Depth:</span> 300-600m</div>
                  <div className="mt-auto flex items-center text-[var(--brand)] font-medium text-sm">
                    <span className="mr-2 group-hover:mr-3 transition-all duration-300">Explore IP</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                  </div>
                </div>
              </div>
            </Link>
            
            {/* Service 5 */}
            <Link href="/services/surface-em" className="block h-full group">
              <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 h-full cursor-pointer border border-gray-100 hover:border-[var(--brand)]/20">
                <div className="aspect-video bg-gray-200 relative overflow-hidden">
                  <img 
                    src="https://d9-wret.s3.us-west-2.amazonaws.com/assets/palladium/production/s3fs-public/styles/full_width/public/thumbnails/image/2017-07-20_geological-characterization-mojave.jpg" 
                    alt="Surface EM" 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="font-bold text-lg text-gray-800 group-hover:text-[var(--brand)] transition-colors duration-300">Surface EM</h4>
                    <span className="bg-[var(--brand)]/5 text-[var(--brand)] text-xs px-3 py-1.5 rounded-full font-semibold">Ground Survey</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    Mapping groundwater, mining tailings dams, and environmentally compromised sites.
                  </p>
                  <div className="text-xs text-gray-500 mb-4 border-t border-gray-100 pt-3"><span className="font-semibold">Depth:</span> 50-200m</div>
                  <div className="mt-auto flex items-center text-[var(--brand)] font-medium text-sm">
                    <span className="mr-2 group-hover:mr-3 transition-all duration-300">Explore Surface EM</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                  </div>
                </div>
              </div>
            </Link>
            
            {/* Service 6 */}
            <Link href="/services/environmental" className="block h-full group">
              <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 h-full cursor-pointer border border-gray-100 hover:border-[var(--brand)]/20">
                <div className="aspect-video bg-gray-200 relative overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/8961154/pexels-photo-8961154.jpeg" 
                    alt="Environmental Surveys" 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="font-bold text-lg text-gray-800 group-hover:text-[var(--brand)] transition-colors duration-300">Environmental Surveys</h4>
                    <span className="bg-[var(--brand)]/5 text-[var(--brand)] text-xs px-3 py-1.5 rounded-full font-semibold">Specialized</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    Specialized solutions for groundwater mapping and environmental site assessment.
                  </p>
                  <div className="text-xs text-gray-500 mb-4 border-t border-gray-100 pt-3"><span className="font-semibold">Depth:</span> Variable</div>
                  <div className="mt-auto flex items-center text-[var(--brand)] font-medium text-sm">
                    <span className="mr-2 group-hover:mr-3 transition-all duration-300">Explore Environmental</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
        
        {/* CTA Section - From Previous Design */}
        <div className="bg-[var(--brand)] rounded-2xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-10 flex flex-col justify-center">
              <h3 className="text-3xl font-bold text-white mb-4">Ready to discover what lies beneath?</h3>
              <p className="text-[var(--brand-foreground)]/80 mb-8">
                Contact our team to discuss your exploration needs and discover how HeliCheck&apos;s advanced geophysical services can transform your project.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-white text-[var(--brand)] hover:bg-[var(--brand-foreground)]/90 px-6 py-3 rounded-lg font-medium transition-colors shadow-sm hover:shadow cursor-pointer">
                  Book a Survey
                </button>
                <button className="bg-transparent border border-white text-white hover:bg-white/10 px-6 py-3 rounded-lg font-medium transition-colors cursor-pointer">
                  Download Brochure
                </button>
              </div>
            </div>
            <div className="hidden md:block relative">
              <img 
                src="https://d9-wret.s3.us-west-2.amazonaws.com/assets/palladium/production/s3fs-public/styles/full_width/public/thumbnails/image/geology-groundwater-survey-helicopter.jpg"
                alt="Helicopter survey"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[var(--brand)]/30"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 