import axios from "axios"
import { ROOT_PATH_FOLDER, TRASH_PATH_FOLDER } from "../constants/constants"
import { appStore } from "../store/store"
import { IYandexDiskFile, IYandexDiskFolders, IYandexTrashItems } from "../types/Files"

export const getAllFiles = async () => {
  try {
    const response = await axios.get(`${ROOT_PATH_FOLDER}/files?preview_size=1920x1080`, {
      headers: {
        Authorization: `OAuth ${process.env.REACT_APP_API_KEY}`,
      },
    })
    const newYandexDiskFiles: IYandexDiskFile[] = response.data.items.map(
      (item: IYandexDiskFile) => ({
        name: item.name,
        path: item.path,
        created: item.created,
        modified: item.modified,
        preview: item.sizes[0].url,
        size: item.size,
      }),
    )
    appStore.setArrayItems(newYandexDiskFiles)
  } catch (error) {
    console.error("API Error", error)
  }
}

export const getAllFolders = async () => {
  try {
    const response = await axios.get(`${ROOT_PATH_FOLDER}?path=CaseLabDocuments`, {
      headers: {
        Authorization: `OAuth ${process.env.REACT_APP_API_KEY}`,
      },
    })
    const folders = response.data._embedded.items.filter((item: any) => item.type === "dir")
    const newYandexDiskFolders = folders.map((item: IYandexDiskFolders) => ({
      name: item.name,
      path: item.path,
    }))

    appStore.setArrayFolders(newYandexDiskFolders)
  } catch (error) {
    console.error("API Error", error)
  }
}

export const getAllTrash = async () => {
  try {
    const response = await axios.get(`${TRASH_PATH_FOLDER}`, {
      headers: {
        Authorization: `OAuth ${process.env.REACT_APP_API_KEY}`,
      },
    })
    const folders = response.data._embedded.items.filter((item: any) => item.type === "dir")
    const files = response.data._embedded.items.filter((item: any) => item.type === "file")

    const newYandexDiskFoldes = folders.map((item: IYandexDiskFolders) => ({
      name: item.name,
      path: item.path,
      created: item.created,
      deleted: item.deleted,
    }))
    const newYandexDiskFiles = files.map((item: IYandexDiskFile) => ({
      name: item.name,
      path: item.path,
      created: item.created,
      modified: item.modified,
    }))
    appStore.setArrayTrashItems([...newYandexDiskFiles, ...newYandexDiskFoldes])
  } catch (error) {
    console.error("API Error", error)
  }
}
