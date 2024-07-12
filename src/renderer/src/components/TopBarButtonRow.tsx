import logo from '@/assets/logo-transparent-crop.png'
import { ComponentProps } from 'react'
import { EditButton, FileButton } from './Button'

export const TopBarButtonRow = ({ ...props }: ComponentProps<'div'>) => {
  return (
    <div {...props}>
      <img className="h-5 w-auto mx-2" src={logo} />
      <FileButton />
      <EditButton />
    </div>
  )
}

export default TopBarButtonRow
