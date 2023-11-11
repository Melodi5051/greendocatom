import { IYandexDiskFile } from "../../types/Files"
import { observer } from "mobx-react-lite"
import { appStore } from "./../../store/store"
import { getAllFiles, moveFile } from "../../API/axios.api"
import { extractFolderName } from "../../helper/formatDate"


const TableItem = ({ name, path, modified, created }: IYandexDiskFile) => {
  const handleFileChangeCategory = (e: React.ChangeEvent<HTMLSelectElement>, name: string) => {
    moveFile(path, `disk:/CaseLabDocuments/${e.target.value}/${name}`)
    
  }
  return (
    <tr>
      <td>{name}</td>
      <td>
        <select value={extractFolderName(path)} onChange={(e) => handleFileChangeCategory(e, name)}>
          {appStore.arrayFolders.map((folder: any, folderIndex) => (
            <option key={folderIndex} value={folder.name}>
              {folder.name}
            </option>
          ))}
        </select>
      </td>
      <td>{modified}</td>
      <td>{created}</td>
    </tr>
  )
}

export default observer(TableItem)
