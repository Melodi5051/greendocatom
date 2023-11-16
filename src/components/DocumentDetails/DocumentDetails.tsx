import { Link, useParams } from "react-router-dom"
import { appStore } from "../../store/store"
import { formatNumber } from "../../helper/filterItems"
import { getDownloadLink } from "../../API/apiDisc"
import { deleteResources } from "../../API/axios.api"
import { extractFolderName } from "../../helper/formatDate"
import "./DocumentDetails.css"


const DocumentPage = () => {
  const { name } = useParams()
  const helderSerchFullItem = appStore.arrayItems.filter((item) => item.name === name)

  const handleDownloadFile = (path: string): void => {
    getDownloadLink(path)
  }

  const handleDeleteFile = (name: string, path: string): void => {
    appStore.setCategoryFilter("")
    deleteResources(`${extractFolderName(path)}/${name}`, "")
  }

  return (
    <div className="rosatom-fontFamily-regular">
      <div className="document-details">
        <div className="document-details-container">
          <div className="row">
            <div className="column">
              <span>Название документа: {helderSerchFullItem[0].name}</span>
            </div>
            <div className="column">
              <span>Категория: {helderSerchFullItem[0].path}</span>
            </div>
          </div>
          <div className="row">
            <div className="column">
              <span>Дата редактирования: {helderSerchFullItem[0].modified}</span>
            </div>
            <div className="column">
              <span>Дата создания: {helderSerchFullItem[0].created}</span>
            </div>
          </div>
          <div className="row">
            <div className="column">
              <span>Размер документа: {formatNumber(helderSerchFullItem[0].size)}</span>
            </div>
          </div>
        </div>

        <div className="action-buttons">
          <button
            className="download-button"
            onClick={() => handleDownloadFile(helderSerchFullItem[0].path)}
          >
            СКАЧАТЬ
          </button>
          <Link to={"/"}>
            <button
              className="delete-button"
              onClick={() => handleDeleteFile(helderSerchFullItem[0].name, helderSerchFullItem[0].path)}
            >
              УДАЛИТЬ
            </button>
          </Link>
        </div>
      </div>
      <img
        src={helderSerchFullItem[0].preview}
        alt="Document preview"
        onError={(e) => console.error("Error loading image:", e)}
      />

    </div>
  )
}

export default DocumentPage
