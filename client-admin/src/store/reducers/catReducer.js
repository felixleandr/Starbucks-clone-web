import {
    CAT_CREATE_SUCCESS,
    CAT_EDIT_SUCCESS,
    CAT_FETCH_BY_ID_SUCCESS,
    CAT_FETCH_SUCCESS
} from '../actions/actionType'

const initialState = {categories: [], newCategory: {}, categoryById: {}}

function catReducer(state = initialState, action) {
    switch (action.type) {
        case CAT_FETCH_SUCCESS:
            return {...state, categories: action.payload};
        case CAT_CREATE_SUCCESS:
            return {...state, newCategory: action.payload};
        case CAT_EDIT_SUCCESS:
            return {...state, newCategory: action.payload};
        case CAT_FETCH_BY_ID_SUCCESS:
            return {...state, categoryById: action.payload}; 
        default:
            return state;
    }
}

export default catReducer