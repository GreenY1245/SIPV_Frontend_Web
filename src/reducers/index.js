import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import Auth from './Auth';
import Chat from './Chat';

const reducers = combineReducers({
    form: formReducer,
    auth: Auth,
    chat: Chat,
});

export default reducers;