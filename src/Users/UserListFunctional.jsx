import React, { useState } from "react";
import { useEffect } from "react";
import axios from 'axios';
import UserItem from "./UserItem";
import Loader from "../Loader";

function UserListFunctional() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('https://api.github.com/users')
            .then(res => setUsers(res.data))
            .catch(err => console.log(err))
            .finally(() => setLoading(false));
    }, []);

    return <>
        <h1>UserList Functional</h1>
        <Loader loading={loading} />
        {users.map(u => <UserItem user={u} />)}
    </>
}

export default UserListFunctional;