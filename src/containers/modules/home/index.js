import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import { Container, Paper } from '@material-ui/core';

const styles = {
  root: {
    width: '100vw',
    height: '100vh',
    backgroundColor: '#BAC1B8'
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  topMain: {
    backgroundColor: '#58A4B0'
  },
};

const Home = (props) => {

  return (
    <div className={props.classes.root}>
      <Container maxWidth="sm">
        <div className={props.classes.container}>
          <div className={props.classes.topMain}>

          </div>
        </div>
      </Container>
    </div>
  )
}

Home.propTypes = {
  classes: PropTypes.object,
}

export default withStyles(styles)(Home);
