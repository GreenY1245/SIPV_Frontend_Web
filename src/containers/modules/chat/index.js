import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import 'typeface-roboto';
import { Grid } from '@material-ui/core';


const styles = {

  root: {
      display: 'flex',
      flexGrow: 1,
      height: '100vh',
  },
  sidebar: {
      backgroundColor: '#BAC1B8',
  },
  chat: {
      backgroundColor: '#2B303A',
      color: '#BAC1B8',
  },
  users: {
      backgroundColor: '#2B303A',
      color: '#BAC1B8',
  },
  container: {
    height: '100%',
  },
  inner: {
    padding: '10px',
  },
};

const Chat = (props) => {

  return (
    <div className={props.classes.root}>
      
      <Grid container spacing={0} className={props.classes.container}>

        <Grid item md={1} className={classNames([props.classes.sidebar, props.classes.inner])}>
            SIDEBAR
        </Grid>

        <Grid item md={9} className={classNames([props.classes.chat, props.classes.inner])}>
            MAIN CHAT
        </Grid>

        <Grid item md={2} className={classNames([props.classes.users, props.classes.inner])}>
            USERS
        </Grid>

      </Grid>

    </div>
  )
}

Chat.propTypes = {
  classes: PropTypes.object,
}

export default withStyles(styles)(Chat);
