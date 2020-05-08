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
      borderRadius: '5px'
  },
  user: {
      display: 'flex',
      flexDirection: 'row',
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
        <Typography gutterBottom><b>{props.username}</b></Typography>
      </div>
    </div>
  )
}

ChatUserCard.propTypes = {
  classes: PropTypes.object,
  username: PropTypes.string.isRequired,
}

export default withStyles(styles)(ChatUserCard);
