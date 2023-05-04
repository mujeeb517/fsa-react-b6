import React, { useContext } from "react";
import AutoCounter from "./AutoCounter";
// context api

const DataContext = React.createContext(0);

function Level2() {
    return <>
        <Level1 />
        <h1>Level 2</h1>
    </>
}

function Level3() {
    return <>
        <Level2 />
        <h1>Level 3</h1>
    </>
}

function Parent() {
    return <div>
        <Level3 />
        <h1>Parent</h1>
    </div>
}

function Level1() {
    const ctx = useContext(DataContext);
    console.log(ctx);
    return <h1>Level 1 {ctx}</h1>
}

function Home() {
    return (<div className="m-2">
        <h1>Home Page</h1>
        <AutoCounter />
        <DataContext.Provider value={100}>
            <Parent />
        </DataContext.Provider>
    </div>);
}

export default Home;