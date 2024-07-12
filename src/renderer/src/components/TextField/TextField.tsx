import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export type TextFieldProps = ComponentProps<'input'>

export const TextField = ({ className, children, ...props }: TextFieldProps) => {
  return (
    <input className={twMerge('h-7 rounded-[4px] p-2 text-sm truncate', className)} {...props}>
      {children}
    </input>
  )
}
