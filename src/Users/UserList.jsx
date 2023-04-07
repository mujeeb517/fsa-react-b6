// state
// fetch data from api
// render data
// library to write UI
// download 
import { Component } from 'react';
import axios from 'axios';
import UserItem from './UserItem';

class UserList extends Component {

    // default state
    state = {
        users: []
    }

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
        */
        axios.get('https://api.github.com/users')
            .then(response => {
                this.setState({
                    users: response.data
                });
            })
            .catch(error => console.log(error));
    }

    render() {
        return <div>
            <h1 className="text-xl font-semibold">User List</h1>
            {this.state.users.map(u => <UserItem user={u} />)}
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
