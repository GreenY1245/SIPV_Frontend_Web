import { GET_MESSAGES_FAILURE, GET_MESSAGES_SUCCESS, GET_ROOM, GET_ROOMS, CREATE_ROOM, ADD_USER, CHANGE_NAME, SEND_MESSAGE, REMOVE_MESSAGE, REQUEST_CHANNEL, GET_MESSAGES, GET_ROOM_FAILURE, GET_ROOM_SUCCESS, GET_ROOMS_SUCCESS, GET_ROOMS_FAILURE, SEND_MESSAGE_FAILURE } from '../constants/ChatTypes';

export const getRoom = (userAndRoomName) => {
    return {
        type: GET_ROOM,
        payload: userAndRoomName
    }
}

export const getRoomSuccess = (room) => {
    return {
        type: GET_ROOM_SUCCESS,
        payload: room
    }
}

export const getRoomFailure = () => {
    return {
        type: GET_ROOM_FAILURE,
    }
}

export const getRooms = (user) => {
    return {
        type: GET_ROOMS,
        payload: user
    }
}

export const getRoomsSuccess = (rooms) => {
    return {
        type: GET_ROOMS_SUCCESS,
        payload: rooms
    }
}

export const getRoomsFailure = () => {
    return {
        type: GET_ROOMS_FAILURE,
    }
}

export const getMessages = (chatID) => {
    return {
        type: GET_MESSAGES,
        payload: chatID
    }
}

export const getMessagesSuccess = (messages) => {
    return {
        type: GET_MESSAGES_SUCCESS,
        payload: messages
    }
}

export const getMessagesFailure = () => {
    return {
        type: GET_MESSAGES_FAILURE
    }
}

export const createRoom = (titleAndCreator) => {
    return {
        type: CREATE_ROOM,
        payload: titleAndCreator
    }
}

export const addUser = (roomIDAndUsername) => {
    return {
        type: ADD_USER,
        payload: roomIDAndUsername
    }
}

export const changeName = (roomIDTitleCreatorChatID) => {
    return {
        type: CHANGE_NAME,
        payload: roomIDTitleCreatorChatID
    }
}

export const sendMessage = (chatIDUsernameDateMessage) => {
    return {
        type: SEND_MESSAGE,
        payload: chatIDUsernameDateMessage
    }
}

export const sendMessageFailure = () => {
    return {
        type: SEND_MESSAGE_FAILURE
    }
}

export const removeMessage = (chatIDMessageID) => {
    return {
        type: REMOVE_MESSAGE,
        payload: chatIDMessageID
    }
}

export const requestChannel = (channelName) => {
    return {
        type: REQUEST_CHANNEL,
        payload: channelName
    }
}
