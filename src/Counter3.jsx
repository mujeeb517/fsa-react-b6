import { useEffect } from 'react';
import { useState } from 'react';

function Counter3({ cnt }) {

    const [count, setCount] = useState(cnt);

    const inc = () => {
        setCount(count + 1);
    }

    const dec = () => {
        setCount(count - 1);
    }

    return <div>
        <h1 className="text-lg font-bold">Count {count}</h1>
        <button onClick={inc} className="m-2 bg-orange-500 py-1 px-2 border border-orange-600">++</button>
        <button onClick={dec} className="m-2 bg-orange-500 py-1 px-2 border border-orange-600">--</button>
    </div>
}

export default Counter3;