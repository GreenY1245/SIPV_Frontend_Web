import { all } from 'redux-saga/effects';

import authSagas from './Auth';
import chatSagas from './Chat';

export default function* rootSaga() {

    yield all([
        authSagas(),
        chatSagas(),
    ]);
}