import { ISvgIconProps } from "./ISvgIcons"

export interface IButtonTextIcon {
  iconName?: string
}

export interface IButtonTextIconPencil {
  iconName: string
}

export interface IButtonText extends IButtonTextIcon {
  text: string
  hasIconPencil?: boolean
}


export interface IButtonClassic {
  text?: string
  onClick: React.MouseEventHandler<HTMLButtonElement>
  v?: number
  isNegative?: boolean
  children?: any
}