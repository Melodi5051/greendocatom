import React from "react"
import "./Aside.css"
import AsideHeader from "../AsideHeader/AsideHeader"
const Aside = () => {
  return (
    <aside>
      <h1 className="aside-title rosatom-fontFamily-regular">Категории</h1>

      <AsideHeader />
    </aside>
  )
}

export default Aside
