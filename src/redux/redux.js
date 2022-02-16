import React from "react"
import {createStore, combineReducers} from 'redux'

import autorizeReduser from '../redusers/AutorizeReduser'
import checkUserReduser from "../redusers/CheckUserReduser"

const redusers = combineReducers({
    autorize: autorizeReduser,
    userIsAutorize: checkUserReduser
})

const store = createStore(redusers)

export default store