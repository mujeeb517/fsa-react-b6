import { Component } from "react";
import ShouldRender from "./ShouldRender";

class Login extends Component {

    state = {
        username: '',
        password: ''
    };

    onTextChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }

    onLogin = (evt) => {
        console.log(this.state);
        evt.preventDefault();
    }

    isInvalid = () => {
        return !this.state.username || !this.state.password;
    }

    render() {
        return <form onSubmit={this.onLogin}>
            <div className="bg-white shadow-md w-1/3 rounded px-8 pt-6 pb-8 m-3">
                <h1 className="text-2xl text-center font-semibold text-gray-500">Login</h1>
                <div className="mb-4 mt-2 text-gray-500">
                    <label className="block text-sm font-bold mb-2">Username</label>
                    <input name="username" onChange={this.onTextChange}
                        style={{ borderLeft: this.state.username ? '5px solid green' : '5px solid brown' }}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Username" />
                    <ShouldRender condition={!this.state.username}>
                        <span className="text-red-400">Username required</span>
                    </ShouldRender>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-500 text-sm font-bold mb-2">Password</label>
                    <input
                        style={{ borderLeft: this.state.password ? '5px solid green' : '5px solid brown' }}
                        name="password" onChange={this.onTextChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="password" placeholder="Password" />
                    <ShouldRender condition={!this.state.password}>
                        <span className="text-red-400">Password required</span>
                    </ShouldRender>
                </div>
                <div>
                    <button disabled={this.isInvalid()} type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        Login
                    </button>
                </div>
            </div>
        </form>
    }
}

export default Login;
