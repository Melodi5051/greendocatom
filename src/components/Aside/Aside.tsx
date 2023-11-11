import React from "react"
import "./Aside.css"
import AsideHeader from "../AsideHeader/AsideHeader"
import ButtonText from "../Buttons/Button"
const Aside = () => {
  return (
    <aside className="">
      <h1 className="aside-title rosatom-fontFamily-regular">Категории</h1>
      <AsideHeader />
      <div className="aside-footer rosatom-fontFamily-bold">
        <ButtonText text="Удаленные документы" iconName="icon-folder-open" />
      </div>
    </aside>
  )
}

export default Aside
