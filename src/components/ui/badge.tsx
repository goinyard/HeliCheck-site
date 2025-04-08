/**
 * Badge Component
 * 
 * A small visual indicator component for displaying statuses, counts, or labels.
 * Commonly used to highlight states, categories, or counts in UI elements.
 * 
 * Features:
 * - Multiple style variants (default, secondary, destructive, outline)
 * - Consistent sizing and padding
 * - Can be rendered as different elements using asChild
 * - Support for icons or additional content alongside text
 * - Compact design for minimal UI footprint
 * 
 * @example
 * ```tsx
 * // Basic usage
 * <Badge>New</Badge>
 * 
 * // With variants
 * <Badge variant="secondary">Popular</Badge>
 * <Badge variant="destructive">Sold Out</Badge>
 * <Badge variant="outline">Featured</Badge>
 * 
 * // With icon
 * <Badge>
 *   <CheckIcon className="mr-1 h-3 w-3" />
 *   Completed
 * </Badge>
 * 
 * // As link
 * <Badge asChild>
 *   <Link href="/categories/new">New Items</Link>
 * </Badge>
 * ```
 * 
 * @accessibility
 * - Color is not used as the only means of conveying information
 * - Maintains adequate text contrast in all variants
 * - Can be navigated and activated when used as interactive elements
 */
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

/**
 * Badge style variants defined with class-variance-authority
 * 
 * Includes styles for different visual variants:
 * - default: Primary color with white text
 * - secondary: Secondary color with appropriate text contrast
 * - destructive: Error/warning color for critical statuses
 * - outline: Bordered style with transparent background
 */
const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
        destructive:
          "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

/**
 * Badge component for displaying status indicators and labels
 * 
 * @param className - Additional CSS classes to apply
 * @param variant - Visual style variant (default, secondary, destructive, outline)
 * @param asChild - Whether to merge props onto the immediate child
 * @param props - Additional props for the underlying element
 */
function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span"

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
