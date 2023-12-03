import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";

const UserPage = () => {
    const {userId} = useParams();
    const [user, setUser] = useState({})

    useEffect(() => {
        const getUserById = async () => {
            const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
            const data = await res.json();
            setUser(data);
        }
        getUserById();
    }, [userId]);

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
    const data = Object.entries(user);

    return (
        <section className="user">
            <h2 className="text-center mt-60">Hello: {user.name}</h2>
            <UserInfoList dataArr={data}/>
        </section>
    )
}
export default UserPage;