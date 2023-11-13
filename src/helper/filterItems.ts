import { IYandexDiskFile } from "../types/Files"
import { extractFolderName } from "./formatDate"
import { appStore } from "../store/store"
import { getAllFiles } from "../API/axios.api"
export const filterItems = (
  arrayItems: IYandexDiskFile[],
  typeFilter: string,
): IYandexDiskFile[] => {
  if (
    arrayItems.length > 0 &&
    typeFilter.length > 0 &&
    appStore.categoryFilter !== "Удаленные документы"
  ) {
    const filteredArray = arrayItems.filter((file) => extractFolderName(file.path) === typeFilter)
    return appStore.findItems(filteredArray)
  }
  return appStore.findItems(arrayItems)
}

export const removeFileExtension = (fileName: string): string => {
  const lastDotIndex = fileName.lastIndexOf(".")
  if (lastDotIndex !== -1) {
    return fileName.slice(0, lastDotIndex)
  }
  return fileName
}

export const paginate = (
  arrayItems: IYandexDiskFile[],
  currentPage: number,
  pageSize: number,
): IYandexDiskFile[] => {
  const startIndex = (currentPage - 1) * pageSize
  const endIndex = startIndex + pageSize
  return arrayItems.slice(startIndex, endIndex)
}
