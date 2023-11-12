import "./Aside.css"
import { observer } from "mobx-react-lite"
import AsideHeader from "../AsideHeader/AsideHeader"
import ButtonText from "../Buttons/Button"
import { storeAside } from "../../store/storeAside"
const Aside = () => {
  return (
    <aside className={storeAside.isOpen ? "aside-open" : "aside-close"}>
      <h1 className="aside-title rosatom-fontFamily-regular">Категории</h1>
      <AsideHeader />
      <div className="aside-footer rosatom-fontFamily-bold">
        <ButtonText text="Удаленные документы" hasIconTrash={true} buttonText="sdfsdf" />
      </div>
    </aside>
  )
}

export default observer(Aside)
