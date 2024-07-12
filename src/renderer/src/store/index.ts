import { Setup } from '@shared/models'
import { atom } from 'jotai'
import { v4 as uuidv4 } from 'uuid'
import { setupMocks } from './mocks'

export const setupsAtom = atom<Setup[]>(setupMocks)

export const selectedSetupIdAtom = atom<string | null>(null)

export const closeSetupIdAtom = atom<string | null>(null)

export const selectedSettingAtom = atom<number | null>(null)

export const selectedSetupIndexAtom = atom((get) => {
  const setups = get(setupsAtom)
  const selectedSetupId = get(selectedSetupIdAtom)

  return setups.findIndex((setup) => setup.id === selectedSetupId)
})

export const selectedSetupAtom = atom((get) => {
  const setups = get(setupsAtom)
  const selectedSetupID = get(selectedSetupIdAtom)

  return setups.find((setup) => setup.id == selectedSetupID && setup.isOpen == true)
})

export const changeSelectedSetupAtom = atom(null, (get) => {
  const setups = get(setupsAtom)
  const selectedSetup = get(selectedSetupAtom)

  setups.forEach((setup) => {
    setup.isSelected = false
  })

  if (!selectedSetup) return

  selectedSetup.isSelected = true
})

export const createEmptySetupAtom = atom(null, (get, set) => {
  const setups = get(setupsAtom)

  const id = uuidv4()
  const driver = 'New Driver'
  const track = ''
  const classString = ''
  const title = {
    title: 'Title',
    settings: ['Session 1', 'Session 2', 'Session 3', 'Session 4'],
    limit: undefined
  }
  const date = {
    title: 'Date',
    settings: [Date.now(), Date.now(), Date.now(), Date.now()],
    limit: undefined
  }
  const settings = [
    {
      title: 'Front Width',
      settings: [4, 5, 6, 6],
      limit: {
        lower: 45,
        upper: 16
      }
    },
    {
      title: 'Rear Width',
      settings: [4, 5, 6, 6],
      limit: {
        lower: 45,
        upper: 16
      }
    },
    {
      title: 'Rear Width',
      settings: [4, 5, 6, 6],
      limit: {
        lower: 45,
        upper: 16
      }
    }
  ]
  const lapTime = {
    title: 'Lap Time',
    settings: [4, 5, 6, 6],
    limit: undefined
  }
  const isOpen = true
  const isSelected = true

  const newSetup: Setup = {
    id,
    driver,
    track,
    classString,
    title,
    date,
    settings,
    lapTime,
    isOpen,
    isSelected
  }

  set(setupsAtom, [newSetup, ...setups])

  setups
    .filter((setup) => setup.id != id)
    .forEach((setup) => {
      setup.isSelected = false
    })

  set(selectedSetupIdAtom, id)
})

export const deleteSetupAtom = atom(null, (get, set) => {
  const setups = get(setupsAtom)
  const selectedSetupID = get(selectedSetupIdAtom)

  // Remove the selected setup from the setups array
  const updatedSetups = setups.filter((setup) => setup.id !== selectedSetupID)

  // Find the next setup to be selected
  const nextSetup = updatedSetups.find(
    (setup) => setup.id !== selectedSetupID && setup.isOpen === true
  )

  // Update the isSelected property of the next setup
  if (nextSetup) {
    nextSetup.isSelected = true
  }

  // Update the setups atom with the modified array
  set(setupsAtom, updatedSetups)

  // Update the selectedSetupIdAtom with the id of the next setup or an empty string if no setup is selected
  set(selectedSetupIdAtom, nextSetup ? nextSetup.id : '')
})

export const closeSetupAtom = atom(null, (get, set) => {
  const setups = get(setupsAtom)
  const closeSetupID = get(closeSetupIdAtom)

  const setup = setups.find((setup) => setup.id === closeSetupID)

  if (!setup) return

  setup.isOpen = false

  if (setup.isSelected) {
    const nextSetup = setups.find((curr) => curr.id !== setup.id && curr.isOpen === true)

    set(selectedSetupIdAtom, nextSetup ? nextSetup.id : '')

    if (!nextSetup) return

    nextSetup.isSelected = true
  }
})

export const updateDriverAtom = atom(null, (get, set, newDriver: string) => {
  const setups = get(setupsAtom)
  const selectedSetupID = get(selectedSetupIdAtom)

  const updatedSetups = setups.map((setup) => {
    if (setup.id === selectedSetupID) {
      // If this is the selected setup, update the driver
      return { ...setup, driver: newDriver }
    }
    return setup
  })

  // Update the setups atom with the modified setup
  set(setupsAtom, updatedSetups)
})

export const updateClassAtom = atom(null, (get, set, newClass: string) => {
  const setups = get(setupsAtom)
  const selectedSetupID = get(selectedSetupIdAtom)

  const updatedSetups = setups.map((setup) => {
    if (setup.id === selectedSetupID) {
      // If this is the selected setup, update the driver
      return { ...setup, classString: newClass }
    }
    return setup
  })

  // Update the setups atom with the modified setup
  set(setupsAtom, updatedSetups)
})

export const updateTrackAtom = atom(null, (get, set, newTrack: string) => {
  const setups = get(setupsAtom)
  const selectedSetupID = get(selectedSetupIdAtom)

  const updatedSetups = setups.map((setup) => {
    if (setup.id === selectedSetupID) {
      // If this is the selected setup, update the driver
      return { ...setup, track: newTrack }
    }
    return setup
  })

  // Update the setups atom with the modified setup
  set(setupsAtom, updatedSetups)
})

export const addSettingAtom = atom(null, (get, set, newSetting: string) => {
  const setups = get(setupsAtom)
  const selectedSetupID = get(selectedSetupIdAtom)

  const setting = {
    title: newSetting,
    settings: [2, 2, 2, 2],
    limit: {
      lower: 45,
      upper: 16
    }
  }

  const updatedSetups = setups.map((setup) => {
    if (setup.id === selectedSetupID) {
      // If this is the selected setup, update the settingTitle
      return { ...setup, settings: [...setup.settings, setting] }
    }
    return setup
  })

  // Update the setups atom with the modified setup
  set(setupsAtom, updatedSetups)
})

export const updateTitleSetting = atom(null, (get, set, newValue: string, index: number) => {
  const setups = get(setupsAtom)
  const selectedSetupID = get(selectedSetupIdAtom)

  const updatedSetups = setups.map((setup) => {
    if (setup.id === selectedSetupID) {
      // If this is the selected setup, update the title setting
      const updatedTitleSetting = {
        ...setup.title,
        settings: setup.title.settings.map((setting, i) => (i === index ? newValue : setting))
      } // Update the settings array within the title
      return { ...setup, title: updatedTitleSetting } // Update the title setting in the setup
    }
    return setup
  })

  // Update the setups atom with the modified setup
  set(setupsAtom, updatedSetups)
})

export const updateDateSetting = atom(null, (get, set, newValue: string, index: number) => {
  const setups = get(setupsAtom)
  const selectedSetupID = get(selectedSetupIdAtom)

  // Convert the string value to a number representing the Unix timestamp
  const timestamp = Date.parse(newValue)

  const updatedSetups = setups.map((setup) => {
    if (setup.id === selectedSetupID) {
      // If this is the selected setup, update the date setting
      const updatedDateSetting = {
        ...setup.date,
        settings: setup.date.settings.map((setting, i) => (i === index ? timestamp : setting))
      }
      // Update the settings array within the date
      return { ...setup, date: updatedDateSetting } // Update the date setting in the setup
    }
    return setup
  })

  // Update the setups atom with the modified setup
  set(setupsAtom, updatedSetups)
})

export const updateLapTimeSetting = atom(null, (get, set, newValue: string, index: number) => {
  const setups = get(setupsAtom)
  const selectedSetupID = get(selectedSetupIdAtom)

  const updatedSetups = setups.map((setup) => {
    if (setup.id === selectedSetupID) {
      // If this is the selected setup, update the title setting
      const updatedTitleSetting = {
        ...setup.lapTime,
        settings: setup.lapTime.settings.map((setting, i) => (i === index ? newValue : setting))
      } // Update the settings array within the title
      return { ...setup, lapTime: updatedTitleSetting } // Update the title setting in the setup
    }
    return setup
  })

  // Update the setups atom with the modified setup
  set(setupsAtom, updatedSetups)
})

export const updateSetting = atom(
  null,
  (get, set, newValue: string | number, outerIndex: number, innerIndex: number) => {
    const setups = get(setupsAtom)
    const selectedSetupID = get(selectedSetupIdAtom)

    const updatedSetups = setups.map((setup) => {
      if (setup.id === selectedSetupID) {
        // If this is the selected setup, update the nested setting
        const updatedOuterSettings = setup.settings.map((outerSetting, i) => {
          if (i === outerIndex) {
            // If this is the outer index, update the inner setting
            const updatedInnerSettings = outerSetting.settings.map((innerSetting, j) =>
              j === innerIndex ? newValue : innerSetting
            )
            // Return the updated outer setting with the modified inner setting
            return { ...outerSetting, settings: updatedInnerSettings }
          }
          // Return unchanged outer setting
          return outerSetting
        })
        // Return the setup with the modified outer settings
        return { ...setup, settings: updatedOuterSettings }
      }
      // Return unchanged setup if not the selected one
      return setup
    })

    // Update the setups atom with the modified setup
    set(setupsAtom, updatedSetups)
  }
)

export const updateLowerLimit = atom(null, (get, set, newValue: number, index: number) => {
  const setups = get(setupsAtom)
  const selectedSetupID = get(selectedSetupIdAtom)

  const updatedSetups = setups.map((setup) => {
    if (setup.id === selectedSetupID) {
      // If this is the selected setup, update the lower limit of the specified index
      const updatedSettings = setup.settings.map((setting, i) => {
        if (i === index) {
          // If this is the specified index, update its limit object with the new lower value
          const updatedLimit = { ...setting.limit, lower: newValue }
          return { ...setting, limit: updatedLimit }
        }
        // Otherwise, return unchanged setting
        return setting
      })

      // Return the setup with the modified settings
      return { ...setup, settings: updatedSettings }
    }
    // Return unchanged setup if not the selected one
    return setup
  })

  // Update the setups atom with the modified setup
  set(setupsAtom, updatedSetups)
})

export const updateUpperLimit = atom(null, (get, set, newValue: number, index: number) => {
  const setups = get(setupsAtom)
  const selectedSetupID = get(selectedSetupIdAtom)

  const updatedSetups = setups.map((setup) => {
    if (setup.id === selectedSetupID) {
      // If this is the selected setup, update the lower limit of the specified index
      const updatedSettings = setup.settings.map((setting, i) => {
        if (i === index) {
          // If this is the specified index, update its limit object with the new lower value
          const updatedLimit = { ...setting.limit, upper: newValue }
          return { ...setting, limit: updatedLimit }
        }
        // Otherwise, return unchanged setting
        return setting
      })

      // Return the setup with the modified settings
      return { ...setup, settings: updatedSettings }
    }
    // Return unchanged setup if not the selected one
    return setup
  })

  // Update the setups atom with the modified setup
  set(setupsAtom, updatedSetups)
})

export const updateSettingTitle = atom(null, (get, set, newSetting: string) => {
  const setups = get(setupsAtom)
  const selectedSetupID = get(selectedSetupIdAtom)
  const selectedSetting = get(selectedSettingAtom)

  const updatedSetting = setups.map((setup) => {
    if (setup.id === selectedSetupID) {
      // If this is the selected setup, update the nested setting
      const updatedOuterSettings = setup.settings.map((outerSetting, i) => {
        if (i === selectedSetting) {
          return { ...outerSetting, title: newSetting }
        }
        return outerSetting
      })
      // Return the setup with the modified outer settings
      return { ...setup, settings: updatedOuterSettings }
    }
    // Return unchanged setup if not the selected one
    return setup
  })

  // Update the setups atom with the modified setup
  set(setupsAtom, updatedSetting)
})
