import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { appStore } from './store/store';
import {getAllFiles} from './API/axios.api'
const App: React.FC = () => {
  useEffect(() => {
    getAllFiles();
  }, []); 
  return (
    <div>
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
