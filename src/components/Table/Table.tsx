import React from 'react';
import './Table.css'
import TableItem from '../TableItem/TableItem';

const Table = ({ arrayItems }: any) => {
    return (
        <section className='table-wrapper'>
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
                    {arrayItems.map((file: any, index: number) => (
                        <TableItem key={index} name={file.name} path={file.path} modified={file.modified} />
                    ))}
                </tbody>
            </table>
        </section>

    );
}

export default Table;