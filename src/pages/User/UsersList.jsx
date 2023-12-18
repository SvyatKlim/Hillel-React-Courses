import './UserList.scss'
import {useContext, useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {AuthContext} from "../Root/Root.jsx";
import useFetch from "../../hooks/useFetch.jsx";
import {SuspensePreloader} from "../../components/Preloaders/Preloaders.jsx";
import {ErrorMessage} from "../../components/Errors/Errors.jsx";

const UsersList = () => {
    const {data, isLoading, error} = useFetch('https://jsonplaceholder.typicode.com/users');
    const [isUserAuthenticated] = useContext(AuthContext);


    return (
        <section className="users-list__wrapper">
            {isUserAuthenticated ?
                error ? <ErrorMessage message={error}/> :
                    !isLoading ? <>
                            <h1 className="text-center mt-40">All Users: {data.length}</h1>
                            <ul className="users-list">
                                {data.map((user) => {
                                    return <li key={user.id}>
                                        <p> {user.username} </p>
                                        <p> {user.email} </p>
                                        <Link to={`/user/${user.id}`}> {user.name} </Link>
                                    </li>
                                })}
                            </ul>
                        </>
                        : <SuspensePreloader message='Loading Info ...'/>
                : <h1 className="text-center mt-40">Please Log in for watch User List </h1>
            }
        </section>
    )
}
export default UsersList;