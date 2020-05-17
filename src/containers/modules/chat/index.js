import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import 'typeface-roboto';
import { Grid, InputBase, Divider, Tooltip, IconButton, Typography, InputAdornment } from '@material-ui/core';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import zamudnikiIcon from '../../../assets/bc64.png';
import ChatBubble from '../../../components/chatBubble';
import ChatUserCard from '../../../components/chatUserCard';
import ChatServerCard from '../../../components/chatServerCard';
import LogoutIcon from 'mdi-react/LogoutIcon';
import SearchIcon from '@material-ui/icons/Search';
import MessageIcon from '@material-ui/icons/Message';
import { sendMessage, getMessages, getRooms, getRoom, setRoom } from '../../../actions';

const styles = {

    root: {
        display: 'flex',
        flexGrow: 1,
        height: '100vh',
    },
    sidebar: {
        backgroundColor: '#222732',
        color: '#BAC1B8',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    chat: {
        backgroundColor: '#2B303A',
        color: '#BAC1B8',
        height: '100%',
    },
    users: {
        backgroundColor: '#222732',
        color: '#BAC1B8',
        display: 'flex',
        flexDirection: 'column',
    },
    container: {
        height: '100%',
    },
    inner: {
        padding: '10px',
    },
    chatBoxes: {
        height: '100%',
        overflow: 'auto',
    },
    chatInput: {
        color: '#BAC1B8',
        height: '50px',
        fontSize: '1.05em',
        width: '100%',
    },
    searchInput: {
        marginTop: '10px',
        color: '#BAC1B8',
        height: '40px',
        fontSize: '1.04em',
        width: '100%',
    },
    chatInputContainer: {
        display: 'flex',
        color: '#BAC1B8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 'calc(100% - 93%)',
    },
    chatContainer: {
        width: '100%',
        flexGrow: 0,
        height: '93%',
    },
    chatTextFieldRoot: {
        color: '#BAC1B8',
        border: '1px solid #BAC1B8',
        borderRadius: '5px',
        padding: '10px',
    },
    connectedUsersTitle: {
        textAlign: 'center',
    },
    sidebarServers: {
        display: 'flex',
        flexDirection: 'column',
    },
    titleText: {
        fontWeight: 500
    },
    sidebarAppIcon: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logout: {
        paddingBottom: '10px',
    },
};

const Chat = (props) => {

    const [chatMessage, setChatMessage] = React.useState('');
    const [searchMessage, setSearchMessage] = React.useState('');
    const chatBoxesRef = React.useRef();
    const history = useHistory();
    let refresher = null;

    React.useEffect(() => {
        props.getRooms(props.username);
    }, []);

    React.useEffect(() => {
        if (props.rooms &&props.rooms.length > 0) {
            props.getRoom({username: props.username, roomName: props.rooms[0].Title});
        }
    }, [props.rooms]);

    React.useEffect(() => {
        
        if (props.room) {
            refresher = setInterval(() => props.getMessages(props.room.ChatId), 500);
        }

        return function cleanup() {
            clearInterval(refresher);
            refresher = null;
        }
    }, [props.room]);

    React.useEffect(() => {
        if (!props.username) {
            history.push('/auth');
        }
    })

    React.useEffect(() => {
        chatBoxesRef.current.scrollTop = chatBoxesRef.current.scrollHeight;
    }, [props.messages])

    const handleChatKeyPress = (evt) => {
        if (evt.key === 'Enter') {

            const messageFrame = {
                chatID: props.room.ChatId,
                username: props.username,
                message: chatMessage
            }
            props.sendMessage(messageFrame);

            setChatMessage('');
        }
    }

    const handleSearchKeyPress = (evt) => {
        if (evt.key === 'Enter') {
            //noop
        }
    }

    const serverChange = (server) => {
        props.setRoom(server);
    }

    return (
        <div className={props.classes.root}>
        
        <Grid container spacing={0} className={props.classes.container}>

            <Grid item md={1} className={classNames([props.classes.sidebar, props.classes.inner])}>
                <div className={props.classes.sidebarAppIcon}>
                    <img alt="Zamudniki icon" src={zamudnikiIcon} style={{ marginTop: '30px' }} />
                    <Typography className={classNames([props.classes.titleText])} variant="h6">BadCommunicator</Typography>
                </div>

                <div className={props.classes.sidebarServers}>
                    {props.rooms && props.rooms.map((item, index) => (
                        <ChatServerCard key={index} serverChange={() => {serverChange(item)}} server={item} />
                    ))}
                </div>

                <div className={props.classes.logout}>
                    <Tooltip title={"Sign out"}>
                        <IconButton color="secondary">
                            <LogoutIcon size={32} />
                        </IconButton>
                    </Tooltip>
                </div>
            </Grid>

            <Grid item md={9} className={classNames([props.classes.chat, props.classes.inner])}>
                
                <div className={props.classes.container}>
                    <Grid item lg={12} className={props.classes.chatContainer}>
                        <div className={props.classes.chatBoxes} ref={chatBoxesRef}>
                            {props.messages && props.messages.map((item, index) => (
                                <ChatBubble key={index} username={item.Username} message={item.Message} />
                            ))}

                            {props.messages === typeof null && (
                                <p style={{ textAlign: 'center' }}>No messages to display...</p>
                            )}
                        </div>
                        <Divider variant="middle" />
                    </Grid>

                    <Grid item lg={12} className={props.classes.chatInputContainer}>
                        <div className={props.classes.chatInput}>
                            <InputBase 
                                className={props.classes.chatInput}
                                fullWidth
                                placeholder="New message #server"
                                value={chatMessage}
                                onChange={(evt) => { setChatMessage(evt.target.value) }}
                                classes={{ root: props.classes.chatTextFieldRoot }}
                                onKeyPress={handleChatKeyPress}
                                startAdornment={<InputAdornment position="start"><MessageIcon /></InputAdornment>}
                            />
                        </div>
                    </Grid>
                </div>
            </Grid>

            <Grid item md={2} className={classNames([props.classes.users, props.classes.inner])}>
                <div className={props.classes.search}>
                    <InputBase 
                        className={props.classes.searchInput}
                        fullWidth
                        placeholder="Search in #server"
                        value={searchMessage}
                        onChange={(evt) => { setSearchMessage(evt.target.value) }}
                        classes={{ root: props.classes.chatTextFieldRoot }}
                        onKeyPress={handleSearchKeyPress}
                        startAdornment={<InputAdornment position="start"><SearchIcon /></InputAdornment>}
                    />
                </div>

                <div className={props.classes.connectedUsers}>
                    <h4 className={props.classes.connectedUsersTitle}>Connected users</h4>
                    {props.room && props.room.People && props.room.People.map((item, index) => (
                        <ChatUserCard key={index} username={item.User} />
                    ))}
                </div>
            </Grid>

        </Grid>

        </div>
    )
}

Chat.propTypes = {
  classes: PropTypes.object,
}

const mapStateToProps = ({ auth, chat }) => {
    const { username } = auth;
    const { rooms, room, messages } = chat;
    return {
        username,
        room,
        rooms,
        messages,
    }
};
  
const mapDispatchToProps = {
    setRoom,
    getRoom,
    getRooms,
    getMessages,
    sendMessage,
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Chat));
