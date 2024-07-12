import { ComponentProps, forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

export const Dialog = forwardRef<HTMLDivElement, ComponentProps<'div'>>(
  ({ className, children, ...props }, ref) => (
    <div className="h-full w-full mt-9 bg-[#00000031] absolute grid items-center justify-items-center">
      <div ref={ref} className={twMerge('w-60 bg-container rounded z-50', className)} {...props}>
        {children}
      </div>
    </div>
  )
)
