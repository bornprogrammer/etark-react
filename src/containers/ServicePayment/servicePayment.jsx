import React, { useEffect, useState } from 'react';
import { Modal, makeStyles, Button, Snackbar } from '@material-ui/core';
import axios from 'axios';
import Header from '../../components/Header/Header';
import { Link } from 'react-router-dom';
import MuiAlert from '@material-ui/lab/Alert';

const useStyles = makeStyles(theme => ({
  nextBtn: {
    color: 'white',
    backgroundColor: '#1a237e',
    fontFamily: 'Poppins',
    '&:hover': {
      backgroundColor: '#FFF',
      color: '#000'
    },
    margin: '0 2%',
    padding: '1vh 3vw',
    textTransform: 'none',
    textAlign: 'center',
    fontSize: '1em'
  },
  pop: {
    position: 'relative',
    backgroundColor: 'white',
    margin: '10% auto',
    width: '43vw',
    padding: '4vh 2vw',
    borderRadius: '5px',
    textAlign: 'center'
  }
}));

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const ServicePayment = props => {
  const [accept, setAccept] = useState(false);
  const [id, setId] = useState('');
  const [orderId, setOrderId] = useState('');
  const [txnToken, setToken] = useState('');
  const [type, setType] = useState('');
  const [deny, setDeny] = useState(false);
  const [success, setSuccess] = useState(false);
  const [failure, setFailure] = useState(false);
  const [initial, setInitial] = useState(true);
  const [cancelled, setCancelled] = useState(false);
  const [error, setError] = useState(false);

  const prodapi = process.env.REACT_APP_PRODAPI;

  useEffect(() => {
    setId(getParameterByName('id'));
    setType(getParameterByName('type'));
    if (failure === false) {
      if (type === 'accept' && accept == false) {
        getDetails().then(() => {
          setInitial(false);
        });
      } else if (type === 'deny') {
        setDeny(true);
        setInitial(false);
      } else if (type === 'success') {
        setInitial(false);
        setSuccess(true);
      } else if (type === 'failure') {
        setInitial(false);
        setFailure(true);
      }
    }
  });

  function getDetails() {
    return axios
      .get(`${prodapi}sc/payment/pickup_delivery/${id}`)
      .then(response => {
        if (response.status == 200) {
          setToken(response.data.result['txnToken']);
          setOrderId(response.data.result['orderNo']);
          setAccept(true);
          setFailure(false);
        }
      })
      .catch(error => {
        setAccept(true);
        // setFailure(true);
      });
  }

  function callDeny() {
    axios
      .patch(`${prodapi}sc/activity/${id}/user_declined_payment`)
      .then(response => {
        console.log(response);
        if (response.status === 201) {
          setCancelled(true);
          setTimeout(() => {
            window.location = process.env.REACT_APP_PRODAPI;
          }, 5000);
        }
      })
      .catch(error => {
        console.log(error);
        setError(true);
        // setTimeout(() => {
        //   window.location="https://www.etark.in"
        // },5000)
      });
  }

  const classes = useStyles();
  const paymentLink = process.env.REACT_APP_PRODPAYTMORDER + orderId;

  const acceptBody = (
    <div className={classes.pop}>
      <div style={{ marginBottom: '2vh' }}></div>
      <h1>Please Confirm here to make Payment</h1>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '5vh'
        }}
      >
        <div>
          <form method="post" action={paymentLink} name="paytm">
            <table border="0">
              <tbody>
                <input type="hidden" name="mid" value="NboDoG24403907964345" />
                <input type="hidden" name="orderId" value={orderId} />
                <input type="hidden" name="txnToken" value={txnToken} />
              </tbody>
            </table>
            <Button className={classes.nextBtn} type="submit">
              CONFIRM
            </Button>
          </form>
        </div>
      </div>
    </div>
  );

  const denyBody = (
    <div className={classes.pop}>
      <div style={{ marginBottom: '2vh' }}></div>
      <h1>You've decided to cancel this transaction!</h1>
      <p>We're sorry to see you go!</p>
      <p>Please Click here to cancel</p>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '5vh'
        }}
      >
        <div>
          <Button
            variant="contained"
            className={classes.nextBtn}
            onClick={callDeny}
          >
            CANCEL?
          </Button>
        </div>
      </div>
    </div>
  );

  const initialBody = (
    <div className={classes.pop}>
      <div style={{ marginBottom: '2vh' }}></div>
      <h1>Kindly Wait!!</h1>
      <p>
        If you're on this page for more than 5 seconds, then there is a problem
        in the url you entered.
      </p>
    </div>
  );

  const successBody = (
    <div className={classes.pop}>
      <div style={{ marginBottom: '2vh' }}></div>
      <h1>Your Payment was successful!</h1>
      <Link to={`/`}>
        <Button className={classes.nextBtn}>Click to Go to Home!</Button>
      </Link>
    </div>
  );

  const failureBody = (
    <div className={classes.pop}>
      <div style={{ marginBottom: '2vh' }}></div>
      <h1>Your Transaction Failed!</h1>
      <p>
        Kindly close this page and try again later,{' '}
        <b>from the link in the email.</b>. For any issues, please contact us
      </p>
    </div>
  );

  return (
    <html>
      <head>
        <title>Show Payment Page</title>
      </head>
      <body>
        <Header />
        <Snackbar
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          open={cancelled}
          onClose={() => {
            setCancelled(false);
          }}
          key={'topcenter'}
          autoHideDuration={3000}
        >
          <Alert severity="success">
            <span style={{ fontFamily: 'Poppins' }}>
              Payment Cancelled, redirecting in 5 seconds..
            </span>
          </Alert>
        </Snackbar>
        <Snackbar
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          open={error}
          onClose={() => {
            setError(false);
          }}
          key={'topcenter'}
          autoHideDuration={3000}
        >
          <Alert severity="error">
            <span style={{ fontFamily: 'Poppins' }}>
              There is some error while update, please try again or contact us.
            </span>
          </Alert>
        </Snackbar>
        <Modal open={initial}>{initialBody}</Modal>
        <Modal open={accept}>{acceptBody}</Modal>
        <Modal open={deny}>{denyBody}</Modal>
        <Modal open={success}>{successBody}</Modal>
        <Modal open={failure}>{failureBody}</Modal>
      </body>
    </html>
  );
};

function getParameterByName(name, url = window.location.href) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

export default ServicePayment;
