import {useContext, useEffect, useState} from "react";
import {AuthContext} from "../Root/Root.jsx";

const AccountPage = () => {
    const [isUserAuthenticated,login,setAuthUserId,userAuthenticatedId] = useContext(AuthContext);
    const [user, setUser] = useState([])
    console.log(userAuthenticatedId)

    useEffect(() => {
        const getUser = async () => {
            const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userAuthenticatedId}`);
            const data = await res.json();
            setUser(data);
        }
        getUser();
    }, []);

    return(
        <section className="error-page pt-120 container">
            <h2> Welcome to your account <span className="h1"> {user.name} </span></h2>
            <h3 className="mt-40">Contacat Info : </h3>
            <ul>
                <li>Email : {user.email}</li>
                <li>Phone : {user.phone}</li>
                <li>Website : {user.website}</li>
            </ul>
        </section>
    )
}
export default AccountPage;