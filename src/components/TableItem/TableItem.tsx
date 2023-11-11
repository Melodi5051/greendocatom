import { IYandexDiskFile } from "../../types/Files"
import { observer } from "mobx-react-lite"
import { appStore } from "./../../store/store"
import { moveFile } from "../../API/axios.api"
import { extractFolderName } from "../../helper/formatDate"
import { removeFileExtension } from "../../helper/filterItems"
import "./TableItem.css"
import { useState, useEffect } from "react"
import { formatData } from "../../helper/formatDate"

const TableItem = ({ name, path, modified, created }: IYandexDiskFile) => {
  const handleFileChangeCategory = (e: React.ChangeEvent<HTMLSelectElement>, name: string) => {
    moveFile(path, `disk:/CaseLabDocuments/${e.target.value}/${name}`)
  }
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
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
    <tr className="table-item">
      <td>
        <input type="checkbox" />
      </td>
      <td className="table-name" data-full-name={removeFileExtension(name)}>
        {removeFileExtension(name)}
      </td>
      <td className="table-category">
        <select
          className="category-select"
          value={extractFolderName(path)}
          onChange={(e) => handleFileChangeCategory(e, name)}
        >
          {appStore.arrayFolders.map((folder: any, folderIndex) => (
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
        <button className="download-button">СКАЧАТЬ</button>
      </td>
      <td className="table-delete">
        <button className="delete-button">УДАЛИТЬ</button>
      </td>
    </tr>
  )
}

export default observer(TableItem)
