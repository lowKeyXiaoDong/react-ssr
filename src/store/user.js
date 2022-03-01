import axios from 'axios'

const GET_LIST = 'INDEX/USER_INFO'

const changeList = data => ({
    type: GET_LIST,
    data
})

export const getUserInfo = server => {
    return (dispatch, getState, $axios) => {
        return $axios.get('/api/user/info').then(res => {
            const { data } = res.data
            dispatch(changeList(data)) 
        })
    }
}

const defaultState = {
    userinfo: {}
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case GET_LIST:
           const newState = {
               ...state,
               userinfo: action.data
           }
           return newState
        default:
            return state
    }
}