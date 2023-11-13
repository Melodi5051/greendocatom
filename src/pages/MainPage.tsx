import React from "react"
import { observer } from "mobx-react-lite"
import Table from "../components/Table/Table"
import { filterItems } from "../helper/filterItems"
import { appStore } from "../store/store"
const MainPage = () => {
  return (
    <>
      <Table arrayItems={filterItems(appStore.arrayItems, appStore.categoryFilter)} />
    </>
  )
}

export default observer(MainPage)
