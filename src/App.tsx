import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { appStore } from './store/store';
import { getAllFiles, createFolders, deleteResources } from './API/axios.api';
const App: React.FC = () => {
  const [folderName, setFolderName] = useState('');

  // Создать папку
  const handleCreateFolder = () => {
    createFolders(folderName);
  };

  // Удалить папку или файл
  const handleDeleteResource = () => {
    deleteResources(folderName);
  };

  // Получить список файлов
  const handleGetAllFiles = () => {
    getAllFiles();
  };

  return (
    <div>
      <h1>Files from Yandex.Disk</h1>

      <div>
        <label>
          Folder Name:
          <input type="text" value={folderName} onChange={(e) => setFolderName(e.target.value)} />
        </label>
        <button onClick={handleCreateFolder}>Create Folder</button>
        <button onClick={handleDeleteResource}>Delete Folder/File</button>
        <button onClick={handleGetAllFiles}>Get All Files</button>
      </div>

      <ul>
        {appStore.arrayItems.map((file, index) => (
          <li key={index}>
            <strong>Название:</strong> {file.name}, <strong>Категория:</strong> {file.path},{' '}
            <strong>Дата обновления:</strong> {file.modified}
          </li>
        ))}
      </ul>
    </div>
    // <div>
    //   <h1>Files from Yandex.Disk</h1>
    //   <ul>
    //     {appStore.arrayItems.map((file, index) => (
    //       <li key={index}>
    //         <strong>Название:</strong> {file.name}, <strong>Категория:</strong> {file.path}, <strong>Дата обновления:</strong> {file.modified}
    //       </li>
    //     ))}
    //   </ul>
    // </div>
  );
};

export default observer(App);
