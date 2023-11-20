import axios from "axios"
import { getAllFiles } from "./apiGetAll"
import { storeNotifications } from "../store/storeNotifications"

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
        storeNotifications.setVisible(true)
        storeNotifications.addNotification({
          title: "Файл успешно загружен",
          type: "success",
        })
        getAllFiles()
      })
  } catch (error) {
    storeNotifications.setVisible(true)
    storeNotifications.addNotification({
      title: "Ошибка загрузки файла",
      type: "fatal",
    })
  }
}
