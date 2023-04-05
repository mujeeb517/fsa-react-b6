function ProductList() {

    const products = [
        { id: 1, brand: 'Apple', model: 'Iphone X', price: 500.99, inStock: false, image: 'https://www.shutterstock.com/image-photo/new-york-usa-may-302018-260nw-1105476671.jpg' },
        { id: 2, brand: 'Apple', model: 'Iphone 11', price: 700.99, inStock: true, image: 'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-11-2.jpg' },
        { id: 3, brand: 'Apple', model: 'Iphone 12', price: 800.99, inStock: true, image: 'https://cdn.dxomark.com/wp-content/uploads/medias/post-61183/iphone-12-pro-blue-hero.jpg' }];

    return <div>
        <h1>Product List</h1>
        <table className="w-full text-left text-gray-500">
            <thead className="border-b uppercase">
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>InStock</th>
            </thead>
            <tbody>
                {
                    products.map(product => <tr className="border-b">
                        <td><img alt="product" src={product.image} width="100" height="100" /></td>
                        <td>{product.brand} {product.model}</td>
                        <td>{product.price}</td>
                        <td>{product.inStock ? 'Yes' : 'No'}</td>
                    </tr>)
                }
            </tbody>
        </table>
        {/* {
            products.map(product => <div>
                <h1>{product.brand} {product.model}</h1>
                <img src={product.image} width="300" height="300" />
                <b>${product.price}</b>
                <div>
                    In stock
                    <input type="checkbox" checked={product.inStock} />
                </div>
            </div>)
        } */}

    </div>
}

export default ProductList;