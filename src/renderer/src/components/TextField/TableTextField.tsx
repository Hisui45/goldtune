import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'
import { TextField } from './TextField'

export type TableTextFieldProps = ComponentProps<'input'>

const onChange = () => {}

export const TableTextField = ({ className, children, ...props }: TableTextFieldProps) => {
  return (
    <TextField
      className={twMerge(
        'w-32 focus:outline-none focus:border-onBackground focus:ring-1 focus:ring-onBackground bg-container text-sm',
        className
      )}
      onChange={onChange}
      {...props}
    >
      {children}
    </TextField>
  )
}
