import './Header.scss'
import navigationData from '../../data/navigation.json'
import {NavLinkElement} from "../NavElements/NavElements.jsx";
import {Link, NavLink, useNavigate} from "react-router-dom";
import LogoIcon from '../../assets/pictures/logo.svg?react';
import React, {useState, useEffect, useContext} from 'react';
import {AuthContext} from "../../pages/Root/Root.jsx";

const Header = () => {
    const {navigation} = navigationData;
    const [isSticky, setSticky] = useState(false);
    const [isUserAuthenticated] = useContext(AuthContext);
    const handleScroll = () => {
        const windowScrollTop = window.scrollY;
        if (windowScrollTop > 10) {
            setSticky(true);
        } else {
            setSticky(false);
        }
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <header className={'header js-header' + (isSticky ? ' is-sticky' : '')}>
            <div className="header-container">
                <Link to="/" className="custom-logo"><LogoIcon/></Link>
                <nav className="nav">
                    <ul className="nav-links">
                        {navigation.map((el) => <NavLinkElement key={el.position} navLinkURL={el.url}
                                                                navLinkName={el.name}/>)}
                        <NavLinkElement navLinkURL={isUserAuthenticated ? '/account' : '/login'}
                                        navLinkName={isUserAuthenticated ? 'My Account' : 'Log in'}/>
                    </ul>
                </nav>

            </div>
        </header>
    )
}
export default Header;