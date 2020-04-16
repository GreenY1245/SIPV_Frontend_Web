import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import Auth from './Auth';

const reducers = combineReducers({
    form: formReducer,
    auth: Auth,
});

export default reducers;