/**
 * Card Component System
 * 
 * A versatile card component system for creating structured content containers with consistent styling.
 * Cards provide a flexible way to group related information and UI elements with a clean visual hierarchy.
 * 
 * Features:
 * - Modular structure with header, content, and footer components
 * - Consistent styling with rounded corners, subtle borders, and shadows
 * - Flexible content organization with title and description components
 * - Responsive design that works well at various screen sizes
 * - Customizable through className props on all subcomponents
 * 
 * @example
 * // Basic card with title and content
 * <Card>
 *   <CardHeader>
 *     <CardTitle>Account Settings</CardTitle>
 *     <CardDescription>Manage your account preferences.</CardDescription>
 *   </CardHeader>
 *   <CardContent>
 *     <p>Your account settings content goes here...</p>
 *   </CardContent>
 *   <CardFooter>
 *     <Button>Save Changes</Button>
 *   </CardFooter>
 * </Card>
 * 
 * // Simple card with just content
 * <Card>
 *   <CardContent>
 *     <p>A simple content-only card.</p>
 *   </CardContent>
 * </Card>
 */
import * as React from "react"

import { cn } from "@/lib/utils"

/**
 * Card - The root container component that provides the card styling
 * 
 * @param className - Additional CSS classes to apply
 * @param props - Standard div element props
 */
const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      className,
    )}
    {...props}
  />
))
Card.displayName = "Card"

/**
 * CardHeader - Container for card title and description
 * 
 * Provides consistent spacing and layout for the top section of a card.
 * 
 * @param className - Additional CSS classes to apply
 * @param props - Standard div element props
 */
const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

/**
 * CardTitle - Heading element for the card
 * 
 * Provides a visually prominent title for the card content.
 * Renders as an h3 element by default for appropriate heading hierarchy.
 * 
 * @param className - Additional CSS classes to apply
 * @param props - Standard heading element props
 */
const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className,
    )}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

/**
 * CardDescription - Secondary text that provides additional context
 * 
 * Displays supporting information with subdued styling to maintain visual hierarchy.
 * 
 * @param className - Additional CSS classes to apply
 * @param props - Standard paragraph element props
 */
const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

/**
 * CardContent - Main content area of the card
 * 
 * Container for the primary content with consistent padding.
 * Has reduced top padding when used after a CardHeader.
 * 
 * @param className - Additional CSS classes to apply
 * @param props - Standard div element props
 */
const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

/**
 * CardFooter - Container for actions or secondary content
 * 
 * Provides consistent styling for the bottom section of a card,
 * typically used for buttons, links, or metadata.
 * 
 * @param className - Additional CSS classes to apply
 * @param props - Standard div element props
 */
const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
