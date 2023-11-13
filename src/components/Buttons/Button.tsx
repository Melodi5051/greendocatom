import React from "react"
import "./Button.css"
import { IButtonClassic, IButtonText, IButtonTextIcon } from "./../../types/IButtons"
import IconFolderOpen from "./../../assets/icons/icon-folder-open.svg"
import IconPencil from "./../../assets/icons/icon-pencil.svg"
import IconTrash from "./../../assets/icons/icon-trash.svg"
import { appStore } from "../../store/store"
import { deleteResources } from "../../API/axios.api"

const ICONS_SELECTOR: Record<string, any> = {
  "icon-folder-open": IconFolderOpen,
  "icon-trash": IconTrash,
  "icon-pencil": IconPencil,
}

const handleIconClick = (
  e: React.MouseEvent<HTMLSpanElement>,
  iconName: string,
  buttonText?: string,
) => {
  if (
    iconName === "icon-trash" &&
    buttonText !== undefined &&
    buttonText !== "Удаленные документы"
  ) {
    deleteResources(buttonText) // TODO:  СДЕЛАТЬ ПОДТВЕРЖДЕНИЕ УДАЛЕНИЯ
  }
}

const ButtonTextIcon: React.FC<IButtonTextIcon> = ({
  iconName = "icon-folder-open",
  buttonText,
}) => {
  const SelectedIcon = ICONS_SELECTOR[iconName]

  const handleClick = (e: React.MouseEvent<HTMLSpanElement>) => {
    handleIconClick(e, iconName, buttonText)
  }

  return (
    <span className="icon" onClick={handleClick}>
      <img src={SelectedIcon} alt="icon" />
    </span>
  )
}

const ButtonText: React.FC<IButtonText> = (props) => {
  const handleCategoryChange = () => {
    if (props.text !== "Все категории") {
      appStore.setCategoryFilter(props.text || "")
      return
    }
    appStore.setCategoryFilter("")
  }

  return (
    <button className="btn-text rosatom-fontFamily-regular" onClick={handleCategoryChange}>
      <span className="icon">
        {props.IconFolderOpen && (
          <ButtonTextIcon iconName="icon-folder-open" buttonText={props.text} />
        )}
      </span>
      <span className="rosatom-fontFamily-regular">{props.text}</span>
      {props.hasIconPencil && <ButtonTextIcon iconName="icon-pencil" buttonText={props.text} />}
      {props.hasIconTrash && <ButtonTextIcon iconName="icon-trash" buttonText={props.text} />}
    </button>
  )
}

export const Button: React.FC<IButtonClassic> = (props) => {
  return (
    <button
      className={`btn-classic v${props?.v || "3"} ${props?.isNegative ? "negative" : ""}`}
      onClick={props.onClick}
    >
      {props.children || ""}
      <span>{props.text || ""}</span>
    </button>
  )
}

export default ButtonText
