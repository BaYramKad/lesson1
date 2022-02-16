import React from "react";
import {NavLink} from 'react-router-dom'

const Login = (props) => {
    let userLogin = props.autorize.login;
    let userPassword = props.autorize.password;
    
    console.log(props);
    return (
        <div>
            <h1>Вход</h1>

            <form action="#">
                <label htmlFor="login">Login</label>
                <input onChange={ (e) => props.updateLogin(e.target.value)} value={userLogin} type="text" id="login" />

                <label htmlFor="password">Password</label>
                <input onChange={ (e) => props.updatePassword(e.target.value)} value={userPassword} type="text" id="password" />
                    <NavLink  
                    onClick={ () => props.sendData({login: userLogin, password: userPassword})}
                    to={ props.userAuth ? '/profile' : '/login'} >Send</NavLink>

            </form>
            {
                props.userAuth ? <mark>{props.text}</mark> : <div>{props.text}</div> 
            }
        </div>
    )
}

export default Login