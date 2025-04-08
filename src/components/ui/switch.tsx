/**
 * Switch Component
 * 
 * A toggle control that allows users to turn an option on or off, presented visually as a switch.
 * Built on Radix UI's Switch primitive for consistent and accessible behavior.
 * 
 * Features:
 * - Visual toggle between two states (checked/unchecked)
 * - Animated transition between states
 * - Keyboard accessible (can be toggled using Space or Enter keys)
 * - Support for forms when used with proper labels
 * - Focus states with keyboard navigation
 * 
 * @example
 * ```tsx
 * <div className="flex items-center space-x-2">
 *   <Switch id="airplane-mode" />
 *   <Label htmlFor="airplane-mode">Airplane Mode</Label>
 * </div>
 * ```
 * 
 * @example
 * // With controlled state
 * ```tsx
 * function ControlledExample() {
 *   const [checked, setChecked] = React.useState(false)
 *   return (
 *     <div className="flex items-center space-x-2">
 *       <Switch 
 *         id="dark-mode" 
 *         checked={checked} 
 *         onCheckedChange={setChecked} 
 *       />
 *       <Label htmlFor="dark-mode">Dark Mode</Label>
 *     </div>
 *   )
 * }
 * ```
 * 
 * @accessibility
 * - Follows WAI-ARIA Switch pattern
 * - Uses correct role="switch" for screen readers
 * - Communicates state changes to assistive technology
 * - Supports keyboard navigation and activation
 * - Visual state is reinforced with both movement and color
 */
"use client"

import * as React from "react"
import * as SwitchPrimitives from "@radix-ui/react-switch"

import { cn } from "@/lib/utils"

/**
 * Switch component
 * 
 * A two-state toggle that can be controlled or uncontrolled.
 * 
 * @param className - Additional CSS classes to apply
 * @param checked - Whether the switch is checked (controlled mode)
 * @param defaultChecked - Whether the switch is initially checked (uncontrolled mode)
 * @param onCheckedChange - Function called when the checked state changes
 * @param disabled - Whether the switch is disabled
 * @param required - Whether the switch is required in a form
 * @param name - Name attribute for form submission
 * @param value - Value attribute for form submission
 */
const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
      className
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
      )}
    />
  </SwitchPrimitives.Root>
))
Switch.displayName = "Switch"

export { Switch }
