import {useContext} from "react";
import {AuthContext} from "../Root/Root.jsx";
import useFetch from "../../hooks/useFetch.jsx";
import {ErrorMessage} from "../../components/Errors/Errors.jsx";
import {SuspensePreloader} from "../../components/Preloaders/Preloaders.jsx";

const AccountPage = () => {
    const [isUserAuthenticated,login,setAuthUserId,userAuthenticatedId] = useContext(AuthContext);
    // console.log(isUserAuthenticated,userAuthenticatedId)
    const {data, isLoading, error} = useFetch(`https://jsonplaceholder.typicode.com/users/${userAuthenticatedId}`);
    return (
        <section className="account pt-120 container">
            {!isUserAuthenticated ? <ErrorMessage message="Please login"/> :
                error ? <ErrorMessage message={error}/> :
                    !isLoading
                        ? <>
                            <h2> Welcome to your account <span className="h1"> {data.name} </span></h2>
                            <h3 className="mt-40">Contacat Info : </h3>
                            <ul>
                                <li>Email : {data.email}</li>
                                <li>Phone : {data.phone}</li>
                                <li>Website : {data.website}</li>
                            </ul>
                        </>
                        : <SuspensePreloader message='Loading Info ...'/>}
        </section>
    )
}
export default AccountPage;