import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full text-xs font-medium transition-colors",
  {
    variants: {
      variant: {
        default: "bg-[#ff8a5b] text-[#fdf6f0] px-3 py-1 uppercase tracking-wide font-semibold",
        outline:
          "border border-[#0f1b3d]/20 text-[#0f1b3d]/70 px-3 py-1 dark:border-[#fdf6f0]/20 dark:text-[#fdf6f0]/70",
        pill: "border border-[#0f1b3d]/15 text-[#0f1b3d] px-3 py-1.5 tracking-widest uppercase dark:border-[#fdf6f0]/15 dark:text-[#fdf6f0]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant,
  ...props
}: React.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  return (
    <span
      data-slot="badge"
      className={cn(badgeVariants({ variant, className }))}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
