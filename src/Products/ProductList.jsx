import axios from '../utils/axios';
import { useState } from 'react';
import { useEffect } from 'react';
import ProductItem from './ProductItem';
import { Link, useNavigate } from 'react-router-dom';
import ShouldRender from '../ShouldRender';

function ProductList() {

    const [response, setResponse] = useState({
        metadata: {},
        data: []
    });

    const navigate = useNavigate();
    const [hasError, setError] = useState(false);
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const [searchText, setSearchText] = useState('');
    const [search, setSearch] = useState('');
    const [sort, setSort] = useState('');
    const [dir, setDir] = useState('');

    useEffect(() => {
        axios().get(`/api/products/page/${page}/limit/${limit}?search=${search}&sort=${sort}&direction=${dir}`)
            .then(res => setResponse(res.data))
            .catch(err => {
                if (err.response.status === 401) {
                    navigate('/login');
                } else {
                    setError(true);
                }
            });
    }, [page, search, sort, dir]);


    const onFirst = () => setPage(1);
    const onPrev = () => {
        if (page !== 1)
            setPage(page - 1);
    }
    const onNext = () => {
        if (page < response.metadata.pages) {
            setPage(page + 1);
        }
    }
    const onLast = () => setPage(response.metadata.pages);

    const onSearch = evt => {
        evt.preventDefault();
        setPage(1);
        setSearch(searchText);
    };

    const onSearchChange = evt => setSearchText(evt.target.value);

    const onSortChange = evt => {
        const value = evt.target.value;
        if (value) {
            const tokens = value.split(':');
            setSort(tokens[0]);
            setDir(tokens[1]);
        } else {
            setSort('');
            setDir('');
        }
    };

    return <div>
        <ShouldRender condition={hasError}>
            <div className="bg-red-500 m-2">
                Something went error, please try again
            </div>
        </ShouldRender>
        <h1 className="text-lg font-bold">Products</h1>
        <form className="m-2" onSubmit={onSearch}>
            <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div class="relative">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </div>
                <input onChange={onSearchChange} type="search" id="default-search" class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Search Mockups, Logos..." />
                <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
            </div>
        </form>
        <div className="flex items-center justify-start">
            <select onChange={onSortChange} className="m-2 p-2 border border-gray-500 rounded">
                <option value="">Sort By</option>
                <option value="price:asc">Price Low to High</option>
                <option value="price:desc">Price High to Low</option>
                <option value="brand:asc">Name Asc</option>
                <option value="brand:desc">Name Desc</option>
                <option value="discount:asc">Discount Low to High</option>
                <option value="discount:desc">Discount High to Low</option>
            </select>
            <button onClick={onFirst} className="text-gray-500 m-1 border border-gray-500 p-1 hover:bg-orange-500 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" />
                </svg>
            </button>
            <button onClick={onPrev} className="text-gray-500 m-1 border border-gray-500 p-1 hover:bg-orange-500 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
            </button>
            <span className="text-gray-500">Page {page} of {response.metadata.pages} (Total: {response.metadata.count} )</span>
            <button onClick={onNext} className="text-gray-500 m-1 border border-gray-500 p-1 hover:bg-orange-500 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            </button>
            <button onClick={onLast} className="text-gray-500 m-1 border border-gray-500 p-1 hover:bg-orange-500 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
                </svg>
            </button>
            <Link className="m-2 border p-2 rounded text-white border-orange-500 bg-orange-500" to="/products/create">Add Product</Link>
        </div>
        {response.data.map(product => <ProductItem product={product} />)}
    </div>
}

export default ProductList;