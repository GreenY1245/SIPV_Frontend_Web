import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import backgroundImage from '../../../assets/background.jpg';
import formImage from '../../../assets/form-image.jpg';

const styles = theme => ({

  root: {
    width: '100vw',
    height: '100vh',
  },

  image: {
    width: '100vw',
    height: '100vh',
    backgroundImage : `url(${backgroundImage})`,
    backgroundSize : 'cover',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  formContainer: {
    display: 'flex',
    width: '800px',
    height: '500px',
  },

    formWrapper: {
    width: '80%',
    display: 'flex',
    justifyContent: 'center',
  },

  formImage: {
    position: 'relative',
    width: '100%',
    height: '100%',
    background :`linear-gradient(180deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.6)), url(${formImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '35% 40%',
    borderRadius: '5px 0 0 5px',
    textAlign: 'center',
    lineHeight: '3em',
    color: 'white',
    transform: 'scaleY(1.5, 1.5)'
  },

  formImageText: {
    fontFamily: 'Lato', 
    fontSize: '1.3em', 
    textTransform:'uppercase',
    position: 'relative',
    top: '40%',
    letterSpacing: '0.5em',
  },

  formDataContainer: {
    width: '100%',
    fontFamily: 'Righteous',
    backgroundColor: 'white',
    borderRadius: '0 5px 5px 0'
  },

  input: {
    textAlign: 'center',
    width: '80%',
    margin: '2rem',
    outline: '0', 
    border: '0',
    borderBottom: '1px solid #bac1b8',
  },

  button:{
    width: '80%',
    height: '2rem',
    margin: '2rem',
    color: 'white',
    border: 'none',
    backgroundColor: '#2b303a',
    fontFamily: 'lato',
    textTransform: 'uppercase',
    fontSize: '1em',
  },

});



const Signup = (props) => {

  return (

    // navbar
      
    <>
    <div className={props.classes.image}>
      <div className={props.classes.formWrapper}>
      <div className={props.classes.formContainer}>
        <div className={props.classes.formImage}>
          <div className={props.classes.formImageText}>
          <h2>Get Started!</h2>
          </div>
        </div>
        <div className={props.classes.formDataContainer}>
          <h2 style={{textAlign: 'center', textTransform: 'uppercase', color: '#bac18b', letterSpacing: '0.8em', position: 'relative', top: '1rem'}}>Register</h2>
          <form>
            <input type="text" placeholder='Email' className={props.classes.input}></input>
            <input type="text" placeholder='Username' className={props.classes.input}></input>
            <div className={props.classes.passwordContainer}>
            <input type="password" placeholder='Password' className={props.classes.input}></input>
            <div className={props.classes.showPassButton}>
            </div>
            </div>
            <input type="text" placeholder='Confirm password' className={props.classes.input}></input>
            <input className={props.classes.button} type="submit" value="Register"></input> 
          </form>
        </div>
      </div>
      </div>
    </div>
    </>
  );
}

Signup.propTypes = {
  classes: PropTypes.object,
}

export default withStyles(styles)(Signup);