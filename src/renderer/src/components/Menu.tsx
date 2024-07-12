import { ComponentProps, forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

export const Menu = forwardRef<HTMLDivElement, ComponentProps<'div'>>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={twMerge('w-24 bg-bg-elevation-1 rounded', className)} {...props}>
      {children}
    </div>
  )
)
