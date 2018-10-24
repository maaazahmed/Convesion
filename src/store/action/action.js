import ActionTypes from "../constant/constant"





export const formulaList = (data) => {
    return dispatch => {
        dispatch({
            type: ActionTypes.FORMULAS_LIST,
            payload: data
        })
    }
}

 