"use client"

/**
 * Drawer Component System
 * 
 * A comprehensive drawer/panel system built on top of Vaul that can slide in from any edge of the screen.
 * Drawers are perfect for mobile interfaces, sidebars, and temporary content panels that shouldn't
 * fully interrupt the user's context.
 * 
 * Features:
 * - Multiple directions (top, right, bottom, left)
 * - Smooth animations for enter/exit transitions
 * - Customizable header, content, and footer areas
 * - Accessible with proper ARIA attributes
 * - Supports keyboard navigation and focus management
 * - Semi-transparent overlay to indicate modal context
 * 
 * @example
 * ```tsx
 * // Basic bottom drawer
 * <Drawer>
 *   <DrawerTrigger asChild>
 *     <Button>Open Drawer</Button>
 *   </DrawerTrigger>
 *   <DrawerContent>
 *     <DrawerHeader>
 *       <DrawerTitle>Settings</DrawerTitle>
 *       <DrawerDescription>Adjust your application preferences here.</DrawerDescription>
 *     </DrawerHeader>
 *     <div className="p-4">
 *       <p>Drawer content goes here...</p>
 *     </div>
 *     <DrawerFooter>
 *       <Button>Save Changes</Button>
 *       <DrawerClose asChild>
 *         <Button variant="outline">Cancel</Button>
 *       </DrawerClose>
 *     </DrawerFooter>
 *   </DrawerContent>
 * </Drawer>
 * 
 * // Right side drawer
 * <Drawer direction="right">
 *   <DrawerTrigger>Open Menu</DrawerTrigger>
 *   <DrawerContent>...</DrawerContent>
 * </Drawer>
 * ```
 */
import * as React from "react"
import { Drawer as DrawerPrimitive } from "vaul"

import { cn } from "@/lib/utils"

/**
 * Drawer - The root component that manages the drawer state
 * 
 * @param props - All props from Vaul's DrawerPrimitive.Root
 * @param props.direction - The direction from which the drawer appears
 * @param props.onOpenChange - Callback when open state changes
 * @param props.open - Controlled open state
 * @param props.modal - Whether the drawer blocks interactions with the page behind it
 */
function Drawer({
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Root>) {
  return <DrawerPrimitive.Root data-slot="drawer" {...props} />
}

/**
 * DrawerTrigger - The button that opens the drawer
 * 
 * @param props - All props from Vaul's DrawerPrimitive.Trigger
 * @param props.asChild - Whether to render as a slot (to wrap other elements)
 */
function DrawerTrigger({
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Trigger>) {
  return <DrawerPrimitive.Trigger data-slot="drawer-trigger" {...props} />
}

/**
 * DrawerPortal - Portal container for the drawer
 * 
 * Renders the drawer into a portal, outside the DOM hierarchy.
 * 
 * @param props - All props from Vaul's DrawerPrimitive.Portal
 */
function DrawerPortal({
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Portal>) {
  return <DrawerPrimitive.Portal data-slot="drawer-portal" {...props} />
}

/**
 * DrawerClose - Button that closes the drawer
 * 
 * @param props - All props from Vaul's DrawerPrimitive.Close
 * @param props.asChild - Whether to render as a slot (to wrap other elements)
 */
function DrawerClose({
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Close>) {
  return <DrawerPrimitive.Close data-slot="drawer-close" {...props} />
}

/**
 * DrawerOverlay - Semi-transparent background behind the drawer
 * 
 * Provides a visual indication that the drawer is modal and covers the page content.
 * 
 * @param className - Additional CSS classes to apply
 * @param props - All props from Vaul's DrawerPrimitive.Overlay
 */
function DrawerOverlay({
  className,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Overlay>) {
  return (
    <DrawerPrimitive.Overlay
      data-slot="drawer-overlay"
      className={cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className
      )}
      {...props}
    />
  )
}

/**
 * DrawerContent - Main container for drawer content
 * 
 * Renders the content of the drawer with appropriate styling for different directions.
 * 
 * @param className - Additional CSS classes to apply
 * @param children - Content to display in the drawer
 * @param props - All props from Vaul's DrawerPrimitive.Content
 */
function DrawerContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Content>) {
  return (
    <DrawerPortal data-slot="drawer-portal">
      <DrawerOverlay />
      <DrawerPrimitive.Content
        data-slot="drawer-content"
        className={cn(
          "group/drawer-content bg-background fixed z-50 flex h-auto flex-col",
          "data-[vaul-drawer-direction=top]:inset-x-0 data-[vaul-drawer-direction=top]:top-0 data-[vaul-drawer-direction=top]:mb-24 data-[vaul-drawer-direction=top]:max-h-[80vh] data-[vaul-drawer-direction=top]:rounded-b-lg data-[vaul-drawer-direction=top]:border-b",
          "data-[vaul-drawer-direction=bottom]:inset-x-0 data-[vaul-drawer-direction=bottom]:bottom-0 data-[vaul-drawer-direction=bottom]:mt-24 data-[vaul-drawer-direction=bottom]:max-h-[80vh] data-[vaul-drawer-direction=bottom]:rounded-t-lg data-[vaul-drawer-direction=bottom]:border-t",
          "data-[vaul-drawer-direction=right]:inset-y-0 data-[vaul-drawer-direction=right]:right-0 data-[vaul-drawer-direction=right]:w-3/4 data-[vaul-drawer-direction=right]:border-l data-[vaul-drawer-direction=right]:sm:max-w-sm",
          "data-[vaul-drawer-direction=left]:inset-y-0 data-[vaul-drawer-direction=left]:left-0 data-[vaul-drawer-direction=left]:w-3/4 data-[vaul-drawer-direction=left]:border-r data-[vaul-drawer-direction=left]:sm:max-w-sm",
          className
        )}
        {...props}
      >
        <div className="bg-muted mx-auto mt-4 hidden h-2 w-[100px] shrink-0 rounded-full group-data-[vaul-drawer-direction=bottom]/drawer-content:block" />
        {children}
      </DrawerPrimitive.Content>
    </DrawerPortal>
  )
}

/**
 * DrawerHeader - Container for the top section of the drawer
 * 
 * Typically contains the drawer title and description.
 * 
 * @param className - Additional CSS classes to apply
 * @param props - Standard div element props
 */
function DrawerHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="drawer-header"
      className={cn("flex flex-col gap-1.5 p-4", className)}
      {...props}
    />
  )
}

/**
 * DrawerFooter - Container for the bottom section of the drawer
 * 
 * Typically contains action buttons like "Save" or "Cancel".
 * 
 * @param className - Additional CSS classes to apply
 * @param props - Standard div element props
 */
function DrawerFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="drawer-footer"
      className={cn("mt-auto flex flex-col gap-2 p-4", className)}
      {...props}
    />
  )
}

/**
 * DrawerTitle - Main heading for the drawer
 * 
 * @param className - Additional CSS classes to apply
 * @param props - All props from Vaul's DrawerPrimitive.Title
 */
function DrawerTitle({
  className,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Title>) {
  return (
    <DrawerPrimitive.Title
      data-slot="drawer-title"
      className={cn("text-foreground font-semibold", className)}
      {...props}
    />
  )
}

/**
 * DrawerDescription - Secondary text providing more context
 * 
 * @param className - Additional CSS classes to apply
 * @param props - All props from Vaul's DrawerPrimitive.Description
 */
function DrawerDescription({
  className,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Description>) {
  return (
    <DrawerPrimitive.Description
      data-slot="drawer-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  )
}

export {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
}
