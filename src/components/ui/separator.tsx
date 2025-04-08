/**
 * Separator Component
 * 
 * A visual divider that separates content. Useful for creating visual hierarchy 
 * and organizing content into distinct sections.
 * 
 * Built on Radix UI's Separator primitive for accessibility and consistent behavior.
 * 
 * Features:
 * - Horizontal or vertical orientation
 * - Consistent styling with the design system
 * - Simple implementation with customizable appearance
 * - Semantic separator with appropriate ARIA attributes
 * - Thin design that provides visual separation without taking up excessive space
 * 
 * @example
 * ```tsx
 * // Basic horizontal separator
 * <Separator />
 * 
 * // Vertical separator
 * <div className="flex h-5 items-center">
 *   <div>Content Left</div>
 *   <Separator orientation="vertical" className="mx-2" />
 *   <div>Content Right</div>
 * </div>
 * 
 * // Styled separator
 * <Separator className="my-6 bg-primary/50" />
 * 
 * // Non-decorative separator (for semantic purposes)
 * <Separator decorative={false} />
 * ```
 * 
 * @accessibility
 * - Semantically meaningful with appropriate ARIA attributes
 * - Can be marked as decorative to exclude from accessibility tree when appropriate
 * - Maintains adequate color contrast with surrounding content
 * - Provides visual separation without relying solely on color
 */
"use client"

import * as React from "react"
import * as SeparatorPrimitive from "@radix-ui/react-separator"

import { cn } from "@/lib/utils"

/**
 * Separator component that creates a visual divider between content
 * 
 * @param className - Additional CSS classes to apply
 * @param orientation - Direction of the separator (horizontal or vertical)
 * @param decorative - Whether the separator is purely decorative (true) or semantically meaningful (false)
 */
function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}: React.ComponentProps<typeof SeparatorPrimitive.Root>) {
  return (
    <SeparatorPrimitive.Root
      data-slot="separator-root"
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        className
      )}
      {...props}
    />
  )
}

export { Separator }
