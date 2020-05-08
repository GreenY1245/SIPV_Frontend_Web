import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import 'typeface-roboto';
import { Card, CardContent, Typography, Avatar } from '@material-ui/core';


const styles = {

  root: {
      flexGrow: 1,
      minHeight: '50px',
      backgroundColor: '#BAC1B8',
  },
  user: {
      display: 'flex',
      flexDirection: 'row',
  }
};

const ChatBubble = (props) => {

  return (
    <Card className={props.classes.root}>
        <CardContent>

            <div className={props.classes.user}>
                {props.userImage && props.userImage.length != 0 && (
                    <Avatar alt={props.username} src={props.userImage} />
                )}
                <Typography gutterBottom>{props.username}</Typography>
            </div>

            <Typography>{props.message}</Typography>
        </CardContent>
    </Card>
  )
}

ChatBubble.propTypes = {
  classes: PropTypes.object,
  username: PropTypes.string.isRequired,
  userImage: PropTypes.string,
  message: PropTypes.string.isRequired
}

export default withStyles(styles)(ChatBubble);
