import {
    ING_FETCH_BY_ID_SUCCESS, ING_FETCH_SUCCESS
} from '../actions/actionType'

const initialState = {ingredientById: {}, ingredients: []}

function ingredientsReducer(state = initialState, action) {
    switch (action.type) {
        case ING_FETCH_BY_ID_SUCCESS:
            return{...state, ingredientById: action.payload};
        case ING_FETCH_SUCCESS:
            return{...state, ingredients: action.payload};
        default:
            return state;
    }
}

export default ingredientsReducer