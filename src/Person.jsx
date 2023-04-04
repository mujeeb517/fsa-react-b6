// props
// interpolation
export default function Person({ name, age }) {
    return <div>
        <h3>{name}</h3>
        <h4>{age}</h4>
        {
            age > 25 ?
                <h5>Old</h5> :
                <h5>Young</h5>
        }
    </div>;
}

// react?
// setup
// component
// modules
// jsx
// props
// consume and pass props
// interpolation
// conditional rendering
// rendering
// styles
// css framework