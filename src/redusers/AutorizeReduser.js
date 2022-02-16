import React from "react";

export const LOGIN_TYPE = 'LOGIN_TYPE';
export const PASSWORD_TYPE = 'PASSWORD_TYPE';


let initialState = {
    isAutorize: false,
    login: 'Admin',
    password: '12345'
}

const autorizeReduser = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_TYPE:
            return {
                ...state,
                login: action.login,
            }
        case PASSWORD_TYPE:
            return {
                ...state,
                password: action.password
            }
        default:
            return state
    }
}

export default autorizeReduser