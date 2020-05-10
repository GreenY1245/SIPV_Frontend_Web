import { GET_ROOM, GET_ROOMS, CREATE_ROOM, ADD_USER, CHANGE_NAME, SEND_MESSAGE, REMOVE_MESSAGE, REQUEST_CHANNEL, GET_MESSAGES, GET_ROOM_SUCCESS, GET_ROOM_FAILURE, GET_ROOMS_SUCCESS, GET_ROOMS_FAILURE, GET_MESSAGES_SUCCESS, GET_MESSAGES_FAILURE, SEND_MESSAGE_FAILURE } from '../constants/ChatTypes';

const INIT_STATE = {
    rooms: null,
    room: null,
    messages: null,
    response: null,
    room_err: false,
    rooms_err: false,
    messages_err: false,
    loading: false,
}

export default (state = INIT_STATE, action) => {
    
    switch (action.type) {

        case GET_ROOM:
            return {
                ...state,
                loading: true
            }
        
        case GET_ROOM_SUCCESS:
            return {
                ...state,
                room: action.payload.data.data,
                loading: false
            }

        case GET_ROOM_FAILURE:
            return {
                ...state,
                loading: false,
                room_err: true,
            }

        case GET_ROOMS:
            return {
                ...state,
                loading: true
            }

        case GET_ROOMS_SUCCESS:
            return {
                ...state,
                rooms: action.payload.data.data,
                loading: false,
            }

        case GET_ROOMS_FAILURE:
            return {
                ...state,
                loading: false,
                rooms_err: true,
            }

        case GET_MESSAGES:
            return {
                ...state,
                loading: false
            }

        case GET_MESSAGES_SUCCESS:
            console.log("MESSAGES GOT")
            return {
                ...state,
                loading: false,
                messages: action.payload.data,
            }

        case GET_MESSAGES_FAILURE:
            console.log("MESSAGES FAILED")
            return {
                ...state,
                loading: false,
                messages_err: true,
            }

        case SEND_MESSAGE:
            return {
                ...state,
            }
        
        case SEND_MESSAGE_FAILURE:
            return {
                ...state,
                messages_err: true
            }

        case CREATE_ROOM:
        case ADD_USER:
        case CHANGE_NAME:
        case REMOVE_MESSAGE:
        case REQUEST_CHANNEL:
            return {
                ...state,
                response: action.payload
            }

        default:
            return state;
    }
}