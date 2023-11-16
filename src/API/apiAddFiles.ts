import axios from "axios"
import { getAllFiles } from "./axios.api"

export async function uploadFileToYandexDisk(category: string, file: File): Promise<void> {
  try {
    const { data } = await axios.get(
      `https://cloud-api.yandex.net/v1/disk/resources/upload?path=CaseLabDocuments/${category}/${file.name}`,
      {
        headers: {
          Authorization: process.env.REACT_APP_API_KEY,
        },
      },
    )
    const formData = new FormData()
    formData.append("file", file)
    await axios
      .put(data.href, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        if (response.status === 201) {
          getAllFiles()
        }
      })
  } catch (error) {
    console.error("Ошибка загрузки файла", error)
  }
}
