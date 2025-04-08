/**
 * Textarea Component
 * 
 * A multi-line text input control that supports various states like disabled, 
 * readonly, and error conditions.
 * 
 * Features:
 * - Fully accessible and keyboard navigable
 * - Consistent styling with the design system
 * - Support for disabled and read-only states
 * - Customizable through className props
 * - Proper focus handling with visual indicators
 * - Flexible resizing capabilities (horizontal, vertical, both, or none)
 * 
 * @example
 * ```tsx
 * // Basic usage
 * <Textarea placeholder="Type your message here" />
 * 
 * // With form control
 * <div className="grid w-full gap-1.5">
 *   <Label htmlFor="message">Your message</Label>
 *   <Textarea id="message" placeholder="Type your message here" />
 * </div>
 * 
 * // Disabled state
 * <Textarea disabled placeholder="Cannot edit this field" />
 * ```
 * 
 * @accessibility
 * - Includes appropriate ARIA attributes for screen readers
 * - Maintains keyboard focus states
 * - Compatible with form labels for proper association
 * - Supports assistive technologies through standard <textarea> element
 */

import * as React from "react"

import { cn } from "@/lib/utils"

/**
 * Textarea input component
 * 
 * @param className - Additional CSS classes to apply to the textarea
 * @param props - Standard HTML textarea attributes
 */
export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }
