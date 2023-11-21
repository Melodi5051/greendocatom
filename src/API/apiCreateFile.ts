import axios from "axios"
import { ROOT_PATH_FOLDER } from "../constants/constants"
import { storeNotifications } from "../store/storeNotifications"

export const getDownloadLink = async (filePath: string) => {
  try {
    const response = await axios.get(`${ROOT_PATH_FOLDER}/download?path=${encodeURI(filePath)}`, {
      headers: {
        Authorization: process.env.REACT_APP_API_KEY,
      },
    })
    const result = response.data.href
    const link = document.createElement("a")
    link.href = result
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  } catch (error) {
    storeNotifications.addNotification({
      title: "Ошибка загрузки файла",
      type: "fatal",
    })
  }
}

export const getUploadLink = async (filePath: string) => {
  try {
    const response = await axios.get(`${ROOT_PATH_FOLDER}/upload?path=${encodeURI(filePath)}`, {
      headers: {
        Authorization: process.env.REACT_APP_API_KEY,
      },
    })
    const result = response.data
    return result.href
  } catch (error) {
    storeNotifications.setVisible(true)
    storeNotifications.addNotification({
      title: "Ошибка загрузки файла",
      type: "fatal",
    })
  }
}
