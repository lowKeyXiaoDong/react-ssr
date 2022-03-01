import axios from 'axios'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import indexReducer from './index'
import userReducer from './user'

const reducer = combineReducers({
    index: indexReducer,
    user: userReducer
})

const serverAxios = axios.create({
    baseURL: 'http://localhost:9090'
})

const clientAxios = axios.create({
    baseURL: '/'
})

// const store = createStore(reducer, applyMiddleware(thunk))

// export default store

// 服务端使用
export const getServerStore = () => {
    return createStore(reducer, applyMiddleware(thunk.withExtraArgument(serverAxios)))
}

// 客户端使用
export const getClientStore = () => {
    const defaultStore = window.__context ? window.__context : {}
    return createStore(reducer, defaultStore, applyMiddleware(thunk.withExtraArgument(clientAxios)))
}