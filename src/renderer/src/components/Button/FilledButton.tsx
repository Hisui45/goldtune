import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export type FilledButtonProps = ComponentProps<'button'>

export const FilledButton = ({ className, children, ...props }: FilledButtonProps) => {
  return (
    <button
      className={twMerge(
        'text-xs w-full bg-bg-elevation-1 hover:bg-bgHover px-3 py-2 rounded-[4px]',
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
