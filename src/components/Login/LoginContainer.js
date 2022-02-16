import React from "react";
import { connect } from "react-redux";
import Login from "./Login";
import {LOGIN_TYPE, PASSWORD_TYPE} from '../../redusers/AutorizeReduser'
import {IS_AUTORIZE_TYPE} from '../../redusers/CheckUserReduser'

const mapStateToProps = (state) => {
    return {
        autorize: state.autorize,
        text: state.userIsAutorize.text,
        userAuth: state.userIsAutorize.userAuth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateLogin: (value) => {
            dispatch({type: LOGIN_TYPE, login: value})
        },
        updatePassword: (value) => {
            dispatch({type: PASSWORD_TYPE, password: value})
        },
        sendData: (obj) => {
            dispatch({type: IS_AUTORIZE_TYPE, data: obj})
        }
    }
}

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login)

export default LoginContainer