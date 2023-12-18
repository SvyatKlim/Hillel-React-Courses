import './App.css'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import Root from "./pages/Root/Root.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";
import ErrorPage from "./pages/ErrorPage/ErrorPage.jsx";
import {lazy, Suspense} from "react";
import {SuspensePreloader} from "./components/Preloaders/Preloaders.jsx";

const LazyAboutPage = lazy(() => import('./pages/About/AboutPage.jsx'))
const LazyUsersList = lazy(() => import('./pages/User/UsersList.jsx'))
const LazyUserPage = lazy(() => import('./pages/User/UserPage.jsx'))
const LazyContactsPage = lazy(() => import('./pages/Contacts/ContactsPage.jsx'))
const LazyLoginPage = lazy(() => import('./pages/Account/Login.jsx'))
const LazyAccountPage = lazy(() => import('./pages/Account/Account.jsx'))

const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Root/>}>
    <Route index element={<Suspense fallback={<SuspensePreloader />}>
        <HomePage/>
    </Suspense>}/>
    <Route path="about" element={
        <Suspense fallback={<SuspensePreloader />}>
            <LazyAboutPage/>
        </Suspense>}/>
    <Route path="users/" element={
        <Suspense fallback={<SuspensePreloader />}>
            <LazyUsersList/>
        </Suspense>}/>
    <Route path="user/:userId" element={
        <Suspense fallback={<SuspensePreloader />}>
            <LazyUserPage/>
        </Suspense>}/>
    <Route path="contact-us" element={<Suspense fallback={<SuspensePreloader />}>
        <LazyContactsPage/>
    </Suspense>}/>
    <Route path="login" element={
        <Suspense fallback={<SuspensePreloader />}>
            <LazyLoginPage/>
        </Suspense>}/>
    <Route path="account" element={
        <Suspense fallback={<SuspensePreloader />}>
            <LazyAccountPage/>
        </Suspense>}/>
    <Route path="*" element={
        <Suspense fallback={<SuspensePreloader />}>
            <ErrorPage/>
        </Suspense>}/>
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
