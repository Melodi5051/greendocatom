import React from 'react';
import '../../styles/Table.css'
import TableItem from './TableItem';

const Table = ({ data }: any) => {


    return (
        <section>
            <select name="" id="" />
            <table className='documents-list-wrapper'>
                <thead>
                    <tr>
                        <th></th>
                        <th>Название</th>
                        <th>Категория</th>
                        <th>Дата изменения</th>
                        <th>Дата создания</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((file: any, index: number) => (
                        <TableItem key={index} fileName={file.name} filePath={file.path} fileModified={file.modified} />
                    ))}
                </tbody>
            </table>
        </section>

    );
}

export default Table;