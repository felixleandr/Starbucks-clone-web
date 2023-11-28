import {
    ING_FETCH_BY_ID_SUCCESS
} from '../actions/actionType'

const initialState = {ingredient: []}

function ingredientsReducer(state = initialState, action) {
    switch (action.type) {
        case ING_FETCH_BY_ID_SUCCESS:
            return{...state, ingredientById: action.payload};
        default:
            return state;
    }
}

export default ingredientsReducer