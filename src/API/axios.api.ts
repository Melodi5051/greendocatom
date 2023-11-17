import axios from "axios"
import { appStore } from "../store/store"
import { IYandexDiskFile, IYandexDiskFolders } from "../types/Files"
import { ROOT_PATH_FOLDER, TRASH_PATH_FOLDER } from "../constants/constants"

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
        preview: item.preview,
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
    const newYandexDiskFolders = folders.map((item: any) => ({ name: item.name, path: item.path }))

    appStore.setArrayFolders(newYandexDiskFolders)
  } catch (error) {
    console.error("API Error", error)
  }
}

export const moveFile = async (from: string, to: string, fileName = "") => {
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
    if (response.status === 201) {
      const newArray: IYandexDiskFile[] = appStore.arrayItems.map((obj) =>
        obj.name === fileName ? { ...obj, path: to } : obj,
      )
      appStore.setArrayItems(newArray)
    }
  } catch (error) {
    console.error("Move Error", error)
  }
}

export const createFolders = async (folderName: string) => {
  try {
    await axios
      .put(`${ROOT_PATH_FOLDER}?path=/CaseLabDocuments/${folderName}`, null, {
        headers: {
          Authorization: `OAuth ${process.env.REACT_APP_API_KEY}`,
        },
      })
      .then((response) => {
        if (response.status === 201) {
          getAllFolders()
        }
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
    const response = await axios.delete("https://cloud-api.yandex.net/v1/disk/resources", {
      headers: {
        Authorization: `OAuth ${process.env.REACT_APP_API_KEY}`,
      },
      params: {
        path: `CaseLabDocuments/${resourceName}`,
        force_async: true,
      },
    })
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
  } catch (error) {
    console.error("API Error", error)
  }
}

export const renameResource = async (
  resourcePath: string,
  newResourceName: string,
  fileName: string,
) => {
  try {
    const response = await axios.post("https://cloud-api.yandex.net/v1/disk/resources/move", null, {
      params: {
        from: `disk:/CaseLabDocuments/${resourcePath}`,
        path: `disk:/CaseLabDocuments/${newResourceName}`,
      },
      headers: {
        Authorization: `OAuth ${process.env.REACT_APP_API_KEY}`,
      },
    })

    if (response.status === 201) {
      const newArray: IYandexDiskFile[] = appStore.arrayItems.map((obj) =>
        obj.name === fileName ? { ...obj, name: newResourceName } : obj,
      )
      appStore.setArrayItems(newArray)
    }
  } catch (error) {
    console.error("Rename Error", error)
  }
}

export const cleanTrash = async (resourcePath: string = "trash:/") => {
  try {
    const response = await axios.delete(TRASH_PATH_FOLDER, {
      headers: {
        Authorization: `OAuth ${process.env.REACT_APP_API_KEY}`,
      },
      params: {
        path: resourcePath?.split("/").pop(),
        force_async: true,
      },
    })
    if (response.status === 202) {
      console.log("delete ok")
      const newFileArrayTrash = appStore.arrayTrashItems.filter(
        (item: any) => item.path !== resourcePath,
      )
      appStore.setArrayTrashItems(newFileArrayTrash)
    }
  } catch (error) {
    console.error("API Error", error)
  }
}

export const getTrash = async () => {
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

export const restoreResource = async (resourcePath: string) => {
  try {
    const response = await axios.put(`${TRASH_PATH_FOLDER}/restore?path=${resourcePath}`, null, {
      headers: {
        Authorization: `OAuth ${process.env.REACT_APP_API_KEY}`,
      },
    })
  } catch (error) {
    if (axios.isAxiosError(error) && error.response && error.response.status === 404) {
      console.log(`Resource ${resourcePath} not found`)
    } else {
      console.error("API Error", error)
    }
  }
}
