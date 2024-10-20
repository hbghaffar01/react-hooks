import { useState } from "react"

export default function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue)

  function toggleValue(forceValue) {
    setValue(currentValue =>
      typeof forceValue === "boolean" ? forceValue : !currentValue
    )
  }

  return [value, toggleValue]
}
