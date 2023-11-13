import axios from "axios"
import { appStore } from "../store/store"
import { formatData } from "../helper/formatDate"
import {filterItems} from "../helper/filterItems"
import { IYandexDiskFile } from "../types/Files"
import { ROOT_PATH_FOLDER } from "../constants/constants"

const apiURL: string = "https://cloud-api.yandex.net/v1/disk/resources/upload";
let filePath: string = "disk:/CaseLabDocuments/бухгалтерия/lucide_check-circle.png";

export const getDownloadLink = async (filePath: string)=> {
    try {
        const response = await axios.get(`${ROOT_PATH_FOLDER}/download?path=${encodeURI(filePath)}`, {
            headers: {
                Authorization: process.env.REACT_APP_API_KEY,
              },
        });

        const result = response.data;
        return result.href;
    } catch(error) {
        console.error("Ошибка АПИ запроса при получении ссылки на скачивание документа", error);
    }
}

export const getUploadLink = async (filePath: string) => {
    try {
        const response = await axios.get(`${ROOT_PATH_FOLDER}/upload?path=${encodeURI(filePath)}`, {
            headers: {
                Authorization: process.env.REACT_APP_API_KEY,
              },
        });
        
        const result = response.data;
        console.log("getUploadLink", result.href);
        return result.href;
    } catch(error) {
        console.error("Ошибка АПИ запроса при получение ссылки на загрузку документа", error);
    }
}