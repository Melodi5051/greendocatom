export interface IYandexDiskFile {
  name: string
  modified: string
  created: string
  path: string
  deleted?: string
  preview?: string
  size?: number
}
export interface IYandexDiskFolders {
  name: string
  path: string
  created: string
  deleted?: string
}

export interface IYandexTrashItems extends IYandexDiskFile, IYandexDiskFolders {}