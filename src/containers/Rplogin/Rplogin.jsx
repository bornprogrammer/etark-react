import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Snackbar } from '@material-ui/core';
import signIn from '../../static/images/signin-signup.png';
import logo from '../../static/images/logo-white.png';
import actions from '../../actionTypes';
import { doPatternTestForInputField } from '../../utils/GeneralUtils';
import * as R from 'ramda';
import MuiAlert from '@material-ui/lab/Alert';
import { withRouter } from 'react-router';

import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import './rplogin.scss';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

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
    margin: theme.spacing(9, 17, 0),
    display: 'flex',
    flexDirection: 'column'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  signInTitle: {
    marginTop: 108,
    fontFamily: 'Poppins',
    fontWeight: 600,
    fontSize: '1.6em',
    lineHeight: '42px'
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column'
  },
  textField: {
    width: 379,
    height: 48,
    marginBottom: 30
  },
  submit: {
    margin: theme.spacing(7, 0),
    width: 256,
    height: 56,
    fontFamily: 'Poppins',
    textTransform: 'none'
  },
  signUp: {
    float: 'right',
    marginTop: 30,
    marginRight: 130
  },
  signUpLink: {
    textDecoration: 'none'
  },
  signUpLabel: {
    marginRight: 5
  },
  loginExtraDetailsSection: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 379
  },
  passwordForget: {
    float: 'right',
    color: '#245FD3',
    textDecoration: 'none'
  },
  keepSignedIn: {
    float: 'left',
    color: '#B5B3C4',
    letterSpacing: '0.02em',
    fontSize: 12,
    lineHeight: 20
  },
  submitGoogleBtn: {
    margin: theme.spacing(7, 0, 2),
    width: 372,
    height: 56,
    fontFamily: 'Poppins',
    textTransform: 'none'
  },
  submitGoogleText: {
    marginLeft: 45
  },
  errorText: {
    color: 'red',
    margin: '0px 10px'
  },
  gmailErrorSection: {
    display: 'flex'
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
  },
  anchorOriginTopCenter: {
    fontFamily: 'Poppins'
  },
  input: {
    fontFamily: 'Poppins',
    fontSize: '1em',
    textTransform: 'none'
  },
  checkboxLabel: {
    fontFamily: 'Poppins',
    fontSize: '1em'
  }
}));

const RpSignIn = props => {
  const classes = useStyles();
  const dispatch = useDispatch();
  // const { isLoggedIn, signInError } = useSelector(state => state.signin);

  const [phone_number, setPhone] = useState('');
  const [password, setPassword] = useState('');
  // const [errorMsg, setErrorMsg] = useState(undefined);
  // const [source, setSource] = useState('');
  const [inputError, setInputError] = React.useState({
    phone_number: false
  });
  const [signInEnabled, setSignInEnabled] = React.useState(false);
  // const [open, setOpen] = useState(false);
  // const [check, setCheck] = useState(false);

  const { signinError } = useSelector(state => {
    return state.rpSignin;
  });
  if (localStorage.getItem('rpdata')) {
    props.history.push('/retaildashboard');
  }

  const [showPassword, setPasswordVisiblity] = useState(false);
  const handleClickShowPassword = () => {
    setPasswordVisiblity(!showPassword);
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch({
      type: actions.SIGNIN_RP,
      payload: {
        phone_number: phone_number,
        password: password
      }
    });
    // setCheck(true);
  };

  const pattern = {
    phone_number: '[0-9]{10}'
  };

  const handleOnBlur = event => {
    let errorCopy = R.clone(inputError);
    if (event.target.value.length > 0) {
      let validInput = doPatternTestForInputField(
        event,
        pattern[event.target.id]
      );
      errorCopy[event.target.id] = !validInput;
    } else {
      errorCopy[event.target.id] = true;
    }
    setInputError(errorCopy);
    setSignInEnabled(R.isEmpty(R.pickBy((v, k) => v, errorCopy)));
  };

  return (
    <Grid container component="main" className={classes.root}>
      {/* Server error */}
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={signinError}
        key={'topcenter'}
        autoHideDuration={3000}
      >
        <Alert severity="error">
          <span style={{ fontFamily: 'Poppins' }}>Invalid credentials.</span>
        </Alert>
      </Snackbar>
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
          <Typography
            component="h1"
            variant="h4"
            className={classes.signInTitle}
          >
            Retail Partner Sign in
          </Typography>
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              error={inputError['phone_number']}
              id="phone"
              label="Phone number"
              name="phone"
              value={phone_number}
              className={classes.textField}
              onChange={event => {
                setPhone(event.target.value);
                handleOnBlur(event);
              }}
              onBlur={e => handleOnBlur(e)}
              onKeyUp={e => handleOnBlur(e)}
              autoFocus
              InputProps={{
                className: classes.input
              }}
              InputLabelProps={{ className: classes.input }}
              FormHelperTextProps={{
                className: classes.helperText
              }}
              helperText={
                inputError['phone_number'] && phone_number.length !== 0
                  ? 'Enter Registered Phone number'
                  : ''
              }
            />
            <div id="passwordfield">
              <TextField
                variant="outlined"
                margin="normal"
                required
                name="password"
                label="Password"
                type={showPassword ? 'text' : 'password'}
                id="password"
                autoComplete="current-password"
                className={classes.textField}
                InputProps={{
                  className: classes.input
                }}
                InputLabelProps={{ className: classes.input }}
                value={password}
                onChange={event => setPassword(event.target.value)}
              />
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </div>

            {/* <div className={classes.loginExtraDetailsSection}>
              <FormControlLabel
                classes={{
                  label: classes.checkboxLabel
                }}
                control={<Checkbox value="remember" color="primary" />}
                label="Keep me Signed In"
                className={classes.keepSignedIn}
              />
              <Link to={`/forgot_pwd`} className={classes.passwordForget}>
                Forgot Password?
              </Link>
            </div> */}
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.submit}
              disabled={
                !signInEnabled ||
                phone_number === '' ||
                password === '' ||
                !signInEnabled
              }
            >
              Sign In
            </Button>
          </form>
        </div>
      </Grid>
    </Grid>
  );
};

export default withRouter(RpSignIn);
