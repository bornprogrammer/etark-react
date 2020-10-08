import React, { useState } from 'react';
import { withRouter } from 'react-router';
import Header from '../../components/Header/Header';
import { TextField, makeStyles, Button } from '@material-ui/core';
import axios from 'axios';
import queryString from 'query-string';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import actions from '../../actionTypes';
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

const Payment = props => {
  // style
  const classes = useStyles();
  const [isDecline, setDecline] = useState(false);
  const [payment_link, setPayment] = useState('');
  const [pickupid, setPickup] = useState('');
  const dispatch = useDispatch();
  useEffect(() => {
    const values = queryString.parse(props.location.search);
    //setEmail(values.email);
  }, []);

  const handleSubmit = () => {
    // axios
    //   .put(`https://api.etark.in/api/auth/reset-password/${email}`, {
    //     password: password,
    //     confirm_password: password2
    //   })
    //   .then(() => {
    //     setSucess(true);
    //   })
    //   .catch(() => {
    //     setSucess(false);
    //   });
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
          minHeight: '40vh'
        }}
      >
        <h1>Service Center Payment Page</h1>
        {!isDecline && (
          <div style={{ marginTop: '5vh' }}>
            <a href={payment_link} style={{ textDecoration: 'none' }}>
              <Button className={classes.btnRoot} variant="contained">
                Click here to make payment
              </Button>
            </a>
          </div>
        )}
        {isDecline && (
          <div style={{ marginTop: '5vh' }}>
            <Button
              className={classes.btnRoot}
              variant="contained"
              onClick={() => {
                dispatch({
                  type: actions.ORDER_STATE_UPDATE,
                  payload: {
                    pickupid: pickupid,
                    activity: 'user_declined_payment'
                  }
                });
              }}
            >
              Click here to decline payment
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default withRouter(Payment);
