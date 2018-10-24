import ActionTypes from '../constant/constant';

const INITIAL_STATE = {
    formulas: [],
    routeKey: "",
    conversoinType: ""
}




export default (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case ActionTypes.FORMULAS_LIST:
            return ({
                ...state,
                formulas: action.payload
            })
        case ActionTypes.ROUTER_KEY:
            return ({
                ...state,
                routeKey: action.payload
            })
        case ActionTypes.CONVERSOIN_TYPE:
            return ({
                ...state,
                conversoinType: action.payload
            })
        default:
            return state;
    }

}

