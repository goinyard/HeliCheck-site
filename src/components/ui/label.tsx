/**
 * Label Component
 * 
 * An accessible label component for form controls. Provides a text description
 * for inputs, checkboxes, radio buttons, and other interactive elements.
 * 
 * Features:
 * - Automatic association with form controls using htmlFor
 * - Visual styling consistent with the design system
 * - Support for disabled states when paired with disabled inputs
 * - Flexible positioning with gap handling for adjacent elements
 * - Automatic cursor changes when associated inputs are disabled
 * 
 * @example
 * ```tsx
 * // Basic usage with an input
 * <div className="grid w-full max-w-sm items-center gap-1.5">
 *   <Label htmlFor="email">Email</Label>
 *   <Input type="email" id="email" placeholder="Enter your email" />
 * </div>
 * 
 * // With a checkbox
 * <div className="flex items-center space-x-2">
 *   <Checkbox id="terms" />
 *   <Label htmlFor="terms">Accept terms and conditions</Label>
 * </div>
 * 
 * // With a disabled input
 * <div className="grid gap-1.5">
 *   <Label htmlFor="disabled-input">Disabled Field</Label>
 *   <Input id="disabled-input" disabled />
 * </div>
 * ```
 * 
 * @accessibility
 * - Properly associates with form controls for screen readers
 * - Provides appropriate cursor feedback for disabled states
 * - Supports focus management through label click
 * - Maintains adequate text contrast
 * - Follows best practices for form labeling
 */
"use client"

import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"

import { cn } from "@/lib/utils"

/**
 * Label component for form controls
 * 
 * @param className - Additional CSS classes to apply to the label
 * @param htmlFor - ID of the form element this label is associated with
 * @param children - Label content
 */
function Label({
  className,
  ...props
}: React.ComponentProps<typeof LabelPrimitive.Root>) {
  return (
    <LabelPrimitive.Root
      data-slot="label"
      className={cn(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
}

export { Label }
