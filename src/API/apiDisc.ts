import axios from "axios"
import { ROOT_PATH_FOLDER } from "../constants/constants"

// const apiURL: string = "https://cloud-api.yandex.net/v1/disk/resources/upload"
// let filePath: string = "disk:/CaseLabDocuments/бухгалтерия/lucide_check-circle.png"

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
    console.error("Ошибка АПИ запроса при получении ссылки на скачивание документа", error)
  }
}

export const getUploadLink = async (filePath: string) => {
  console.log(filePath)
  try {
    const response = await axios.get(`${ROOT_PATH_FOLDER}/upload?path=${encodeURI(filePath)}`, {
      headers: {
        Authorization: process.env.REACT_APP_API_KEY,
      },
    })

    const result = response.data
    console.log("getUploadLink", result.href)
    return result.href
  } catch (error) {
    console.error("Ошибка АПИ запроса при получение ссылки на загрузку документа", error)
  }
}
