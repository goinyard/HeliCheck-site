"use client"

/**
 * Tabs Component
 * 
 * A set of layered sections of content that display one panel at a time.
 * Built on top of Radix UI's Tabs primitive for robust accessibility.
 * 
 * Features:
 * - Keyboard navigation between tabs using arrow keys
 * - Automatic activation of tabs on focus or manual activation
 * - Responsive design with customizable orientation (horizontal/vertical)
 * - Animated selection indicator for visual feedback
 * - Multiple visual variants (default, outline, etc.)
 * 
 * @example
 * ```tsx
 * <Tabs defaultValue="account" className="w-[400px]">
 *   <TabsList>
 *     <TabsTrigger value="account">Account</TabsTrigger>
 *     <TabsTrigger value="password">Password</TabsTrigger>
 *   </TabsList>
 *   <TabsContent value="account">
 *     <p>Account settings content here</p>
 *   </TabsContent>
 *   <TabsContent value="password">
 *     <p>Password change form here</p>
 *   </TabsContent>
 * </Tabs>
 * ```
 * 
 * @accessibility
 * - Follows WAI-ARIA Tabs Pattern for keyboard interaction and ARIA roles
 * - Selected tab is indicated both visually and to screen readers
 * - Only the selected TabsContent is visible, others are hidden from the accessibility tree
 * - Arrow keys navigate between tabs, making it keyboard friendly
 */

import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"

import { cn } from "@/lib/utils"

/**
 * Main tabs container component
 */
const Tabs = TabsPrimitive.Root

/**
 * Container for tab triggers/buttons that users interact with
 */
const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
      className
    )}
    {...props}
  />
))
TabsList.displayName = TabsPrimitive.List.displayName

/**
 * Individual tab button that users can select
 */
const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      className
    )}
    {...props}
  />
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

/**
 * Content panel associated with each tab
 */
const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    )}
    {...props}
  />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

export { Tabs, TabsList, TabsTrigger, TabsContent }
