import axios, { AxiosResponse } from "axios"
import { API_KEY } from "../constant"

export const getFiles = () => {
  return ""
}

export const getFolders = () => {
  return ""
}

export const createFiles = () => {
  return ""
}

export const createFolders = async (folderName: string) => {
  try {
    const config = {
      headers: {
        Authorization: `OAuth ${API_KEY}`,
      },
    }

    const response: AxiosResponse = await axios.put(
      `https://cloud-api.yandex.net/v1/disk/resources?path=${encodeURIComponent(
        `disk:/CaseLabDocuments/${folderName}`,
      )}`,
      null,
      config,
    )

    alert(`Папка "${folderName}" успешно создана в корне Яндекс Диска.`)
  } catch (error) {
    console.error("Ошибка при создании папки", error)
  }
}
