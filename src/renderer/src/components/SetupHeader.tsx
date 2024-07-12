import { cn } from '@renderer/utils'
import { Setup } from '@shared/models'
import { ComponentProps } from 'react'
import { VscClose } from 'react-icons/vsc'

export type SetupHeaderProps = Setup & {
  isActive?: boolean
  onCloseClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
} & ComponentProps<'div'>

export const SetupHeader = ({
  onCloseClick,
  driver,
  classString,
  track,
  isActive = false,
  className,
  ...props
}: SetupHeaderProps) => {
  return (
    <div
      className={cn(
        'cursor-pointer pl-2.5 pr-2 h-8 rounded-tr-[4px] transition-colors border-t border-r border-container duration-75 flex gap-2 items-center group',
        {
          'bg-background': isActive,
          'border-onBackground': isActive,
          'hover:bg-bgHover': !isActive
        },
        className
      )}
      {...props}
    >
      <h3 className="text-xs">{driver}</h3>
      <button onClick={onCloseClick}>
        <VscClose
          className={cn(
            'text-container group-hover:text-onBackground hover:bg-[#46455fda] rounded',
            {
              'text-onBackground': isActive
            }
          )}
        />
      </button>
    </div>
  )
}
