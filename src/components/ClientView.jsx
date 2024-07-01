import React from 'react'

export function ClientView({client}) {
    return (
        <>
            <h3>Datos del Cliente</h3>
            <ul className='list-group shadow-sm'>
                <li className='list-group-item bg-light'><strong>Nombre: </strong> {client.name} {client.lastname}</li>
                <li className='list-group-item'><strong>Direccion 1: </strong> {client.address.city} / {client.address.country}</li>
                <li className='list-group-item'><strong>Direccion 2: </strong> {client.address.street} {client.address.number}</li>
            </ul>
        </>
    )
}
