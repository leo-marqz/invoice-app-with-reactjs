import React from 'react'
import TableItemView from './TableItemView';

export default function TableView({title, items}) {
    return (
        <>
            <h3>{title}</h3>
            <table className='table table-hover shadow-sm'>
                <thead>
                    <tr>
                        <th className='bg-light'>Producto</th>
                        <th className='bg-light'>Precio</th>
                        <th className='bg-light'>Cantidad</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(item => {
                        return (
                            <TableItemView item={item} />
                        );
                    })}

                </tbody>
            </table>
        </>
    )
}
