import * as types from "../constant/ActionType";


const initialState = {
    status:"...",
    isSuccess: false,
    object: null,
};

export default function loginIn(state=initialState, action) {
    switch (action.type){
        case types.LOGIN_IN_DOING:
            return {
                ...state,
                status:'loading',
                isSuccess: false,
                object: null,
            };
        case types.LOGIN_IN_DONE:
            return {
                ...state,
                status: 'success',
                isSuccess: true,
                object: action.object,
            };
        case types.LOGIN_IN_ERROR:
            return {
                ...state,
                status: 'error',
                isSuccess: true,
                object: null,
            };
        default:
            console.log(state);
            return state;
    }
}
