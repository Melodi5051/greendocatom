export interface IYandexDiskFile {
  name: string
  modified: string
  created: string
  path: string
}
export interface IYandexDiskFolders {
  name: string
  path: string
}

export interface IYandexTrashItems extends IYandexDiskFile, IYandexDiskFolders {}