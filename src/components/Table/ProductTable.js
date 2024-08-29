import React from 'react'

function ProductTable({ products }) {
    console.log('products:', products)
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>productName</th>
                        <th>productPrice</th>
                        <th>productQuantity</th>
                        <th>productType</th>
                        <th>addDate</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr>
                            <td>{product.productName}</td>
                            <td>{product.productPrice}</td>
                            <td>{product.productQuantity}</td>
                            <td>{product.productType}</td>
                            <td>{product.addDate}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ProductTable