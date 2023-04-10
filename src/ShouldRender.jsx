function ShouldRender({ condition, children }) {
    return condition ? children : null;
}

export default ShouldRender;