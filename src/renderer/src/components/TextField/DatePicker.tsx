import { cn } from '@renderer/utils'
import { ComponentProps } from 'react'

export type DatePickerProps = {
  hasDate?: boolean
} & ComponentProps<'input'>

export const DatePicker = ({ hasDate = false, className, children, ...props }: DatePickerProps) => {
  return (
    <input
      type="date"
      className={cn(
        'w-32 h-7 rounded-[4px] p-2 bg-container focus:outline-none focus:border-onBackground focus:ring-1 focus:ring-onBackground text-sm',
        {
          'text-container': !hasDate
        },
        className
      )}
      {...props}
    >
      {children}
    </input>
  )
}
