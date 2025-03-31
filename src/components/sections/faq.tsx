"use client";

import { cn } from "@/lib/utils";
import { Faq3 } from "@/components/blocks/faq3";

interface FaqProps {
  className?: string;
}

export function FAQ({ className }: FaqProps) {
  const faqItems = [
    {
      id: "faq-1",
      question: "What types of geophysical surveys does HeliCheck offer?",
      answer: "HeliCheck specializes in helicopter-borne electromagnetic (EM) surveys that deliver unmatched data quality for mineral exploration. We also offer Sub-Audio Magnetics (SAM), SAMSON deep exploration, borehole surveys, Induced Polarisation surveys, Surface EM, and environmental surveys tailored to your specific exploration needs."
    },
    {
      id: "faq-2",
      question: "Which countries does HeliCheck operate in?",
      answer: "HeliCheck operates globally with established operations in Canada (headquarters in Saskatoon), Chile, Denmark, South Africa, China, and Australia. We have the capability to mobilize to most locations worldwide with proper permitting."
    },
    {
      id: "faq-3",
      question: "What depth of exploration can your helicopter EM surveys achieve?",
      answer: "Our helicopter EM surveys can detect conductive bodies at depths ranging from near-surface to over 300 meters depending on the geological conditions, survey parameters, and the conductivity contrast between the target and surrounding rocks."
    },
    {
      id: "faq-4",
      question: "How long does a typical HeliCheck survey take to complete?",
      answer: "Survey duration depends on the size of the area, line spacing, and weather conditions. Typically, we can cover 100-150 line kilometers per day. We provide detailed timeline estimates during the quotation process based on your specific project requirements."
    },
    {
      id: "faq-5",
      question: "What data deliverables can I expect from a HeliCheck survey?",
      answer: "Our standard deliverables include processed data in industry-standard formats (GDB, ASCII, GeoTIFF), maps and images of all measured and derived parameters, interpretation reports, and full documentation of the survey parameters and processing steps."
    },
    {
      id: "faq-6",
      question: "How does HeliCheck ensure data quality?",
      answer: "Our staff are dedicated to producing the highest quality data. We employ rigorous quality control protocols during data acquisition, in-field quality control, processing, and final reporting. All data undergoes multiple validation steps before delivery to clients."
    },
    {
      id: "faq-7",
      question: "What makes HeliCheck different from other geophysical survey providers?",
      answer: "HeliCheck is managed by a committed group of geophysicists and engineers with over 30 years of experience in developing advanced survey instrumentation and techniques. Our proprietary technologies enable greater depth of exploration and higher resolution surveys, providing better quality and less ambiguous data that are obtained more efficiently than with conventional methods."
    }
  ];

  return (
    <section id="faq" className={cn("pt-0 pb-4 bg-white", className)}>
      <div className="container px-4 md:px-6 mx-auto">
        <Faq3
          pillText="Common Questions"
          heading={{
            bold: "Frequently Asked",
            light: "Questions"
          }}
          description="Find answers to common questions about our geophysical survey services. If you have other questions, our technical team is ready to assist you."
          items={faqItems}
          supportHeading="Ready to discover what lies beneath?"
          supportDescription="Contact our team to discuss your exploration needs and discover how HeliCheck's advanced helicopter-borne survey technology can transform your project and help you find what others miss."
          supportButtonText="Book a Survey"
          supportButtonUrl="/contact"
          secondaryButtonText="Contact Us"
          secondaryButtonUrl="/quote"
        />
      </div>
    </section>
  );
} 