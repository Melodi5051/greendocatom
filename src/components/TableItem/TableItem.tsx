import { IYandexDiskFile } from "../../types/Files"
import { observer } from "mobx-react-lite"
import { appStore } from "./../../store/store"
import { deleteResources, moveFile } from "../../API/axios.api"
import { extractFolderName } from "../../helper/formatDate"
import { removeFileExtension } from "../../helper/filterItems"
import "./TableItem.css"
import download_icon from "./../../assets/icons/icon-download.svg"
import trash_icon from "./../../assets/icons/icon-trash.svg"
import info_icon from "./../../assets/icons/icon-info.svg"
import { formatData } from "../../helper/formatDate"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getDownloadLink, getUploadLink } from "../../API/apiDisc"
import Tooltip from "../Tooltip/Tooltip"

const TableItem = ({ name, path, modified, created }: IYandexDiskFile) => {
  const handleFileChangeCategory = (e: React.ChangeEvent<HTMLSelectElement>, name: string) => {
    moveFile(path, `disk:/CaseLabDocuments/${e.target.value}/${name}`, name)
  }
  const handleDeleteFile = (e: any, name: string, path: string) => {
    deleteResources(`${extractFolderName(path)}/${name}`, "file")
  }
  const handleChangeCategoryFile = (
    e: React.ChangeEvent<HTMLSelectElement>,
    name: string,
    path: string,
  ) => {
    appStore.setCategoryTemp(appStore.categoryFilter)
    appStore.setCategoryFilter(`${extractFolderName(path)}/${name}`)
  }

  const handleDownloadFile = (path: string) => {
    getDownloadLink(path)
  }

  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  const [downloadLink, setLinkD] = useState("#")

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth)
    }
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <>
      <tr className="table-item">
        <td className="table-name">
          <Tooltip content={name}>
            <Link
              to={`/${name}`}
              onClick={(event: any) => handleChangeCategoryFile(event, name, path)}
            >
              {removeFileExtension(name)}
            </Link>
          </Tooltip>
          <div className="adaptive_icon">
            <img src={info_icon} alt="" className="info-icon" />
            <img
              src={download_icon}
              alt=""
              className="download-icon"
              onClick={() => handleDownloadFile(path)}
            />
            <img
              src={trash_icon}
              alt=""
              className="trash-icon"
              onClick={(event) => handleDeleteFile(event, name, path)}
            />
          </div>
        </td>
        <td className="table-category">
          <select
            className="category-select"
            value={extractFolderName(path)}
            onChange={(e) => handleFileChangeCategory(e, name)}
          >
            {appStore.arrayFolders.map((folder: any, folderIndex: any) => (
              <option key={folderIndex} value={folder.name}>
                {folder.name}
              </option>
            ))}
          </select>
          <span></span>
        </td>
        <td className="table-modified">{formatData(new Date(modified))}</td>
        <td className="table-created">{formatData(new Date(created))}</td>
        <td className="table-download">
          <button className="download-button" onClick={() => handleDownloadFile(path)}>
            СКАЧАТЬ
          </button>
        </td>
        <td className="table-delete">
          <button
            className="delete-button"
            onClick={(event) => handleDeleteFile(event, name, path)}
          >
            УДАЛИТЬ
          </button>
        </td>
      </tr>
    </>
  )
}

export default observer(TableItem)
