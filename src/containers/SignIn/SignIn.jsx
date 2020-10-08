import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {makeStyles, useTheme, ThemeProvider} from '@material-ui/core/styles';
import {Snackbar} from '@material-ui/core';
import signIn from '../../static/images/signin-signup.png';
import logo from '../../static/images/logo-white.png';
import actions from '../../actionTypes';
import {doPatternTestForInputField} from '../../utils/GeneralUtils';
import * as R from 'ramda';
import MuiAlert from '@material-ui/lab/Alert';
import {withRouter} from 'react-router';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import './signin.scss';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props}/>;
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

const SignIn = props => {
  const classes = useStyles();
  const dispatch = useDispatch();
  // const { isLoggedIn, signInError } = useSelector(state => state.signin);

  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  // const [errorMsg, setErrorMsg] = useState(undefined);
  // const [source, setSource] = useState('');
  const [inputError, setInputError] = React.useState({phone: false});
  const [signInEnabled, setSignInEnabled] = React.useState(false);
  // const [open, setOpen] = useState(false);
  // const [check, setCheck] = useState(false);

  const {isLoggedIn, signinError} = useSelector(state => state.signin);

  const [showPassword, setPasswordVisiblity] = useState(false);
  const handleClickShowPassword = () => {
    setPasswordVisiblity(!showPassword);
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  const handleSubmit = event => {
    event.preventDefault();
    setLoading(true);
    dispatch({
      type: actions.SIGNIN_USER,
      payload: {
        mobile_number: phone,
        password
      }
    });
    // setCheck(true);
  };

  const pattern = {
    phone: '^[0-9]*$'
  };

  const theme = useTheme();
  function MyComponent() {
    const matches = useMediaQuery(theme.breakpoints.down('xs'));

    if (matches) {
      return (<div style={{
          position: "absolute",
          left: "-145%",
          width: '95vw',
          padding: '5%',
          textAlign: 'center',
          margin: '1.5% 0',
          borderRadius: '10px',
          float: 'center',
          fontSize: '16px',
          fontFamily: 'Poppins',
          border: '2px solid #fff',
          backgroundColor: '#245FD3',
          color: '#fff'
        }}>
        <b>
          We'll come up with our mobile version shortly! Till then request you to select Desktop site from your browser settings for best viewing experience!
        </b>
      </div>);
    } else {
      return null;
    }
  }

  useEffect(() => {
    if (isLoggedIn === true) {
      setLoading(false);
      props.history.push('/userDash');
    }
    if (signinError) {
      setLoading(false);
    }
  }, [signinError, isLoggedIn]);

  const handleOnBlur = event => {
    let errorCopy = R.clone(inputError);
    if (event.target.value.length > 0) {
      let validInput = doPatternTestForInputField(event, pattern[event.target.id]);
      errorCopy[event.target.id] = !validInput || event.target.value.length !== 10;
    } else {
      errorCopy[event.target.id] = true;
    }
    setInputError(errorCopy);
    setSignInEnabled(R.isEmpty(R.pickBy((v, k) => v, errorCopy)));
  };

  return (<Grid container="container" component="main" className={classes.root}>
    {/* Server error */}
    <Snackbar anchorOrigin={{
        vertical: 'top',
        horizontal: 'center'
      }} open={signinError} key={'topcenter'} autoHideDuration={3000}>
      <Alert severity="error">
        <span style={{
            fontFamily: 'Poppins'
          }}>Invalid credentials.</span>
      </Alert>
    </Snackbar>
    <Grid item="item" xs={false} sm={4} md={4} className={classes.image}>
      <div className={classes.logo}>
        <Link to={``}>
          <img src={logo} alt={'etark'}/>
        </Link>
      </div>
      <img src={signIn} alt={'registration'}/>
    </Grid>
    <Grid item="item" xs={12} sm={8} md={8} component={Paper} elevation={6} square="square">
      <Grid item="item" className={classes.signUp}>
        <span className={classes.signUpLabel}>New To ETark?</span>
        <Link to={`/sign_up`} className={classes.signUpLink}>
          Sign Up
        </Link>
      </Grid>
      <div className={classes.paper}>
        <ThemeProvider theme={theme}>
          <div style={{
              position: "relative"
            }}>
            <MyComponent/>
          </div>
        </ThemeProvider>
        <Typography component="h1" variant="h4" className={classes.signInTitle}>
          Sign in to ETark
        </Typography>
        {/* {source === 'manual' && errorMsg && (
            <span className={classes.errorText}>Invalid Phone or Password</span>
          )} */
        }
        {
          loading === true
            ? (<CircularProgress style={{
                marginTop: '150px',
                marginLeft: '200px'
              }}/>)
            : (<form className={classes.form} noValidate="noValidate">
              <TextField variant="outlined" margin="normal" required="required" error={inputError['phone']} id="phone" label="Phone Number" name="phone" autoComplete="phone" value={phone} className={classes.textField} onChange={event => {
                  setPhone(event.target.value);
                  handleOnBlur(event);
                }} onBlur={e => handleOnBlur(e)} onKeyUp={e => handleOnBlur(e)} autoFocus="autoFocus" InputProps={{
                  className: classes.input
                }} InputLabelProps={{
                  className: classes.input
                }} FormHelperTextProps={{
                  className: classes.helperText
                }} helperText={inputError['phone'] && phone.length !== 0
                  ? 'Enter 10 digits'
                  : ''
}/>
              <div id="passwordfield">
                <TextField variant="outlined" margin="normal" required="required" name="password" label="Password" type={showPassword
                    ? 'text'
                    : 'password'} id="password" autoComplete="current-password" className={classes.textField} InputProps={{
                    className: classes.input
                  }} InputLabelProps={{
                    className: classes.input
                  }} value={password} onChange={event => setPassword(event.target.value)}/>
                <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword} edge="end">
                  {
                    showPassword
                      ? <Visibility/>
                      : <VisibilityOff/>
                  }
                </IconButton>
              </div>
              <div className={classes.loginExtraDetailsSection}>
                <FormControlLabel classes={{
                    label: classes.checkboxLabel
                  }} control={<Checkbox value = "remember" color = "primary" />} label="Keep me Signed In" className={classes.keepSignedIn}/>
                <Link to={`/forgot_pwd`} className={classes.passwordForget}>
                  Forgot Password?
                </Link>
              </div>
              <Button type="submit" variant="contained" color="primary" onClick={handleSubmit} className={classes.submit} disabled={!signInEnabled || phone === '' || password === '' || !signInEnabled
}>
                Sign In
              </Button>
            </form>)
        }
      </div>
    </Grid>
  </Grid>);
};

export default withRouter(SignIn);
