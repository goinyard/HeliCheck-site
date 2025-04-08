/**
 * Checkbox Component
 * 
 * A form control component that allows users to select one or multiple items from a set.
 * Built on Radix UI's Checkbox primitive for accessible and consistent behavior.
 * 
 * Features:
 * - Supports checked, unchecked, and indeterminate states
 * - Customizable appearance through className
 * - Keyboard accessible (can be toggled using Space)
 * - Visual indicator with check mark when selected
 * - Supports disabled state with appropriate styling
 * 
 * @example
 * ```tsx
 * // Basic usage
 * <Checkbox />
 * 
 * // With label
 * <div className="flex items-center space-x-2">
 *   <Checkbox id="terms" />
 *   <Label htmlFor="terms">Accept terms and conditions</Label>
 * </div>
 * 
 * // Controlled component
 * function ControlledCheckbox() {
 *   const [checked, setChecked] = React.useState(false)
 *   return (
 *     <Checkbox 
 *       checked={checked} 
 *       onCheckedChange={setChecked} 
 *     />
 *   )
 * }
 * 
 * // Disabled state
 * <Checkbox disabled />
 * ```
 * 
 * @accessibility
 * - Follows WAI-ARIA Checkbox pattern
 * - Proper keyboard navigation and interaction
 * - Visual states communicated to assistive technology
 * - Supports form association with labels
 * - Maintains adequate color contrast between states
 */
"use client"

import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { Check } from "lucide-react"

import { cn } from "@/lib/utils"

/**
 * Checkbox component for selecting options in forms
 * 
 * @param className - Additional CSS classes to apply
 * @param checked - Whether the checkbox is checked (controlled mode)
 * @param defaultChecked - Whether the checkbox is initially checked (uncontrolled mode)
 * @param onCheckedChange - Function called when the checked state changes
 * @param disabled - Whether the checkbox is disabled
 * @param required - Whether the checkbox is required in a form
 * @param name - Name attribute for form submission
 * @param value - Value attribute for form submission
 */
const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      className,
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn("flex items-center justify-center text-current")}
    >
      <Check className="h-4 w-4" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
))
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox }
