import { LabelTextField, LabelTextFieldProps } from '@/components'
import { useState } from 'react'
export const ClassTextField = ({ ...props }: LabelTextFieldProps) => {
  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (event) => {
    setInputValue(event.target.value)
  }

  return <LabelTextField onChange={handleInputChange} label="Class" {...props} />
}
