import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import 'typeface-roboto';
import { Grid, InputBase } from '@material-ui/core';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import zamudnikiIcon from '../../../assets/bc64.png';
import ChatBubble from '../../../components/chatBubble';
import ChatUserCard from '../../../components/chatUserCard';

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
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    chat: {
        backgroundColor: '#2B303A',
        color: '#BAC1B8',
        height: '100%',
    },
    users: {
        backgroundColor: '#222732',
        color: '#BAC1B8',
    },
    container: {
        height: '100%',
    },
    inner: {
        padding: '10px',
    },
    chatBoxes: {
        //display: 'flex',
        //flexDirection: 'column-reverse',
        height: '100%',
        overflow: 'auto',
    },
    chatInput: {
        color: '#BAC1B8',
        height: '50px',
        fontSize: '1.05em',
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
};

const Chat = (props) => {

    const [chatMessage, setChatMessage] = React.useState('');
    const [chatMessages, setChatMessages] = React.useState([]);
    const chatBoxesRef = React.useRef();
    const history = useHistory();

    /*
    React.useEffect(() => {
        if (!props.username) {
            history.push('/auth');
        }
    })
    */

    React.useEffect(() => {
        console.log("chatMessages updated, fixing scroll position")
        chatBoxesRef.current.scrollTop = chatBoxesRef.current.scrollHeight;
    }, [chatMessages.length])

    const handleKeyPress = (evt) => {
        if (evt.key === 'Enter') {
            let newMessages = chatMessages;
            newMessages.push({ username: props.username ? props.username : 'TESTING NAME', message: chatMessage });
            setChatMessages(newMessages);
            setChatMessage('');
        }
    }

    return (
        <div className={props.classes.root}>
        
        <Grid container spacing={0} className={props.classes.container}>

            <Grid item md={1} className={classNames([props.classes.sidebar, props.classes.inner])}>
                <img alt="Zamudniki icon" src={zamudnikiIcon} style={{ marginTop: '30px' }} />
            </Grid>

            <Grid item md={9} className={classNames([props.classes.chat, props.classes.inner])}>
                
                <div className={props.classes.container}>
                    <Grid item lg={12} className={props.classes.chatContainer}>
                        <div className={props.classes.chatBoxes} ref={chatBoxesRef}>
                            {chatMessages && chatMessages.map((item, index) => (
                                <ChatBubble key={index} username={item.username} message={item.message} />
                            ))}
                        </div>
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
                                onKeyPress={handleKeyPress}
                            />
                        </div>
                    </Grid>
                </div>
            </Grid>

            <Grid item md={2} className={classNames([props.classes.users, props.classes.inner])}>
                <h4 className={props.classes.connectedUsersTitle}>Connected users</h4>
                <ChatUserCard username={props.username ? props.username : 'TESTING NAME'} />
            </Grid>

        </Grid>

        </div>
    )
}

Chat.propTypes = {
  classes: PropTypes.object,
}

const mapStateToProps = ({ auth }) => {
    const { username } = auth;
    return {
        username
    }
};
  
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Chat));
