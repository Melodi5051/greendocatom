import React, { useEffect } from "react"
import IconTrash from "./../../assets/icons/icon-trash.svg"
import "./AsideHeader.css"
import { appStore } from "../../store/store"
import ButtonText from "../Buttons/Button"
import { observer } from "mobx-react-lite"
import { deleteResources, getAllFolder } from "../../API/axios.api"
const AsideHeader = () => {
  useEffect(() => {
    setTimeout(() => {
      getAllFolder()
    }, 2000)
  }, [appStore.updateWeb])

  const handleClickTrash = (fileName: string) => {
    deleteResources(fileName)
    appStore.updateAllComponents(!appStore.updateWeb)
  }
  return (
    <div className="aside-header ">
      <ButtonText text="Все категории" IconFolderOpen={true} />
      {appStore.arrayFolders.length === 0 ? (
        <p>Loading...</p>
      ) : (
        appStore.arrayFolders.map((item: any, index) => (
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
