import React from "react";
import { connect } from "react-redux";
import {IN_OUT_AUTH} from '../../redusers/CheckUserReduser'
import { Profile } from "./Profile";

const mapDispatchToProps = (dispatch) => {
    return {
        inOutAuth: (value) => {
            dispatch({type: IN_OUT_AUTH, login: value})
        }
    }
}

const LoginContainer = connect(null, mapDispatchToProps)(Profile)

export default LoginContainer
