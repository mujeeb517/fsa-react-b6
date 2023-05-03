import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from '../utils/axios';
import ProductItem from "./ProductItem";

function ProductDetails() {
    const [product, setProduct] = useState({});
    const { id } = useParams();

    useEffect(() => {

        axios().get(`/api/products/${id}`)
            .then(res => setProduct(res.data))
            .catch(console.log);
    }, []);

    return <div>
        <h1>Product Detail</h1>
        <ProductItem product={product} />
    </div>
}

export default ProductDetails;