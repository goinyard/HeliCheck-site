"use client"

/**
 * Tooltip Component
 * 
 * A popup component that displays informative text when users hover over or focus on an element.
 * Built on Radix UI's Tooltip primitive for consistent and accessible behavior.
 * 
 * Features:
 * - Contextual help or information on hover/focus
 * - Customizable appearance via CSS variables
 * - Configurable delay for showing and hiding
 * - Proper positioning that avoids viewport edges
 * - Animated enter/exit transitions
 * 
 * @example
 * ```tsx
 * <Tooltip>
 *   <TooltipTrigger asChild>
 *     <Button variant="outline" size="icon">
 *       <InfoIcon className="h-4 w-4" />
 *       <span className="sr-only">Info</span>
 *     </Button>
 *   </TooltipTrigger>
 *   <TooltipContent>
 *     <p>Add to library</p>
 *   </TooltipContent>
 * </Tooltip>
 * ```
 * 
 * @accessibility
 * - Follows WAI-ARIA Tooltip pattern
 * - Accessible to keyboard users (appears on focus)
 * - Supports screen readers with proper ARIA attributes
 * - Dismissible by pressing Escape key
 * - Non-modal, allowing continued interaction with the page
 */
import * as React from "react"
import * as TooltipPrimitive from "@radix-ui/react-tooltip"

import { cn } from "@/lib/utils"

/**
 * Tooltip provider component
 * 
 * Wraps your application to provide tooltip functionality with shared settings.
 * Optional, but recommended for consistent tooltip behavior across the app.
 * 
 * @param delayDuration - Delay in milliseconds before showing tooltips
 * @param skipDelayDuration - Skip delay duration for quickly showing tooltips after one has been shown
 * @param disableHoverableContent - Whether to disable interactive content within tooltips
 * @param children - React children
 */
const TooltipProvider = TooltipPrimitive.Provider

/**
 * Root tooltip component
 * 
 * Container for the tooltip trigger and content
 * 
 * @param open - Whether the tooltip is open
 * @param defaultOpen - Whether the tooltip is open by default
 * @param onOpenChange - Function called when the open state changes
 * @param delayDuration - Delay in milliseconds before showing the tooltip
 * @param disableHoverableContent - Whether to disable hoverable content
 * @param children - React children (should include TooltipTrigger and TooltipContent)
 */
const Tooltip = TooltipPrimitive.Root

/**
 * Tooltip trigger component
 * 
 * Element that triggers the tooltip to appear when hovered or focused
 * 
 * @param asChild - Whether to merge props onto the immediate child
 * @param children - React children
 */
const TooltipTrigger = TooltipPrimitive.Trigger

/**
 * Tooltip content component
 * 
 * The popup content displayed when the trigger is hovered or focused
 * 
 * @param className - Additional CSS classes to apply
 * @param sideOffset - Distance in pixels from the trigger
 * @param children - React children
 */
const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn(
      "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    )}
    {...props}
  />
))
TooltipContent.displayName = "TooltipContent"

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }
