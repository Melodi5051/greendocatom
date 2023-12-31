import "./Aside.css"
import { observer } from "mobx-react-lite"
import AsideHeader from "../AsideHeader/AsideHeader"
import { storeAside } from "../../store/storeAside"
import { Link } from "react-router-dom"
import IconTrash from "./../../assets/icons/icon-trash.svg"
import InputAside from "../UI/InputAside"
import { appStore } from "../../store/store"
const Aside = () => {
  return (
    <aside
      data-testid="aside-component"
      className={storeAside.isOpen ? "aside-open" : "aside-close"}
    >
      <AsideHeader />
      <div className="aside-footer rosatom-fontFamily-bold">
        <Link to={"/basket"} onClick={() => appStore.setCurrentPage(1)}>
          <img src={IconTrash} alt="" />
          <InputAside value="Удаленные файлы" path="" />
        </Link>
      </div>
    </aside>
  )
}

export default observer(Aside)
