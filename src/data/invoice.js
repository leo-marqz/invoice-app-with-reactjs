
export const invoice = {
    id: 1001,
    name: 'Componentes para PC',
    client: {
        name: 'Jorge',
        lastname: 'Gutierrez',
        address: {
            country: 'USA',
            city: 'Los Angeles',
            street: 'Robbert Street',
            number: 12
        }
    },
    company: {
        name: 'PC Repuestos',
        fiscalNumber: 123458478
    },
    items: [
        {
            id: 1,
            product: 'CPU Intel i9',
            price: 999.75,
            quantity: 1
        },
        {
            id: 2,
            product: 'Corsair Keyboard Mecanico',
            price: 149.99,
            quantity: 1
        },
        {
            id: 3,
            product: 'Monitor Asus',
            price: 300,
            quantity: 3
        },
        {
            id: 4,
            product: 'Monitor HP',
            price: 350,
            quantity: 5
        }
    ]
}