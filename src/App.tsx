import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { appStore } from './store/store';
import { getAllFiles } from './API/axios.api'
import Header from './components/Header/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App: React.FC = () => {
  useEffect(() => {
    getAllFiles();
  }, []);
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          {/* <Route path="/documents" element={<Documents/>} /> */}
          {/* <Route path="/categories" element={<Categories/>} /> */}
          {/* <Route path="/userlist" element={<UserList/>} /> */}
        </Routes>
      </BrowserRouter>
      <h1>Files from Yandex.Disk</h1>
      <ul>
        {appStore.arrayItems.map((file, index) => (
          <li key={index}>
            <strong>Название:</strong> {file.name}, <strong>Категория:</strong> {file.path}, <strong>Дата обновления:</strong> {file.modified}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default observer(App);
