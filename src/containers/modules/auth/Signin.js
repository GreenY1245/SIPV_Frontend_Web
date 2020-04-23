import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import signinImage from '../../../assets/signin-image.jpg';
import CheckBox from '@material-ui/core/Checkbox';
import lock from '../../../assets/lock.png';
import { Button } from '@material-ui/core/';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import '../../../assets/fonts/fonts.css';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom'

import { signIn } from '../../../actions';

const eye = <FontAwesomeIcon icon={faEye} />;
const eyeSlash = <FontAwesomeIcon icon={faEyeSlash} />;


const styles = theme => ({

  container: {
    overflowX: 'hidden',
    height: '100vh',
    display: 'flex',
  },

  imageContainer: {
    display: 'flex',
    flex: '1',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: `url(${signinImage})`,
    backgroundSize: 'cover',
    fontFamily: 'Lato',
    textTransform: 'uppercase',
    letterSpacing: '0.3em',
  },

  imageContainerText: {
    width: '80%',
    margin: 'auto',
    textAlign: 'center',
    lineHeight: '3rem',
    color: '#bac1b8',
  },

  rightContainer: {
    flex: '2',
    backgroundColor: 'white',
    display: 'flex',
  },

  loginFormContainer: {
    backgroundColor: 'white',
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  loginForm: {
    position: 'relative',
    backgroundColor: 'white',
    width: '75%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },

  formLabel: {
    width: '65%',
    margin: 'auto',
    position: 'relative',
    marginBottom: '0.8rem',
    color: 'black',
    filter: 'opacity(0.3)',
    fontSize: '0.8em',
  },


  input: {
    height: '1rem',
    width: '65%',
    margin: 'auto',
    marginBottom: '2rem',
    outline: '0',
    border: '0',
    borderBottom: '2px solid #bac1b8',
  },

  eyeIcon: {
    display: 'flex',
    position: 'relative',
    left: '78%',
    top: '-60px',
    filter: 'opacity(0.3)',
  },

  loginOptions: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '65%',
    margin: 'auto',
    boxSizing: 'border-box',
  },

  staySignedInCheckBox: {
    filter: 'opacity(0.3)',
    top: '-15px',
    left: '-12px',
  },

  checkboxLabel: {
    position: 'relative',
    top: '-15px',
    left: '-12px',
    fontSize: '0.8em',
    color: '#bac1b8',
  },

  forgotPasswordContainer: {
    display: 'flex',
    alignSelf: 'center',
    fontSize: '0.8em',
  },

  forgotPasswordImage: {
    height: '1rem',
    position: 'relative',
    top: '-16px',
    filter: 'opacity(0.3)',
  },

  customButton: {
    position: 'relative',
    left: '17%',
    width: '8rem',
    height: '3rem',
    color: 'white',
    backgroundColor: '#bac1b8',
  },

});


const Signin = (props) => {

  let history = useHistory();

  React.useEffect(() => {
    if (props.token !== null && props.token !== undefined) {
      history.push('/main');
    }
  });

  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  const [gesloVidno, nastaviVidnostGesla] = useState(false);

  const vidnostGesla = () => {
    nastaviVidnostGesla(gesloVidno ? false : true);
  };

  const sendRequest = () => {
    if (username && password) {
      props.signIn({username, password});
    }
  }

  return (
    <>
      <div className={props.classes.container}>
        <div className={props.classes.imageContainer}>
          <div className={props.classes.imageContainerText}>
            <h2>Sign Up and Start Chatting With Your Friends</h2>
            <Button className={props.classes.customButton} variant='contained' style={{ textAlign: 'center', width: '50%', left: '0' }}>Create Account</Button>
          </div>
        </div>
        
        <div className={props.classes.rightContainer}>
          <div className={props.classes.loginFormContainer}>
            <h1 style={{ color: '#bac1b8', fontFamily: 'Lato', textTransform: 'uppercase',letterSpacing: '0.3em', marginBottom: '5rem' }}>Welcome Back</h1>
            <form className={props.classes.loginForm}>
              <label className={props.classes.formLabel}>Email address</label>
              <input onChange={(event) => { setUsername(event.target.value) }} className={props.classes.input} type='email'></input>
              <label className={props.classes.formLabel}>Password</label>
              <input onChange={(event) => { setPassword(event.target.value) }} className={props.classes.input} type={gesloVidno ? 'text' : 'password'}></input>
              <i className={props.classes.eyeIcon} onClick={vidnostGesla}>{gesloVidno ? eye : eyeSlash}</i>
              <div className={props.classes.loginOptions}>
                <div className={props.classes.staySignedInContainer}>
                  <CheckBox className={props.classes.staySignedInCheckBox} inputProps={{ 'aria-label': 'primary checkbox' }} />
                  <label className={props.classes.checkboxLabel}>Stay Signed In</label>
                </div>
                <div className={props.classes.forgotPasswordContainer}>
                  <img className={props.classes.forgotPasswordImage} src={lock} alt='lock'></img>
                  <a href="#fp" style={{ position: 'relative', top: '-18px', left: '10px', color: '#bac1b8', textDecoration: 'none' }}>Forgot Password?</a>
                </div>
              </div>
              <Button onClick={sendRequest} className={props.classes.customButton} variant='contained'>Sign In</Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

Signin.propTypes = {
  classes: PropTypes.object,
}

const mapStateToProps = ({ auth }) => {
  const { token } = auth;
  return {
    token
  }
};

const mapDispatchToProps = {
  signIn,
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Signin));