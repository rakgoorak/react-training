import React from 'react'
import products from '../../mockData/product'
import Table from '../../components/TableV2/Table'

function Product() {
    const column = [
        { title: 'Product name', dataindex: 'productName' },
        { title: 'Type', dataindex: 'productType' },
        {
            title: 'Quantity', dataindex: 'productQuantity', render: (e) => {
                console.log('e:', e)
                return e ? e : 'soout'
            }
        },
        { title: 'Price', dataindex: 'productPrice' }
    ]

    return (
        <Table column={column} data={products} />
    )
}

export default Product