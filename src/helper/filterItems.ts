import { appStore } from "../store/store"
import { IYandexDiskFile } from "../types/Files"
import { extractFolderName } from "./formatDate"

export const filterItems = (
  arrayItems: IYandexDiskFile[],
  typeFilter: string,
): IYandexDiskFile[] => {
  if (arrayItems.length > 0 && typeFilter.length > 0) {
    return arrayItems.filter((file) => extractFolderName(file.path) === typeFilter)
  }
  
  return arrayItems
}
