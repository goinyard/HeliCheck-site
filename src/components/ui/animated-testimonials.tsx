/**
 * Animated Testimonials Component
 * 
 * A dynamic testimonial carousel that displays quotes and images with smooth animations.
 * Features stacked card visuals, word-by-word text reveals, and navigation controls.
 * 
 * Features:
 * - Animated transitions between testimonials
 * - Staggered word-by-word text reveal animation
 * - Random rotation effects for a natural stacked appearance
 * - Automatic cycling with configurable autoplay
 * - Responsive layout with mobile and desktop support
 * - Manual navigation controls with animated buttons
 * 
 * @example
 * ```tsx
 * const testimonials = [
 *   {
 *     quote: "This product has completely transformed our workflow.",
 *     name: "Alex Johnson",
 *     designation: "CTO, TechCorp",
 *     src: "/images/testimonials/alex.jpg"
 *   },
 *   {
 *     quote: "The best solution we've found in years of searching.",
 *     name: "Sam Williams",
 *     designation: "Product Manager, Innovate Inc",
 *     src: "/images/testimonials/sam.jpg"
 *   }
 * ];
 * 
 * <AnimatedTestimonials 
 *   testimonials={testimonials} 
 *   autoplay={true} 
 *   className="my-12"
 * />
 * ```
 * 
 * @accessibility
 * - Navigation buttons have proper hover/focus states
 * - Images include alt text with the person's name
 * - Content maintains appropriate contrast levels
 * - Interactive elements are keyboard navigable
 */
"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState, useRef, useCallback } from "react";
import { cn } from "@/lib/utils";

/**
 * Represents a single testimonial item
 * 
 * @property quote - The testimonial text
 * @property name - The name of the person giving the testimonial
 * @property designation - The job title or organization of the person
 * @property src - The path to the image of the person
 */
type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
};

/**
 * Animated testimonial carousel with customizable behavior and appearance
 * 
 * @param testimonials - Array of testimonial objects to display
 * @param autoplay - Whether to automatically cycle through testimonials (defaults to false)
 * @param className - Additional CSS classes to apply to the container
 */
export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
  className,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
  className?: string;
}) => {
  const [active, setActive] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const rotationValues = useRef<number[]>([]);

  // Initialize rotation values on mount to avoid hydration mismatch
  useEffect(() => {
    // Pre-calculate rotation values for each testimonial
    if (rotationValues.current.length === 0) {
      rotationValues.current = testimonials.map(() => Math.floor(Math.random() * 21) - 10);
    }
    setIsClient(true);
  }, [testimonials]);

  /**
   * Advances to the next testimonial in the carousel
   */
  const handleNext = useCallback(() => {
    setActive((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  /**
   * Goes back to the previous testimonial in the carousel
   */
  const handlePrev = useCallback(() => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  /**
   * Checks if the given index is the currently active testimonial
   */
  const isActive = (index: number) => {
    return index === active;
  };

  // Set up autoplay if enabled
  useEffect(() => {
    if (autoplay && isClient) {
      const interval = setInterval(handleNext, 10000);
      return () => clearInterval(interval);
    }
  }, [autoplay, isClient, handleNext]);

  /**
   * Gets the rotation value for a testimonial while ensuring SSR compatibility
   */
  const getRotationValue = (index: number) => {
    if (!isClient) return 0; // Use 0 during server rendering
    return rotationValues.current[index] || 0;
  };

  return (
    <div className={cn("max-w-sm md:max-w-4xl mx-auto px-4 md:px-8 lg:px-12 py-10", className)}>
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-20">
        <div>
          <div className="relative h-80 w-full">
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.src}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: getRotationValue(index),
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : getRotationValue(index),
                    zIndex: isActive(index)
                      ? 10
                      : 1 + testimonials.length - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: getRotationValue(index),
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 origin-bottom"
                >
                  <Image
                    src={testimonial.src}
                    alt={testimonial.name}
                    width={500}
                    height={500}
                    draggable={false}
                    className="h-full w-full rounded-3xl object-cover object-center"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        <div className="flex justify-between flex-col py-4">
          <motion.div
            key={active}
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -20,
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
          >
            <h3 className="text-2xl font-bold text-foreground">
              {testimonials[active].name}
            </h3>
            <p className="text-sm text-muted-foreground">
              {testimonials[active].designation}
            </p>
            <motion.p className="text-lg text-muted-foreground mt-8">
              {testimonials[active].quote.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{
                    filter: "blur(10px)",
                    opacity: 0,
                    y: 5,
                  }}
                  animate={{
                    filter: "blur(0px)",
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: 0.02 * index,
                  }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
          </motion.div>
          <div className="flex gap-4 pt-12 md:pt-0">
            <button
              onClick={handlePrev}
              className="h-7 w-7 rounded-full bg-secondary flex items-center justify-center group/button cursor-pointer"
              aria-label="Previous testimonial"
            >
              <IconArrowLeft className="h-5 w-5 text-foreground group-hover/button:rotate-12 transition-transform duration-300" />
            </button>
            <button
              onClick={handleNext}
              className="h-7 w-7 rounded-full bg-secondary flex items-center justify-center group/button cursor-pointer"
              aria-label="Next testimonial"
            >
              <IconArrowRight className="h-5 w-5 text-foreground group-hover/button:-rotate-12 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};