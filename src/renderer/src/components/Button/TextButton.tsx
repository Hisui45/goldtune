import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export type TextButtonProps = ComponentProps<'button'>

export const TextButton = ({ className, children, ...props }: TextButtonProps) => {
  return (
    <button className={twMerge('text-xs hover:bg-bgHover px-3 py-2', className)} {...props}>
      {children}
    </button>
  )
}
