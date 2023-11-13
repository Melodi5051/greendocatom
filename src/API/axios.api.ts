import axios from "axios"
import { appStore } from "../store/store"
import path from "path"
import { IYandexDiskFile, IYandexDiskFolders } from "../types/Files"
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
        name: item.name,
        path: item.path,
        created: item.created,
        modified: item.modified,
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
    const newYandexDiskFolders = folders.map((item: any) => ({ name: item.name }))
    appStore.setArrayFolders(newYandexDiskFolders)
  } catch (error) {
    console.error("API Error", error)
  }
}

export const moveFile = async (from: string, to: string, fileName: string) => {
  try {
    await axios
      .post(`${ROOT_PATH_FOLDER}/move`, null, {
        params: {
          from: from,
          path: to,
        },
        headers: {
          Authorization: `OAuth ${process.env.REACT_APP_API_KEY}`,
        },
      })
      .then((response) => {
        if (response.status === 201) {
          const newArray: IYandexDiskFile[] = appStore.arrayItems.map((obj) =>
            obj.name === fileName ? { ...obj, path: to } : obj,
          )
          appStore.setArrayItems(newArray)
        }
      })
  } catch (error) {
    console.error("Move Error", error)
  }
}

export const createFolders = async (folderName: string) => {
  try {
    await axios.put(`${ROOT_PATH_FOLDER}?path=/CaseLabDocuments/${folderName}`, null, {
      headers: {
        Authorization: `OAuth ${process.env.REACT_APP_API_KEY}`,
      },
    })
  } catch (error) {
    if (axios.isAxiosError(error) && error.response && error.response.status === 409) {
      console.log(`Directory ${folderName} already exists`)
    } else {
      console.error("API Error", error)
    }
  }
}

export const deleteResources = async (resourceName: string, type: string) => {
  try {
    await axios
      .delete("https://cloud-api.yandex.net/v1/disk/resources", {
        headers: {
          Authorization: `OAuth ${process.env.REACT_APP_API_KEY}`,
        },
        params: {
          path: `CaseLabDocuments/${resourceName}`,
          force_async: true,
        },
      })
      .then((response) => {
        if (response.status === 202) {
          if (type === "dir") {
            const newFolderarray = appStore.arrayFolders.filter(
              (item: any) => item.name !== resourceName,
            )
            appStore.setArrayFolders(newFolderarray)
            if (appStore.categoryFilter.toLocaleLowerCase() === resourceName.toLowerCase()) {
              appStore.setCategoryFilter("")
            }
          } else {
            const newFileArray = appStore.arrayItems.filter(
              (item: any) => item.name !== resourceName.split("/").pop(),
            )
            appStore.setArrayItems(newFileArray)
          }
        }
      })
  } catch (error) {
    console.error("API Error", error)
  }
}

export const createFiles = () => {
  return ""
}
