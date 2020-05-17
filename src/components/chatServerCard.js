import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import 'typeface-roboto';
import Avatar from 'react-avatar';
import { Tooltip } from '@material-ui/core';

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
  server: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
  },
};

const ChatServerCard = (props) => {

    const serverName = props.server.Title;

    const changeServer = () => {
        props.serverChange("NONE");
    }

    return (
        <div className={props.classes.root}>
            <Tooltip title={serverName}>
                <div className={props.classes.server}>
                    <Avatar name={serverName} size={75} round onClick={changeServer} maxInitials={3} />
                </div>
            </Tooltip>
        </div>
    )
}

ChatServerCard.propTypes = {
  classes: PropTypes.object,
  server: PropTypes.object.isRequired,
  serverChange: PropTypes.func.isRequired,
}

export default withStyles(styles)(ChatServerCard);
