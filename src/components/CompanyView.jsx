import React from 'react'

export function CompanyView({company}) {
    return (
        <>
            <h3>Datos de la Empresa</h3>
            <ul className='list-group shadow-sm'>
                <li className='list-group-item bg-light'><strong>Nombre: </strong> {company.name}</li>
                <li className='list-group-item'><strong>Numero Fiscal: </strong> {company.fiscalNumber}</li>
            </ul>
        </>
    )
}
