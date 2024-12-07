import React from 'react'
import products from '../../mockData/product'
import Table from '../../components/TableV2/Table'

function Product() {
    const column = [
        { title: 'Product name', dataindex: 'productName', datatype: 'text' },
        { title: 'Type', dataindex: 'productType', datatype: 'text' },
        { title: 'Add Date', dataindex: 'addDate', datatype: 'date' },
        {
            title: 'Quantity', dataindex: 'productQuantity', datatype: 'number', render: (e) => {
                // console.log('e:', e)
                return e ? e : 'soout'
            }
        },
        { title: 'Price', dataindex: 'productPrice', datatype: 'number' }
    ]

    return (
        <Table column={column} data={products} />
    )
}

export default Product