import ActionTypes from '../constant/constant';

const INITIAL_STATE = {
    formulas: [],
    routeKey: ""
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
        default:
            return state;
    }

}

