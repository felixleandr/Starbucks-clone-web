import { BEV_FETCH_BY_ID_SUCCESS, BEV_FETCH_SUCCESS, CAT_CREATE_SUCCESS, CAT_EDIT_SUCCESS, CAT_FETCH_BY_ID_SUCCESS, CAT_FETCH_SUCCESS, ING_FETCH_BY_ID_SUCCESS, ING_FETCH_SUCCESS, LOGIN_SUCCESS, REGISTER_SUCCESS } from "./actionType";
import  baseUrl  from "../../../config/baseUrl";


export function bevFetchSuccess(payload) {
    return { type: BEV_FETCH_SUCCESS, payload: payload};
}

export function bevByIdFetchSuccess(payload) {
    return { type: BEV_FETCH_BY_ID_SUCCESS, payload: payload}
}

export function ingByIdFetchSuccess(payload) {
    return { type: ING_FETCH_BY_ID_SUCCESS, payload: payload}
}

export function ingFetchSuccess(payload) {
    return { type: ING_FETCH_SUCCESS, payload: payload}
}

export function catFetchSuccess(payload) {
    return { type: CAT_FETCH_SUCCESS, payload: payload}
}
export function catByIdFetchSuccess(payload) {
    return { type: CAT_FETCH_BY_ID_SUCCESS, payload: payload}
}

export function catCreateSuccess(payload) {
    return { type: CAT_CREATE_SUCCESS, payload: payload}
}

export function catEditSuccess(payload) {
    return { type: CAT_EDIT_SUCCESS, payload: payload}
}

export function loginSuccess(payload){
    return {type: LOGIN_SUCCESS, payload: payload}
}

export function registerSuccess(payload){
    return {type: REGISTER_SUCCESS, payload: payload}
}


export function fetchBeverages() {
    return async function(dispatch) {
        try {
            const response = await fetch( baseUrl +`/beverages`, {
                method: 'GET',
                headers: {
                    "Content-Type": 'application/json',
                    access_token: localStorage.access_token
                }
            })

            const resData = await response.json();
            if(!response.ok) {
                throw resData;
            }
            dispatch(bevFetchSuccess(resData))
        } catch (err) {
            throw err
        }
    }
}

export function fetchBeveragesById(id) {
    return async function(dispatch) {
        try {
            const response = await fetch( baseUrl + `/beverages/` + id, {
                method: 'GET',
                headers: {
                    "Content-Type": 'application/json',
                    access_token: localStorage.access_token
                }
            })
            const resData = await response.json();
            if(!response.ok) {
                throw resData;
            }
            dispatch(bevByIdFetchSuccess(resData))
        } catch (err) {
            throw err
        }
    }
}

export function deleteBeverage(id) {
    return async function(dispatch) {
        try {
            
            const response = await fetch( baseUrl + `/beverages/` + id , {
                method: 'DELETE',
                headers: {
                    "Content-Type": 'application/json',
                    access_token: localStorage.access_token
                }
            })
            const resData = await response.json();
            if(!response.ok) {
                throw resData;
            }
            dispatch(fetchBeverages())
            return resData
        } catch (err) {
            throw err
        }
    }
}

export function editBeverage(id, formBev) {
    return async function(dispatch) {
        try {
            const response = await fetch( baseUrl + `/beverages/` + id , {
                method: 'put',
                headers: {
                    "Content-Type": 'application/json',
                    access_token: localStorage.access_token
                },
                body: JSON.stringify(formBev)
            })
            const resData = await response.json();
            if(!response.ok) {
                throw resData;
            }
            dispatch(fetchBeverages())
            return resData
        } catch (err) {
            throw err
        }
    }
}


export function addBeverage(formBev) {
    return async function(dispatch) {
        try {
            formBev.inputIngredients.forEach(el => {
                if(!el){
                    throw {message: 'Please choose one of the ingredients'}
                }
            })
            const response = await fetch( baseUrl + `/beverages`, {
                method: 'post',
                headers: {
                    "Content-Type": 'application/json',
                    access_token: localStorage.access_token
                },
                body: JSON.stringify(formBev)
            })
            const resData = await response.json();
            if(!response.ok) {
                throw resData;
            }
            dispatch(fetchBeverages())
        } catch (err) {
            throw err
        }
    }
}

export function fetchIngredientById(id) {
    return async function(dispatch) {
        try {
            const response = await fetch(baseUrl + `/ingredients/` + id, {
                method: 'GET',
                headers: {
                    "Content-Type": 'application/json',
                    access_token: localStorage.access_token
                }
            })
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

export function fetchIngredients() {
    return async function(dispatch) {
        try {
            const response = await fetch(baseUrl +`/ingredients`, {
                method: 'GET',
                headers: {
                    "Content-Type": 'application/json',
                    access_token: localStorage.access_token
                }
            })
            const resData = await response.json();
            if(!response.ok) {
                throw resData;
            }
            dispatch(ingFetchSuccess(resData))
        } catch (err) {
            throw err
        }
    }
}

export function fetchCategories() {
    return async function(dispatch) {
        try {
            const response = await fetch( baseUrl +`/categories`, {
                method: 'GET',
                headers: {
                    "Content-Type": 'application/json',
                    access_token: localStorage.access_token
                }
            })
            const resData = await response.json();
            if(!response.ok) {
                throw resData;
            }
            dispatch(catFetchSuccess(resData))
        } catch (err) {
            throw err
        }
    }
}

export function fetchCategoryById(id) {
    return async function(dispatch) {
        try {
            const response = await fetch( baseUrl + `/categories/` + id, {
                method: 'GET',
                headers: {
                    "Content-Type": 'application/json',
                    access_token: localStorage.access_token
                }
            })
            const resData = await response.json();
            if(!response.ok) {
                throw resData;
            }
            dispatch(catByIdFetchSuccess(resData))
        } catch (err) {
            throw err
        }
    }
}

export function addCategory(category) {
    return async function(dispatch) {
        try {
            const response = await fetch( baseUrl + `/categories`, {
                method: 'post',
                headers: {
                    "Content-Type": 'application/json',
                    access_token: localStorage.access_token
                },
                body: JSON.stringify({name: category})
            })
            const resData = await response.json();
            if(!response.ok) {
                throw resData;
            }
            dispatch(catCreateSuccess(resData))
        } catch (err) {
            throw err
        }
    }
}

export function editCategory(id, category) {
    return async function(dispatch) {
        try {
            const response = await fetch( baseUrl + `/categories/` + id , {
                method: 'put',
                headers: {
                    "Content-Type": 'application/json',
                    access_token: localStorage.access_token
                },
                body: JSON.stringify({name: category})
            })
            const resData = await response.json();
            if(!response.ok) {
                throw resData;
            }
            dispatch(fetchCategories())
        } catch (err) {
            throw err
        }
    }
}

export function deleteCategory(id) {
    return async function(dispatch) {
        try {
            const response = await fetch( baseUrl + `/categories/` + id , {
                method: 'DELETE',
                headers: {
                    "Content-Type": 'application/json',
                    access_token: localStorage.access_token
                }
            })
            const resData = await response.json();
            if(!response.ok) {
                throw resData;
            }
            dispatch(fetchCategories())
            return resData
        } catch (err) {
            throw err
        }
    }
}

export function login(data){
    return async function (dispatch) {
        try {

            const response = await fetch( baseUrl + `/login`, {
                method: 'post',
                headers: {
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify(data)
            })
            const resData = await response.json();
            if(!response.ok) {
                throw resData;
            }
            const access_token = resData.access_token 
            localStorage.access_token = access_token
            dispatch(loginSuccess(access_token))
        } catch (err) {
            throw(err)
        }
      
    }
}

export function register(data){
    return async function (dispatch) {
        try {

            const response = await fetch( baseUrl + `/register`, {
                method: 'post',
                headers: {
                    "Content-Type": 'application/json',
                    access_token: localStorage.access_token
                },
                body: JSON.stringify(data)
            })
            const resData = await response.json();
            if(!response.ok) {
                throw resData;
            }
            dispatch(registerSuccess(resData))
        } catch (err) {
            throw(err)
        }
      
    }
}