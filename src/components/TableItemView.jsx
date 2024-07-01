import React from 'react'

export default function TableItemView({ item }) {
    return (
        <tr key={item.id}>
            <td>{item.product}</td>
            <td>${item.price}</td>
            <td>{item.quantity}</td>
        </tr>
    )
}
