import React from 'react';

class Counter2 extends React.Component {

    state = {
        count: 10
    };

    componentDidMount = () => {
        this.xyz = setInterval(() => {
            console.log('incrementing');
            this.setState({
                count: this.state.count + 1
            });
        }, 1000);
    }

    componentWillUnmount = () => {
        console.log('cleaning up');
        clearInterval(this.xyz);
    }

    render() {
        return <div>
            <h1 className="text-lg font-bold">Count {this.state.count}</h1>
        </div>
    }
}

export default Counter2;