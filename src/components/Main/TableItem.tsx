import React from 'react';
import { IYandexDiskFile } from '../../types/Files';

interface ITableItem {
    fileName: string,
    filePath: string,
    fileModified: string
}

const TableItem = ({ fileName, filePath, fileModified }: ITableItem) => {

    return (
        <tr>
            <td><input type='checkbox' /></td>
            <td>{fileName}</td>
            <td>
                <select name="" id="">
                    <option value="">{filePath}</option>
                </select>
            </td>
            <td>{fileModified}</td>
            <td>{fileModified}</td>
            <td>
                <button>скачать</button>
                <button>удалить</button>
            </td>
        </tr>
    );
}

export default TableItem;