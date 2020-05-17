import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import 'typeface-roboto';
import { Typography } from '@material-ui/core';
import Avatar from 'react-avatar';

const styles = {

  root: {
      marginTop: '5px',
      color: '#BAC1B8',
      padding: '10px',
      borderRadius: '5px',
      '&:hover': {
        backgroundColor: '#1A1D29',
      }
  },
  user: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
  },
  avatar: {
    marginRight: '8px',
  },
};

const ChatUserCard = (props) => {

  return (
    <div className={props.classes.root}>
      <div className={props.classes.user}>
        <Avatar name={props.username} size={30} round className={props.classes.avatar} />
        <Typography><b>{props.username}</b></Typography>
      </div>
    </div>
  )
}

ChatUserCard.propTypes = {
  classes: PropTypes.object,
  username: PropTypes.string.isRequired,
}

export default withStyles(styles)(ChatUserCard);
