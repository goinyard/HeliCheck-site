/**
 * Section Header Component
 * 
 * A versatile and consistent header for page sections featuring a branded pill/tag,
 * headings, and optional description text. Used to introduce major content sections
 * with visual hierarchy and consistent styling.
 * 
 * Features:
 * - Branded pill/tag with optional icon
 * - Flexible heading and subheading structure
 * - Optional description paragraph with customizable width
 * - Multiple alignment options (left, center, right)
 * - Support for dark mode contexts
 * - Responsive typography and spacing
 * 
 * @example
 * ```tsx
 * // Basic usage
 * <SectionHeader
 *   pillText="Features"
 *   heading="Powerful Features for Your Workflow"
 *   description="Discover how our platform can improve your productivity."
 * />
 * 
 * // With icon and alignment
 * <SectionHeader
 *   pillText="About Us" 
 *   pillIcon={Users}
 *   heading="Our Story"
 *   subheading="Since 2015"
 *   description="We've been revolutionizing this industry for over a decade."
 *   align="left"
 *   descriptionMaxWidth="2xl"
 * />
 * 
 * // In dark context
 * <div className="bg-gray-900 p-12">
 *   <SectionHeader
 *     pillText="Testimonials"
 *     heading="What Our Customers Say"
 *     description="Real feedback from real customers."
 *     dark={true}
 *   />
 * </div>
 * ```
 * 
 * @accessibility
 * - Uses semantic heading elements for proper document structure
 * - Maintains appropriate text contrast ratios
 * - Supports various text alignments for different design needs
 * - Preserves content readability with max-width constraints
 */
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

/**
 * Props for the SectionHeader component
 */
interface SectionHeaderProps {
  /** Text displayed in the pill/tag element */
  pillText: string;
  /** Optional icon component to display in the pill */
  pillIcon?: LucideIcon;
  /** Main section heading */
  heading: string;
  /** Optional subheading text */
  subheading?: string;
  /** Description paragraph text */
  description?: string;
  /** Maximum width for the description (default: 3xl) */
  descriptionMaxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "full" | "none";
  /** Alignment of the section header (default: center) */
  align?: "center" | "left" | "right";
  /** Whether to display the section header with a dark background (default: false) */
  dark?: boolean;
  /** Additional className to apply to the section header container */
  className?: string;
}

/**
 * A versatile section header component for indicating the start of major content sections
 * 
 * @param pillText - Text to display in the pill/tag
 * @param pillIcon - Optional icon component to display in the pill
 * @param heading - Main heading text
 * @param subheading - Optional subheading text displayed above the main heading
 * @param description - Optional description paragraph
 * @param descriptionMaxWidth - Maximum width constraint for the description text
 * @param align - Text alignment for the entire section header
 * @param dark - Whether the component is displayed on a dark background
 * @param className - Additional CSS classes to apply
 */
export function SectionHeader({
  pillText,
  pillIcon: PillIcon,
  heading,
  subheading,
  description,
  descriptionMaxWidth = "3xl",
  align = "center",
  dark = false,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn(
      "flex flex-col mb-16",
      align === "center" && "items-center text-center",
      align === "left" && "items-start text-left",
      align === "right" && "items-end text-right",
      className
    )}>
      {/* Pill/tag */}
      <div className="mb-4 px-3 py-1 rounded-full bg-[var(--brand)]/10 text-[var(--brand)] inline-flex items-center text-sm font-medium">
        {PillIcon && <PillIcon className="h-3.5 w-3.5 mr-1" />}
        {pillText}
      </div>

      {/* Optional subheading */}
      {subheading && (
        <div className="text-xl text-gray-700 mb-2">{subheading}</div>
      )}

      {/* Main heading */}
      <h2 className="text-4xl font-bold tracking-tight mb-4">
        {heading}
      </h2>
      
      {/* Description */}
      {description && (
        <p className={cn(
          "text-gray-500 text-lg",
          `max-w-${descriptionMaxWidth}`,
          align === "center" && "mx-auto",
          dark && "text-gray-300",
          "mb-6"
        )}>
          {description}
        </p>
      )}
    </div>
  );
} 