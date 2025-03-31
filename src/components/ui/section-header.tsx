import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

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