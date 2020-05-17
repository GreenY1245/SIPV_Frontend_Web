import { all, fork, put, takeLatest, call } from 'redux-saga/effects';
import axios from 'axios';

import { CREATE_ROOM, CREATE_ROOM_SUCCESS, CREATE_ROOM_FAILURE, GET_ROOM, GET_ROOMS, GET_MESSAGES, GET_MESSAGES_SUCCESS, GET_MESSAGES_FAILURE, SEND_MESSAGE, SEND_MESSAGE_FAILURE, GET_ROOMS_SUCCESS, GET_ROOMS_FAILURE, GET_ROOM_SUCCESS, GET_ROOM_FAILURE, SET_ROOM, SET_ROOM_FAILURE, SET_ROOM_SUCCESS } from '../constants/ChatTypes';
import { createRoomSuccess, createRoomFailure, getRooms as getRoomsAction, getMessages as getMessagesAction, getMessagesSuccess, getMessagesFailure, getRoomSuccess, getRoomFailure, getRoomsSuccess, getRoomsFailure, sendMessageFailure, setRoomSuccess, setRoomFailure } from '../actions';

function getAxiosOpts(bearer) {
    return {
        headers: { Authorization: `Bearer ${bearer}` }
    };
}

//TODO:: ADD_USER, CHANGE_NAME, REMOVE_MESSAGE, REQUEST_CHANNEL,

function createRoomRequest(title, admin, bearer) {

    return axios.post(`${process.env.REACT_APP_API_BASE}/createRoom`, {
        title, admin
    }, getAxiosOpts(bearer));
}

function* createRoom({ payload }) {

    try {

        const bearerToken = JSON.parse(localStorage.getItem('token')).data.data;
        if (!bearerToken) {
            throw new TypeError("No bearer token present, please renew login token")
        }

        yield call(createRoomRequest, payload.title, payload.username, bearerToken);

        yield put(createRoomSuccess());

    } catch(err) {
        yield put(createRoomFailure());
    } finally {
        yield put(getRoomsAction(payload.username));
    }
}

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
    } finally {
        yield put(getMessagesAction(payload.chatID));
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
        yield put(getMessagesFailure());
    }
}

function* setRoom({ payload }) {

    if (payload) {
        yield put(setRoomSuccess(payload));
    } else {
        yield put(setRoomFailure());
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

export function* watchSetRoom() {
    yield takeLatest(SET_ROOM, setRoom);
}
export function* watchSetRoomSuccess() {
    yield takeLatest(SET_ROOM_SUCCESS, setRoomSuccess);
}
export function* watchSetRoomFailure() {
    yield takeLatest(SET_ROOM_FAILURE, setRoomFailure);
}

export function* watchSendMessage() {
    yield takeLatest(SEND_MESSAGE, sendMessage);
}
export function* watchSendMEssageFailure() {
    yield takeLatest(SEND_MESSAGE_FAILURE, sendMessageFailure);
}

export function* watchCreateRoom() {
    yield takeLatest(CREATE_ROOM, createRoom);
}
export function* watchCreateRoomSuccess() {
    yield takeLatest(CREATE_ROOM_SUCCESS, createRoomSuccess);
}
export function* watchCreateRoomFailure() {
    yield takeLatest(CREATE_ROOM_FAILURE, createRoomFailure);
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
        fork(watchSetRoom),
        fork(watchSetRoomSuccess),
        fork(watchSetRoomFailure),
        fork(watchCreateRoom),
        fork(watchCreateRoomSuccess),
        fork(watchCreateRoomFailure),
    ]);
}
