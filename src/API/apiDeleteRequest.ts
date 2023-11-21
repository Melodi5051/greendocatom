import axios from "axios"
import { appStore } from "../store/store"
import { TRASH_PATH_FOLDER } from "../constants/constants"
import { IYandexDiskFile, IYandexDiskFolders, IYandexTrashItems } from "../types/Files"
import { storeNotifications } from "../store/storeNotifications"

export const deleteResources = async (resourceName: string, type: string, pathFile?: string) => {
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
          (item: IYandexDiskFolders) => item.name !== resourceName,
        )
        appStore.setArrayFolders(newFolderarray)
        if (appStore.categoryFilter.toLocaleLowerCase() === resourceName.toLowerCase()) {
          appStore.setCategoryFilter("")
        }
      } else {
        const newFileArray = appStore.arrayItems.filter(
          (item: IYandexDiskFile) => item.path !== pathFile,
        )
        appStore.setArrayItems(newFileArray)
      }
    }
  } catch (error) {
    console.error("API Error", error)
  }
}

export const deleteTrash = async (resourcePath: string = "trash:/") => {
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
        (item: IYandexTrashItems) => item.path !== resourcePath,
      )
      appStore.setArrayTrashItems(newFileArrayTrash)
    }
  } catch (error) {
    storeNotifications.addNotification({
      title: "Ошибка загрузки файла",
      type: "fatal",
    })
  }
}
