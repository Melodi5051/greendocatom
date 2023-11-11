
import { observer } from 'mobx-react-lite';
import { appStore } from "../../store/store";
import { useEffect } from 'react';
import { getAllFiles } from "../../API/axios.api"
import "./Main.css"
import Aside from "../Aside/Aside"
import Table from "../Table/Table"

const Main = () => {
  useEffect(() => {
    getAllFiles()
    appStore.arrayItems.forEach((el) => {})
  }, [appStore.categoryFilter, appStore.arrayFolders])
  return (
    <main>
      <Aside />
      <div className="main-content">
        сюда добавить блока под шапкой который
        <Table arrayItems={appStore.arrayItems} />
      </div>
    </main>
  )
}

export default observer(Main)
