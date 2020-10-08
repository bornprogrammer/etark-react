import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import {
  Container,
  Button,
  Grid,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  TextField,
  makeStyles,
  Modal,
  Snackbar,
  Popover,
  ClickAwayListener
} from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import Autocomplete from '@material-ui/lab/Autocomplete';
import axios from 'axios';
import * as R from 'ramda';
import { useDispatch, useSelector } from 'react-redux';
import actions from '../../actionTypes';
import CircularProgress from '@material-ui/core/CircularProgress';
import { doPatternTestForInputField } from '../../utils/GeneralUtils';

// images
import location from '../../static/images/location-icon.png';
import info from '../../static/images/info.png';
// style
import './checkout.css';
import { size } from 'lodash';
const useStyles = makeStyles(theme => ({
  checkboxLabel: {
    fontFamily: 'Poppins',
    fontSize: '0.9em'
  },
  input: {
    fontFamily: 'Poppins',
    fontSize: '1em',
    textTransform: 'none'
  },
  nextBtn: {
    color: 'white',
    backgroundColor: '#245fd3',
    fontFamily: 'Poppins',
    margin: '0 2%',
    padding: '1vh 3vw',
    textTransform: 'none',
    fontSize: '1em'
  },
  txtField: {
    fontFamily: 'Poppins',
    margin: '1vh 0'
  },
  addBtn: {
    fontFamily: 'Poppins',
    width: '100%',
    padding: '1vh 0',
    margin: ' 5% 0',
    textTransform: 'none',
    backgroundColor: '#245fd3'
  },
  popover: {
    pointerEvents: 'none',
    fontSize: '0.8em',
    fontFamily: 'Poppins'
  }
}));

// get user gata from localstorage
const user = JSON.parse(localStorage.getItem('userdata'));

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
//production api
const prodapi = process.env.REACT_APP_PRODAPI;

// useEffect(() => {
//   loadScript(
//     'https://maps.googleapis.com/maps/api/js?key=AIzaSyD45J6AZqOKysXg4PXt_Dsx3agFjD_r7Ks&libraries=places'
//   );
// },[step])
const Checkout = props => {
  // style
  const classes = useStyles();
  const { cityName } = useSelector(state => state.cities);
  const sortCity = [];

  for (const x in cityName) {
    sortCity.push([cityName[x].id, cityName[x].name]);
  }
  sortCity.sort((a, b) => {
    var nameA = a[1].toUpperCase();
    var nameB = b[1].toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });
  const cityProps = {
    options: sortCity,
    getOptionLabel: option => option[1]
  };

  const handlePopoverOpen = event => {
    setAnchorEl(event.currentTarget);
    setPopClass(event.currentTarget.className);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
    setPopClass('');
  };

  const [open, setOpen] = useState(false);
  const [lat, setLat] = useState('');
  const [long, setLong] = useState('');
  const [pin, setPin] = useState('');
  const [add1, setAdd1] = useState('');
  const [add2, setAdd2] = useState('');
  const { planid } = useSelector(state => state.plan);
  const [compRep, setComprep] = useState(0);
  const [security, setSecurity] = useState(0);
  const [moniter, setMoniter] = useState(0);
  const [delivery, setDelivery] = useState(0);
  const [inspect, setInspect] = useState(0);
  const [gateway, setGateway] = useState(0);
  const [tax, setTax] = useState(0);
  const [subTotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [city, setCity] = useState('');
  const [addConfirm, setAddconfirm] = useState(false);
  const { complaintid } = useSelector(state => state.complaint);
  const [submitError, setError] = useState(false);
  const [txnid, setTxnid] = useState('');
  const [orderid, setOrderid] = useState('');
  const [pay, setPay] = useState(0);
  const [compen, setCompen] = useState('');
  const [compDtlid, setCompdtl] = useState('');
  const [laoding, setLoading] = useState(false);
  const [payLoad, setPayload] = useState(false);
  const { userplanid } = useSelector(state => state.plan);
  const { step } = useSelector(state => state.formstep);
  const [nextEnable, setNextEnabled] = useState(false);
  const [inputError, setInputError] = useState({
    pin: false
  });
  const [scExist, setscExist] = useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [popClass, setPopClass] = useState('');
  const openPop = Boolean(anchorEl);
  const [locAvailable, setLocAvailable] = useState(true);
  useEffect(() => {
    if (planid === '1') {
      setComprep(200);
      setSecurity(0);
      setMoniter(0);
    } else if (planid === '2') {
      setComprep(200);
      setSecurity(500);
      setMoniter(0);
    } else if (planid === '3') {
      setComprep(0);
      setSecurity(0);
      setMoniter(300);
    } else if (planid === '4') {
      setComprep(200);
      setSecurity(0);
      setMoniter(300);
    } else {
      setComprep(200);
      setMoniter(300);
      setSecurity(500);
    }
  }, [step]);
  // input validation
  const pattern = {
    pin: '^[0-9]{6}$'
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
    setNextEnabled(R.isEmpty(R.pickBy((v, k) => v === true, errorCopy)));
  };

  useEffect(() => {
    if (compDtlid !== '') {
      axios
        .put(`${prodapi}complaints/${complaintid}/compentsation/${compDtlid}`, {
          compensation_type: compen
        })
        .then(response => {})
        .catch(error => {
          console.log(error);
        });
    } else {
      axios
        .post(`${prodapi}complaints/${complaintid}/compentsation`, {
          compensation_type: compen
        })
        .then(response => {
          setCompdtl(response.data.result.id);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }, [compen]);

  // payment
  function loadScript(src) {
    return new Promise(resolve => {
      const script = document.createElement('script');
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }

  async function displayPaytm() {
    setPayload(true);
    const res = await loadScript(
      process.env.REACT_APP_PRODPAYTM
      //process.env.REACT_APP_PRODPAYTM
    );
    if (!res) {
      alert('Paytm SDK failed to load');
      return;
    }
    var config = {
      root: '',
      flow: 'DEFAULT',
      data: {
        orderId: orderid /* update order id */,
        token: txnid /* update token value */,
        tokenType: 'TXN_TOKEN',
        amount: pay /* update amount */
      },
      handler: {
        notifyMerchant: function(eventName, data) {
          // console.log('notifyMerchant handler function called');
          // console.log('eventName => ', eventName);
          // console.log('data => ', data);
        }
      }
    };
    if (window.Paytm && window.Paytm.CheckoutJS) {
      window.Paytm.CheckoutJS.onLoad(function excecuteAfterCompleteLoad() {
        // initialze configuration using init method
        window.Paytm.CheckoutJS.init(config)
          .then(function onSuccess() {
            // after successfully updating configuration, invoke Blink Checkout
            window.Paytm.CheckoutJS.invoke();
            setPayload(false);
          })
          .catch(function onError(error) {
            console.log('error => ', error);
          });
      });
    }
  }

  // geolocation
  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, errorLocation);
    } else {
      console.log('location unavailable');
      setLocAvailable(false);
    }
  }
  function errorLocation(error) {
    console.log('location unavailable');
    setLocAvailable(false);
  }
  function showPosition(position) {
    setLat(position.coords.latitude);
    setLong(position.coords.longitude);
    setLocAvailable(true);
  }

  const addSubmit = () => {
    setLoading(true);
    console.log(pin);
    axios
      .post(`${prodapi}users/${user.id}/addresses`, {
        // address: add1.concat(add2),
        // zip_code: Number(pin),
        // city_id: city,
        // complain_id: complaintid,
        // lat: lat,
        // long: long
        address: add1 === '' ? 'no adderess' : add1.concat(add2),
        zip_code: pin === '' ? 123456 : Number(pin),
        city_id: city === '' ? '1' : city,
        complain_id: complaintid,
        lat: lat,
        long: long
      })
      .then(function(response) {
        console.log(response);
        if (
          response.data.message === 'we are not serving at selected location'
        ) {
          setscExist(false);
          setLoading(false);
          setOpen(false);
        } else {
          response.data.result.component_details.forEach(x => {
            if (x.component_type === 'pickup_delivery')
              setDelivery(x.component_price);
            else if (x.component_type === 'monitoring_charges')
              setMoniter(x.component_price);
            else if (x.component_type === 'security_deposit')
              setSecurity(x.component_price);
            else if (x.component_type === 'plan_price')
              setComprep(x.component_price);
            else if (x.component_type === 'inspection_charge')
              setInspect(x.component_price);
          });
          setGateway(response.data.result.gateway_charges);
          setTax(response.data.result.tax);
          setSubtotal(response.data.result.sub_total);
          setTotal(response.data.result.total);
          axios
            .post(`${prodapi}user-plan/${userplanid}/pay`, {
              complain_id: complaintid.toString(),
              plan_id: planid.toString()
            })
            .then(function(response) {
              setTxnid(response.data.result.body.txnToken);
              setOrderid(response.data.result.user_payment.order_no);
              setPay(response.data.result.user_payment.grand_total);
              setLoading(false);
              setAddconfirm(true);
              setOpen(false);
            })
            .catch(function(error) {
              console.log(error);
            });
        }
      })
      .catch(function(error) {
        console.log(error);
        setError(true);
        setAddconfirm(false);
      });
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: actions.GET_CITY
    });
    if (planid > '2') {
      getLocation();
    }
    if (planid === '1' || planid === '2') {
      addSubmit();
    }
  }, [planid]);

  // modal body
  const body = (
    <div className="modal" style={{ textAlign: 'center' }}>
      <div style={{ marginBottom: '2vh' }}>
        <img alt="location" src={location} style={{ width: '10vw' }} />
      </div>
      <h1>Pickup & Delivery Address</h1>
      <p>
        {add1}, {add2}, Pincode: {pin}, India
      </p>
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
            className={classes.nextBtn}
            variant="contained"
            onClick={addSubmit}
            style={{ width: '5vw', display: !laoding ? 'flex' : 'none' }}
          >
            Confirm
          </Button>
          <CircularProgress style={{ display: laoding ? 'block' : 'none' }} />
        </div>

        <Button
          className={classes.nextBtn}
          variant="contained"
          style={{
            marginTop: '2vh',
            width: '5vw',
            background: 'transparent',
            boxShadow: 'none',
            color: 'black'
          }}
          onClick={() => {
            setOpen(false);
          }}
        >
          Decline
        </Button>
      </div>
    </div>
  );

  return (
    <Container className="checkoutcontain">
      {/* server error */}
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={submitError}
        key={'topcenter'}
        autoHideDuration={5000}
      >
        <Alert severity="error">
          <span style={{ fontFamily: 'Poppins' }}>Server Error!</span>
        </Alert>
      </Snackbar>
      {/* service centre doesnot exist */}
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={!scExist}
        key={'topcenter'}
        onClose={() => {
          setscExist(true);
        }}
        autoHideDuration={5000}
      >
        <Alert severity="error">
          <span style={{ fontFamily: 'Poppins' }}>
            Sorry, we are not serving for your brand at the selected location
          </span>
        </Alert>
      </Snackbar>
      {/* heading */}
      <div className="header" style={{ justifyContent: 'space-between' }}>
        <div>
          <div style={{ textAlign: addConfirm ? 'left' : 'center' }}>
            <h1>You’re just a step away!</h1>
            <p>Value proposition explanation</p>
          </div>
          <div style={{ width: '400px' }}></div>
          <div style={{ float: 'right' }}>
            <p
              style={{
                float: 'right',
                padding: '1.5%',
                textAlign: 'center',
                margin: '0.5% 0',
                display: addConfirm ? 'none' : 'block',
                backgroundColor: '#245fd3',
                color: 'white'
              }}
            >
              <h4>
                Please note that your device's present location is by default
                selected as your Pickup address. In case you wish to change your
                Pickup address to some other location, you must change the
                latitude and longitude values apart from the Address , City and
                Pincode.
              </h4>
              <h6>
                <Link
                  style={{ textDecoration: 'none', color: 'white' }}
                  to={`/HnD`}
                >
                  Refer Help and documentation
                </Link>
              </h6>
            </p>
          </div>
        </div>
      </div>
      <hr />
      {/* body */}
      <Grid container justify="space-between" style={{ padding: '3%' }}>
        <Grid
          item
          xs={12}
          sm={6}
          style={{ height: '61vh', overflowY: 'scroll', paddingRight: '3%' }}
        >
          <div style={{ display: planid === '3' ? 'none' : 'block' }}>
            <h1 style={{ fontSize: '1.2em' }}>Compensation Details</h1>
            <p style={{ color: '#616066' }}>
              Get to know the compensation you are likely to get for your
              complaint!
            </p>

            <FormControl component="fieldset" style={{ marginTop: '5%' }}>
              <p>What kind of compensation are you looking for?</p>
              <RadioGroup
                onChange={event => {
                  setCompen(event.target.value);
                }}
                aria-label="gender"
                name="comp"
              >
                <FormControlLabel
                  classes={{
                    label: classes.checkboxLabel
                  }}
                  value="product_replacement"
                  control={
                    <Radio color="primary" style={{ fontSize: '0.8vw' }} />
                  }
                  label="Product or Part Replacement"
                />
                <p
                  style={{
                    color: '#616066',
                    paddingLeft: '5%',
                    lineHeight: '1.3em'
                  }}
                >
                  This means replacing the old phone with a brand new phone or
                  part(s) + some monetary compensation
                </p>

                <FormControlLabel
                  classes={{
                    label: classes.checkboxLabel
                  }}
                  value="free_servicing"
                  control={<Radio color="primary" />}
                  label="Free servicing at service centre"
                />
                <p
                  style={{
                    color: '#616066',
                    paddingLeft: '5%',
                    lineHeight: '1.3em'
                  }}
                >
                  This means getting free service for your phone + some monetary
                  compensation
                </p>
              </RadioGroup>
            </FormControl>
            <div
              style={{
                margin: '5% 0',
                backgroundColor: '#EDF1FA',
                padding: '5%'
              }}
            >
              <p>You can download a detailed report after making the payment</p>
            </div>
          </div>

          <div
            style={{
              margin: '10% 0 5%',
              display: planid === '1' || planid === '2' ? 'none' : 'block'
            }}
          >
            <h1 style={{ fontSize: '1.2em' }}>Pickup Address</h1>

            <div
              style={{
                display: locAvailable ? 'none' : 'block',
                margin: '5% 0',
                backgroundColor: '#C54338',
                color: 'white',
                padding: '5%'
              }}
            >
              <p style={{ color: 'white' }}>
                Please turn on your location, it is required to get an accurate
                delivery charge.
                <br />
                Please refer <Link to={`/HnD`}>Help and Documentation</Link>
              </p>
            </div>

            <p style={{ color: '#616066' }}>
              This is the address from where we’ll pick up your device up and
              deliver it after servicing.
            </p>
          </div>
          <div
            style={{
              display: planid === '1' || planid === '2' ? 'none' : 'block',
              margin: '5% 0'
            }}
          >
            <p style={{ color: '#26252E' }}>Enter the address</p>
            <TextField
              className={classes.txtField}
              label="latitude"
              variant="outlined"
              value={lat}
              onChange={event => {
                setLat(event.target.value);
              }}
              style={{ width: '95%' }}
              InputProps={{
                className: classes.input
              }}
              InputLabelProps={{ className: classes.input }}
            />
            <TextField
              className={classes.txtField}
              label="longitude"
              variant="outlined"
              value={long}
              onChange={event => {
                setLong(event.target.value);
              }}
              style={{ width: '95%' }}
              InputProps={{
                className: classes.input
              }}
              InputLabelProps={{ className: classes.input }}
            />
            <TextField
              className={classes.txtField}
              label="Address Line 1"
              variant="outlined"
              value={add1}
              onChange={event => {
                setAdd1(event.target.value);
              }}
              style={{ width: '95%' }}
              InputProps={{
                className: classes.input
              }}
              InputLabelProps={{ className: classes.input }}
            />
            <TextField
              className={classes.txtField}
              label="Address Line 2"
              variant="outlined"
              value={add2}
              onChange={event => {
                setAdd2(event.target.value);
              }}
              style={{ width: '95%' }}
              InputProps={{
                className: classes.input
              }}
              InputLabelProps={{ className: classes.input }}
            />
            <Autocomplete
              {...cityProps}
              id="city"
              disableClearable={true}
              renderOption={option => (
                <p style={{ fontFamily: 'Poppins', fontSize: '1em' }}>
                  {option[1]}
                </p>
              )}
              onChange={(event, newValue) => {
                if (newValue) setCity(newValue[0]);
              }}
              style={{ width: '95%' }}
              classes={{ inputRoot: classes.input }}
              renderInput={params => (
                <TextField
                  {...params}
                  className="field"
                  placeholder="City"
                  variant="outlined"
                />
              )}
            />
            <TextField
              id="pin"
              error={inputError['pin']}
              className={classes.txtField}
              label="PIN Code"
              variant="outlined"
              value={pin}
              onChange={event => {
                setPin(event.target.value);
                handleOnBlur(event);
              }}
              style={{ width: '95%' }}
              InputProps={{
                className: classes.input
              }}
              helperText={inputError['pin'] ? 'Invalid zip code.' : ''}
              FormHelperTextProps={{
                className: classes.input
              }}
              InputLabelProps={{ className: classes.input }}
            />
          </div>
          <div
            onClick={() => {
              setAddconfirm(false);
            }}
            style={{
              display:
                addConfirm && planid !== '1' && planid !== '2'
                  ? 'block'
                  : 'none',
              margin: '5% 0',
              backgroundColor: '#EDF1FA',
              padding: '5%'
            }}
          >
            <p>{add1},</p>
            <p>{add2},</p>
            <p>Pincode: {pin},</p>
            <p>India</p>
          </div>
          <Button
            style={{
              display: planid === '1' || planid === '2' ? 'none' : 'block'
            }}
            disabled={!(pin && city && add1 && add2 && nextEnable)}
            className={classes.addBtn}
            variant="contained"
            onClick={() => {
              setOpen(true);
            }}
          >
            Confirm your address
          </Button>
        </Grid>
        <Grid item xs={12} sm={5}>
          <Container
            style={{
              background: '#E5EAF5',
              minHeight: '58vh',
              paddingTop: '2%',
              paddingBottom: '2%',
              overflowY: 'auto'
            }}
          >
            <h1>Summary</h1>
            {/* line1 */}
            <div className="summary">
              <div className="lines">
                <p>Service Opted</p>
                <p>Price</p>
              </div>

              <hr />

              {/* line2 */}
              <div className="lines">
                <p>
                  Complaint Report
                  <i>
                    <img
                      src={info}
                      onMouseEnter={handlePopoverOpen}
                      className={'complaint-report'}
                      style={{ marginLeft: '0.8vh', marginBottom: '0.8vh' }}
                    />
                  </i>
                </p>
                <p>₹ {compRep}</p>
                <ClickAwayListener onClickAway={handlePopoverClose}>
                  <Popover
                    id="complaint-report-popover"
                    className={classes.popover}
                    open={openPop}
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'right'
                    }}
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'left'
                    }}
                    onClose={handlePopoverClose}
                    disableRestoreFocus
                  >
                    {popClass == 'complaint-report' && (
                      <p
                        style={{
                          padding: '1vh'
                        }}
                      >
                        This comes under Neo plan
                      </p>
                    )}
                    {popClass == 'service-opted' && (
                      <p
                        style={{
                          padding: '1vh'
                        }}
                      >
                        This is service opted
                      </p>
                    )}
                    {popClass == 'security-deposit' && (
                      <p
                        style={{
                          padding: '1vh'
                        }}
                      >
                        This is security-deposit
                      </p>
                    )}
                    {popClass == 'delivery-charges' && (
                      <p
                        style={{
                          padding: '1vh'
                        }}
                      >
                        This is for the round trip and <br />
                        it comes under Pickup and Delivery
                      </p>
                    )}
                    {popClass == 'monitory-cost' && (
                      <p
                        style={{
                          padding: '1vh'
                        }}
                      >
                        This is for the delivery and <br />
                        service center process monitoring and it
                        <br />
                        comes under Pickup and Delivery
                      </p>
                    )}
                    {popClass == 'inspection-charge' && (
                      <p
                        style={{
                          padding: '1vh'
                        }}
                      >
                        This amount shall be refunded* <br />
                        as you pay the service center for
                        <br /> their estimated servicing cost,
                        <br />
                        if any, to be sent to you via. mail
                        <p style={{ fontSize: '0.67em' }}>
                          (refer *Refund and Cancellation Policy)
                        </p>
                      </p>
                    )}
                    {popClass == 'gateway-charge' && (
                      <p
                        style={{
                          padding: '1vh'
                        }}
                      >
                        This is gateway-charge
                      </p>
                    )}
                  </Popover>
                </ClickAwayListener>
              </div>

              {/* line3 */}
              <div className="lines" style={{ display: 'none' }}>
                <p>Security Deposit</p>
                <p>₹ {security}</p>
              </div>

              <hr />

              {/* line4 */}
              <div className="lines">
                <p>
                  Delivery Charges
                  <i>
                    <img
                      src={info}
                      onMouseEnter={handlePopoverOpen}
                      className={'delivery-charges'}
                      style={{ marginLeft: '0.8vh', marginBottom: '0.8vh' }}
                    />
                  </i>
                </p>
                <p>₹ {delivery}</p>
              </div>

              <hr />

              {/* line5 */}
              <div className="lines">
                <p>
                  Monitoring cost
                  <i>
                    <img
                      src={info}
                      onMouseEnter={handlePopoverOpen}
                      className={'monitory-cost'}
                      style={{ marginLeft: '0.8vh', marginBottom: '0.8vh' }}
                    />
                  </i>
                </p>
                <p>₹{moniter}</p>
              </div>

              <hr />

              {/* line6 */}
              <div className="lines">
                <p>
                  Inspection Charges
                  <i>
                    <img
                      src={info}
                      onMouseEnter={handlePopoverOpen}
                      className={'inspection-charge'}
                      style={{ marginLeft: '0.8vh', marginBottom: '0.8vh' }}
                    />
                  </i>
                </p>
                <p>₹ {inspect}</p>
              </div>

              <hr />

              {/* line7 */}
              <div className="lines" style={{ marginTop: '5%' }}>
                <p>Sub Total</p>
                <p>₹ {subTotal}</p>
              </div>

              {/* line8 */}
              <div className="lines">
                <p>Taxes & Charges</p>
                <p>₹ {tax}</p>
              </div>

              {/* line9 */}
              <div className="lines">
                <p>Gateway Charges</p>
                <p>₹ {gateway}</p>
              </div>

              {/* line10 */}
              <div className="lines">
                <h1 style={{ fontSize: '1em' }}>Total</h1>
                <h1 style={{ fontSize: '1em' }}>₹ {total}</h1>
              </div>
            </div>
            <Button
              disabled={!addConfirm}
              className={classes.addBtn}
              variant="contained"
              onClick={displayPaytm}
              style={{ display: !payLoad ? 'block' : 'none' }}
            >
              Pay Now
            </Button>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                padding: '3% 0'
              }}
            >
              <CircularProgress
                style={{ display: payLoad ? 'block' : 'none' }}
              />
            </div>
          </Container>
        </Grid>
      </Grid>
      {/* confirm address */}
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

export default Checkout;
