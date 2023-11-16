export interface IYandexDiskFile {
  name: string
  modified: string
  created: string
  path: string
  preview?: string
  size?: number
}
export interface IYandexDiskFolders {
  name: string
  path: string
}

export interface IYandexTrashItems extends IYandexDiskFile, IYandexDiskFolders {}