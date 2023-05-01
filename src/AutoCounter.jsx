import { useEffect } from "react";
import { useState } from "react";

function AutoCounter() {
    const [count, setCount] = useState(1);

    // did update
    // didMount, didUpdate, willUnmount
    useEffect(() => {
        const interval = setTimeout(() => {
            console.log('incrementing...');
            setCount(count + 1);
        }, 1000);

        return function () {
            clearInterval(interval);
        }
    }, [count]);

    return (<div>
        <h1 className="text-xl font-bold">Count {count}</h1>
    </div>);
}

export default AutoCounter;