import { BEV_FETCH_BY_ID_SUCCESS, BEV_FETCH_SUCCESS, CAT_FETCH_SUCCESS, ING_FETCH_BY_ID_SUCCESS } from "./actionType";
import axios from 'axios'

export function bevFetchSuccess(payload) {
    return { type: BEV_FETCH_SUCCESS, payload: payload};
}

export function bevByIdFetchSuccess(payload) {
    return { type: BEV_FETCH_BY_ID_SUCCESS, payload: payload}
}

export function ingByIdFetchSuccess(payload) {
    return { type: ING_FETCH_BY_ID_SUCCESS, payload: payload}
}

export function catFetchSuccess(payload) {
    return { type: CAT_FETCH_SUCCESS, payload: payload}
}
// const baseUrl = 'https://starbucks_ph3.felixleandr.com/pub'
const baseUrl = 'http://localhost:3000/pub'
export function fetchBeverages() {
    return async function(dispatch) {
        try {
            console.log('masuk');
            const response = await fetch(baseUrl + '/beverages')
            const resData = await response.json();
            if(!response.ok) {
                throw resData;
            }
            console.log(response, 'resdata action store');
            dispatch(bevFetchSuccess(resData))
        } catch (err) {
            throw err
        }
    }
}

export function fetchBeveragesById(id) {
    return async function(dispatch) {
        try {
            const response = await fetch(baseUrl + '/beverages/' + id)
            const resData = await response.json()
            if(!response.ok){
                throw resData
            }
            dispatch(bevByIdFetchSuccess(resData))
        } catch (err) {
            throw err
        }
    }
}

export function fetchIngredientById(id) {
    return async function(dispatch) {
        try {
            const response = await fetch(`http://localhost:3000/ingredients/` + id)
            const resData = await response.json();
            if(!response.ok) {
                throw resData;
            }
            dispatch(ingByIdFetchSuccess(resData))
        } catch (err) {
            throw err
        }
    }
}

// export function fetchCategories() {
//     return async function(dispatch) {
//         try {
//             const response = await fetch(`http://localhost:3000/categories`)
//             const resData = await response.json();
//             if(!response.ok) {
//                 throw resData;
//             }
//             dispatch(bevFetchSuccess(resData))
//         } catch (err) {
//             throw err
//         }
//     }
// }