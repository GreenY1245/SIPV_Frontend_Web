import { all, fork, put, takeLatest, call } from 'redux-saga/effects';
import axios from 'axios';

import { GET_ROOM, GET_ROOMS, GET_MESSAGES, GET_MESSAGES_SUCCESS, GET_MESSAGES_FAILURE, SEND_MESSAGE, SEND_MESSAGE_FAILURE, GET_ROOMS_SUCCESS, GET_ROOMS_FAILURE, GET_ROOM_SUCCESS, GET_ROOM_FAILURE } from '../constants/ChatTypes';
import { getMessagesSuccess, getMessagesFailure, getRoomSuccess, getRoomFailure, getRoomsSuccess, getRoomsFailure, sendMessageFailure } from '../actions';

function getAxiosOpts(bearer) {
    return {
        headers: { Authorization: `Bearer ${bearer}` }
    };
}

//TODO:: CREATE_ROOM, ADD_USER, CHANGE_NAME, REMOVE_MESSAGE, REQUEST_CHANNEL,

function sendMessageRequest(chatID, username, message, bearer) {

    const date = new Date().toISOString();
    return axios.put(`${process.env.REACT_APP_API_BASE}/chat/${chatID}/addMsg`, {
        username, message, date
    }, getAxiosOpts(bearer));
}

function* sendMessage({ payload }) {

    try {

        const bearerToken = JSON.parse(localStorage.getItem('token')).data.data;
        if (!bearerToken) {
            throw new TypeError("No bearer token present, please renew login token")
        }

        yield call(sendMessageRequest, payload.chatID, payload.username, payload.message, bearerToken);

    } catch(err) {
        yield put(sendMessageFailure());
    }
}

function getRoomsRequest(username, bearer) {
    return axios.get(`${process.env.REACT_APP_API_BASE}/getRooms/${username}`, getAxiosOpts(bearer));
}

function* getRooms({ payload }) {

    try {

        const bearerToken = JSON.parse(localStorage.getItem('token')).data.data;
        if (!bearerToken) {
            throw new TypeError("No bearer token present, please renew login token")
        }

        const data = yield call(getRoomsRequest, payload, bearerToken);

        yield put(getRoomsSuccess(data));

    } catch(err) {
        yield put(getRoomsFailure());
    }
}

function getRoomRequest(username, roomName, bearer) {

    return axios.get(`${process.env.REACT_APP_API_BASE}/getRoom/${username}/${roomName}`, getAxiosOpts(bearer));
}

function* getRoom({ payload }) {

    try {

        const bearerToken = JSON.parse(localStorage.getItem('token')).data.data;
        if (!bearerToken) {
            throw new TypeError("No bearer token present, please renew login token")
        }

        const data = yield call(getRoomRequest, payload.username, payload.roomName, bearerToken);

        yield put(getRoomSuccess(data));

    } catch(err) {
        yield put(getRoomFailure());
    }
}

function getMessagesRequest(chatID, bearer) {

    return axios.get(`${process.env.REACT_APP_API_BASE}/chat/${chatID}`, getAxiosOpts(bearer));
}

function* getMessages({ payload }) {

    try {

        const bearerToken = JSON.parse(localStorage.getItem('token')).data.data;
        if (!bearerToken) {
            throw new TypeError("No bearer token present, please renew login token")
        }

        const data = yield call(getMessagesRequest, payload, bearerToken);

        yield put(getMessagesSuccess(data));

    } catch(err) {
        console.log(err);
        yield put(getMessagesFailure());
    }
}

export function* watchGetMessages() {
    yield takeLatest(GET_MESSAGES, getMessages);
}
export function* watchGetMessagesSuccess() {
    yield takeLatest(GET_MESSAGES_SUCCESS, getMessagesSuccess);
}
export function* watchGetMessagesFailure() {
    yield takeLatest(GET_MESSAGES_FAILURE, getMessagesFailure);
}

export function* watchGetRooms() {
    yield takeLatest(GET_ROOMS, getRooms);
}
export function* watchGetRoomsSuccess() {
    yield takeLatest(GET_ROOMS_SUCCESS, getRoomsSuccess);
}
export function* watchGetRoomsFailure() {
    yield takeLatest(GET_ROOMS_FAILURE, getRoomsFailure);
}

export function* watchGetRoom() {
    yield takeLatest(GET_ROOM, getRoom);
}
export function* watchGetRoomSuccess() {
    yield takeLatest(GET_ROOM_SUCCESS, getRoomSuccess);
}
export function* watchGetRoomFailure() {
    yield takeLatest(GET_ROOM_FAILURE, getRoomFailure);
}

export function* watchSendMessage() {
    yield takeLatest(SEND_MESSAGE, sendMessage);
}
export function* watchSendMEssageFailure() {
    yield takeLatest(SEND_MESSAGE_FAILURE, sendMessageFailure);
}

export default function* rootSaga() {
    yield all([
        fork(watchGetRoom),
        fork(watchGetRoomSuccess),
        fork(watchGetRoomFailure),
        fork(watchGetRooms),
        fork(watchGetRoomsSuccess),
        fork(watchGetRoomsFailure),
        fork(watchGetMessages),
        fork(watchGetMessagesSuccess),
        fork(watchGetMessagesFailure),
        fork(watchSendMessage),
        fork(sendMessageFailure),
    ]);
}
