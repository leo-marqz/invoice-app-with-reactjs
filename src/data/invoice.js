
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
            product: 'CPU Intel i9',
            price: 999.75,
            quantity: 1
        },
        {
            product: 'Corsair Keyboard Mecanico',
            price: 149.99,
            quantity: 1
        },
        {
            product: 'Monitor Asus',
            price: 300,
            quantity: 3
        }
    ]
}