import React from "react";
import { NavLink } from "react-router-dom";
const Profile = (props) => {

   
    return (
        <div>Profile
            <NavLink to='/login' onClick={() => props.inOutAuth(false)}>Выйти</NavLink>
        </div>
    )
}

export default Profile