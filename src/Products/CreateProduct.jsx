import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ShouldRender from "../ShouldRender";
import axios from '../utils/axios';

// analyze api
// ui
// state
// api call
// handle success
// handle error
// email regex
// mobile
// raw
// Formik
function CreateProduct() {

    const [product, setProduct] = useState({
        brand: '',
        model: '',
        price: '',
        inStock: false,
        discount: '',
        image: ''
    });

    const [success, setSuccess] = useState(false);

    const navigate = useNavigate();

    const onChange = evt => {
        const newState = {
            ...product,
            [evt.target.name]: evt.target.value
        };

        setProduct(newState);
    }

    const onSave = async () => {
        try {
            const productToSave = { ...product };
            productToSave.inStock = !!productToSave.inStock;

            const frm = new FormData();
            frm.append('brand', productToSave.brand);
            frm.append('model', productToSave.model);
            frm.append('price', productToSave.price);
            frm.append('inStock', productToSave.inStock);
            frm.append('discount', productToSave.discount);
            frm.append('image', productToSave.image);

            await axios().post('/api/products', frm);
            // navigate('/products');
            setSuccess(true);
            setProduct({
                brand: '',
                model: '',
                price: '',
                inStock: false,
                discount: '',
                image: ''
            });
        } catch (err) {
            console.log(err);
        }
    }

    const onFileChange = evt => {
        const newState = {
            ...product,
            image: evt.target.files[0]
        };

        setProduct(newState);
    };

    const { brand, model, inStock, price, discount, image } = product;

    return (<div className="m-2 w-1/2">
        <ShouldRender condition={success}>
            <div className="bg-green-700 rounded text-white p-2">
                Successfully product added.
            </div>
        </ShouldRender>
        <h1 className="text-lg">Add Product</h1>
        <div>
            <input name="brand" value={brand} onChange={onChange} className="m-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text" placeholder="Brand" />
        </div>
        <div>
            <input name="model" value={model} onChange={onChange} className="m-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text" placeholder="Model" />
        </div>
        <div>
            <input name="price" value={price} onChange={onChange} className="m-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="number" placeholder="Price" />
        </div>
        <div>
            <input name="discount" value={discount} onChange={onChange} className="m-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="number" placeholder="Discount" />
        </div>
        <div className="flex">
            <label class="mt-2 ml-2 block text-gray-700 text-sm mb-2" for="username">
                InStock
            </label>
            <input value={inStock} name="inStock" onChange={onChange} className="m-2 leading-tight" type="checkbox" />
        </div>
        <div>
            <input onChange={onFileChange} type="file" className="m-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div>
            <button onClick={onSave} className="m-2 bg-orange-500 py-1 px-3 text-white">Save</button>
        </div>
    </div>);
}

export default CreateProduct;