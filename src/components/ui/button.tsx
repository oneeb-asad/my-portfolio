import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-[#0f1b3d] text-[#fdf6f0] hover:opacity-80 dark:bg-[#fdf6f0] dark:text-[#0f1b3d]",
        outline:
          "border border-[#0f1b3d]/30 text-[#0f1b3d] hover:border-[#0f1b3d] dark:border-[#fdf6f0]/30 dark:text-[#fdf6f0] dark:hover:border-[#fdf6f0]",
        ghost:
          "hover:bg-[#0f1b3d]/5 dark:hover:bg-[#fdf6f0]/5",
      },
      size: {
        default: "h-11 px-6 py-3",
        sm: "h-9 px-4",
        icon: "h-9 w-9 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "button"
  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
