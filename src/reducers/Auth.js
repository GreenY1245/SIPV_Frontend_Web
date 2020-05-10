import { SIGN_IN, SIGN_IN_FAILURE, SIGN_IN_SUCCESS, SIGN_OUT, REGISTER, REGISTER_FAILURE, REGISTER_SUCCESS } from '../constants/AuthTypes';

const INIT_STATE = {
    registered: false,
    token: null,
    loading: false,
    error: false,
    username: '',
}

export default (state = INIT_STATE, action) => {

    switch (action.type) {

        case SIGN_IN:
            return {
                ...state,
                loading: true
            }

        case SIGN_IN_SUCCESS:
            return {
                ...state,
                token: action.payload.userData.data.data,
                username: action.payload.userData.username,
                loading: false
            }

        case SIGN_IN_FAILURE:
            return {
                ...state,
                token: null,
                loading: false,
                error: true
            }

        case SIGN_OUT:
            localStorage.removeItem("token")
            return {
                ...state,
                token: null,
            }

        case REGISTER:
            return {
                ...state,
                loading: true
            }

        case REGISTER_SUCCESS:
            return {
                ...state,
                registered: true,
                loading: false
            }

        case REGISTER_FAILURE:
            return {
                ...state,
                registered: false,
                loading: false,
                error: true
            }

        default:
            return state;
    }
}
