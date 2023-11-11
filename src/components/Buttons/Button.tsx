import React from "react";
import "./Button.css";
import { IButtonClassic, IButtonText, IButtonTextIcon } from "./../../types/IButtons";
import IconFolderOpen from "./../../assets/icons/icon-folder-open.svg";
import IconPencil from "./../../assets/icons/icon-pencil.svg";
import IconTrash from "./../../assets/icons/icon-trash.svg";
import { appStore } from "../../store/store";

const ICONS_SELECTOR: Record<string, any> = {
  "icon-folder-open": IconFolderOpen,
  "icon-trash": IconTrash,
  "icon-pencil": IconPencil
}

const handleCategoryChange = (e: any) => {
  if(e.target.textContent !== 'Все категории'){
    appStore.setCategoryFilter((e.target.textContent).toLowerCase())
    return
  }
  appStore.setCategoryFilter('')
}

const ButtonTextIcon: React.FC<IButtonTextIcon> = ({ iconName = "icon-folder-open" }) => {
  const SelectedIcon = ICONS_SELECTOR[iconName];

  return <span className="icon"><img src={SelectedIcon} alt='icon' /></span>;
}


const ButtonText: React.FC<IButtonText> = (props) => {
  return (
    <button
      className="btn-text rosatom-fontFamily-regular"
      onClick={(e: any) => handleCategoryChange(e)}
    >
      {props.iconName ? <ButtonTextIcon iconName={props.iconName} /> : ""}
      <span className="rosatom-fontFamily-regular">{props.text}</span>
      {props.hasIconPencil ? <ButtonTextIcon iconName="icon-pencil" /> : ""}
    </button>
  )
}


export const Button: React.FC<IButtonClassic> = (props) => {
  return (
    <button className={`btn-classic v${props?.v || "3"} ${props?.isNegative ? "negative" : ""}`} onClick={props.onClick}>
      {props.children || "" }
      <span>{props.text || ""}</span>
    </button>
  )
}

export default ButtonText;
