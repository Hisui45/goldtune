import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'
import { TextField } from './TextField'

export type LabelTextFieldProps = ComponentProps<'input'>

export const LabelTextField = ({
  className,
  label,
  ...props
}: LabelTextFieldProps & { label: string }) => {
  return (
    <div className="space-y-1 text-xs">
      <p>{label}</p>
      <TextField
        className={twMerge(
          'bg-[#E8E8EE] text-background focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary w-full',
          className
        )}
        {...props}
      />
    </div>
  )
}
