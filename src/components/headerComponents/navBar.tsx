import React from 'react';
import {NavLink} from "react-router-dom";

const NavBar:React.FC<any> = ({toggleMenu}) => {
    return (
        <ul>
            <li>
                <NavLink to="/">Cryptocurrencies</NavLink>
            </li>
            {/* <li>
                <NavLink  to="/gram_talks">Gram Talks</NavLink>
            </li> */}
            <li>
                <NavLink to="/events">Events</NavLink>
            </li>
        </ul>
    );
};

export default NavBar;