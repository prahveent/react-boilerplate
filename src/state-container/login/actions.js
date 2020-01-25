import { LOGIN_REQUEST } from './action-types';

export const loginRequest = (username, password) => {
    return {
        type: LOGIN_REQUEST,
        payload: {
            username,
            password
        }
    }
}