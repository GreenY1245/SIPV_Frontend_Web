import { SIGN_IN, SIGN_IN_FAILURE, SIGN_IN_SUCCESS, SIGN_OUT, REGISTER, REGISTER_FAILURE, REGISTER_SUCCESS } from '../constants/AuthTypes';

const INIT_STATE = {
    registered: false,
    authenticatedUser: null,
    loading: false
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
                authenticatedUser: action.payload,
                loading: false
            }

        case SIGN_IN_FAILURE:
            return {
                ...state,
                authenticatedUser: null,
                loading: false
            }

        case SIGN_OUT:
            return {
                ...state,
                authenticatedUser: null,
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
                loading: false
            }

        default:
            return state;
    }
}
