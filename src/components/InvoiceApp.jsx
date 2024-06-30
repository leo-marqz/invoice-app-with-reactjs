import React from 'react'
import { getInvoice } from '../services/InvoiceService'

export function InvoiceApp() {

    const {id, name, client, company, items} = getInvoice();
    const {name: clientName, lastname: clientLastName, address} = client;
    const {country, city, street, number} = address;

  return (
    <React.Fragment>
        <h1>Ejemplo Factura</h1>
        <ul>
            <li>Id: {id}</li>
            <li>Name: {name}</li>
        </ul>

        <h3>Datos del Cliente</h3>
        <ul>
            <li>Name: {clientName} {clientLastName}</li>
            <li>Country: {country}</li>
            <li>City: {city}</li>
            <li>Address: {street} {number}</li>
        </ul>

        <h3>Datos de la Empresa</h3>
        <ul>
            <li>Name: {company.name}</li>
            <li>Fiscal Number: {company.fiscalNumber}</li>
        </ul>

        <h4>Lista de Productos en Factura</h4>
        
    </React.Fragment>
  )
}
