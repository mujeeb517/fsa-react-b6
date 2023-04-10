// state
// fetch data from api
// render data
// library to write UI
// download 
import { Component } from 'react';
import axios from 'axios';
import UserItem from './UserItem';
import Loader from '../Loader';
import ShouldRender from '../ShouldRender';

class UserList extends Component {

    // default state
    state = {
        users: [],
        loading: true,
        error: false
    };

    constructor() {
        super();
        // fetch data
        // api.github.com/users REST API
        // GET, POST, PUT, DELETE, PATCH, http verbs
        // http status codes:
        /*
            1xx - information pending
            2xx - success 200, 201, 204
            3xx - redirect 
            4xx - client error 404,401, 400, 422 
            5xx - server errors 500, 501,  
        */
        // read, create, update, delete, partially update
        // api
        // timers, events, file, db, api
        /*
            URL: https://api.github.com/users
            verb: GET/POST/PUT/DELETE/PATCH
            body: json/xml/...
            Request headers: client
                Content-type: application/json
                Accept: application/xml
            Response headers: server
                Content-type: application/json
                Accept: application/json

            Loading
        */
        setTimeout(() => {
            axios.get('https://api.github.com/users')
                .then(response => {
                    this.setState({
                        users: response.data
                    });
                })
                .catch(error => this.setState({ error: true }))
                .finally(() => this.setState({ loading: false }));
        }, 2000);
    }

    render() {
        return <div>
            <Loader loading={this.state.loading} />
            {/* {
                this.state.error &&
                <div className="font-semibold flex border p-2 bg-red-300 border-gray-500 w-1/2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                    </svg>
                    Failed to load data, please try again later
                </div>
            } */}

            <ShouldRender condition={this.state.error}>
                <div className="font-semibold flex border p-2 bg-red-300 border-gray-500 w-1/2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                    </svg>
                    Failed to load data, please try again later
                </div>
            </ShouldRender>

            <h1 className="text-xl font-semibold">User List</h1>
            {this.state.users.map(u => <UserItem key={u.login} user={u} />)}
        </div>
    }
}

export default UserList;

// React
// NPM vite boilerplate/generator
// create project
// run project
// setup project
// component
// function component
// class component
// props (external)
// state (internal)
// conditional rendering
// list of objects rendering
// presenation and container 
// api call
// axios
