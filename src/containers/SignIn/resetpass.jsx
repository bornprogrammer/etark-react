import React, { useState } from 'react';
import { withRouter } from 'react-router';
import Header from '../../components/Header/Header';
import { TextField, makeStyles, Button } from '@material-ui/core';
import axios from 'axios';
import queryString from 'query-string';
import { useEffect } from 'react';

const useStyles = makeStyles(theme => ({
  input: {
    fontFamily: 'Poppins',
    fontSize: '1em',
    textTransform: 'none'
  },
  btnRoot: {
    color: 'white',
    backgroundColor: '#245fd3',
    fontFamily: 'Poppins',
    margin: '0 2%',
    padding: '1vh 3vw',
    fontSize: '1em',
    textTransform: 'none'
  }
}));

const Reset = props => {
  // style
  const classes = useStyles();
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [email, setEmail] = useState('');
  const [succes, setSucess] = useState('');

  useEffect(() => {
    const values = queryString.parse(props.location.search);
    setEmail(values.email);
  }, []);

  const handleSubmit = () => {
    axios
      .put(`https://api.etark.in/api/auth/reset-password/${email}`, {
        password: password,
        confirm_password: password2
      })
      .then(() => {
        setSucess(true);
      })
      .catch(() => {
        setSucess(false);
      });
  };
  return (
    <div style={{ backgroundColor: '#edf1fa', minHeight: '100vh' }}>
      <Header />
      <div
        style={{
          textAlign: 'center',
          margin: '0 20vw',
          marginTop: '5vh',
          backgroundColor: 'white',
          padding: '2vh 2vw',
          minHeight: '50vh'
        }}
      >
        <h1>Reset Password</h1>

        <div style={{ textAlign: 'left', marginTop: '5vh' }}>
          <p>Password should have atleast six characters</p>
        </div>
        <div style={{ textAlign: 'left', marginTop: '5vh' }}>
          <p>New password</p>
          <TextField
            placeholder=""
            className="field"
            id="model"
            variant="outlined"
            type="password"
            style={{ width: '50%', marginTop: '2vh' }}
            value={password}
            onChange={event => {
              setPassword(event.target.value);
            }}
            InputProps={{
              className: classes.input
            }}
          />
        </div>

        <div style={{ textAlign: 'left', marginTop: '3vh' }}>
          <p>confirm password</p>
          <TextField
            placeholder=""
            className="field"
            id="model"
            variant="outlined"
            type="password"
            style={{ width: '50%', marginTop: '2vh' }}
            value={password2}
            onChange={event => {
              setPassword2(event.target.value);
            }}
            InputProps={{
              className: classes.input
            }}
          />
        </div>
        <div style={{ margin: '5vh 0', textAlign: 'left' }}>
          <Button
            disabled={
              password === '' ||
              password2 === '' ||
              password != password2 ||
              password.length < 6 ||
              password.length > 16
            }
            className={classes.btnRoot}
            variant="contained"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </div>
        {succes === true && (
          <p style={{ color: 'green' }}>Your password has been reset</p>
        )}
        {succes === false && <p style={{ color: 'red' }}>Error!</p>}
      </div>
    </div>
  );
};

export default withRouter(Reset);
