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
