import axios from 'axios';
import { useState } from 'react';
import ShouldRender from "./ShouldRender";
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        email: '',
        password: '',
    });

    const [hasError, setError] = useState(false);

    const onTextChange = (evt) => {
        const modifiedUser = {
            ...user,
            [evt.target.name]: evt.target.value
        };
        setUser(modifiedUser);
    }

    const onLogin = async (evt) => {
        try {
            evt.preventDefault();
            const res = await axios.post(
                'https://fsa-api-b4.onrender.com/api/users/signin',
                user
            );
            localStorage.setItem('token', res.data.token);
            navigate('/users');
        } catch (err) {
            setError(true);
        }
    }

    const isInvalid = () => {
        const { email, password } = user;
        return !email || !password;
    }

    const { email, password } = user;
    return <form onSubmit={onLogin}>
        <ShouldRender condition={hasError}>
            <div className="bg-red-500 p-2 m-2 text-white">
                Invalid username or password.
            </div>
        </ShouldRender>
        <div className="bg-white shadow-md w-1/3 rounded px-8 pt-6 pb-8 m-3">
            <h1 className="text-2xl text-center font-semibold text-gray-500">Login</h1>
            <div className="mb-4 mt-2 text-gray-500">
                <label className="block text-sm font-bold mb-2">Email</label>
                <input name="email" onChange={onTextChange}
                    style={{ borderLeft: email ? '5px solid green' : '5px solid brown' }}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Username" />
                <ShouldRender condition={!email}>
                    <span className="text-red-400">Email required</span>
                </ShouldRender>
            </div>
            <div className="mb-4">
                <label className="block text-gray-500 text-sm font-bold mb-2">Password</label>
                <input
                    style={{ borderLeft: password ? '5px solid green' : '5px solid brown' }}
                    name="password" onChange={onTextChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="password" placeholder="Password" />
                <ShouldRender condition={!password}>
                    <span className="text-red-400">Password required</span>
                </ShouldRender>
            </div>
            <div>
                <button disabled={isInvalid()} type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Login
                </button>
            </div>
        </div>
    </form>
}

export default Login;


// POST https://fsa-api-b4.onrender.com/api/users/signup
// body {email:'def@gmail.com', password:'adkfdkjfd',firstName:'Xyz',lastName:'abc'}
// 201

