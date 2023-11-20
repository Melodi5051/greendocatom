import { IYandexDiskFile } from "../types/Files"
import { extractFolderName } from "./formatDate"
import { appStore } from "../store/store"
export const filterItems = (arrayItems: IYandexDiskFile[], typeFilter: string) => {
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

export const removeFileExtension = (fileName: string, maxLength: number): string => {
  const lastDotIndex = fileName.lastIndexOf(".")
  if (lastDotIndex !== -1) {
    fileName = fileName.slice(0, lastDotIndex)
  }

  if (fileName.length > maxLength) {
    fileName = fileName.slice(0, maxLength) + "…"; // Добавляем многоточие, чтобы указать, что текст обрезан
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


export const formatNumber = (sizeNumber?: number): string => {
  if (!sizeNumber) return "";

  const sizes: string[] = ["", "K", "M", "G", "T", "P", "E", "Z", "Y"];
  let index: number = 0;
  let n: number = sizeNumber;

  while (n >= 1024) {
    n = n / 1024;
    index++;
  }
  return `${!index ? n : n.toFixed(2)} ${sizes[index]}B`
}