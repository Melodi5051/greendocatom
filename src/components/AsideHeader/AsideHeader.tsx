import IconTrash from "./../../assets/icons/icon-trash.svg"
import "./AsideHeader.css"
import { appStore } from "../../store/store"
import ButtonText from "../Buttons/Button"
import { observer } from "mobx-react-lite"
import { deleteResources } from "../../API/axios.api"

const AsideHeader = () => {
  const handleClickTrash = (fileName: string) => {
    deleteResources(fileName, "dir")
  }

  return (
    <div className="aside-header ">
      <ButtonText text="Все категории" IconFolderOpen={true} />
      {appStore.arrayFolders.length === 0 ? (
        <p>Loading...</p>
      ) : (
        appStore.arrayFolders.map((item: any, index: number) => (
          <div className="aside-button">
            <ButtonText
              key={index}
              text={item.name}
              iconName="icon-folder-open"
              hasIconPencil={true}
              IconFolderOpen={true}
            />
            <img src={IconTrash} alt="" onClick={(e) => handleClickTrash(item.name)} />
          </div>
        ))
      )}
    </div>
  )
}

export default observer(AsideHeader)
