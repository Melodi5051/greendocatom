import React from 'react';
import { IYandexDiskFile } from '../../types/Files';

interface ITableItem {
    name: string,
    path: string,
    modified: string
}

const TableItem = ({ name, path, modified }: ITableItem) => {

    return (
        <tr>
            <td><input type='checkbox' /></td>
            <td>{name}</td>
            <td>
                <select name="" id="">
                    <option value="">{path}</option>
                </select>
            </td>
            <td>{modified}</td>
            <td>{modified}</td>
            <td>
                <button>скачать</button>
                <button>удалить</button>
            </td>
        </tr>
    );
}

export default TableItem;