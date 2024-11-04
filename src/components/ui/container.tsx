import { cn } from "@/lib/utils"

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Container({ className, children, ...props }: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[1480px] px-4 md:px-6",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
} 