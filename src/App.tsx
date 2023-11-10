import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { appStore } from './store/store';
import { getAllFiles } from './API/axios.api'
import Table from './components/Main/Table';


const App: React.FC = () => {

  useEffect(() => {
    getAllFiles();
  }, []);

  return (
    <main>
      <Table data={appStore.arrayItems} />
    </main>
  );
};

export default observer(App);
