import {
    CAT_FETCH_SUCCESS
} from '../actions/actionType'

const initialState = {categories: []}

function catReducer(state = initialState, action) {
    switch (action.type) {
        case CAT_FETCH_SUCCESS:
            return {...state, categories: action.payload};
        default:
            return state;   
    }
}

export default catReducer