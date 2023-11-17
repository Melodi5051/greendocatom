import axios from "axios"
import { appStore } from "../store/store"
import { IYandexDiskFile } from "../types/Files"
import { ROOT_PATH_FOLDER, TRASH_PATH_FOLDER } from "../constants/constants"
import { getAllFolders } from "./apiGetAll"

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

export const restoreResource = async (resourcePath: string) => {
  try {
    await axios.put(`${TRASH_PATH_FOLDER}/restore?path=${resourcePath}`, null, {
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
