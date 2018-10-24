import ActionTypes from '../constant/constant';

const INITIAL_STATE = {
    formulas: [],
}




export default (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case ActionTypes.REQUEST_LIST:
            return ({
                ...state,
                formulas: action.payload
            })
    
        default:
            return state;
    }

}

