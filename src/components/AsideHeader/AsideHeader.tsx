import IconTrash from "./../../assets/icons/icon-trash.svg"
import "./AsideHeader.css"
import { appStore } from "../../store/store"
import { observer } from "mobx-react-lite"
import { createFolders } from "../../API/axios.api"
import InputAside from "../UI/InputAside"
import { storeAside } from "../../store/storeAside"
import { Link } from "react-router-dom"
import { storeAddFiles } from "../../store/storeAddFiles"
import { uploadFileToYandexDisk } from "../../API/apiAddFiles"
import downloadLogo from "./../../assets/icons/icon-download.svg"
import React from "react"
import { deleteResources } from "../../API/apiDeleteRequest"
import { getAllFiles } from "../../API/apiGetAll"
import { IYandexDiskFolders } from "../../types/Files"
const AsideHeader = () => {
  const handleClickTrash = (fileName: string) => {
    deleteResources(fileName, "dir")
  }
  const handleAddNewCategory = () => {
    createFolders(storeAside.editedValueInputAdd)
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
    <div className="aside-header rosatom-fontFamily-regular">
      <h1 className="aside-title">
        Категории <button onClick={() => storeAside.setIsOpen(!storeAside.isOpen)}>x</button>
      </h1>

      <Link to={"/"}>
        <div className="aside-button" onClick={() => console.log(appStore.categoryFilter)}>
          <InputAside value="Все файлы" path="" />
        </div>
      </Link>

      <div className="aside-content">
        {appStore.arrayFolders.length === 0 ? (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <span className="loader"></span>
          </div>
        ) : (
          appStore.arrayFolders.map((item: IYandexDiskFolders, index: number) => (
            <Link key={index} to={"/"}>
              <div className="aside-button">
                <InputAside isActive={false} value={item.name} path={item.path} />
                <img src={IconTrash} alt="" onClick={(e) => handleClickTrash(item.name)} />
              </div>
            </Link>
          ))
        )}
        <div className="aside-add">
          <label htmlFor="folderName">Добавить категорию</label>
          <div className="aside-add-group">
            <input
              id="folderName"
              type="text"
              placeholder="Название категории"
              className="aside-add-input"
              value={storeAside.editedValueInputAdd}
              onChange={(event) => storeAside.setEditedValueInputAdd(event.target.value)}
            />
            <button className="aside-add-button" onClick={handleAddNewCategory}>
              +
            </button>
          </div>
        </div>
        <div className="add-files__wrapper">
          <div className="input__wrapper ">
            <input
              name="file"
              type="file"
              id="input__file"
              className="input input__file"
              onChange={handleFileSelection}
              multiple
            />
            <label htmlFor="input__file" className="input__file-button">
              <span className="input__file-icon-wrapper">
                <img
                  className="input__file-icon"
                  src={downloadLogo}
                  alt="Выбрать файл"
                  width="25"
                />
              </span>
              <span className="input__file-button-text">Выберите файл</span>
            </label>
          </div>
          <select
            className="category-select"
            value={storeAddFiles.selectedFolder}
            onChange={handleFolderSelection}
          >
            {appStore.arrayFolders.map((folder: IYandexDiskFolders, folderIndex: number) => (
              <option key={folderIndex} value={folder.name}>
                {folder.name}
              </option>
            ))}
          </select>
          <button className="aside-add-button" onClick={() => handleAddFiles()}>
            Добавить
          </button>
        </div>
      </div>
    </div>
  )
}

export default observer(AsideHeader)
