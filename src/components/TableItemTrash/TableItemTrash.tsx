import Tooltip from "../Tooltip/Tooltip"
import download_icon from "./../../assets/icons/icon-download.svg"
import trash_icon from "./../../assets/icons/icon-trash.svg"
import { restoreResource } from "../../API/axios.api"
import { deleteTrash } from "../../API/apiDeleteRequest"
interface IYandexTrashList {
  name: string
  path: string
}
const TableItemTrash = ({ name, path }: IYandexTrashList) => {
  const handleDeleteFileFromTrash = (path: string): void => {
    deleteTrash(path)
  }
  return (
    <tr className="table-item">
      <td className="table-name">
        <Tooltip content={name}>{name}</Tooltip>
        <div className="adaptive_icon">
          <img
            src={download_icon}
            alt=""
            className="download-icon"
            onClick={() => restoreResource(path)}
          />
          <img
            src={trash_icon}
            alt=""
            className="trash-icon"
            onClick={(event) => handleDeleteFileFromTrash(path)}
          />
        </div>
      </td>
      <td className="table-refresh">
        <button className="refresh-button" onClick={() => restoreResource(path)}>
          ВОССТАНОВИТЬ
        </button>
      </td>
      <td className="table-delete">
        <button className="delete-button" onClick={() => handleDeleteFileFromTrash(path)}>
          УДАЛИТЬ
        </button>
      </td>
    </tr>
  )
}

export default TableItemTrash
