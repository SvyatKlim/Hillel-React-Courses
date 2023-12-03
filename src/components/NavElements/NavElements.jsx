import './NavElements.scss'
import {NavLink} from "react-router-dom";

export const NavLinkElement = ({navLinkURL,navLinkName}) => {
    return (
        <li className="nav-links__item">
            <NavLink className="nav-link js-link" to={navLinkURL}>
                <span className="highlight"></span>
                <span className="label">{ navLinkName }</span>
            </NavLink>
        </li>
    )
}