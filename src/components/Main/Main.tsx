
import { observer } from 'mobx-react-lite';
import { appStore } from "../../store/store";
import './Main.css'
import Aside from "../Aside/Aside";
import Table from "../Table/Table";

const Main = () => {
  return (
    <main>
      <Aside />
      <Table arrayItems={appStore.arrayItems} />
    </main>
  )
}

export default observer(Main)
