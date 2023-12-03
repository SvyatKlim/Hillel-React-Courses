import './App.css'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import Root from "./pages/Root/Root.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";
import AboutPage from "./pages/About/AboutPage.jsx";
import ContactsPage from "./pages/Contacts/ContactsPage.jsx";
import ErrorPage from "./pages/ErrorPage/ErrorPage.jsx";
import UsersList from "./pages/User/UsersList.jsx";
import UserPage from "./pages/User/UserPage.jsx";
import LoginPage from "./pages/Account/Login.jsx";
import AccountPage from "./pages/Account/Account.jsx";

const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Root/>}>
        <Route index element={<HomePage/>}/>
        <Route path="about" element={<AboutPage/>}/>
        <Route path="users/" element={<UsersList/>}/>
        <Route path="user/:userId" element={<UserPage/>}/>
        <Route path="contact-us" element={<ContactsPage/>}/>
        <Route path="login" element={<LoginPage/>}/>
        <Route path="account" element={<AccountPage/>}/>
        <Route path="*" element={<ErrorPage/>}/>
    </Route>
));

function App() {
    return (
        <>
            <RouterProvider router={router}/>
        </>
    )
}

export default App
