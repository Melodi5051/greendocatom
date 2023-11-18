export interface IButtonTextIcon {
  iconName?: string
  buttonText?: string
}

export interface IButtonTextIconPencil {
  iconName: string
}

export interface IButtonText extends IButtonTextIcon {
  text: string
  IconFolderOpen?: boolean
  hasIconPencil?: boolean
  hasIconTrash?: boolean
  buttonText?: string
}

export interface IButtonClassic {
  text?: string
  onClick: React.MouseEventHandler<HTMLButtonElement>
  v?: number
  isNegative?: boolean
  children?: any
}
