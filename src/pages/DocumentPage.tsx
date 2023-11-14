import { Link, useParams } from "react-router-dom"
import { appStore } from "../store/store"
import { formatNumber } from "../helper/filterItems"
import { getDownloadLink } from "../API/apiDisc"
import { deleteResources } from "../API/axios.api"
import { extractFolderName } from "../helper/formatDate"

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
      <h2>Страница документа</h2>
      <p>Имя документа {helderSerchFullItem[0].name}</p>
      <p>Каталог документа {helderSerchFullItem[0].path}</p>
      <p>Дата создания документа {helderSerchFullItem[0].created}</p>
      <p>Дата обновлениея документа {helderSerchFullItem[0].modified}</p>
      <p>Размер {formatNumber(helderSerchFullItem[0].size)}</p>
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
      <img src={helderSerchFullItem[0].preview} alt="" />
    </div>
  )
}

export default DocumentPage
