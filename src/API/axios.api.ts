import axios from "axios"
import { appStore } from "../store/store"
import { filterItems } from "../helper/filterItems"
import { IYandexDiskFile } from "../types/Files"
import { ROOT_PATH_FOLDER, TRASH_PATH_FOLDER } from "../constants/constants"


//ПОЛУЧЕНИЕ ВСЕХ ФАЙЛОВ ИЗ ЯНДЕКС ДИСКА
export const getAllFiles = async () => {
  try {
    const response = await axios.get(`${ROOT_PATH_FOLDER}/files`, {
      headers: {
        Authorization: `OAuth ${process.env.REACT_APP_API_KEY}`,
      },
    })
    const newYandexDiskFiles: IYandexDiskFile[] = response.data.items.map(
      (item: IYandexDiskFile) => ({
        //Имя файла который находиться в яндекс диске
        name: item.name,
        //Каталог в котором лежит данный файл
        path: item.path,
        //Дата создания данного файла
        created: item.created,
        //Дата последнего изменения данного файла
        modified: item.modified,
      }),
    )
    appStore.setArrayItems(filterItems(newYandexDiskFiles, appStore.categoryFilter))
  } catch (error) {
    console.error("Ошибка АПИ запроса", error)
  }
}

//ПОЛУЧЕНИЕ ВСЕХ ПАПОК ИЗ ЯНДЕКС ДИСКА
export const getAllFolder = async () => {
  try {
    const response = await axios.get(`${ROOT_PATH_FOLDER}?path=CaseLabDocuments`, {
      headers: {
        Authorization: `OAuth ${process.env.REACT_APP_API_KEY}`,
      },
    })
    const folders = response.data._embedded.items.filter((item: any) => item.type === "dir")
    const newYandexDiskFoldes = folders.map((item: any) => ({
      name: item.name,
    }))
    appStore.setArrayFolders(newYandexDiskFoldes)
  } catch (error) {
    console.error("Ошибка АПИ запроса", error)
  }
}

//ПЕРЕМЕЩЕНИЕ ФАЙЛА
export const moveFile = async (from: string, to: string) => {
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
      appStore.updateAllComponents(!appStore.updateWeb)
  } catch (error) {
    console.error("Ошибка перемещения", error)
  }
}

//СОЗДАНИЕ ПАПКИ 
export const createFolders = async (folderName: string) => {
  try {
    const response = await axios.put(
      `${ROOT_PATH_FOLDER}?path=/CaseLabDocuments/${folderName}`,
      null, // тело запроса отсутствует
      {
        headers: {
          Authorization: `OAuth ${process.env.REACT_APP_API_KEY}`,
        },
      },
    )
  } catch (error) {
    if (axios.isAxiosError(error) && error.response && error.response.status === 409) {
      console.log(`Директория ${folderName} уже существует`)
    } else {
      console.error("Ошибка API запроса", error)
    }
  }
}

// УДАЛЕНИЕ ФАЙЛОВ И ПАПОК 
export const deleteResources = async (resourceName: string) => {
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
    appStore.updateAllComponents(!appStore.updateWeb)
  } catch (error) {
    console.error("Ошибка АПИ запроса", error)
  }
}


export const createFiles = () => {
  return ""
}

// ПЕРЕИМЕНОВАНИЕ ФАЙЛА/ПАПКИ
export const renameResource = async (resourcePath: string, newResourceName: string) => {
  try {
    const response = await axios.patch(`${ROOT_PATH_FOLDER}?path=CaseLabDocuments/${resourcePath}`, {
      params: {
        name: newResourceName,
      },
      headers: {
        Authorization: `OAuth ${process.env.REACT_APP_API_KEY}`,
      },
    })
    console.log(response.data)
    appStore.updateAllComponents(!appStore.updateWeb)
  } catch (error) {
    console.error("Ошибка переименования", error)
  }
}

// Использование функций:
// getTrash();
// restoreResource("trash:/logo.png_15252185b29db0d1b50e1866436c1f368050282f")
// cleanTrash("trash:/Front_JS_React (2) (2).pdf_ea9407cf123baef249b2d3d255048151db023811")

// ОЧИСТКА КОРЗИНЫ
export const cleanTrash = async (resourcePath : string = "trash:/") => {
  // если параметр path не задан или указывает на корень Корзины, 
  // то корзина будет полностью очищена, 
  // иначе из Корзины будет удалён только тот ресурс, на который указывает path.
  try {
    const response = await axios.delete(TRASH_PATH_FOLDER, {
      headers: {
        Authorization: `OAuth ${process.env.REACT_APP_API_KEY}`,
      },
      params: {
        path: resourcePath,
        force_async: true,
      },
    })
    appStore.updateAllComponents(!appStore.updateWeb)
  } catch (error) {
    console.error("Ошибка АПИ запроса", error)
  }
  
}

// ПОЛУЧИТЬ СОДЕРЖИМОЕ КОРЗИНЫ
export const getTrash = async () => {
  try {
    const response = await axios.get(
      `${TRASH_PATH_FOLDER}`, 
      {
        headers: {
          Authorization: `OAuth ${process.env.REACT_APP_API_KEY}`,
        },
      },
    )
    const folders = response.data._embedded.items.filter((item: any) => item.type === "dir")
    const files = response.data._embedded.items.filter((item: any) => item.type === "file")
    console.log(response.data)
    const newYandexDiskFoldes = folders.map((item: any) => ({
      name: item.name,
    }));
    const newYandexDiskFiles = files.map((item: IYandexDiskFile) => ({
        //Имя файла который находиться в яндекс диске
        name: item.name,
        //Каталог в котором лежит данный файл
        path: item.path,
        //Дата создания данного файла
        created: item.created,
        //Дата последнего изменения данного файла
        modified: item.modified,
      }),);
  } catch (error) {    
      console.error("Ошибка API запроса", error)    
  }
}

// ВОССТАНОВИТЬ РЕСУРС ИЗ КОРЗИНЫ
export const restoreResource = async (resourcePath: string) => {
  try {
    const response = await axios.put(
      `${TRASH_PATH_FOLDER}/restore?path=${resourcePath}`, 
      null, // тело запроса отсутствует
      {
        headers: {
          Authorization: `OAuth ${process.env.REACT_APP_API_KEY}`,
        },
      },
    )
    appStore.updateAllComponents(!appStore.updateWeb)
  } catch (error) {
    if (axios.isAxiosError(error) && error.response && error.response.status === 404) {
      console.log(`Ресурс ${resourcePath} не найден`)
    } else {
      console.error("Ошибка API запроса", error)
    }
  }
}

