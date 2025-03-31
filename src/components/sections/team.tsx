"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  title: string;
  description: string;
  image: string;
  department: string;
  skills: string[];
}

interface TeamProps {
  title?: string;
  subtitle?: string;
  description?: string;
  members?: TeamMember[];
  className?: string;
}

export function Team({
  title = "Industry Leaders in Geophysical Innovation",
  subtitle = "Our Team & Expertise",
  description = "Combining advanced technology with decades of specialized expertise to deliver superior survey results.",
  members = [
    // Leadership team
    {
      id: "team-1",
      name: "Dr. James Reynolds",
      role: "CEO & Founder",
      title: "Chief Executive Officer",
      description: "Ph.D. in Geophysics with 25+ years of experience developing advanced survey methodologies for mineral exploration.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      department: "Leadership",
      skills: ["Geophysics", "EM Technology"],
    },
    {
      id: "team-2",
      name: "Dr. Sarah Chen",
      role: "Chief Technical Officer",
      title: "Technical Innovation",
      description: "Leading innovation in electromagnetic survey technology with specialized expertise in data processing algorithms and instrumentation design.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80",
      department: "Leadership",
      skills: ["Data Science", "Equipment Design"],
    },
    {
      id: "team-3",
      name: "Michael Torres",
      role: "Director of Operations",
      title: "Global Field Operations",
      description: "20+ years managing complex survey operations in challenging environments across 6 continents. Expert in logistics and field operations.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      department: "Leadership",
      skills: ["Global Operations", "Safety"],
    },
    // Technical Team
    {
      id: "team-4",
      name: "Dr. Emily Parker",
      role: "Lead Geophysicist",
      title: "EM Data Specialist",
      description: "Specializing in electromagnetic data processing and interpretation with over 15 years of experience in mineral exploration.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      department: "Technical Team",
      skills: ["Data Processing", "EM Modeling"],
    },
    {
      id: "team-5",
      name: "Alex Wright",
      role: "Senior Engineer",
      title: "Equipment Design",
      description: "Expert in designing and maintaining helicopter-mounted geophysical survey equipment and calibration systems.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      department: "Technical Team",
      skills: ["Hardware Design", "System Integration"],
    },
    {
      id: "team-6",
      name: "Dr. Lisa Hernandez",
      role: "Data Scientist",
      title: "Machine Learning Specialist",
      description: "Applying advanced algorithms to enhance mineral deposit identification from geophysical survey data.",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      department: "Technical Team",
      skills: ["Machine Learning", "Neural Networks"],
    },
    // Operations
    {
      id: "team-7",
      name: "Robert Johnson",
      role: "Field Operations Manager",
      title: "Survey Team Lead",
      description: "Coordinating field teams and helicopter pilots to ensure efficient and safe survey operations in remote locations.",
      image: "https://images.unsplash.com/photo-1545167622-3a6ac756afa4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=824&q=80",
      department: "Operations",
      skills: ["Field Logistics", "Safety Procedures"],
    },
    {
      id: "team-8",
      name: "Sarah Williams",
      role: "Project Coordinator",
      title: "Client Relations",
      description: "Managing project timelines, client communications, and ensuring survey deliverables meet quality standards.",
      image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      department: "Operations",
      skills: ["Project Management", "Client Relations"],
    },
    {
      id: "team-9",
      name: "David Chen",
      role: "Logistics Specialist",
      title: "Global Deployment",
      description: "Expert in international logistics, equipment transport, and navigating regulatory requirements for survey operations worldwide.",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      department: "Operations",
      skills: ["International Logistics", "Regulatory Compliance"],
    }
  ],
  className,
}: TeamProps) {
  // Add state for animation
  const [previousTab, setPreviousTab] = useState<string>("leadership");
  const [activeTab, setActiveTab] = useState("leadership");
  const [isAnimating, setIsAnimating] = useState(false);
  
  // Group members by department for easier access
  const leadershipMembers = members.filter(member => member.department === "Leadership");
  const technicalMembers = members.filter(member => member.department === "Technical Team");
  const operationsMembers = members.filter(member => member.department === "Operations");

  // Handle tab change with animation
  const handleTabChange = (value: string) => {
    if (value === activeTab || isAnimating) return;
    setIsAnimating(true);
    setPreviousTab(activeTab);
    setActiveTab(value);
    
    // Reset animation state after transition completes
    setTimeout(() => {
      setIsAnimating(false);
    }, 300);
  };

  return (
    <section className={cn("py-20 pb-80 sm:pb-20 bg-white", className)} id="team">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="mb-4 px-3 py-1 rounded-full bg-[var(--brand)]/10 text-[var(--brand)] inline-flex items-center text-sm font-medium">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-3.5 w-3.5 mr-1" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
            {subtitle}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            {title}
          </h2>
          <p className="text-gray-500 md:text-lg max-w-3xl">
            {description}
          </p>
        </div>
        
        {/* Team Showcase with Shadcn Tabs */}
        <div className="mb-12">
          <Tabs defaultValue="leadership" className="w-full mb-8" value={activeTab} onValueChange={handleTabChange}>
            <TabsList className="grid grid-cols-3 max-w-md mx-auto h-[46px] text-base p-[3px]">
              <TabsTrigger 
                value="leadership" 
                className="px-6 py-2.5 data-[state=active]:translate-y-[-1px]"
              >
                Leadership
              </TabsTrigger>
              <TabsTrigger 
                value="technical" 
                className="px-6 py-2.5 data-[state=active]:translate-y-[-1px]"
              >
                Technical
              </TabsTrigger>
              <TabsTrigger 
                value="operations" 
                className="px-6 py-2.5 data-[state=active]:translate-y-[-1px]"
              >
                Operations
              </TabsTrigger>
            </TabsList>
            
            {/* Tab content container with preserved height */}
            <div className="relative mt-6 min-h-[520px] sm:min-h-[500px]">
              {/* Leadership Tab */}
              <TabsContent 
                value="leadership" 
                className={cn(
                  "absolute inset-0 transition-all duration-300 ease-in-out", 
                  activeTab === "leadership" 
                    ? "opacity-100 transform-none z-10 pointer-events-auto" 
                    : previousTab === "leadership" && isAnimating
                      ? "opacity-0 z-0 pointer-events-none" 
                      : "opacity-0 z-0 pointer-events-none hidden"
                )}
              >
                <div className="grid md:grid-cols-3 gap-6">
                  {leadershipMembers.map((member) => (
                    <div key={member.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                      <div className="aspect-[3/2] bg-gray-300 relative overflow-hidden">
                        <img 
                          src={member.image} 
                          alt={member.name}
                          className="w-full h-full object-cover object-top"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                        <div className="absolute bottom-3 left-4 text-white">
                          <p className="text-xs font-medium opacity-75">{member.title}</p>
                        </div>
                      </div>
                      <div className="p-5">
                        <h4 className="text-lg font-bold">{member.name}</h4>
                        <p className="text-sm text-gray-500">{member.role}</p>
                        <p className="text-sm text-gray-600 my-3">
                          {member.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {member.skills.map((skill, index) => (
                            <span key={index} className="inline-flex text-xs font-medium py-1 px-2 rounded-full border border-gray-200">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              {/* Technical Tab */}
              <TabsContent 
                value="technical" 
                className={cn(
                  "absolute inset-0 transition-all duration-300 ease-in-out", 
                  activeTab === "technical" 
                    ? "opacity-100 transform-none z-10 pointer-events-auto" 
                    : previousTab === "technical" && isAnimating
                      ? "opacity-0 z-0 pointer-events-none" 
                      : "opacity-0 z-0 pointer-events-none hidden"
                )}
              >
                <div className="grid md:grid-cols-3 gap-6">
                  {technicalMembers.map((member) => (
                    <div key={member.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                      <div className="aspect-[3/2] bg-gray-300 relative overflow-hidden">
                        <img 
                          src={member.image} 
                          alt={member.name}
                          className="w-full h-full object-cover object-top"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                        <div className="absolute bottom-3 left-4 text-white">
                          <p className="text-xs font-medium opacity-75">{member.title}</p>
                        </div>
                      </div>
                      <div className="p-5">
                        <h4 className="text-lg font-bold">{member.name}</h4>
                        <p className="text-sm text-gray-500">{member.role}</p>
                        <p className="text-sm text-gray-600 my-3">
                          {member.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {member.skills.map((skill, index) => (
                            <span key={index} className="inline-flex text-xs font-medium py-1 px-2 rounded-full border border-gray-200">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              {/* Operations Tab */}
              <TabsContent 
                value="operations" 
                className={cn(
                  "absolute inset-0 transition-all duration-300 ease-in-out", 
                  activeTab === "operations" 
                    ? "opacity-100 transform-none z-10 pointer-events-auto" 
                    : previousTab === "operations" && isAnimating
                      ? "opacity-0 z-0 pointer-events-none" 
                      : "opacity-0 z-0 pointer-events-none hidden"
                )}
              >
                <div className="grid md:grid-cols-3 gap-6">
                  {operationsMembers.map((member) => (
                    <div key={member.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                      <div className="aspect-[3/2] bg-gray-300 relative overflow-hidden">
                        <img 
                          src={member.image} 
                          alt={member.name}
                          className="w-full h-full object-cover object-top"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                        <div className="absolute bottom-3 left-4 text-white">
                          <p className="text-xs font-medium opacity-75">{member.title}</p>
                        </div>
                      </div>
                      <div className="p-5">
                        <h4 className="text-lg font-bold">{member.name}</h4>
                        <p className="text-sm text-gray-500">{member.role}</p>
                        <p className="text-sm text-gray-600 my-3">
                          {member.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {member.skills.map((skill, index) => (
                            <span key={index} className="inline-flex text-xs font-medium py-1 px-2 rounded-full border border-gray-200">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </div>
          </Tabs>
          
          <div className="text-center">
            <Button variant="brand" size="lg" className="gap-2">
              View Full Team
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        {/* Added spacer div to ensure clear separation on mobile */}
        <div className="h-20 md:hidden"></div>
        
        {/* Added Certification/Recognition Section - positioned below team cards */}
        <div className="relative pt-12 mt-20 sm:mt-16 mb-28 sm:mb-10 border-t border-gray-100">
          <div className="bg-white py-4">
            <p className="text-center text-gray-500 text-sm uppercase tracking-wider font-medium mb-8">
              Certifications & Industry Recognition
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 mb-10">
              <div className="h-16 w-32 flex items-center justify-center bg-gray-50 rounded-md p-4">
                <div className="text-gray-400 text-xs text-center">Industry Certification</div>
              </div>
              <div className="h-16 w-32 flex items-center justify-center bg-gray-50 rounded-md p-4">
                <div className="text-gray-400 text-xs text-center">Standards Badge</div>
              </div>
              <div className="h-16 w-32 flex items-center justify-center bg-gray-50 rounded-md p-4">
                <div className="text-gray-400 text-xs text-center">Safety Award</div>
              </div>
              <div className="h-16 w-32 flex items-center justify-center bg-gray-50 rounded-md p-4">
                <div className="text-gray-400 text-xs text-center">Industry Association</div>
              </div>
              <div className="h-16 w-32 flex items-center justify-center bg-gray-50 rounded-md p-4">
                <div className="text-gray-400 text-xs text-center">Quality Control</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 