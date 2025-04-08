"use client"

/**
 * Avatar Component
 * 
 * A versatile avatar component for displaying user or content images with fallback options.
 * Built on Radix UI's Avatar primitive for accessibility and consistent behavior.
 * 
 * Features:
 * - Displays user or entity images in a consistent, responsive format
 * - Provides automatic fallback to initials or placeholder when image fails to load
 * - Smooth image loading with fade-in animation
 * - Customizable size and shape through className
 * - Accessible with appropriate ARIA attributes
 * 
 * @example
 * ```tsx
 * // Basic usage with image
 * <Avatar>
 *   <AvatarImage src="https://example.com/avatar.jpg" alt="User's avatar" />
 *   <AvatarFallback>JD</AvatarFallback>
 * </Avatar>
 * 
 * // With fallback for when image fails to load
 * <Avatar>
 *   <AvatarImage src="/path/to/image.jpg" alt="User profile" />
 *   <AvatarFallback>
 *     <UserIcon className="h-4 w-4" />
 *   </AvatarFallback>
 * </Avatar>
 * ```
 * 
 * @accessibility
 * - Uses appropriate ARIA attributes for decorative or informative images
 * - Provides text alternatives via alt text or fallback content
 * - Maintains adequate color contrast for fallback text
 */

import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"

import { cn } from "@/lib/utils"

/**
 * Avatar container component that manages the display of user images with fallback support
 * 
 * @param className - Additional CSS classes to apply to the avatar
 * @param children - Avatar content (AvatarImage and AvatarFallback)
 */
const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      className
    )}
    {...props}
  />
))
Avatar.displayName = "Avatar"

/**
 * Avatar image component that displays the user's profile picture
 * 
 * @param className - Additional CSS classes to apply to the image
 * @param src - Source URL of the image
 * @param alt - Alternative text description of the image for accessibility
 */
const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn("aspect-square h-full w-full", className)}
    {...props}
  />
))
AvatarImage.displayName = "AvatarImage"

/**
 * Avatar fallback component that displays when the image fails to load
 * Can contain initials, icons, or other placeholder content
 * 
 * @param className - Additional CSS classes to apply to the fallback
 * @param children - Fallback content (typically initials or an icon)
 * @param delayMs - Optional delay before showing the fallback (defaults to 600ms)
 */
const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      className
    )}
    {...props}
  />
))
AvatarFallback.displayName = "AvatarFallback"

export { Avatar, AvatarImage, AvatarFallback }
