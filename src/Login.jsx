import { Component } from "react";
import axios from 'axios';
import ShouldRender from "./ShouldRender";

class Login extends Component {

    state = {
        email: '',
        password: '',
        hasError: false
    };

    onTextChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }

    onLogin = async (evt) => {
        try {
            evt.preventDefault();
            const res = await axios.post('https://fsa-api-b4.onrender.com/api/users/signin', this.state);
            localStorage.setItem('token', res.data.token);
        } catch (err) {
            this.setState({ hasError: true });
        }
    }

    isInvalid = () => {
        return !this.state.email || !this.state.password;
    }

    render() {
        return <form onSubmit={this.onLogin}>
            <ShouldRender condition={this.state.hasError}>
                <div className="bg-red-500 p-2 m-2 text-white">
                    Invalid username or password.
                </div>
            </ShouldRender>
            <div className="bg-white shadow-md w-1/3 rounded px-8 pt-6 pb-8 m-3">
                <h1 className="text-2xl text-center font-semibold text-gray-500">Login</h1>
                <div className="mb-4 mt-2 text-gray-500">
                    <label className="block text-sm font-bold mb-2">Email</label>
                    <input name="email" onChange={this.onTextChange}
                        style={{ borderLeft: this.state.email ? '5px solid green' : '5px solid brown' }}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Username" />
                    <ShouldRender condition={!this.state.email}>
                        <span className="text-red-400">Email required</span>
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
