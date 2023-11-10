import React, { useEffect } from 'react';
import './styles/Main.css'
import { observer } from 'mobx-react-lite';
import { appStore } from './store/store';
import { getAllFiles } from './API/axios.api'
import Table from './components/Main/Table';
import Aside from './components/Main/Aside';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';


const App: React.FC = () => {

  useEffect(() => {
    getAllFiles();
  }, []);

  return (
    <main>
      <Header />
      <Aside />
      <Table arrayItems={appStore.arrayItems} />
      <Footer />
    </main>
  );
};

export default observer(App);
