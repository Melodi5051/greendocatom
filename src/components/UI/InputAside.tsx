import React from "react"
import "./InputAside.css"
import { appStore } from "../../store/store"
import { renameResource } from "../../API/axios.api"
interface IPropsInput {
  isActive?: boolean
  value: string
  path: string
}

const handleKeyPress = async (
  event: React.KeyboardEvent<HTMLInputElement>,
  path: string,
  name: string,
) => {
  if (event.key === "Enter") {
    renameResource(name, "sfsf", name)
  }
}

const handleSwapCategory = (name: string) => {
  if (name !== "Все файлы" && name !== "Удаленные файлы") {
    appStore.setCategoryFilter(name)
    appStore.setCurrentPage(1)
    return
  }
  appStore.setCategoryFilter("")
}

const InputAside: React.FC<IPropsInput> = ({ isActive, value, path }) => {
  return (
    <input
      type="text"
      spellCheck="false"
      className={`styled-input ${isActive ? "" : "inactive"}`}
      value={value}
      onClick={(event: any) => handleSwapCategory(event.target.value)}
      onChange={() => null}
      onKeyPress={(event) => handleKeyPress(event, path, value)}
    />
  )
}

export default InputAside
