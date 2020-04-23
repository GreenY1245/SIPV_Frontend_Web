import { SIGN_IN, SIGN_IN_FAILURE, SIGN_IN_SUCCESS, SIGN_OUT, REGISTER, REGISTER_FAILURE, REGISTER_SUCCESS } from '../constants/AuthTypes';

export const signIn = (user) => {
    return {
        type: SIGN_IN,
        payload: user
    }
}

export const signInSuccess = (token) => {
    return {
        type: SIGN_IN_SUCCESS,
        payload: token
    }
}

export const signInFailure = () => {
    return {
        type: SIGN_IN_FAILURE
    }
}

export const signOut = () => {
    return {
        type: SIGN_OUT
    }
}

export const register = (user) => {
    return {
        type: REGISTER,
        payload: user
    }
}

export const registerSuccess = (authenticatedUser) => {
    return {
        type: REGISTER_SUCCESS,
        payload: authenticatedUser
    }
}

export const registerFailure = () => {
    return {
        type: REGISTER_FAILURE
    }
}
