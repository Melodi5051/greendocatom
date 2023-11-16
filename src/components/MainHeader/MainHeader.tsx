import React from "react"
import "./MainHeader.css"
import { observer } from "mobx-react-lite"
import { appStore } from "../../store/store"
import refresh_icon from "./../../assets/icons/icon-refreshpage.svg"
import CustomInput from "../CustomInput/CustomInput"
import { getAllFiles, getAllFolders } from "../../API/axios.api"
import arrayBack from "./../../assets/icons/icon-back.svg"
import {Link, useLocation} from "react-router-dom"
import { extractFolderName } from "../../helper/formatDate"
import { storeAddFiles } from "../../store/storeAddFiles"
import { uploadFileToYandexDisk } from "../../API/apiAddFiles"

const MainHeader = () => {
  const location = useLocation()
  const handleRefreshTable = () => {
    getAllFiles()
    getAllFolders()
    appStore.setCategoryFilter("")
    appStore.setSubstring("")
  }
  const handleFileSelection = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0]
    storeAddFiles.setSelectedFile(file)
  }

  const handleFolderSelection = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const folder = event.target.value
    storeAddFiles.setSelectedFolder(folder)
  }

  const handleAddFiles = () => {
    if (storeAddFiles.selectedFile && storeAddFiles.selectedFolder) {
      uploadFileToYandexDisk(storeAddFiles.selectedFolder, storeAddFiles.selectedFile)
      getAllFiles()
    } else {
      alert("Выберите файл")
    }
  }
  return (
    <div className="main-header">
      <div className="main-refresh">
        {appStore.categoryFilter.length > 0 ? (
          <Link to={"/"}>
            <img
              src={arrayBack}
              alt=""
              onClick={() => appStore.setCategoryFilter(appStore.categoryTemp)}
            />
          </Link>
        ) : null}
        <Link to={"/"}>
          <img
            className="refresh_icon"
            src={refresh_icon}
            alt=""
            onClick={(event) => handleRefreshTable()}
          />
        </Link>
        <h1>{appStore.categoryFilter.length > 0 ? appStore.categoryFilter : location.pathname === "/basket" ? "Удаленные файлы" : "Все файлы"}</h1>
      </div>
      <div className="main-add-files">
        <input type="file" onChange={handleFileSelection} />
        <select
          className="category-select"
          value={storeAddFiles.selectedFolder}
          onChange={handleFolderSelection}
        >
          {appStore.arrayFolders.map((folder: any, folderIndex: any) => (
            <option key={folderIndex} value={folder.name}>
              {folder.name}
            </option>
          ))}
        </select>
        <button className="aside-add-button" onClick={() => handleAddFiles()}>
          +
        </button>
      </div>
      <div className="main-input">
        <CustomInput placeholder="Поиск документа" showButton={true} />
      </div>
    </div>
  )
}

export default observer(MainHeader)

