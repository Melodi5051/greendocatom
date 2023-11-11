import React from "react"
import "./AsideHeader.css"
import { appStore } from "../../store/store"
import ButtonText from "../Buttons/Button"

const AsideHeader = () => {
  return (
    <div className="aside-header ">
      <ButtonText text="Все категории" iconName="icon-folder-open" />
      {appStore.arrayFolders.length === 0 ? (
        <p>Loading</p>
      ) : (
        appStore.arrayFolders.map((item: any, index) => (
          <ButtonText
            key={index}
            text={item.name}
            iconName="icon-folder-open"
            hasIconPencil={true}
          />
        ))
      )}
    </div>
  )
}

export default AsideHeader
