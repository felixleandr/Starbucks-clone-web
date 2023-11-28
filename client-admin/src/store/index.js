import {createStore, combineReducers, applyMiddleware} from 'redux'
import bevReducer from './reducers/bevReducer'
import catReducer from './reducers/catReducer'
import ingredientsReducer from './reducers/ingredientsReducer'
import thunk from 'redux-thunk'
import userReducer from './reducers/userReducer'

const rootReducer = combineReducers({
    beverages: bevReducer,
    categories: catReducer,
    ingredient: ingredientsReducer,
    user: userReducer
})

let store = createStore(rootReducer, applyMiddleware(thunk))

export default store