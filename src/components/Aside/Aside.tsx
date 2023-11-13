import "./Aside.css"
import { observer } from "mobx-react-lite"
import AsideHeader from "../AsideHeader/AsideHeader"
import ButtonText from "../Buttons/Button"
import { storeAside } from "../../store/storeAside"
import { Link } from "react-router-dom"
const Aside = () => {
  return (
    <aside className={storeAside.isOpen ? "aside-open" : "aside-close"}>
      <h1 className="aside-title rosatom-fontFamily-regular">Категории</h1>
      <Link to={"/"}>
        <AsideHeader />
      </Link>
      <div className="aside-footer rosatom-fontFamily-bold">
        <Link to={"/basket"}>
          <ButtonText text="Удаленные документы" hasIconTrash={true} buttonText="sdfsdf" />
        </Link>
      </div>
    </aside>
  )
}

export default observer(Aside)
