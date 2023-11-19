import { Link } from "react-router-dom"
import { appStore } from "../../store/store"
import { formatNumber } from "../../helper/filterItems"
import { getDownloadLink } from "../../API/apiCreateFile"
import { moveFile } from "../../API/axios.api"
import { extractFolderName, formatData } from "../../helper/formatDate"
import "./DocumentDetails.css"
import { useState } from "react"
import { deleteResources } from "../../API/apiDeleteRequest"
import { IYandexDiskFolders } from "../../types/Files"
interface DocumentDetailsProps {
  name: string
  path: string
  modified: string
  created: string
  size: number | undefined
}

const DocumentPage = ({ name, path, modified, created, size }: DocumentDetailsProps) => {
  const handleDownloadFile = (path: string): void => {
    getDownloadLink(path)
  }
  const [selectedCategory, setSelectedCategory] = useState(path)
  const handleDeleteFile = (name: string, path: string): void => {
    appStore.setCategoryFilter("")
    deleteResources(`${extractFolderName(path)}/${name}`, "")
  }
  const handleFileChangeCategory = (from: string, path: string, name: string) => {
    setSelectedCategory(`disk:/CaseLabDocuments/${path}/${name}`)
    moveFile(from, `disk:/CaseLabDocuments/${path}/${name}`, name)
  }
  return (
    <div className="document-details rosatom-fontFamily-regular">
      <div className="document-details-container">
        <div className="row">
          <div className="column document-title">
            <span>Название документа: {name}</span>
          </div>
          <div className="column">
            <span>
              Категория:
              <select
                className="category-select"
                value={extractFolderName(selectedCategory)}
                onChange={(event) =>
                  handleFileChangeCategory(selectedCategory, event.target.value, name)
                }
              >
                {appStore.arrayFolders.map((folder: IYandexDiskFolders, folderIndex: number) => (
                  <option key={folderIndex} value={folder.name}>
                    {folder.name}
                  </option>
                ))}
              </select>
            </span>
          </div>
        </div>
        <div className="row">
          <div className="column">
            <span>Дата редактирования: {formatData(new Date(modified))}</span>
          </div>
          <div className="column">
            <span>Дата создания: {formatData(new Date(created))}</span>
          </div>
        </div>
        <div className="row">
          <div className="column">
            <span>Размер документа: {formatNumber(size)}</span>
          </div>
        </div>
      </div>

      <div className="action-buttons">
        <button className="download-button" onClick={() => handleDownloadFile(path)}>
          СКАЧАТЬ
        </button>
        <Link to={"/"}>
          <button className="delete-button" onClick={() => handleDeleteFile(name, path)}>
            УДАЛИТЬ
          </button>
        </Link>
      </div>
    </div>
  )
}

export default DocumentPage
