import React from "react"
import "./Aside.css"
import AsideHeader from "../AsideHeader/AsideHeader"
import ButtonText from "../Buttons/Button"
import { appStore } from "../../store/store"
const Aside = () => {
  return (
    <aside>
    <AsideHeader />
    <ButtonText text='Все категории'/>
    {appStore.arrayFolders.length === 0 ? (
      <p>Loading</p>
    ) : (
      appStore.arrayFolders.map((item: any, index) => (
        <ButtonText key={index} text={item.name} iconName="icon-folder-open" hasIconPencil={true} />
      ))
    )}
  </aside>
  )
}

export default Aside
