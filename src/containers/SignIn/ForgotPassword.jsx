import React, { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import actions from '../../actionTypes';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import logo from '../../static/images/logo-white.png';
import signIn from '../../static/images/signin-signup.png';
import { doPatternTestForInputField } from '../../utils/GeneralUtils';
import * as R from 'ramda';

import './forgotPwd.scss';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh'
  },
  logo: {
    marginTop: 40,
    marginLeft: 48
  },
  image: {
    backgroundColor: '#245FD3'
  },
  paper: {
    margin: theme.spacing(9, 17),
    display: 'flex',
    flexDirection: 'column'
  },
  signUpLink: {
    textDecoration: 'none'
  },
  signInTitle: {
    marginTop: 108,
    fontFamily: 'Poppins',
    fontWeight: 600,
    fontSize: 28,
    lineHeight: '42px'
  },
  textField: {
    width: 379,
    height: 48
  },
  label: {
    fontFamily: 'Poppins'
  },
  helperText: {
    fontFamily: 'Poppins',
    fontSize: 8,
    letterSpacing: '0.02em',
    color: '#F6F6F6 !important',
    background: '#ED483A',
    margin: 0,
    paddingLeft: 12,
    paddingTop: 2,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  }
}));

const ForgotPassword = props => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [phone, setPhone] = useState('');
  const [isPhoneValid, setPhoneValid] = useState(false);
  const [errorMsg, setErrorMsg] = useState(undefined);
  const [inputError, setInputError] = React.useState({
    phone: false
  });
  const [passwordGetEnabled, setPasswordGetEnabled] = React.useState(false);
  // const userInfo =localStorage.getItem('user')
  // const { email, password } = userInfo;

  useEffect(() => {
    if (email && email.length > 2) {
      setPhoneValid(true);
      dispatch({
        type: actions.RESET_USER
      });
    }
  }, [email]);

  useEffect(() => {
    setErrorMsg(error);
  }, [error]);

  const handlePasswordCheck = () => {
    dispatch({
      type: actions.SEARCH_USER,
      payload: {
        phone,
        searchBy: 'phone'
      }
    });
  };

  const pattern = {
    phone: '^[0-9]*$'
  };

  const handleOnBlur = event => {
    let errorCopy = R.clone(inputError);
    if (event.target.value.length > 0) {
      let validInput = doPatternTestForInputField(event, pattern[event.target.id]);
      errorCopy[event.target.id] = !validInput || event.target.value.length !== 10;
    } else {
      errorCopy[event.target.id] = true;
    }
    setInputError(errorCopy);
    setPasswordGetEnabled(R.isEmpty(R.pickBy((v, k) => v, errorCopy)));
  };

  return (
    <Grid container component="main" className={classes.root}>
      <Grid item xs={false} sm={4} md={4} className={classes.image}>
        <div className={classes.logo}>
          <Link to={``}>
            <img src={logo} alt={'etark'} />
          </Link>
        </div>
        <img src={signIn} alt={'registration'} />
      </Grid>
      <Grid item xs={12} sm={8} md={8} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Typography component="h1" variant="h4" className={classes.signInTitle}>
            Forgot Password
          </Typography>
          <div className={'password-field'}>
            {!isPhoneValid && (
              <>
                <Typography component="h6" variant="h6" className={classes.label}>
                  Please enter the phone number
                </Typography>
                <TextField
                  variant="outlined"
                  id="phone"
                  required
                  error={inputError['phone']}
                  className={classes.textField}
                  onChange={event => setPhone(event.target.value)}
                  onBlur={e => handleOnBlur(e)}
                  onKeyUp={e => handleOnBlur(e)}
                  autoFocus
                  FormHelperTextProps={{
                    className: classes.helperText
                  }}
                  helperText={inputError['phone'] && phone.length !== 0 ? 'Enter 10 digits' : ''}
                />
              </>
            )}
            {!isPhoneValid && errorMsg && (
              <>
                <span className={'password-show'}>Phone Number Doesnt Exists</span>
                <Link to={`/sign_up`} className={classes.signUpLink}>
                  Sign Up
                </Link>
              </>
            )}
            {isPhoneValid && <div className={'password-show'}>{password}</div>}
          </div>
          <div className={'actions'}>
            {!isPhoneValid ? (
              <div>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handlePasswordCheck}
                  disabled={!passwordGetEnabled}
                  className={'button'}
                >
                  GET PASSWORD
                </Button>
              </div>
            ) : (
              <div>
                <Link to={`/login`}>
                  <Button variant="contained" color="primary" className={'button'}>
                    LOGIN
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default ForgotPassword;
