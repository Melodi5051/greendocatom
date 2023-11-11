import axios from "axios"
import { appStore } from "../store/store"
import { filterItems } from "../helper/filterItems"
import { IYandexDiskFile } from "../types/Files"
import { ROOT_PATH_FOLDER } from "../constants/constants"

export const getAllFiles = async () => {
  try {
    const response = await axios.get(`${ROOT_PATH_FOLDER}/files`, {
      headers: {
        Authorization: `OAuth ${process.env.REACT_APP_API_KEY}`,
      },
    })
    const newYandexDiskFiles: IYandexDiskFile[] = response.data.items.map(
      (item: IYandexDiskFile) => ({
        //Имя файла который находиться в яндекс диске
        name: item.name,
        //Каталог в котором лежит данный файл
        path: item.path,
        //Дата создания данного файла
        created: item.created,
        //Дата последнего изменения данного файла
        modified: item.modified,
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
        Authorization: `OAuth ${process.env.REACT_APP_API_KEY}`,
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
    const response = await axios.post(`${ROOT_PATH_FOLDER}/move`, null, {
      params: {
        from: from,
        path: to,
      },
      headers: {
        Authorization: `OAuth ${process.env.REACT_APP_API_KEY}`,
      },
    })
    getAllFiles()
  } catch (error) {
    console.error("Ошибка перемещения", error)
  }
}

export const createFolders = async (folderName: string) => {
  try {
    const response = await axios.put(
      `${ROOT_PATH_FOLDER}?path=/CaseLabDocuments/${folderName}`,
      null, // тело запроса отсутствует
      {
        headers: {
          Authorization: `OAuth ${process.env.REACT_APP_API_KEY}`,
        },
      },
    )
  } catch (error) {
    if (axios.isAxiosError(error) && error.response && error.response.status === 409) {
      console.log(`Директория ${folderName} уже существует`)
    } else {
      console.error("Ошибка API запроса", error)
    }
  }
}

// delete применяется и к папкам, и к файлам
export const deleteResources = async (resourceName: string) => {
  try {
    const response = await axios.delete("https://cloud-api.yandex.net/v1/disk/resources", {
      headers: {
        Authorization: `OAuth ${process.env.REACT_APP_API_KEY}`,
      },
      params: {
        path: `CaseLabDocuments/${resourceName}`,
        force_async: true,
      },
    })
  } catch (error) {
    console.error("Ошибка АПИ запроса", error)
  }
}

export const createFiles = () => {
  return ""
}

export const getFolder = async (currentPath: string) => {}
export const getFolderContents = async (folderPath: string) => {}
