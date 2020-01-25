import { all, takeEvery } from 'redux-saga/effects';
import { LOGIN_REQUEST } from './action-types';

export function* loginSaga() {

}


function* watchLoginSaga() {
    yield all([yield takeEvery([LOGIN_REQUEST], loginSaga)]);
}

export default watchLoginSaga;