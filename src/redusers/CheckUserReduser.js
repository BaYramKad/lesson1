import React from "react";

export const IS_AUTORIZE_TYPE = 'IS_AUTORIZE_TYPE';
export const IN_OUT_AUTH = 'IN_OUT_AUTH';


let initialState = {
    login: 'Admin',
    password: '12345',
    userAuth: null
}

const checkUserReduser = (state = initialState, action) => {

    switch (action.type) {
        case IS_AUTORIZE_TYPE:
            if(action.data.login === state.login && action.data.password === state.password) {
                localStorage.setItem('isAutorize', true)
                let userAuth = JSON.parse(localStorage.getItem('isAutorize'))
                console.log('Получилось');
                return {
                    ...state,
                    text: 'Поздровляем вы успешно вошли ',
                    userAuth: userAuth
                }
            } else {
                localStorage.setItem('isAutorize', false)
                let userAuth = JSON.parse(localStorage.getItem('isAutorize'))
                return {
                    ...state,
                    text: 'Неверный логин или пароль',
                    userAuth: userAuth
                }
            }
        case IN_OUT_AUTH: 
                localStorage.setItem('isAutorize', false)
                let userAuth = JSON.parse(localStorage.getItem('isAutorize'))
            return {
                ...state,
                    text: 'Войдите заново',
                    userAuth: userAuth
            }
        default:
            return state
    }
}

export default checkUserReduser