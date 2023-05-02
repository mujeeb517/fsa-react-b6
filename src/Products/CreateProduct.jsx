function CreateProduct() {

    const onSave = () => {

    }

    return (<div className="m-2 w-1/2">
        <h1 className="text-lg">Add Product</h1>
        <div>
            <input className="m-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text" placeholder="Brand" />
        </div>
        <div>
            <input className="m-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text" placeholder="Model" />
        </div>
        <div>
            <input className="m-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="number" placeholder="Price" />
        </div>
        <div>
            <input className="m-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="number" placeholder="Discount" />
        </div>
        <div className="flex">
            <label class="mt-2 ml-2 block text-gray-700 text-sm mb-2" for="username">
                InStock
            </label>
            <input className="m-2 leading-tight" type="checkbox" />
        </div>
        <div>
            <button onClick={onSave} className="m-2 bg-orange-500 py-1 px-3 text-white">Save</button>
        </div>
    </div>);
}

export default CreateProduct;