
import { observer } from 'mobx-react-lite';
import { appStore } from "../../store/store";
import { useEffect } from 'react';
import { getAllFiles, getAllFolder } from '../../API/axios.api';
import './Main.css'
import Aside from "../Aside/Aside";
import Table from "../Table/Table";

const Main = () => {
  
  useEffect(() => {
    getAllFiles()
  }, [appStore.categoryFilter, appStore.arrayFolders])
  return (
    
    <main>
      <Aside />
      <Table arrayItems={appStore.arrayItems} />
    </main>
  )
}

export default observer(Main)
