import {
  selectedSetupAtom,
  updateClassAtom,
  updateDriverAtom,
  updateTrackAtom
} from '@renderer/store'
import { useAtom, useAtomValue } from 'jotai'
import { ComponentProps } from 'react'
import { ClassTextField } from './TextField/ClassTextField'
import { DriverTextField } from './TextField/DriverTextField'
import { TrackTextField } from './TextField/TrackTextField'

export const SetupColumn = ({ ...props }: ComponentProps<'div'>) => {
  const selectedSetup = useAtomValue(selectedSetupAtom)

  const [driver, setDriver] = useAtom(updateDriverAtom)

  const handleDriverChange = (event) => {
    const newDriver = event.target.value
    setDriver(newDriver) // Update the driver value using the atom update function
  }

  const [classString, setClass] = useAtom(updateClassAtom)

  const handleClassChange = (event) => {
    const newClass = event.target.value
    setClass(newClass) // Update the driver value using the atom update function
  }

  const [track, setTrack] = useAtom(updateTrackAtom)

  const handleTrackChange = (event) => {
    const newTrack = event.target.value
    setTrack(newTrack) // Update the driver value using the atom update function
  }

  return (
    <div {...props}>
      <p>Setup</p>
      <DriverTextField value={selectedSetup?.driver ?? ''} onChange={handleDriverChange} />
      <ClassTextField value={selectedSetup?.classString ?? ''} onChange={handleClassChange} />
      <TrackTextField value={selectedSetup?.track ?? ''} onChange={handleTrackChange} />
    </div>
  )
}

export default SetupColumn
