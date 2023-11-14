import IconTrash from "./../../assets/icons/icon-trash.svg"
import "./AsideHeader.css"
import { appStore } from "../../store/store"
import { observer } from "mobx-react-lite"
import { createFolders, deleteResources } from "../../API/axios.api"
import InputAside from "../UI/InputAside"
import { storeAside } from "../../store/storeAside"

const AsideHeader = () => {
  const handleClickTrash = (fileName: string) => {
    deleteResources(fileName, "dir")
  }
  const handleAddNewCategory = () => {
    createFolders(storeAside.editedValueInputAdd)
  }
  return (
    <div className="aside-header rosatom-fontFamily-regular">
      <div className="aside-button">
        <InputAside value="Все файлы" path="" />
      </div>
      <div className="aside-content">
        {appStore.arrayFolders.length === 0 ? (
          <p>Loading...</p>
        ) : (
          appStore.arrayFolders.map((item: any, index: number) => (
            <div key={index} className="aside-button">
              <InputAside isActive={false} value={item.name} path={item.path} />
              {/* <img src={pencil} alt="" /> */}
              <img src={IconTrash} alt="" onClick={(e) => handleClickTrash(item.name)} />
            </div>
          ))
        )}
        <div className="aside-add">
          <input
            type="text"
            placeholder="Название папки"
            className="aside-add-input"
            name=""
            onChange={(event) => storeAside.setEditedValueInputAdd(event.target.value)}
            id=""
          />
          <button className="aside-add-button" onClick={handleAddNewCategory}>
            +
          </button>
        </div>
      </div>
    </div>
  )
}

export default observer(AsideHeader)
