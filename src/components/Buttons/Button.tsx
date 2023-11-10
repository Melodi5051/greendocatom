import React from "react";
import "./Button.css";
import { IButtonText, IButtonTextIcon } from "./../../types/IButtons";
import IconFolderOpen from "./../../assets/icons/icon-folder-open.svg";
import IconPencil from "./../../assets/icons/icon-pencil.svg";
import IconTrash from "./../../assets/icons/icon-trash.svg";


const ICONS_SELECTOR: Record<string, any> = {
  "icon-folder-open": IconFolderOpen,
  "icon-trash": IconTrash,
  "icon-pencil": IconPencil
}


const ButtonTextIcon: React.FC<IButtonTextIcon> = ({ iconName = "icon-folder-open" }) => {
  const SelectedIcon = ICONS_SELECTOR[iconName];

  return <span className="icon"><img src={SelectedIcon} alt='icon' /></span>;
}


const ButtonText: React.FC<IButtonText> = (props) => {
  return (
    <button className="btn-text">
      {props.iconName ? <ButtonTextIcon iconName={props.iconName} /> : ''}
      <span>{props.text}</span>
      {props.hasIconPencil ? <ButtonTextIcon iconName="icon-pencil" /> : ''}
    </button>
  );
}

export default ButtonText;
