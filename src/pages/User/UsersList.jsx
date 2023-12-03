import './UserList.scss'
import {useContext, useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {AuthContext} from "../Root/Root.jsx";

const UsersList = () => {
    const [users, setUsers] = useState([])
    const [isUserAuthenticated] = useContext(AuthContext);

    useEffect(() => {
        const getUsers = async () => {
            const res = await fetch("https://jsonplaceholder.typicode.com/users");
            const data = await res.json();
            setUsers(data);
        }
        getUsers();
    }, []);

    return (
        <section className="users-list__wrapper">
            {isUserAuthenticated ? <>
                <h1 className="text-center mt-40">All Users: {users.length}</h1>
                <ul className="users-list">
                    {users.map((user) => {
                        return <li key={user.id}>
                            <p> {user.username} </p>
                            <p> {user.email} </p>
                            <Link to={`/user/${user.id}`}> {user.name} </Link>
                        </li>
                    })}
                </ul>
            </> : <h1 className="text-center mt-40">Please Log in for watch User List </h1>
            }
        </section>
    )
}
export default UsersList;