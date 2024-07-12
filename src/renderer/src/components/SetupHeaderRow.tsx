import { SetupHeader } from '@/components'
import { useSetupsList } from '@/hooks/useSetupList'
import { ComponentProps } from 'react'

export type SetupHeaderRowProps = ComponentProps<'div'> & {
  onSelect?: () => void
  onClose?: () => void
}

export const SetupHeaderRow = ({ onSelect, onClose, ...props }: SetupHeaderRowProps) => {
  const { setups, handleSetupSelect, handleSetupClose } = useSetupsList({ onSelect }, { onClose })

  return (
    <div {...props}>
      {setups
        .filter((setup) => setup.isOpen == true)
        .map((setup, i) => (
          <SetupHeader
            key={i}
            isActive={setup.isSelected}
            {...setup}
            onClick={handleSetupSelect(setup.id)}
            onCloseClick={(event) => handleSetupClose(setup.id)(event)}
          />
        ))}
    </div>
  )
}
