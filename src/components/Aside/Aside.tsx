import React from 'react';
import './Aside.css'
import AsideHeader from '../AsideHeader/AsideHeader';
import ButtonText from '../Buttons/Button';
const Aside = () => {
    return (
        <aside>
            <AsideHeader />
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
        </aside>
    );
}

export default Aside;

