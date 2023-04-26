import Counter3 from "./Counter3";

function Home() {

    return (<div className="m-2">
        <h1>Home Page</h1>
        <Counter3 cnt={10000} />
    </div>);
}

export default Home;