/**
 * Input Component
 * 
 * A flexible input field component for collecting user input in forms.
 * Built on the native input element with enhanced styling and accessibility.
 * 
 * Features:
 * - Consistent styling with the design system
 * - Support for various input types (text, email, password, etc.)
 * - Focus states with keyboard navigation support
 * - Customizable through className prop
 * - Appropriate sizing and padding for easy interaction
 * 
 * @example
 * ```tsx
 * <Input
 *   type="email"
 *   placeholder="Email address"
 *   value={email}
 *   onChange={(e) => setEmail(e.target.value)}
 *   required
 * />
 * ```
 * 
 * @example
 * ```tsx
 * <div className="grid w-full max-w-sm items-center gap-1.5">
 *   <Label htmlFor="name">Name</Label>
 *   <Input id="name" placeholder="Your name" />
 * </div>
 * ```
 * 
 * @accessibility
 * - Maintains native input accessibility features
 * - High contrast focus indicators for keyboard users
 * - Works with form validation and error messaging patterns
 * - Compatible with screen readers and other assistive technologies
 * - Supports aria-invalid and aria-describedby for error states
 */

import * as React from "react"

import { cn } from "@/lib/utils"

/**
 * Extended input component with consistent styling
 * 
 * @param className - Additional CSS classes to apply to the input
 * @param type - The input type (text, password, email, etc.)
 * @param props - All standard HTML input attributes
 */
export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
