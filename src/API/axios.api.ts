import axios from "axios"
import { appStore } from "../store/store"
import { formatData } from "../helper/formatDate"
import {filterItems} from "../helper/filterItems"
import { IYandexDiskFile } from "../types/Files"
import { ROOT_PATH_FOLDER } from "../constants/constants"

export const getAllFiles = async () => {
  try {
    const response = await axios.get(`${ROOT_PATH_FOLDER}/files`, {
      headers: {
        Authorization: process.env.REACT_APP_API_KEY,
      },
      params: {
        limit: 10,
      },
    })
    const newYandexDiskFiles: IYandexDiskFile[] = response.data.items.map(
      (item: IYandexDiskFile) => ({
        //Имя файла который находиться в яндекс диске
        name: item.name,
        //Каталог в котором лежит данный файл
        path: item.path,
        //Дата создания данного файла
        created: formatData(new Date(item.created)),
        //Дата последнего изменения данного файла
        modified: formatData(new Date(item.modified)),
      }),
    )
    
    appStore.setArrayItems(filterItems(newYandexDiskFiles, appStore.categoryFilter))
  } catch (error) {
    console.error("Ошибка АПИ запроса", error)
  }
}

export const getAllFolder = async () => {
  try {
    const response = await axios.get(`${ROOT_PATH_FOLDER}?path=CaseLabDocuments`, {
      headers: {
        Authorization: process.env.REACT_APP_API_KEY,
      },
    })
    const folders = response.data._embedded.items.filter((item: any) => item.type === "dir")
    const newYandexDiskFoldes = folders.map((item: any) => ({
      name: item.name,
    }))
    appStore.setArrayFolders(newYandexDiskFoldes)
  } catch (error) {
    console.error("Ошибка АПИ запроса", error)
  }
}
export const moveFile = async (from: string, to: string) => {
  try {
    const response = await axios.post("https://cloud-api.yandex.net/v1/disk/resources/move", null, {
      params: {
        from: from,
        path: to,
      },
      headers: {
        Authorization: process.env.REACT_APP_API_KEY,
      },
    })
    console.log("File move response:", response.data)
    getAllFiles()
  } catch (error) {
    console.error("Error moving file:", error)
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
