import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { appStore } from './store/store';
import {getAllFiles} from './API/axios.api'
import ButtonText from './components/Buttons/Button';

const App: React.FC = () => {
  useEffect(() => {
    getAllFiles();
  }, []); 
  return (
    <div>
      <h1>Files from Yandex.Disk</h1>
      <div>
        {/* Будет убрано */}
        <ButtonText text='Бухгалтерия'    iconName='icon-folder-open' hasIconPencil={true} />
        <ButtonText text='Университет'    iconName='icon-folder-open' hasIconPencil={true}/>
        <ButtonText text='АХУ'            iconName='icon-folder-open' hasIconPencil={true}/>
        <ButtonText text='УТП'            iconName='icon-folder-open' hasIconPencil={true}/>
        <ButtonText text='Администрация'  iconName='icon-folder-open' hasIconPencil={true}/>
        <ButtonText text='Папка 1' iconName='icon-folder-open'/>
        <ButtonText text='Удаленные документы'  iconName='icon-trash' hasIconPencil={true}/>
        <ButtonText text='Только карандаш' hasIconPencil={true}/>
        <ButtonText text='Без иконок'/>
      </div>
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
