
import { observer } from 'mobx-react-lite';
import { appStore } from "../../store/store";
import { useEffect, useRef } from "react"
import { getAllFiles } from "../../API/axios.api"
import "./Main.css"
import Aside from "../Aside/Aside"
import Table from "../Table/Table"
import { storeAside } from "../../store/storeAside"
import MainHeader from "../MainHeader/MainHeader"
import { filterItems } from "../../helper/filterItems"

const Main = () => {
  const handleClickDocument = (event: any) => {
    const target = event.target as HTMLElement
    if (!target.closest(".aside-open") && !target.closest(".aside-close")) {
      storeAside.setIsOpen(false)
    }
  }
  return (
    <main onClick={(event) => handleClickDocument(event)}>
      <Aside />
      <div className="main-content">
        <MainHeader />
        {/* {appStore.searchSubstring ?
          <Table arrayItems={appStore.findItems(appStore.searchSubstring)} /> :} */}
        <Table arrayItems={filterItems(appStore.arrayItems, appStore.categoryFilter)} />
      </div>
    </main>
  )
}

export default observer(Main)
