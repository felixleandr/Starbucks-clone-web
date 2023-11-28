import {
    LOGIN_SUCCESS, REGISTER_SUCCESS
} from '../actions/actionType'

const initialState = {
    token: null,
    error: null
}

function userReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {...state, token: action.payload, error: null};
        case REGISTER_SUCCESS:
            return {...state, token: action.payload, error: null};
        default:
            return state;
    }
}

export default userReducer