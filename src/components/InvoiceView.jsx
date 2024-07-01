import React from 'react'

export function InvoiceView({id, name}) {
    return (
        <>
            <h3>Detalles de Factura</h3>
            <ul className='list-group shadow-sm'>
                <li className='list-group-item'><strong>Factura ID: </strong>{id}</li>
                <li className='list-group-item'><strong>Factura Descripcion: </strong> {name}</li>
            </ul>
        </>
    )
}
