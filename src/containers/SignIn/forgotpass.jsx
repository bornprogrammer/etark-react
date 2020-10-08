import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import { TextField, makeStyles, Button } from '@material-ui/core';
import axios from 'axios';

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

const Forgot = () => {
  // style
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [succes, setSucess] = useState('');

  const handleSubmit = () => {
    axios
      .post(`https://api.etark.in/api/auth/forgot-password`, {
        email: email
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
        <h1>Forgot Password</h1>
        <div style={{ textAlign: 'left', marginTop: '5vh' }}>
          <h2>Please enter your email</h2>
          <TextField
            placeholder=""
            className="field"
            id="model"
            variant="outlined"
            style={{ width: '50%', marginTop: '2vh' }}
            value={email}
            onChange={event => {
              setEmail(event.target.value);
            }}
            InputProps={{
              className: classes.input
            }}
          />
        </div>
        <div style={{ margin: '5vh 0', textAlign: 'left' }}>
          <Button
            disabled={email === ''}
            className={classes.btnRoot}
            variant="contained"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </div>
        {succes === true && (
          <p style={{ color: 'green' }}>
            Reset link has been sent to your email
          </p>
        )}
        {succes === false && <p style={{ color: 'red' }}>Invalid email!</p>}
      </div>
    </div>
  );
};

export default Forgot;
