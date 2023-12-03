import Header from "../../components/Header/Header.jsx";
import {Outlet} from "react-router-dom";
import {createContext, useCallback, useState} from "react";
export const AuthContext = createContext(null);
const Root = () => {

    const [isUserAuthenticated, setIsUserAuthenticated] = useState(false)
    const [userAuthenticatedId, setUserAuthenticatedId] = useState(null)
    const login = useCallback((response) => {
        setIsUserAuthenticated(response);
    }, []);
    const setAuthUserId = useCallback((response) => {
        setUserAuthenticatedId(response);
    }, []);
    return (
        <>
            <AuthContext.Provider value={[isUserAuthenticated,login,setAuthUserId,userAuthenticatedId]}>
                <Header/>
                <main>
                    <Outlet/>
                </main>
            </AuthContext.Provider>
        </>
    )
}
export default Root;