// Container
// Presentation
import ProductItem from './ProductItem';

function ProductList() {
    const products = [
        { id: 1, brand: 'Apple', model: 'Iphone X', price: 500.99, inStock: false, image: 'https://www.shutterstock.com/image-photo/new-york-usa-may-302018-260nw-1105476671.jpg' },
        { id: 2, brand: 'Apple', model: 'Iphone 11', price: 700.99, inStock: true, image: 'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-11-2.jpg' },
        { id: 3, brand: 'Apple', model: 'Iphone 12', price: 800.99, inStock: true, image: 'https://cdn.dxomark.com/wp-content/uploads/medias/post-61183/iphone-12-pro-blue-hero.jpg' }];

    return <div className="m-4">
        <h1 className="text-3xl text-gray-700">Product List</h1>
        {products.map(product => <ProductItem key={product.id} product={product} />)}
        {/* {products.map(p => <ProductItem key={p.id} product={p} />)} */}
    </div>
}

export default ProductList;