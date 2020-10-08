import React, { useState } from 'react';
import {
  Container,
  Grid,
  Card,
  Button,
  Modal,
  CardContent,
  CardActionArea,
  CircularProgress,
  Snackbar,
  makeStyles,
  Link,
  Tooltip
} from '@material-ui/core';
import LinearProgress from '@material-ui/core/LinearProgress';
import MuiAlert from '@material-ui/lab/Alert';
import { useDispatch, useSelector } from 'react-redux';
import actions from '../../actionTypes';
import axios from 'axios';
import InfoIcon from '@material-ui/icons/Info';
import RepeatIcon from '@material-ui/icons/Repeat';

// image
import send from '../../static/images/dispatch.png';
import tick from '../../static/images/tick.png';
import wrong from '../../static/images/wrong.png';
import icon from '../../static/images/abstract-indicator.png';
import select from '../../static/images/selector-signifier.png';
import upload from '../../static/images/upload.png';
import pic from '../../static/images/pic.png';
import neoplan from '../../static/images/neoill.png';

// style
import './plan.css';
const useStyles = makeStyles(theme => ({
  checkboxLabel: {
    fontFamily: 'Poppins',
    fontSize: '0.9em'
  },
  input: {
    fontFamily: 'Poppins'
  },
  input2: {
    fontFamily: 'Poppins',
    fontSize: '0.9em',
    paddingTop: 0
  },
  nxtBtn: {
    color: 'white',
    backgroundColor: '#245fd3',
    fontFamily: 'Poppins',
    margin: '0 2%',
    padding: '1vh 3vw',
    fontSize: '1em',
    textTransform: 'none'
  },
  pickupBtn: {
    fontFamily: 'Poppins',
    backgroundColor: 'white',
    padding: '1%',
    minWidth: '20vw',
    position: 'absolute',
    bottom: '3vh',
    right: '5%'
  },
  frontBtn: {
    width: '90%',
    padding: '5% 0',
    marginTop: '5%',
    backgroundColor: ' transparent',
    boxShadow: 'none',
    border: 'dashed 1px #9d9ba8',
    color: '#9d9ba8',
    fontFamily: 'Poppins',
    textTransform: 'none'
  },
  closeBtn: {
    fontFamily: 'Poppins',
    position: 'absolute',
    top: '3%',
    right: '3%',
    fontSize: '1em'
  },
  frontBtn2: {
    fontSize: '0.8em',
    width: '100%',
    padding: '3vh 0',
    marginTop: '2vh',
    backgroundColor: ' transparent',
    boxShadow: 'none',
    border: 'dashed 1px #9d9ba8',
    color: '#9d9ba8',
    fontFamily: 'Poppins',
    textTransform: 'none'
  },
  prog: {
    fontSize: '0.9vw',
    borderRadius: 10,
    width: '100%',
    padding: '0.8vh 0',
    marginTop: '3vh',
    backgroundColor: ' transparent',
    border: 'solid 1px #9d9ba8',
    color: '#9d9ba8'
  }
}));

//production api
const prodapi = process.env.REACT_APP_PRODAPI;

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const DeliverCard = props => {
  return (
    <div>
      <Grid
        container
        className="doorstep"
        style={{ borderColor: props.pickup ? '#245FD3' : '#B5B3C3' }}
      >
        <Grid item xs={12} sm={3}>
          <img alt="dispatch" src={send} />
          <p>Pickup & Delivery</p>
        </Grid>
        <Grid item xs={12} sm={9}>
          <h1>Bring the service centre at your doorstep</h1>
          <p>Starts from only from ₹ 25*</p>
          <Grid container className="features" spacing={0.5}>
            <Grid item xs={12} sm={6}>
              <p>
                <img alt="tick" src={tick} />
                &nbsp;Pickup at your availability
              </p>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div style={{ display: 'flex' }}>
                <div style={{ display: 'flex', paddingTop: '0.5vh' }}>
                  <img alt="tick" src={tick} style={{ height: '1em' }} />
                  &nbsp;
                </div>
                <div>
                  <p style={{ fontSize: '1em' }}>
                    Connect seamlessly to service centres
                  </p>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} style={{ marginTop: '2%' }}></Grid>
            <Grid item xs={12} sm={6}>
              <div style={{ display: 'flex' }}>
                <div style={{ display: 'flex', paddingTop: '0.5vh' }}>
                  <img alt="tick" src={tick} style={{ height: '1em' }} />
                  &nbsp;
                </div>
                <p style={{ fontSize: '1em' }}>
                  Best in-class servicing by authorized service centres
                </p>
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div style={{ display: 'flex' }}>
                <div style={{ display: 'flex', paddingTop: '0.5vh' }}>
                  <img alt="tick" src={tick} style={{ height: '1em' }} />
                  &nbsp;
                </div>
                <div>
                  <p style={{ fontSize: '1em' }}>
                    Confirmed Round trip booking
                  </p>
                  <p style={{ fontSize: '1em' }}>
                    (your address <RepeatIcon fontSize="inherit" /> service
                    center)
                  </p>
                </div>
              </div>
            </Grid>
            <Grid item xs={12}>
              <Link
                href="https://www.etark.in/t&c"
                style={{ float: 'right', marginTop: '2vh' }}
              >
                *refer to T&C
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

const Plan = () => {
  const classes = useStyles();

  const [isLoading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [pickup, setpickup] = useState(false);
  const [standard, setStandard] = useState(false);
  const [premium, setPremium] = useState(false);
  const [alertPlan, setAlertplan] = useState({ open: false, msg: '' });
  const [pickupCard, setPickupCard] = useState(false);
  // const [front, setFront] = useState(null);
  // const [back, setBack] = useState(null);
  const [frontName, setFrontName] = useState('');
  const [backName, setBackName] = useState('');
  const [decline, setDecline] = useState(false);
  const [upload1, setUpload1] = useState(true);
  const [sizeOverflow, setSizeOverflow] = useState(false);
  const [upload2, setUpload2] = useState(true);
  const [servererr, setServererr] = useState(false);
  const [id, setId] = useState(sessionStorage.getItem('id') || -1);

  // const { step } = useSelector(state => state.formstep);
  const { complaintid } = useSelector(state => state.complaint);
  const { uploadError } = useSelector(state => state.plan);
  const { userplanid } = useSelector(state => state.plan);
  const { planid } = useSelector(state => state.plan);
  const dispatch = useDispatch();

  var currplanid = 0;

  const handleSubmit = event => {
    if (pickup && standard) {
      currplanid = 4;
    } else if (pickup && premium) {
      currplanid = 5;
    } else if (pickup) {
      currplanid = 3;
    } else if (premium) {
      currplanid = 2;
    } else {
      currplanid = 1;
    }

    setLoading(true);
    event.preventDefault();
    dispatch({
      type: planid === '' ? actions.PLAN_SUBMIT : actions.PLAN_UPDATE,
      payload:
        planid === ''
          ? {
              complain_id: complaintid.toString(),
              plan_id: currplanid.toString()
            }
          : {
              plan_id: currplanid.toString()
            },
      id: userplanid,
      planid: currplanid.toString()
    });
  };

  const uploadFilename = () => {
    if (complaintid == id) {
      try {
        axios
          .put(`${prodapi}complaints/${complaintid}/device-images`, {
            device_front_image: frontName,
            device_back_image: backName
          })
          .then(function(response) {
            setpickup(true);
            setOpen(false);
          })
          .catch(function(error) {
            console.log(error);
            setServererr(true);
          });
      } catch (error) {}
    } else {
      try {
        axios
          .post(`${prodapi}complaints/${complaintid}/device-images`, {
            device_front_image: frontName,
            device_back_image: backName
          })
          .then(function(response) {
            setpickup(true);
            setOpen(false);
            sessionStorage.clear();
            setId(complaintid);
            sessionStorage.setItem('id', complaintid);
          })
          .catch(function(error) {
            console.log(error);
            setServererr(true);
          });
      } catch (error) {}
    }
  };

  const fileUpload1 = event => {
    event.preventDefault();
    if (event.target.files[0]) {
      if (event.target.files[0].size > 2097152) {
        setSizeOverflow(true);
      } else {
        setUpload1(false);
        const formData = new FormData();
        formData.append('device-image', event.target.files[0]);
        try {
          axios
            .post(`${prodapi}complaints/upload-device-image`, formData)
            .then(function(response) {
              setFrontName(response.data.result.filename);
              setUpload1(true);
            })
            .catch(function(error) {
              console.log(error);
              setUpload1(true);
              setServererr(true);
            });
        } catch (error) {}
      }
    }
  };

  const fileUpload2 = event => {
    event.preventDefault();
    if (event.target.files[0]) {
      if (event.target.files[0].size > 2097152) {
        setSizeOverflow(true);
      } else {
        const formData = new FormData();
        setUpload2(false);
        formData.append('device-image', event.target.files[0]);
        try {
          axios
            .post(`${prodapi}complaints/upload-device-image`, formData)
            .then(function(response) {
              setBackName(response.data.result.filename);
              setUpload2(true);
            })
            .catch(function(error) {
              console.log(error);
              setUpload2(true);
              setServererr(true);
            });
        } catch (error) {}
      }
    }
  };

  const nextBtn = [];
  nextBtn.push(
    isLoading ? (
      <CircularProgress />
    ) : (
      <Button
        disabled={!(pickup || standard || premium)}
        className={classes.nxtBtn}
        variant="contained"
        onClick={handleSubmit}
      >
        Next
      </Button>
    )
  );

  // modal body
  const body = (
    <div className="modal">
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <h1>Upload pictures of your device</h1>
        <Button
          className={classes.closeBtn}
          onClick={() => {
            setOpen(false);
          }}
        >
          X
        </Button>
      </div>

      <div className="front">
        <p>
          Upload the picture of the <strong>front side</strong> of your phone
        </p>
        <LinearProgress
          className={classes.prog}
          style={{ display: upload1 ? 'none' : 'block' }}
        />
        <Button
          style={{ display: upload1 ? 'flex' : 'none' }}
          className={classes.frontBtn2}
          variant="contained"
          startIcon={<img alt="upload" src={frontName ? pic : upload} />}
          component="label"
        >
          <p style={{ display: !frontName ? 'block' : 'none' }}>
            Upload from your computer
          </p>
          <p style={{ display: frontName ? 'block' : 'none' }}>{frontName}</p>
          <input
            type="file"
            style={{ display: 'none' }}
            onChange={fileUpload1}
          />
        </Button>
        <p>Maximum size of file should be 2 MB</p>
      </div>

      <div className="back">
        <p>
          Upload the picture of the <strong>back side</strong> of your phone
        </p>
        <LinearProgress
          className={classes.prog}
          style={{ display: upload2 ? 'none' : 'block' }}
        />
        <Button
          style={{ display: upload2 ? 'flex' : 'none' }}
          className={classes.frontBtn2}
          variant="contained"
          startIcon={<img alt="upload" src={backName ? pic : upload} />}
          component="label"
        >
          <p style={{ display: !backName ? 'block' : 'none' }}>
            Upload from your computer
          </p>
          <p style={{ display: backName ? 'block' : 'none' }}>{backName}</p>
          <input
            type="file"
            style={{ display: 'none' }}
            onChange={fileUpload2}
          />
        </Button>
        <p>Maximum size of file should be 2 MB</p>
      </div>

      <div className="btns">
        <Button
          className={classes.nxtBtn}
          variant="contained"
          style={{
            background: 'transparent',
            boxShadow: 'none',
            color: 'black'
          }}
          onClick={() => {
            setDecline(true);
          }}
        >
          Decline
        </Button>
        <Button
          disabled={!(frontName && backName)}
          className={classes.nxtBtn}
          variant="contained"
          onClick={uploadFilename}
        >
          Confirm
        </Button>
      </div>
    </div>
  );

  return (
    <Container className="planform">
      {/* plan choosen */}
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        open={alertPlan.open}
        onClose={() => {
          setAlertplan({ open: false, msg: '' });
        }}
        message={<span style={{ fontFamily: 'Poppins' }}>{alertPlan.msg}</span>}
        key={'bottomcenter'}
        autoHideDuration={2000}
      />
      {/* server error */}
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={uploadError || servererr}
        onClose={() => {
          setServererr(false);
        }}
        key={'topcenter'}
        autoHideDuration={5000}
      >
        <Alert severity="error">
          <span style={{ fontFamily: 'Poppins' }}>Server Error!</span>
        </Alert>
      </Snackbar>
      {/* upload picture */}
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        open={decline}
        onClose={() => {
          setDecline(false);
        }}
        key={'bottomcenter'}
        autoHideDuration={3000}
      >
        <Alert severity="error">
          <span style={{ fontFamily: 'Poppins' }}>
            Please upload both the front and back side pictures to continue!
          </span>
        </Alert>
      </Snackbar>
      {/* upload picture size more than 2mb */}
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={sizeOverflow}
        onClose={() => {
          setSizeOverflow(false);
        }}
        key={'topcenter'}
        autoHideDuration={3000}
      >
        <Alert severity="error">
          <span style={{ fontFamily: 'Poppins' }}>
            Kindly Provide pictures only in the expected size!
          </span>
        </Alert>
      </Snackbar>

      {/* heading */}
      <div className="header">
        <div>
          <h1>Get the most out of our services</h1>
          <p>
            In addition to the pick up and delivery service, try our
            revolutionary process under the Neo plan to be better prepared while
            dealing with service centres, companies, sellers or consumer
            forum/court
          </p>
        </div>
        {nextBtn}
      </div>
      <hr />
      {/* body */}
      {isLoading ? (
        <CircularProgress style={{ marginLeft: '200px' }} />
      ) : (
        <div className="planbody">
          <h1>Avail our pickup and delivery service</h1>
          <p>
            Our pickup and delivery service can also be combined with the Neo
            Plan
          </p>
          <Card
            onClick={() => {
              if (!pickup) {
                setOpen(true);
              } else {
                setpickup(false);
              }
            }}
            style={{
              marginTop: '3%',
              fontFamily: 'Poppins'
            }}
          >
            <CardActionArea>
              <img
                alt="seletec"
                src={select}
                style={{
                  display: pickup ? 'block' : 'none',
                  position: 'absolute',
                  right: '3%',
                  top: '10%'
                }}
              />
              <DeliverCard pickup={pickup} />
            </CardActionArea>
          </Card>

          {/* ----- */}

          <div
            style={{ display: 'flex', alignItems: 'center', margin: '5% 0' }}
          >
            <p>Or&nbsp;</p>
            <hr style={{ width: '50%' }} />
          </div>
          <h1>Choose your plan</h1>
          <Grid container justify="space-between" style={{ marginTop: '3%' }}>
            {/* card1 */}
            <Grid item xs={12} sm={12}>
              <Card
                variant="outlined"
                onClick={() => {
                  if (!standard)
                    setAlertplan({
                      open: true,
                      msg: 'You’ve selected the standard plan'
                    });
                  if (premium) setPremium(false);
                  setStandard(!standard);
                  // if (!pickup) setOpen(true);
                }}
                className="plans"
                style={{
                  border: 'solid 2px',
                  borderColor: standard ? '#245FD3' : '#B5B3C3'

                  // marginRight: '7%'
                }}
              >
                <CardActionArea style={{ padding: '2% 2vw' }}>
                  <CardContent className={classes.input}>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        margin: '3% 0',
                        alignItems: 'center'
                      }}
                    >
                      <div>
                        <img alt="neo" src={neoplan} style={{ width: '30%' }} />
                      </div>
                      <img
                        alt="select"
                        src={select}
                        style={{ display: standard ? 'block' : 'none' }}
                      />
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <h1>Neo&nbsp;</h1>
                      <p style={{ fontSize: '1em' }}>Plan</p>
                      <p
                        style={{
                          display: pickup && standard ? 'block' : 'none',
                          marginLeft: '1em',
                          background: 'rgba(36, 95, 211, 0.1)',
                          fontSize: '0.8em',
                          color: '#245FD3'
                        }}
                      >
                        +Pickup & delivery
                      </p>
                    </div>
                    <p style={{ fontSize: '1em', color: '#b5b3c3' }}>
                      For those who seek our instant advice on both technical
                      and non-technical issues
                    </p>
                  </CardContent>

                  <CardContent
                    style={{ lineHeight: '2em' }}
                    className={classes.input}
                  >
                    <p style={{ fontSize: '1em' }}>
                      Select this plan to get a complete analysis of your
                      smartphone complaint:
                    </p>
                    <div className="bulletpts">
                      <ul>
                        {/* <li>
                        <strong>Strength of your complaint :</strong> Helps you understand if you
                        are likely to get your device considered within warranty at the service
                        center
                        <br />
                        - Or -<br />
                        how strong the argument of your complaint is in a consumer court
                      </li> */}
                        <li>
                          <strong>Chances of Winning :</strong> Helps you
                          understand if you are likely to win in a negotiation
                          with the smartphone company or seller (ecommerce firm/
                          offline retailer)
                          <br />
                          - Or -<br />
                          how likely you are to win a case in a consumer court
                          with your complaint
                        </li>
                        <li>
                          <strong>Expected compensation :</strong> Helps you
                          understand what you are likely to get as a
                          compensation (free servicing/ product or part
                          replacement/ monetary) from the smartphone company or
                          seller (ecommerce firm/ offline retailer) during a
                          negotiation or in a consumer court
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                  <CardContent className={classes.input}>
                    <h1 style={{ fontSize: '1.3em', color: 'black' }}>
                      INR 200
                    </h1>
                    <p style={{ fontSize: '1em', color: '#B5B3C3' }}>
                      Non-refundable
                    </p>
                  </CardContent>

                  <CardContent
                    style={{ lineHeight: '3em' }}
                    className={classes.input}
                  >
                    {/* <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img alt="tick" src={tick} style={{ height: '1em' }} />
                    &nbsp;
                    <p style={{ fontSize: '1em', color: 'black' }}>Strength of your complaint</p>
                  </div> */}
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <img alt="tick" src={tick} style={{ height: '1em' }} />
                      &nbsp;
                      <p style={{ fontSize: '1em', color: 'black' }}>
                        Chances of winning report
                      </p>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <img alt="tick" src={tick} style={{ height: '1em' }} />
                      &nbsp;
                      <p style={{ fontSize: '1em', color: 'black' }}>
                        Compensation report
                      </p>
                    </div>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>

            {/* card2 premium plan*/}
            {/* <Grid item xs={12} sm={6}>
            <Card
              className="plans"
              variant="outlined"
              onClick={() => {
                if (!premium) setAlertplan({ open: true, msg: 'You’ve selected the premium plan' });
                if (standard) setStandard(false);
                setPremium(!premium);
              }}
              style={{
                border: 'solid 2px',
                borderColor: premium ? '#245FD3' : '#B5B3C3',
                marginLeft: '7%'
              }}
            >
              <CardActionArea>
                <CardContent className={classes.input}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', margin: '5% 0' }}>
                    <div>
                      <img alt="icon" src={icon} />
                    </div>
                    <img
                      alt="select"
                      src={select}
                      style={{ display: premium ? 'block' : 'none' }}
                    />
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <h1>Premium&nbsp;</h1>
                    <p style={{ fontSize: '1em' }}>Plan</p>
                    <p
                      style={{
                        display: pickup && premium ? 'block' : 'none',
                        marginLeft: '1em',
                        background: 'rgba(36, 95, 211, 0.1)',
                        fontSize: '0.8em',
                        color: '#245FD3'
                      }}
                    >
                      +Pickup & delivery
                    </p>
                  </div>
                  <p style={{ fontSize: '1em', color: '#b5b3c3' }}>
                    For those who seek our instant advice on both technical and non-technical issues
                  </p>
                </CardContent>

                <CardContent className={classes.input}>
                  <p style={{ fontSize: '1em', color: '##616066' }}>
                    That’s not just it, we’d even negotiate with the smartphone company or seller
                  </p>
                  <div className="bulletpts">
                    <ul>
                      <li>
                        To get you a reduction in service fee{' '}
                        <span style={{ color: '#B5B3C4' }}>Or</span>
                      </li>
                      <li>Partial or full Product replacement</li>
                    </ul>
                  </div>
                </CardContent>
                <div style={{ display: 'flex' }}>
                  <CardContent className={classes.input}>
                    <h1 style={{ fontSize: '1.3em', color: 'black' }}>INR 200</h1>
                    <p style={{ fontSize: '1em', color: '#B5B3C3' }}>Non-refundable</p>
                  </CardContent>
                  <CardContent className={classes.input3}>
                    <h1 style={{ fontSize: '1.3em', maxWidth: '1vw' }}>+</h1>
                  </CardContent>
                  <CardContent className={classes.input}>
                    <p>
                      <strong style={{ fontSize: '1.3em', color: 'black' }}>INR 500 </strong>
                      (Security Deposit)
                    </p>

                    <p style={{ fontSize: '1em', color: '#B5B3C3' }}>Refundable</p>
                  </CardContent>
                </div>

                <CardContent className={classes.input2}>
                  <p style={{ display: 'flex' }}>
                    Additional charges based on compensation offered.
                    <Tooltip disableFocusListener disableTouchListener title="test test test test">
                      <InfoIcon fontSize="inherit" />
                    </Tooltip>
                  </p>
                </CardContent>

                <CardContent className={classes.input} style={{ lineHeight: '3em' }}>
                  <p style={{ fontSize: '1em' }}>
                    <img alt="tick" src={tick} />
                    &nbsp;Chances of Winning Report
                  </p>
                  <p style={{ fontSize: '1em' }}>
                    <img alt="tick" src={tick} />
                    &nbsp;Compensation Report
                  </p>
                  <div style={{ display: 'flex' }}>
                    <div style={{ display: 'flex', paddingTop: '0.5vh' }}>
                      <img alt="wrong" src={tick} style={{ height: '1em' }} />
                      &nbsp;
                    </div>
                    <p style={{ fontSize: '1em', lineHeight: '3vh' }}>
                      Negotiation with the Smartphone provider
                    </p>
                  </div>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid> */}
          </Grid>
        </div>
      )}
      {/* pickup add option */}
      <div
        className="modalbod"
        style={{ display: pickupCard ? 'block' : 'none' }}
      >
        <div
          style={{
            position: 'absolute',
            right: '-3%',
            bottom: '40%',
            background: 'blue',
            transform: 'rotate(-90deg)',
            padding: '0.5vw',
            borderRadius: '10px 10px 0 0'
          }}
        >
          <Button
            onClick={() => {
              setpickup(true);
              setPickupCard(false);
              setOpen(true);
            }}
            style={{ fontFamily: 'Poppins' }}
          >
            <h1 style={{ color: 'white', fontSize: '0.8em' }}>ADD</h1>
          </Button>
        </div>
        <DeliverCard />
      </div>
      {/* pickup and delivery option */}
      <Button
        className={classes.pickupBtn}
        variant="contained"
        onClick={() => {
          setPickupCard(true);
        }}
        style={{
          display:
            (!pickup && standard) || (!pickup && premium) ? 'block' : 'none'
        }}
      >
        Avail our pickup and delivery service?
      </Button>
      {/* upload picture of front and back of phone */}
      <Modal
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        {body}
      </Modal>
    </Container>
  );
};

export default Plan;
