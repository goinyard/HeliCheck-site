"use client"

/**
 * Accordion Component System
 * 
 * A vertically stacked set of interactive headings that each reveal a section of content.
 * Built using Radix UI's accessible Accordion primitive with custom styling and behavior.
 * 
 * Features:
 * - Fully accessible with keyboard navigation
 * - Animated expansion and collapse
 * - Customizable styling
 * - Multiple or single item expansion modes
 * - Focus management and clear visual indicators
 * 
 * @example
 * // Basic usage
 * <Accordion type="single" collapsible>
 *   <AccordionItem value="item-1">
 *     <AccordionTrigger>Is it accessible?</AccordionTrigger>
 *     <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
 *   </AccordionItem>
 * </Accordion>
 * 
 * // Multiple items open
 * <Accordion type="multiple">
 *   <AccordionItem value="item-1">...</AccordionItem>
 *   <AccordionItem value="item-2">...</AccordionItem>
 * </Accordion>
 */
import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDownIcon } from "lucide-react"

import { cn } from "@/lib/utils"

/**
 * Accordion - The root component that contains all accordion items
 * 
 * @param props - Accepts all properties from Radix UI's Accordion component
 * @param props.type - "single" allows only one item to be open, "multiple" allows multiple
 * @param props.collapsible - When type is "single", allows the open item to be closed
 * @param props.defaultValue - The initial open item(s)
 * @param props.value - Controls the open state when used as a controlled component
 * @param props.onValueChange - Callback for when the open state changes
 */
function Accordion({
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />
}

/**
 * AccordionItem - An individual accordion item containing a trigger and content
 * 
 * @param props - Accepts all properties from Radix UI's AccordionItem component
 * @param props.value - Unique identifier for the item (required)
 * @param props.disabled - Whether the item is interactive
 * @param props.className - Additional CSS classes to apply
 */
function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn("border-b last:border-b-0", className)}
      {...props}
    />
  )
}

/**
 * AccordionTrigger - The button that toggles the accordion item
 * 
 * Includes a chevron icon that rotates when the item is expanded.
 * The trigger is styled with hover and focus states for accessibility.
 * 
 * @param props - Accepts all properties from Radix UI's AccordionTrigger component
 * @param props.children - Content to display in the trigger
 * @param props.className - Additional CSS classes to apply
 */
function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180",
          className
        )}
        {...props}
      >
        {children}
        <ChevronDownIcon className="text-muted-foreground pointer-events-none size-6 shrink-0 transition-transform duration-200 self-center" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

/**
 * AccordionContent - The content revealed when an accordion item is expanded
 * 
 * Includes animation for smooth expansion and collapse.
 * 
 * @param props - Accepts all properties from Radix UI's AccordionContent component
 * @param props.children - Content to display when expanded
 * @param props.className - Additional CSS classes to apply
 * @param props.forceMount - Force mounting when parent is closed
 */
function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm"
      {...props}
    >
      <div className={cn("pt-0 pb-4", className)}>{children}</div>
    </AccordionPrimitive.Content>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
