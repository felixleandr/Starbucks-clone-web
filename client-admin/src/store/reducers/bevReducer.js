import {
    BEV_FETCH_BY_ID_SUCCESS,
    BEV_FETCH_SUCCESS
} from '../actions/actionType'

const initialState = {beverages: [], beverageById: {}}

function bevReducer(state = initialState, action) {
    switch (action.type) {
        case BEV_FETCH_SUCCESS:
            return {...state, beverages: action.payload};
        case BEV_FETCH_BY_ID_SUCCESS:
            return{...state, beverageById: action.payload};
        default:
            return state;
        
    }
}

export default bevReducer