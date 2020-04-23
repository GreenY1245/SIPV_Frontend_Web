import { all, fork, put, takeLatest, call } from 'redux-saga/effects';
import axios from 'axios';

import { SIGN_IN, SIGN_IN_SUCCESS, SIGN_IN_FAILURE, REGISTER, REGISTER_SUCCESS, REGISTER_FAILURE } from '../constants/AuthTypes';
import { signInSuccess, signInFailure, registerSuccess, registerFailure } from '../actions';

/**
 * 
 * @param {object} payload - Object containing the username and password of the user  
 */
function signInRequest(username, password) {
    
    return axios.post(`${process.env.REACT_APP_API_BASE}/authUser`, {
        username: username,
        pass: password
    });
}

/**
 * 
 * @param {object} payload - Object containing the email and password of the user
 */
function* signIn({ payload }) {

    try {
        const data = yield call(signInRequest, payload.username, payload.password);

        localStorage.setItem("token", JSON.stringify(data));

        yield put(signInSuccess({
            data
        }));

    } catch(err) {
        yield put(signInFailure());
    }
}

/**
 * 
 * @param {object} payload - Object containing the username, email, and password of the user
 */
function registerRequest(username, email, password) {

    return axios.post(`${process.env.REACT_APP_API_BASE}/registerUser`, {
        username: username,
        email: email,
        pass: password
    });
}

/**
 * 
 * @param {object} payload - Object containing the username, email, and password of the user
 */
function* register({ payload }) {

    try {
        const { data, headers } = yield call(registerRequest, payload.username, payload.email, payload.password);

        yield put(registerSuccess({
            data, 
            headers
        }));

    } catch(err) {
        yield put(registerFailure());
    }
}

export function* watchSignIn() {
    yield takeLatest(SIGN_IN, signIn);
}

export function* watchSignInSuccess() {
    yield takeLatest(SIGN_IN_SUCCESS, signInSuccess);
}

export function* watchSignInFailure() {
    yield takeLatest(SIGN_IN_FAILURE, signInFailure);
}

export function* watchRegister() {
    yield takeLatest(REGISTER, register);
}

export function* watchRegisterSuccess() {
    yield takeLatest(REGISTER_SUCCESS, registerSuccess);
}

export function* watchRegisterFailure() {
    yield takeLatest(REGISTER_FAILURE, registerFailure);
}

export default function* rootSaga() {
    yield all([
        fork(watchSignIn),
        fork(watchSignInSuccess),
        fork(watchSignInFailure),
        fork(watchRegister),
        fork(watchRegisterSuccess),
        fork(watchRegisterFailure)
    ]);
}
