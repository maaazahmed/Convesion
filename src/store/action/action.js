import ActionTypes from "../constant/constant"





export const formulaList = (data) => {
    return dispatch => {
        dispatch({
            type: ActionTypes.REQUEST_LIST,
            payload: data
        })
    }
}

 