
import { cn } from "@/lib/utils"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-none bg-muted", className)} // Changed rounded-md to rounded-none
      {...props}
    />
  )
}

export { Skeleton }
