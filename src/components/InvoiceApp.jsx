import React from 'react'
import { getInvoice } from '../services/InvoiceService'
import {InvoiceView} from './InvoiceView';
import {ClientView} from './ClientView';
import { CompanyView } from './CompanyView';
import TableView from './TableView';

//leomarqz 30/06/2024
export function InvoiceApp() {

    const { id, name, client, company, items } = getInvoice();

    return (
        <React.Fragment>
            <div className='container mt-5'>
                <div className='card'>
                    <div className='card-header '>
                        Ejemplo de Factura
                    </div>
                    <div className='card-body'>
                        <InvoiceView id={id} name={name} />
                        <div className='row my-4'>
                            <div className='col'>
                                <ClientView client={client} />
                            </div>
                            <div className='col'>
                                <CompanyView company={company} />
                            </div>
                        </div>
                        <TableView title='Lista de Productos en Factura' items={items} />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
