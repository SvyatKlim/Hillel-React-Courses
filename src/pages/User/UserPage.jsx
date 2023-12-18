import {useContext, useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import {ErrorMessage} from "../../components/Errors/Errors.jsx";
import {SuspensePreloader} from "../../components/Preloaders/Preloaders.jsx";
import useFetch from "../../hooks/useFetch.jsx";
import {AuthContext} from "../Root/Root.jsx";

const UserPage = () => {
    const {userId} = useParams();
    const [isUserAuthenticated] = useContext(AuthContext);
    const {data, isLoading, error} = useFetch(`https://jsonplaceholder.typicode.com/users/${userId}`);

    const UserInfoList = ({dataArr}) => {
        return (<ul>
                {dataArr.map((el) => {
                    const info = typeof el[1] === 'object' ? Object.entries(el[1]) : el[1];
                    return (<UserInfoListItem key={el[0] + Date.now()} userKey={el[0]} userInfo={info}/>)
                })}
            </ul>
        )
    }
    const UserInfoListItem = ({userKey, userInfo}) => {
        return (
            <li>
                {userKey} : {typeof userInfo === 'object' ? <UserInfoList dataArr={userInfo}/> : userInfo}
            </li>
        )
    }
    const userData = Object.entries(data);

    return (
        <section className="user">
            {!isUserAuthenticated ? <ErrorMessage message="Please login"/> :
                error ? <ErrorMessage message={error}/> :
                    !isLoading ? <>
                            <h2 className="text-center mt-60">Hello: {userData.name}</h2>
                            <UserInfoList dataArr={userData}/>
                        </>
                        : <SuspensePreloader message='Loading Info ...'/>}
        </section>
    )
}
export default UserPage;