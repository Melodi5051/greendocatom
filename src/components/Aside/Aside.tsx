import "./Aside.css"
import { observer } from "mobx-react-lite"
import AsideHeader from "../AsideHeader/AsideHeader"
import { storeAside } from "../../store/storeAside"
import { Link } from "react-router-dom"
import IconTrash from "./../../assets/icons/icon-trash.svg"
import InputAside from "../UI/InputAside"
const Aside = () => {
  return (
    <aside className={storeAside.isOpen ? "aside-open" : "aside-close"}>
      <h1 className="aside-title rosatom-fontFamily-regular">Категории</h1>
      <Link to={"/"}>
        <AsideHeader />
      </Link>
      <div className="aside-footer rosatom-fontFamily-bold">
        <Link to={"/basket"}>
          <img src={IconTrash} alt="" />
          <InputAside value="Удаленные файлы" path="" />
        </Link>
      </div>
    </aside>
  )
}

export default observer(Aside)
