"use client"

/**
 * Form Component System
 * 
 * A comprehensive form system built on top of react-hook-form with accessibility features,
 * validation states, and error handling. This component provides a flexible API for creating
 * accessible, validated forms with clear user feedback.
 * 
 * The system includes components for form structure, labels, controls, descriptions, error messages,
 * and field context management to connect react-hook-form to the UI components.
 * 
 * Features:
 * - Integration with react-hook-form for validation and state management
 * - Accessible form controls with proper ARIA attributes
 * - Consistent error handling and messaging
 * - Support for field descriptions and help text
 * - Proper labeling and form structure for screen readers
 * 
 * @example
 * // Basic usage with Zod schema validation
 * const formSchema = z.object({
 *   username: z.string().min(2).max(50),
 *   email: z.string().email(),
 * })
 * 
 * function ProfileForm() {
 *   const form = useForm<z.infer<typeof formSchema>>({
 *     resolver: zodResolver(formSchema),
 *     defaultValues: { username: "", email: "" },
 *   })
 * 
 *   function onSubmit(values: z.infer<typeof formSchema>) {
 *     // Handle form submission
 *   }
 * 
 *   return (
 *     <Form {...form}>
 *       <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
 *         <FormField
 *           control={form.control}
 *           name="username"
 *           render={({ field }) => (
 *             <FormItem>
 *               <FormLabel>Username</FormLabel>
 *               <FormControl>
 *                 <Input placeholder="johndoe" {...field} />
 *               </FormControl>
 *               <FormDescription>Your public display name.</FormDescription>
 *               <FormMessage />
 *             </FormItem>
 *           )}
 *         />
 *         <Button type="submit">Submit</Button>
 *       </form>
 *     </Form>
 *   )
 * }
 */
import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"
import { Slot } from "@radix-ui/react-slot"
import {
  Controller,
  FormProvider,
  useFormContext,
  useFormState,
  type ControllerProps,
  type FieldPath,
  type FieldValues,
} from "react-hook-form"

import { cn } from "@/lib/utils"
import { Label } from "@/components/ui/label"

/**
 * Base Form component that wraps FormProvider from react-hook-form
 * Use this at the root of your form to provide form context to all child components
 */
const Form = FormProvider

/**
 * Context type for form fields to share state and metadata
 */
type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  name: TName
}

/**
 * Context for sharing form field information
 */
const FormFieldContext = React.createContext<FormFieldContextValue>(
  {} as FormFieldContextValue
)

/**
 * FormField - Connects a form field to react-hook-form
 * 
 * This component provides context for child form elements and connects them
 * to react-hook-form's Controller for state management and validation.
 * 
 * @param props - The properties from react-hook-form's Controller
 * @param props.name - The name of the form field in the form values
 * @param props.control - The form control instance from useForm()
 * @param props.render - Render function that provides field state and handlers
 */
const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  ...props
}: ControllerProps<TFieldValues, TName>) => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  )
}

/**
 * Hook to access form field information and state
 * 
 * Combines context from FormFieldContext and FormItemContext with
 * state from react-hook-form to provide a complete view of a field's status.
 * 
 * @returns Object with field metadata, state, and IDs for accessibility
 * @throws Error if used outside of a FormField component
 */
const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext)
  const itemContext = React.useContext(FormItemContext)
  const { getFieldState } = useFormContext()
  const formState = useFormState({ name: fieldContext.name })
  const fieldState = getFieldState(fieldContext.name, formState)

  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>")
  }

  const { id } = itemContext

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  }
}

/**
 * Context type for form items
 */
type FormItemContextValue = {
  id: string
}

/**
 * Context for sharing form item information
 */
const FormItemContext = React.createContext<FormItemContextValue>(
  {} as FormItemContextValue
)

/**
 * FormItem - Container for a form field group
 * 
 * Wraps a label, control, description, and error message into a logical group.
 * Provides a consistent layout and spacing for form controls.
 * 
 * @param props - Standard div element props
 * @param props.className - Additional CSS classes
 */
function FormItem({ className, ...props }: React.ComponentProps<"div">) {
  const id = React.useId()

  return (
    <FormItemContext.Provider value={{ id }}>
      <div
        data-slot="form-item"
        className={cn("grid gap-2", className)}
        {...props}
      />
    </FormItemContext.Provider>
  )
}

/**
 * FormLabel - Accessible label for form controls
 * 
 * Connects to the form field via an id and shows error state when needed.
 * 
 * @param props - Label component props
 * @param props.className - Additional CSS classes
 */
function FormLabel({
  className,
  ...props
}: React.ComponentProps<typeof LabelPrimitive.Root>) {
  const { error, formItemId } = useFormField()

  return (
    <Label
      data-slot="form-label"
      data-error={!!error}
      className={cn("data-[error=true]:text-destructive", className)}
      htmlFor={formItemId}
      {...props}
    />
  )
}

/**
 * FormControl - Wrapper for form input elements
 * 
 * Adds accessibility attributes to input elements based on form state.
 * 
 * @param props - Slot component props
 */
function FormControl({ ...props }: React.ComponentProps<typeof Slot>) {
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField()

  return (
    <Slot
      data-slot="form-control"
      id={formItemId}
      aria-describedby={
        !error
          ? `${formDescriptionId}`
          : `${formDescriptionId} ${formMessageId}`
      }
      aria-invalid={!!error}
      {...props}
    />
  )
}

/**
 * FormDescription - Helper text for a form field
 * 
 * Provides additional context or instructions for filling out a form field.
 * 
 * @param props - Paragraph element props
 * @param props.className - Additional CSS classes
 */
function FormDescription({ className, ...props }: React.ComponentProps<"p">) {
  const { formDescriptionId } = useFormField()

  return (
    <p
      data-slot="form-description"
      id={formDescriptionId}
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  )
}

/**
 * FormMessage - Error message for a form field
 * 
 * Displays validation errors from react-hook-form.
 * Only renders when there is an error to show.
 * 
 * @param props - Paragraph element props
 * @param props.className - Additional CSS classes
 */
function FormMessage({ className, ...props }: React.ComponentProps<"p">) {
  const { error, formMessageId } = useFormField()
  const body = error ? String(error?.message ?? "") : props.children

  if (!body) {
    return null
  }

  return (
    <p
      data-slot="form-message"
      id={formMessageId}
      className={cn("text-destructive text-sm", className)}
      {...props}
    >
      {body}
    </p>
  )
}

export {
  useFormField,
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
}
