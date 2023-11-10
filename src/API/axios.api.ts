import axios from "axios"
import { appStore } from "../store/store"
import { extractFolderName, formatData } from "../helper/formatDate"
import { IYandexDiskFile } from "../types/Files"

export const getAllFiles = async () => {
  try {
    const response = await axios.get("https://cloud-api.yandex.net/v1/disk/resources/files", {
      headers: {
        Authorization: process.env.REACT_APP_API_KEY
        // Authorization: process.env.REACT_APP_API_KEY,
      },
      params: {
        limit: 10,
      },
    })
    const newYandexDiskFiles: IYandexDiskFile[] = response.data.items.map(
      (item: IYandexDiskFile) => ({
        name: item.name,
        path: extractFolderName(item.path),
        modified: formatData(new Date(item.modified)),
      }),
    )
    appStore.setArrayItems(newYandexDiskFiles)
  } catch (error) {
    console.error("Ошибка АПИ запроса", error)
  }
}

export const createFolders = () => {
  return ""
}

export const createFiles = () => {
  return ""
}

export const getFolder = async (currentPath: string) => { }
export const getFolderContents = async (folderPath: string) => { }
