import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import 'typeface-roboto';
import { Container, Typography, Button, Link } from '@material-ui/core';
import Navbar from '../../../components/Navbar';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import HomepageImage from '../../../assets//home-webapp-app-image.png';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#0C7C59',
            light: '#0F996D'
        },
            secondary: {
            main: '#D64933',
        },
    }
});


const styles = {

  root: {
    width: '100vw',
    height: '100vh',
    backgroundColor: '#BAC1B8',
    overflowX: 'hidden',
    fontFamily: 'Roboto, sans-serif'
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  topMain: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  topMainImage: {
    marginTop: '20px'
  },
  topMainContent: {
    marginTop: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  boldText: {
    fontWeight: 'bold'
  },
  title: {
    color: '#0C7C59'
  },
};

const links = [
  { name: 'Home', link: '/' },
  { name: 'Apps', link: '#', content: [
    { name: 'Desktop', link: '#nolink' },
    { name: 'Android', link: '#nolink' }
  ] },
]

const Home = (props) => {

  return (
    <div className={props.classes.root}>
      <Container maxWidth="lg">
        <div className={props.classes.container}>
          <div className={props.classes.topMain}>
            <Navbar links={links} />
            <div className={props.classes.topMainContent}>
              <Typography className={classNames([props.classes.boldText, props.classes.title])} variant="h2">Remote teams</Typography>
              <Typography className={classNames([props.classes.boldText, props.classes.title])} variant="h2">communicate differently</Typography>
              
              <Typography style={{ marginTop: '20px' }} variant="h5">Teams struggle to stay in-sync with chat alone.</Typography>
              <Typography variant="h5">With <b>BadCommunicator</b>, distributed teams have productive,</Typography>
              <Typography variant="h5">asynchronous discussions without the chatter.</Typography>

              <ThemeProvider theme={theme}>
                <Button size="large" style={{ marginTop: '40px', paddingTop: '15px', paddingBottom: '15px', fontWeight: 400 }} color="secondary" variant="contained">Try BadCommunicator for free</Button>
                <Typography variant="subtitle2">BadCommunicator is open source! <Link className={props.classes.boldText} href="https://github.com/GreenY1245/SIPV_Frontend_Web">Github</Link></Typography>
              </ThemeProvider>
            </div>

            <img className={props.classes.topMainImage} src={HomepageImage} alt="homepage laptop and phone" />
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
