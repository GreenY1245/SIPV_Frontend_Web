import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import 'typeface-roboto';
import { Container, Typography, Button, Link, Card, CardContent, Divider, Grid } from '@material-ui/core';
import Navbar from '../../../components/Navbar';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import HomepageImage from '../../../assets/home-webapp-app-image.png';
import BCIcon from '../../../assets/bc64.png';
import { useHistory } from 'react-router-dom';

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

const footerTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#BAC1B8',
    },
    secondary: {
      main: '#2B303A'
    }
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
    flexDirection: 'column',
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
  bottomMainContent: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    marginTop: '200px',
    marginBottom: '100px',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomContentCard: {
    display: 'flex',
    backgroundColor: '#2B303A',
    padding: '10px',
    marginTop: '50px',
    width: '70%',
    color: '#BAC1B8',
  },
  cardContentPrice: {},
  cardContentDescription: {},
  footer: {
    width: '100%',
    backgroundColor: '#0C7C59',
    paddingTop: '50px',
    paddingBottom: '50px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  footerIcon: {
    display: 'flex',
    alignItems: 'center',
  },
  footerRightContent: {
    display: 'flex',
    width: '70%',
  },
  footerLeftContent: {
    display: 'flex',
    width: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  footerContainer: {
    display: 'flex',
    flexDirection: 'row',
  }
};

const links = [
  { name: 'Home', link: '/' },
  { name: 'Apps', link: '#', content: [
    { name: 'Desktop', link: '#nolink' },
    { name: 'Android', link: '#nolink' }
  ] },
]

const Home = (props) => {

  const history = useHistory();

  const redirectTo = (path) => {
    if (path.startsWith("http") || path.startsWith("mailto")) {
      window.open(path, '_blank');
    } else {
      history.push(path);
    }
  }

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
                <Button onClick={() => {redirectTo("https://github.com/GreenY1245/SIPV_Frontend_Desktop")}} size="large" style={{ marginTop: '40px', paddingTop: '15px', paddingBottom: '15px', fontWeight: 400 }} color="secondary" variant="contained">Try BadCommunicator for free</Button>
                <Typography variant="subtitle2">BadCommunicator is open source! <Link className={props.classes.boldText} href="https://github.com/GreenY1245/SIPV_Frontend_Web">Github</Link></Typography>
              </ThemeProvider>
            </div>

            <img className={props.classes.topMainImage} src={HomepageImage} alt="homepage laptop and phone" />
          </div>

          <div className={props.classes.bottomMainContent}>
            <Typography className={classNames([props.classes.boldText, props.classes.title])} variant="h2">Completely free</Typography>
            <Typography className={classNames([props.classes.boldText, props.classes.title])} variant="h2">for everyone to use</Typography>
            
            <Card className={props.classes.bottomContentCard}>
              <CardContent className={props.classes.cardContentPrice}>
                <Typography variant="h2">0€</Typography>
                <Typography variant="caption">For everyone</Typography>
              </CardContent>
              <Divider orientation="vertical" flexItem variant="middle" style={{ backgroundColor: '#BAC1B8' }} />
              <CardContent className={props.classes.cardContentDescription}>
                <Typography variant="h5">BadCommunicator is free for everyone. Download it here, or go to the app store for more download options</Typography>
                <ThemeProvider theme={theme}>
                  <Button onClick={() => {redirectTo("https://github.com/GreenY1245/SIPV_Frontend_Desktop")}} size="large" style={{ marginTop: '5px', paddingTop: '10px', paddingBottom: '10px' }} color="secondary" variant="contained">Try BadCommunicator for free</Button>
                </ThemeProvider>
              </CardContent>
            </Card>
          </div>
        </div>
      </Container>

      <div className={props.classes.footer}>
        <Container maxWidth="lg" className={props.classes.footerContainer}>

          <div className={props.classes.footerLeftContent}>
            <div className={props.classes.footerIcon}>
              <img src={BCIcon} alt="AppIcon" />
              <Typography className={classNames([props.classes.titleText])} variant="h6">BadCommunicator</Typography>
            </div>
            <div style={{ paddingTop: '40px' }}>
              <Typography variant="body1"><b style={{ cursor: 'pointer' }} onClick={() => {redirectTo('/auth')}} >Login</b> or <b style={{ cursor: 'pointer' }} onClick={() => {redirectTo('/auth')}} >Register</b></Typography>
            </div>
            <div style={{ paddingTop: '20px' }}>
              <Typography variant="caption"><b>Privacy</b> &amp; <b>Terms</b></Typography>
            </div>
            <div>
              <Typography variant="caption">© 2020 Zamudniki</Typography>
            </div>
          </div>

          <ThemeProvider theme={footerTheme}>
            <div className={props.classes.footerRightContent}>
              <Grid container justify={"flex-end"} spacing={2}>
                <Grid item xs={12} lg={3}>
                  <Typography variant="h6" color="primary">Product</Typography>

                  <Typography onClick={() => {redirectTo('https://github.com/GreenY1245/SIPV_Frontend_Web')}} style={{ paddingTop: '20px', cursor: 'pointer' }} variant="body1" color="primary">What's new</Typography>
                  <Typography onClick={() => {redirectTo('https://github.com/GreenY1245/SIPV_Frontend_Web')}} style={{ paddingTop: '5px', cursor: 'pointer' }} variant="body1" color="primary">GitHub</Typography>
                </Grid>
                <Grid item xs={12} lg={3}>
                  <Typography variant="h6" color="primary">Company</Typography>

                  <Typography onClick={() => {redirectTo('#nolink')}} style={{ paddingTop: '20px', cursor: 'pointer' }} variant="body1" color="primary">About</Typography>
                </Grid>
                <Grid item xs={12} lg={3}>
                  <Typography variant="h6" color="primary">Resources</Typography>

                  <Typography onClick={() => {redirectTo('mailto:klemen.plaznik@student.um.si')}} style={{ paddingTop: '20px', cursor: 'pointer' }} variant="body1" color="primary">Contact us</Typography>
                </Grid>
              </Grid>
            </div>
          </ThemeProvider>

        </Container>
      </div>
    </div>
  )
}

Home.propTypes = {
  classes: PropTypes.object,
}

export default withStyles(styles)(Home);
