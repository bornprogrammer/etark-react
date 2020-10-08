import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles, useTheme, ThemeProvider} from '@material-ui/core/styles';
import signIn from '../../static/images/signin-signup.png';
import logo from '../../static/images/logo-white.png';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import actions from '../../actionTypes';
import { doPatternTestForInputField } from '../../utils/GeneralUtils';
import * as R from 'ramda';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import Toast from '../../components/Toast/Toast';

import './signup.scss';

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
  textFieldPassword: {
    width: 234,
    height: 48,
    marginRight: 12,
    marginBottom: 30
  },
  textFieldPasswordConfirm: {
    width: 234,
    height: 48,
    marginLeft: 13,
    marginBottom: 30
  },
  submit: {
    margin: theme.spacing(4, 4, 2, 0),
    width: 256,
    height: 56,
    fontFamily: 'Poppins',
    textTransform: 'none'
  },
  signIn: {
    float: 'right',
    marginTop: 30,
    marginRight: 130
  },
  signInLink: {
    textDecoration: 'none'
  },
  signInLabel: {
    marginRight: 5
  },
  passwordSection: {
    display: 'flex'
  },
  policyAgreeText: {
    color: '#245FD3',
    textDecoration: 'none'
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
  signUpTitle: {
    fontFamily: 'Poppins',
    fontWeight: 600,
    fontSize: 28,
    lineHeight: '42px'
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

const SignUp = props => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const [showPassword, setPasswordVisiblity] = useState(false);
  const handleClickShowPassword = () => {
    setPasswordVisiblity(!showPassword);
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  const [toastConfig, setToastConfig] = useState({
    open: false,
    message: '',
    toastType: 'error'
  });

  const [inputError, setInputError] = React.useState({
    phone: false,
    email: false,
    name: false,
    password: false,
    confirmPassword: false
  });
  const [signUpEnabled, setSignUpEnabled] = React.useState(false);

  const { loginError, signupSuccess } = useSelector(state => state.signup);

  const handleSubmit = event => {
    event.preventDefault();
    setLoading(true);
    dispatch({
      type: actions.SIGNUP_USER,
      payload: {
        mobile_number: phone,
        password: password,
        name: name,
        email: email
      }
    });
  };

  const theme = useTheme();
  function MyComponent() {
    const matches = useMediaQuery(theme.breakpoints.down('xs'));

    if (matches) {
      return (<div style={{
          position: "relative",
          left: "-100%",
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
    console.log(loginError);
    if (loginError) {
      setLoading(false);
      setToastConfig({
        open: true,
        message: loginError,
        toastType: 'error'
      });
    }

    if (signupSuccess === true) {
      setLoading(false);
      props.history.push('/');
    }
  }, [loginError, signupSuccess]);

  const pattern = {
    name: '^[A-Za-z _.-]+$',
    phone: '^[0-9]{10}',
    email: '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$',
    password: '.{6,}$',
    confirmPassword: '.{6,}$'
  };

  const handleOnBlur = event => {
    let errorCopy = R.clone(inputError);
    if (event.target.value.length > 0) {
      let validInput = doPatternTestForInputField(
        event,
        pattern[event.target.id]
      );

      switch (event.target.id) {
        case 'phone':
          errorCopy[event.target.id] =
            !validInput || event.target.value.length !== 10;
          break;
        case 'confirmPassword':
          errorCopy[event.target.id] =
            !validInput || event.target.value !== password;
          break;
        default:
          errorCopy[event.target.id] = !validInput;
      }
    } else {
      errorCopy[event.target.id] = true;
    }
    setInputError(errorCopy);
    setSignUpEnabled(R.isEmpty(R.pickBy((v, k) => v, errorCopy)));
  };

  const closeToast = () => {
    setToastConfig({ ...toastConfig, open: false });
    dispatch({
      type: actions.CLEAR_SIGNUP_ERROR
    });
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
        {toastConfig.open && (
          <Toast
            open={toastConfig.open}
            handleClose={() => closeToast()}
            message={toastConfig.message}
            toastType={toastConfig.toastType}
          />
        )}
        <Grid item className={classes.signIn}>
          <span className={classes.signInLabel}>Already a Member?</span>
          <Link to={`/login`} className={classes.signInLink}>
            Sign In
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
          <Typography
            component="h1"
            variant="h4"
            className={classes.signUpTitle}
          >
            Sign Up to ETark
          </Typography>
          {loading === true ? (
            <CircularProgress
              style={{ marginTop: '250px', marginLeft: '250px' }}
            />
          ) : (
            <form className={classes.form} noValidate onSubmit={handleSubmit}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                error={inputError['name']}
                id="name"
                label="Full Name"
                name="name"
                autoComplete="name"
                autoFocus
                className={classes.textField}
                value={name}
                onChange={event => setName(event.target.value)}
                onBlur={e => handleOnBlur(e)}
                onKeyUp={e => handleOnBlur(e)}
                FormHelperTextProps={{
                  className: classes.helperText
                }}
                helperText={
                  inputError['name'] && name.length !== 0
                    ? 'Enter valid name'
                    : ''
                }
              />
              {/* <div className={classes.passwordSection}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                error={inputError['name']}
                id="name"
                label="First Name"
                name="name"
                autoComplete="name"
                autoFocus
                className={classes.textFieldPassword}
                value={name1}
                onChange={event => setName(event.target.value)}
                onBlur={e => handleOnBlur(e)}
                onKeyUp={e => handleOnBlur(e)}
                FormHelperTextProps={{
                  className: classes.helperText
                }}
                helperText={inputError['name'] && name.length !== 0 ? 'Enter valid name' : ''}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                error={inputError['name']}
                id="name"
                label="Last Name"
                name="name"
                autoComplete="name"
                autoFocus
                className={classes.textFieldPassword}
                value={name2}
                onChange={event => setName(event.target.value)}
                onBlur={e => handleOnBlur(e)}
                onKeyUp={e => handleOnBlur(e)}
                FormHelperTextProps={{
                  className: classes.helperText
                }}
                helperText={inputError['name'] && name.length !== 0 ? 'Enter valid name' : ''}
              />
            </div> */}
              <TextField
                variant="outlined"
                margin="normal"
                required
                error={inputError['email']}
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                className={classes.textField}
                value={email}
                onChange={event => setEmail(event.target.value)}
                onBlur={e => handleOnBlur(e)}
                onKeyUp={e => handleOnBlur(e)}
                FormHelperTextProps={{
                  className: classes.helperText
                }}
                helperText={
                  inputError['email'] && email.length !== 0
                    ? 'Enter valid email address'
                    : ''
                }
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                error={inputError['phone']}
                id="phone"
                label="Phone Number"
                name="phone"
                autoComplete="phone"
                className={classes.textField}
                value={phone}
                onChange={event => setPhone(event.target.value)}
                // onBlur={e => verifyPhoneExists(e)}
                onKeyUp={e => handleOnBlur(e)}
                FormHelperTextProps={{
                  className: classes.helperText
                }}
                helperText={
                  inputError['phone'] && phone.length !== 0
                    ? 'Enter 10 digits'
                    : ''
                }
              />
              <div className={classes.passwordSection}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  error={inputError['password']}
                  name="password"
                  label="Password"
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  className={classes.textFieldPassword}
                  value={password}
                  onChange={event => setPassword(event.target.value)}
                  onBlur={e => handleOnBlur(e)}
                  onKeyUp={e => handleOnBlur(e)}
                  FormHelperTextProps={{
                    className: classes.helperText
                  }}
                  helperText={
                    inputError['password'] && password.length !== 0
                      ? 'Enter atleast 6 characters'
                      : ''
                  }
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  error={inputError['confirmPassword']}
                  name="confirmPassword"
                  label="Confirm Password"
                  id="confirmPassword"
                  type={showPassword ? 'text' : 'password'}
                  className={classes.textFieldPasswordConfirm}
                  value={passwordConfirm}
                  onChange={event => setPasswordConfirm(event.target.value)}
                  onBlur={e => handleOnBlur(e)}
                  onKeyUp={e => handleOnBlur(e)}
                  FormHelperTextProps={{
                    className: classes.helperText
                  }}
                  helperText={
                    inputError['confirmPassword'] && passwordConfirm.length > 5
                      ? 'Password not matching'
                      : passwordConfirm.length < 6 &&
                        passwordConfirm.length !== 0
                      ? 'Enter atleast 6 characters'
                      : ''
                  }
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
              <div>
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label=""
                />
                <span>
                  Creating an account means you’re okay with our{' '}
                  <a className={classes.policyAgreeText} href="/t&c">
                    Terms and Conditions of Service
                  </a>
                  ,
                  <a className={classes.policyAgreeText} href="/privacy">
                    Privacy Policy
                  </a>
                </span>
              </div>
              <div id="recaptcha"></div>
              {/* {!isVerifying && ( */}
              <Button
                type="submit"
                variant="contained"
                color="primary"
                className={classes.submit}
                disabled={!signUpEnabled}
              >
                Create Account
              </Button>
              {/* )} */}
            </form>
          )}
        </div>
      </Grid>
    </Grid>
  );
};

export default SignUp;
