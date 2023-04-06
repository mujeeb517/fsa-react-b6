// class component
// function component
// props
// return ui
// return null
// can have state
// internal, mutated
// props external
// readonly
// events
// async: events, timers, api calls, file, db 
// static :per class
// instance: per obj
// container & prsentation component
// class component
// state
// create, read, update
// events
import React from 'react';

class Counter extends React.Component {

    state = {
        count: 100
    };

    inc = () => {
        const currentCount = this.state.count;
        this.setState({
            count: currentCount + 1
        });
    }

    dec = () => {
        this.setState({
            count: this.state.count - 1
        });
    }

    render() {
        return <div>
            <h1 className="text-lg font-semibold m-3">Counter</h1>
            <h1 className="text-lg m-3 font-bold">Count: {this.state.count}</h1>
            <button onClick={this.inc} className="py-1 px-2 hover:bg-orange-400 m-2 bg-orange-500 text-white font-semibold">++</button>
            <button onClick={this.dec} className="py-1 px-2 hover:bg-orange-400 m-2 bg-orange-500 text-white font-semibold">--</button>
        </div>;
    }
}

export default Counter;