import { ChangeEvent, ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'
import { LabelTextField } from './LabelTextField'

export type LimitFieldsProps = {
  onUpperChange: (event: ChangeEvent<HTMLInputElement>) => void
  onLowerChange: (event: ChangeEvent<HTMLInputElement>) => void
} & ComponentProps<'div'>

export const LimitFields = ({
  className,
  onLowerChange,
  onUpperChange,
  lowerLimit,
  upperLimit
}: LimitFieldsProps & { lowerLimit: number; upperLimit: number }) => {
  return (
    <div className={twMerge('mr-0.5 space-y-3', className)}>
      <LabelTextField
        label="Lower Limit"
        value={lowerLimit}
        onChange={onLowerChange}
        className="w-32"
      />
      <LabelTextField
        label="Upper Limit"
        value={upperLimit}
        onChange={onUpperChange}
        className="w-32"
      />
    </div>
  )
}
