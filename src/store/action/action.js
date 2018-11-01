import ActionTypes from "../constant/constant"


export const formulaList = (data) => {
    return dispatch => {
        dispatch({
            type: ActionTypes.FORMULAS_LIST,
            payload: data
        })
    }
}

export const routeKey = (data) => {
    return dispatch => {
        dispatch({
            type: ActionTypes.ROUTER_KEY,
            payload: data
        })
    }
}

export const conversoinType = (data) => {
    return dispatch => {
        dispatch({
            type: ActionTypes.CONVERSOIN_TYPE,
            payload: data
        })
    }
}


export const backtoSoveKey = (data) => {
    return dispatch => {
        dispatch({
            type: ActionTypes.BACK_TO_SOLVE,
            payload: data
        })
    }
}



