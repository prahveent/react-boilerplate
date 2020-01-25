import { LOGIN_REQUEST } from './action-types';

const initialState = {};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
            }
        default:
            return state
    }
}

export default reducer;