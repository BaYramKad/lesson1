import React from "react";
import {NavLink} from 'react-router-dom'

import './Header.css'
const Header = (props) => {
  
    return (
        <nav className="navigation">
            <ul>
                <li> <NavLink to='/'>На главную</NavLink></li>
                <li> <NavLink to='/news'>Новости</NavLink></li>
                <li> <NavLink to={props.userAuth ? '/profile' : '/login'}>Профиль</NavLink></li>
            </ul>
        </nav>
    )
}

export default Header