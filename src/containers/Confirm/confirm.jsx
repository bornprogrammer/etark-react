import React, { useEffect, useState } from 'react';
import { Container, Button, Grid, makeStyles } from '@material-ui/core';
import { withRouter } from 'react-router';
import queryString from 'query-string';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
import axios from 'axios';
import CircularProgress from '@material-ui/core/CircularProgress';

// Component
import Nav from '../../components/Navbar/Nav';

// img
import stamp from '../../static/images/thanks-stamp.png';
import download from '../../static/images/download-icon.png';

// style
import './confirm.css';

const useStyles = makeStyles(theme => ({
  completeBtn: {
    color: 'white',
    backgroundColor: '#245fd3',
    fontFamily: 'Poppins',
    margin: '0 2%',
    padding: '1vh 2vw',
    fontSize: '1em',
    textTransform: 'none'
  },
  downloadBtn: {
    fontSize: '0.9em',
    width: '35%',
    padding: '2% 0',
    marginTop: '5%',
    backgroundColor: 'transparent',
    boxShadow: 'none',
    border: 'solid 1px #245FD3',
    color: '#245FD3',
    fontFamily: 'Poppins',
    textTransform: 'none'
  }
}));

//production api
const prodapi = process.env.REACT_APP_PRODAPI;

// get user gata from localstorage
const user = JSON.parse(localStorage.getItem('userdata'));

const Confirm = props => {
  // style
  const classes = useStyles();
  const [orderid, setOrder] = useState('');
  const [txn, setTxn] = useState('');
  const [imei, setImei] = useState('');
  const [report, setReport] = useState(false);
  const [date, setDate] = useState('');
  const [reportLink, setReportlink] = useState('');
  const [planName, setPlan] = useState('');
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const values = queryString.parse(props.location.search);
    setOrder(values.orderId);
    setTxn(values.status);
    setTimeout(() => {
      axios
        .get(`${prodapi}users/${user.id}/payment/${values.orderId}`)
        .then(response => {
          console.log(response);
          setImei(response.data.result.imei_number);
          setReport(response.data.result.isDownloadReportToBeShown);
          setReportlink(response.data.result.report_link);
          setPlan(response.data.result.plan_type);
          setLoading(false);
          var x = Date(response.data.result.created_at).split(' ');
          var time = x[4].split(':');
          if (Number(time[0]) > 12)
            setDate(
              x[2] +
                ' ' +
                x[1] +
                ' ' +
                x[3] +
                ' ' +
                (Number(time[0]) - 12).toString() +
                ':' +
                time[1] +
                ' P.M'
            );
          else
            setDate(
              x[2] +
                ' ' +
                x[1] +
                ' ' +
                x[3] +
                ' ' +
                time[0] +
                ':' +
                time[1] +
                ' A.M'
            );
        })
        .catch(err => {
          console.log(err);
        });
    }, 3000);
  }, []);

  const handleSubmit = event => {
    event.preventDefault();
    props.history.push('/');
  };
  return (
    <div className="confirmCont">
      <Nav myhistory={props.history} />
      <div className="confirm-items">
        <div
          className="heading"
          style={{ display: txn === 'TXN_SUCCESS' ? 'block' : 'none' }}
        >
          <h1>Your smartphone’s issue is now being resolved!</h1>
          <p>
            Our executives are now processing your complaint and will reach out
            to you within 24 hours!
          </p>
        </div>
        <div
          className="confirmbod"
          style={{ marginTop: txn === 'TXN_SUCCESS' ? 0 : '10vh' }}
        >
          <div
            className="failed-body"
            style={{ display: txn === 'TXN_SUCCESS' ? 'none' : 'block' }}
          >
            <h1> TRANSACTION FAILED</h1>
            <Button
              className={classes.completeBtn}
              variant="contained"
              onClick={handleSubmit}
            >
              Return
            </Button>
          </div>
          <Container
            style={{ display: txn === 'TXN_SUCCESS' ? 'block' : 'none' }}
          >
            {/* heading */}
            <div className="header-1">
              <div>
                <h1>Thank you for using our services!</h1>
              </div>
              <Button
                className={classes.completeBtn}
                variant="contained"
                onClick={handleSubmit}
              >
                Complete
              </Button>
            </div>
            <hr />
            <Grid container style={{ marginTop: '5%', padding: '0 5%' }}>
              {/* left side */}
              <Grid item xs={12} sm={7}>
                <Grid container>
                  <Grid item xs={12} sm={2}>
                    <img alt="stamp" src={stamp} />
                  </Grid>
                  {loading === true && (
                    <div
                      style={{
                        width: '100%',
                        padding: '2% 0',
                        textAlign: 'center'
                      }}
                    >
                      <CircularProgress />
                    </div>
                  )}
                  {loading === false && (
                    <Grid
                      item
                      xs={12}
                      sm={10}
                      style={{
                        lineHeight: '2.5em',
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-around'
                      }}
                    >
                      <div className="comf-left">
                        <p>ORDER INVOICE</p>
                        <p>DATE - TIME</p>
                        <p>DEVICE IMEI</p>
                      </div>
                      <div>
                        <p>{orderid}</p>
                        <p>{date}</p>
                        <p>{imei}</p>
                      </div>
                    </Grid>
                  )}
                  {loading === false && (
                    <Grid
                      item
                      xs={12}
                      style={{ display: report ? 'block' : 'none' }}
                    >
                      <div style={{ textAlign: 'center', marginTop: '3vh' }}>
                        <Button
                          className={classes.downloadBtn}
                          variant="contained"
                          onClick={() => {
                            window.open(reportLink, '_blank');
                          }}
                        >
                          <img alt="download" src={download} />
                          &nbsp;Download Report
                        </Button>
                      </div>
                    </Grid>
                  )}

                  <Grid item xs={12}>
                    <div
                      style={{
                        display: 'flex',
                        backgroundColor: '#F6F6F6',
                        margin: '5% 5% 10% 0',
                        padding: '3%',
                        display:
                          planName == 'standard' ? 'none' : 'inline-block'
                      }}
                    >
                      <PhoneIcon
                        fontSize="inherit"
                        style={{ marginTop: '0.5vh' }}
                      />
                      &nbsp;
                      <p style={{ color: '#9593A7' }}>
                        Failure to respond to our calls will result in order
                        cancellation with no refund of your fee.
                      </p>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
              {/* right side */}
              <Grid item xs={12} sm={5}>
                <Grid container>
                  <Grid xs={12}>
                    <div
                      style={{
                        border: '1px solid #B5B3C4',
                        borderRadius: 4,
                        padding: '5%',
                        display:
                          planName == 'standard' ? 'none' : 'inline-block'
                      }}
                    >
                      <p>
                        Our delivery executives will reach out to you{' '}
                        <strong>within 24 hours*</strong> from the time of
                        complaint registration as recorded in this page to
                        arrange for the <strong>pickup</strong> of your
                        smartphone.
                      </p>
                    </div>
                  </Grid>
                  <Grid xs={12} style={{ display: report ? 'flex' : 'none' }}>
                    <div
                      style={{
                        borderRadius: 4,
                        padding: '5%',
                        marginTop: '5%'
                      }}
                    >
                      <p>Use this report to identify:</p>
                      <div style={{ marginLeft: '5%' }}>
                        <ul>
                          <li>
                            How likely you can win in a negotiation with the
                            smartphone company or the seller
                          </li>
                          <li>How likely you can win in a consumer court</li>
                        </ul>
                      </div>
                    </div>
                  </Grid>
                  <Grid xs={12}>
                    <div style={{ margin: '10% 5% 10% 0' }}>
                      <p>
                        Please refer to our *
                        <a href="https://www.etark.in/t&c">T&Cs</a> for more
                        information on our refund policy.
                      </p>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <div style={{ display: 'flex', arginLeft: '5%' }}>
              <MailIcon fontSize="inherit" style={{ marginTop: '0.4vh' }} />
              &nbsp;
              <p>Details are sent over to your registered email ID.</p>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Confirm);
