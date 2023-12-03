import {useContext, useState} from "react";
import userListAuth from "../../data/userListAuth.json";
import {useNavigate} from "react-router-dom";
import {AuthContext} from "../Root/Root.jsx";

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const {users} = userListAuth;
    const navigate = useNavigate()
    const [isUserAuthenticated, login, setAuthUserId] = useContext(AuthContext);
    const handleUserAuth = (isAuth, userId) => {
        if (isAuth) {
            login(!isUserAuthenticated);
            setAuthUserId(userId);
        };
    }
    const findUser = (usersList, username, password) => {
        for (const user of usersList) {
            if (user.username === username && user.password === password) {
                handleUserAuth(true, user.id);
                return navigate("/")
            }
        }
        console.log('navigate')
        return navigate("/404", {replace: true});
    }
    const handleLogin = (event) => {
        event.preventDefault();
        findUser(users, username, password)
    };

    return (
        <section className="container d-flex pt-120 login-form">
            {isUserAuthenticated ? (
                <p>You are logged in!</p>
            ) : (
                <form onSubmit={handleLogin} className="form">
                    <label className="mb-30 form__label">
                        Username:
                        <input
                            className="form__input"
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </label>
                    <label className="mb-60 form__label">
                        Password:
                        <input
                            className="form__input"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </label>
                    <button type="submit">Login</button>
                </form>
            )}
        </section>
    );
};

export default LoginPage;