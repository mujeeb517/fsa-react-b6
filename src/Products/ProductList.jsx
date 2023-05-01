import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import ProductItem from './ProductItem';
import { useNavigate } from 'react-router-dom';
import ShouldRender from '../ShouldRender';
// component created
// fetch data
// render data
// pagination
// searching
// sorting

function ProductList() {
    const [response, setResponse] = useState({
        metadata: {},
        data: []
    });

    const navigate = useNavigate();
    const [hasError, setError] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        const headers = {
            authorization: `Bearer ${token}`
        };
        axios.get('https://fsa-api-b4.onrender.com/api/products', { headers })
            .then(res => setResponse(res.data))
            .catch(err => {
                if (err.response.status === 401) {
                    navigate('/login');
                } else {
                    setError(true);
                }
            });
    }, []);

    return <div>
        <ShouldRender condition={hasError}>
            <div className="bg-red-500 m-2">
                Something went error, please try again
            </div>
        </ShouldRender>
        <h1 className="text-lg font-bold">Products</h1>
        {response.data.map(product => <ProductItem product={product} />)}
    </div>
}

export default ProductList;