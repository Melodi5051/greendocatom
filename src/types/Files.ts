export interface IYandexDiskFile {
  name: string
  modified: string
  created: string
  path: string
  preview?: string
  size?: number
  sizes?: any
}
export interface IYandexDiskFolders {
  name: string
  path: string
  created: string
  deleted?: string
}

export interface IYandexTrashItems extends IYandexDiskFile, IYandexDiskFolders {}