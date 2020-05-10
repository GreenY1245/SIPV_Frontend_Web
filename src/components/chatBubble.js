import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import 'typeface-roboto';
import { Typography } from '@material-ui/core';
import Avatar from 'react-avatar';

const styles = {

  root: {
      marginTop: '5px',
      backgroundColor: '#BAC1B8',
      color: '#2B303A',
      padding: '10px',
      borderRadius: '5px',
      display: 'flex',
  },
  user: {
      display: 'flex',
      flexDirection: 'row',
  },
  avatar: {
    marginRight: '8px',
  },
  message: {
    paddingTop: '5px',
  },
  avatarContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: '10px',
  },
};

const ChatBubble = (props) => {

  return (
    <div className={props.classes.root}>
      <div className={props.classes.avatarContainer}>
        <Avatar name={props.username} size={45} round className={props.classes.avatar} />
      </div>

      <div>
        <div className={props.classes.user}>
          <Typography gutterBottom><b>{props.username}</b></Typography>
        </div>
        
        <Typography className={props.classes.message}>{props.message}</Typography>
      </div>
    </div>
  )
}

ChatBubble.propTypes = {
  classes: PropTypes.object,
  username: PropTypes.string.isRequired,
  userImage: PropTypes.string,
  message: PropTypes.string.isRequired
}

export default withStyles(styles)(ChatBubble);
