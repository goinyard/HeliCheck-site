/**
 * Button Component
 * 
 * A versatile button component with multiple variants and sizes that follows accessibility best practices.
 * Built with Radix UI Slot primitive for composition flexibility, allowing button functionality to be applied
 * to any element using the asChild prop.
 * 
 * Features:
 * - Multiple visual variants including brand-specific styles
 * - Responsive sizing options
 * - Support for icons with automatic spacing
 * - Full keyboard navigation support
 * - Accessible focus states with visible focus rings
 * - Disabled states with appropriate visual feedback
 * 
 * @example
 * // Default button
 * <Button>Click me</Button>
 * 
 * // Brand button with large size
 * <Button variant="brand" size="lg">Book a Survey</Button>
 * 
 * // Outline button with icon
 * <Button variant="brandOutline" size="lg">
 *   <ArrowRight /> Explore Services
 * </Button>
 * 
 * // As child pattern (rendering as a link)
 * <Button asChild variant="link">
 *   <a href="/services">Learn more</a>
 * </Button>
 * 
 * @accessibility
 * - Maintains native button semantics by default
 * - Preserves focus visibility for keyboard users
 * - Includes appropriate ARIA attributes
 * - Supports screen readers with proper role information
 */
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

/**
 * Button variant and size definitions using class-variance-authority
 * 
 * The button component supports numerous visual variants and size options
 * through a comprehensive set of Tailwind CSS classes.
 * 
 * @property {object} variants - Available visual and size variants
 * @property {object} variants.variant - Visual style variants
 * @property {object} variants.size - Size variants with appropriate spacing
 * @property {object} defaultVariants - Default variant and size if not specified
 */
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
        brand: 
          "bg-[var(--brand)] text-white shadow-lg shadow-[var(--brand)]/20 hover:bg-[var(--brand)]/90 hover:shadow-[var(--brand)]/30 transition-colors font-medium tracking-wide",
        brandOutline:
          "border-2 border-slate-200 text-slate-800 bg-transparent hover:bg-slate-50 hover:border-[var(--brand)]/20 hover:text-[var(--brand)] transition-all duration-300 font-medium tracking-wide",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

/**
 * Button component implementation
 * 
 * @param {string} className - Additional CSS classes to apply
 * @param {string} variant - Visual style variant
 * @param {string} size - Size variant
 * @param {boolean} asChild - Whether to render as a slot (to wrap other elements)
 * @param {React.ComponentProps<"button">} props - All native button attributes
 * 
 * @returns {JSX.Element} - Button component with appropriate styling and behavior
 */
function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
