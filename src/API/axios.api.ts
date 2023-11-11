import axios, { isAxiosError } from "axios"
import { appStore } from "../store/store"
import { extractFolderName, formatData } from "../helper/formatDate"
import { IYandexDiskFile } from "../types/Files"
import { error } from "console"
export const getAllFiles = async () => {
  try {
    const response = await axios.get("https://cloud-api.yandex.net/v1/disk/resources/files", {
      headers: {
        Authorization: process.env.REACT_APP_API_KEY,
      },
      params: {
        limit: 10,
      },
    })
    const newYandexDiskFiles: IYandexDiskFile[] = response.data.items.map(
      (item: IYandexDiskFile) => ({
        name: item.name,
        path: extractFolderName(item.path),
        modified: formatData(new Date(item.modified)),
      }),
    )
    appStore.setArrayItems(newYandexDiskFiles)
  } catch (error) {
    console.error("Ошибка АПИ запроса", error)
  }
}

export const createFolders = async (folderName: string) => {

  try {
    const response = await axios.put("https://cloud-api.yandex.net/v1/disk/resources", {
      headers: {
        Authorization: process.env.REACT_APP_API_KEY,
      },
      params: {
        path: `CaseLabDocuments/${folderName}`
      }
    }
    );
    console.log('создали успешно');
  } catch (error) {
    if (isAxiosError(error) && error.response && error.response.status === 409) {
      console.log(`Директория ${folderName} уже существует`);
    } else {
      console.error("Ошибка АПИ запроса", error);
    }
  }
};

// delete применяется и к папкам, и к файлам
export const deleteResources = async (resourceName: string) => {

  try {
    const response = await axios.delete("https://cloud-api.yandex.net/v1/disk/resources", {
      headers: {
        Authorization: process.env.REACT_APP_API_KEY,
      },
      params: {
        path: `CaseLabDocuments/${resourceName}`,
        force_async: true
      },
    });
    console.log('удалили успешно');
  } catch (error) {
    console.error("Ошибка АПИ запроса", error)
  }
}



export const createFiles = () => {
  return ""
}

export const getFolder = async (currentPath: string) => { }
export const getFolderContents = async (folderPath: string) => { }
