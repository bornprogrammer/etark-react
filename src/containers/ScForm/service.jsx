import React, { useState, useEffect } from 'react';
import {
  Container,
  Grid,
  RadioGroup,
  Radio,
  FormControlLabel,
  Button,
  TextField,
  LinearProgress,
  Popover,
  ClickAwayListener,
  Snackbar,
  makeStyles
} from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import info from '../../static/images/info.png';
import { doPatternTestForInputField } from '../../utils/GeneralUtils';
import { useDispatch, useSelector } from 'react-redux';
import actions from '../../actionTypes';
import * as R from 'ramda';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

// images
import upload from '../../static/images/upload-white.png';
import pic from '../../static/images/pic.png';
// style
import './service.scss';
const useStyles = makeStyles(theme => ({
  checkboxLabel: {
    fontFamily: 'Poppins',
    fontSize: '1em',
    marginRight: '5vw'
  },
  input: {
    fontFamily: 'Poppins',
    color: '#B5B3C4',
    fontSize: '1em'
  },
  notchedOutline: {
    borderWidth: '1px',
    borderColor: '#9D9BA8 !important'
  },
  radio: {
    color: '#F6F6F6'
  },
  btnRoot: {
    fontFamily: 'Poppins',
    color: 'white',
    backgroundColor: '#245fd3',
    margin: '0 2%',
    padding: '1.5% 7%',
    textTransform: 'none',
    '&$disabled': {
      color: 'white',
      backgroundColor: 'rgb(0 0 0 / 20%)'
    }
  },
  disabled: {},
  frontBtn: {
    fontSize: '0.8em',
    width: '90%',
    padding: '5% 0',
    backgroundColor: ' transparent',
    boxShadow: 'none',
    border: 'dashed 1px #9d9ba8',
    color: '#9d9ba8',
    fontFamily: 'Poppins',
    textTransform: 'none'
  },
  popover: {
    pointerEvents: 'none',
    fontSize: '0.8em',
    fontFamily: 'Poppins'
  }
}));
const prodapi = process.env.REACT_APP_PRODAPI;

const scdata = localStorage.getItem('scdata')
  ? JSON.parse(localStorage.getItem('scdata'))
  : '';

const Service = props => {
  const classes = useStyles();
  const [warranty1, setWarranty1] = useState('');
  const [services, setServices] = useState('');
  const [cost, setCost] = useState('');
  const [bill, setBill] = useState('');
  const [inputError, setInputError] = React.useState({
    cost: true,
    deliverydatecheck: false
  });
  const [inspect, setInspect] = useState(0);
  const [uploadBill, setUpload] = useState(true);
  const [date, setDate] = useState('');
  const [deliverydate, setdeliverDate] = useState('');
  const [nowarranty, setNowarranty] = useState('');
  const { imei, front, back } = useSelector(state => state.serviceform);
  const { uploadStatus, failure } = useSelector(state => state.orderupload);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [popClass, setPopClass] = useState('');
  const openPop = Boolean(anchorEl);
  const [toast, setToast] = useState(false);

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
  useEffect(() => {
    if (uploadStatus == 'true') {
      props.myhistory.push('/servicecentre');
    } else if (uploadStatus == 'false' && failure == true) {
      setToast(true);
      console.log('fail if');
    }
  }, [uploadStatus]);
  const pattern = {
    cost: '^[0-9]*$'
  };

  const duedatechecker = event => {
    let errorCopy = R.clone(inputError);
    var dates = document.querySelectorAll('input[type=datetime-local]');
    if (dates[0].value.length > 0 && dates[1].value.length > 0) {
      var d0 = new Date(dates[0].value);
      var d1 = new Date(dates[1].value);

      errorCopy['deliverydatecheck'] = d0 < d1;
    } else {
      errorCopy['deliverydatecheck'] = true;
    }
    setInputError(errorCopy);
  };

  const errorCheck = event => {
    let errorCopy = R.clone(inputError);
    if (event.target.value.length > 0) {
      let validInput = doPatternTestForInputField(
        event,
        pattern[event.target.id]
      );
      errorCopy[event.target.id] = !validInput || event.target.value < 0;
    } else {
      errorCopy[event.target.id] = true;
    }
    setInputError(errorCopy);
  };

  const {
    status,
    readyDispatch,
    orderDetail,
    orderno,
    imeino,
    model,
    brand,
    warranty,
    compdetail,
    pickupid
  } = useSelector(state => state.orderstatus);

  const dispatch = useDispatch();
  const handleSubmit = event => {
    event.preventDefault();
    console.log(date.replace('T', ' ') + ':00');
    dispatch({
      type: actions.ORDER_UPLOAD,
      payload: {
        pickup_delivery_id: Number(pickupid),
        imei_number: imei,
        device_front_image: front,
        device_back_image: back,
        phone_warranty: warranty1,
        service_to_be_done: services,
        invoice_total_amount: cost == '' ? '0' : cost,
        proforma_invoice_image: bill,
        due_date: date.replace('T', ' ') + ':00',
        device_delivery_date: deliverydate.replace('T', ' ') + ':00',
        not_warranty_reason: nowarranty == '' ? '-' : nowarranty
      },
      id: scdata.id
    });
    // if (!(warranty1 == 'in_warranty')) {
    //   dispatch({
    //     type: actions.ORDER_STATE_UPDATE,
    //     payload: {
    //       pickupid: pickupid,
    //       activity: 'user_made_payment'
    //     }
    //   });
    // }
  };

  const handlePopoverOpen = event => {
    setAnchorEl(event.currentTarget);
    setPopClass(event.currentTarget.className);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
    setPopClass('');
  };

  const [sizeOverflow, setSizeOverflow] = useState(false);

  const fileUpload = event => {
    if (event.target.files[0]) {
      if (event.target.files[0].size > 3145728) {
        setSizeOverflow(true);
      } else {
        setUpload(false);
        const invoice = event.target.files[0];
        event.preventDefault();
        const formData = new FormData();
        formData.append('invoice', invoice);
        if (invoice != null) {
          try {
            axios
              .post(`${prodapi}complaints/upload-invoice`, formData)
              .then(function(response) {
                setBill(response.data.result.filename);
                console.log(response.data.result.filename);
                setUpload(true);
              })
              .catch(function(error) {
                console.log(error);
              });
          } catch (error) {}
        }
      }
    }
  };

  return (
    <Container className="deviceCont">
      {/* heading */}
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
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={toast}
        onClose={() => {
          setToast(false);
        }}
        key={'topcenter'}
        autoHideDuration={3000}
      >
        <Alert severity="error">
          <span style={{ fontFamily: 'Poppins' }}>
            There was some error, please try again later.
          </span>
        </Alert>
      </Snackbar>
      <div className="header-2">
        <div className="txt">
          <h1>Enter the service details</h1>
          <p>
            Please enlist the list of service(s) that are required to solve the
            device’s issue. An estimated invoice amount is also needed to obtain
            the payment from the customer.
          </p>
        </div>
        <Button
          classes={{
            root: classes.btnRoot,
            disabled: classes.disabled
          }}
          variant="outlined"
          onClick={handleSubmit}
          disabled={
            warranty1 === '' ||
            services === '' ||
            date === '' ||
            deliverydate === '' ||
            inputError['deliverydatecheck'] ||
            (warranty1 !== 'in_warranty' &&
              (bill.length == 0 || inputError['cost'] == true))
          }
        >
          Send
        </Button>
      </div>
      <hr
        style={{
          height: 2,
          borderWidth: 0,
          color: 'gray',
          backgroundColor: 'gray'
        }}
      />
      {/* body */}
      <div className="Servicebody">
        <Grid container spacing={7}>
          <Grid item xs={12} sm={6} className="phndetail">
            <div className="lineSpace">
              <p>Phone’s brand name</p>
              <h1>{brand}</h1>
            </div>
            <div className="lineSpace">
              <p>Phone’s model name</p>
              <h1>{model}</h1>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} className="compDtl">
            <h1>Phone’s complaint details</h1>
            <p>{compdetail}</p>
          </Grid>

          <Grid item xs={12}>
            <hr
              style={{
                height: 1,
                borderWidth: 0,
                color: 'gray',
                backgroundColor: 'gray'
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <p style={{ marginBottom: '2%' }}>
              Is the phone’s warranty considered?
            </p>
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
                {popClass == 'out-of-warranty' && (
                  <p
                    style={{
                      padding: '1vh'
                    }}
                  >
                    When device has crossed warranty/extended warranty period
                  </p>
                )}
                {popClass == 'non-warranty' && (
                  <p
                    style={{
                      padding: '1vh'
                    }}
                  >
                    When device is within warranty/extended warranty period{' '}
                    <br />
                    but service centre denies the warranty consideration
                  </p>
                )}
              </Popover>
            </ClickAwayListener>
            <RadioGroup
              id="issue"
              row
              value={warranty1}
              onChange={event => {
                setWarranty1(event.target.value);
              }}
              // onBlur={e => handleOnBlur(e)}
            >
              <div style={{ display: 'inline' }}>
                <FormControlLabel
                  classes={{
                    label: classes.checkboxLabel
                  }}
                  className="field"
                  value="in_warranty"
                  control={
                    <Radio classes={{ root: classes.radio }} color="primary" />
                  }
                  label="In warranty"
                />{' '}
              </div>
              <div style={{ display: 'inline' }}>
                <FormControlLabel
                  classes={{
                    label: classes.checkboxLabel
                  }}
                  className="field"
                  value="non_warranty"
                  control={
                    <Radio classes={{ root: classes.radio }} color="primary" />
                  }
                  label="Non-warranty"
                />
                <img
                  src={info}
                  style={{ position: 'relative', top: '5px', right: '90px' }}
                  onMouseEnter={handlePopoverOpen}
                  className={'non-warranty'}
                />
              </div>
              <div style={{ display: 'inline' }}>
                <FormControlLabel
                  classes={{
                    label: classes.checkboxLabel
                  }}
                  className="field"
                  value="out_of_warranty"
                  control={
                    <Radio classes={{ root: classes.radio }} color="primary" />
                  }
                  label="Out-of-warranty"
                />{' '}
                <img
                  src={info}
                  style={{ position: 'relative', top: '5px', right: '90px' }}
                  onMouseEnter={handlePopoverOpen}
                  className={'out-of-warranty'}
                />
              </div>
            </RadioGroup>
          </Grid>
          <Grid
            item
            xs={12}
            sm={7}
            style={{ display: warranty1 === 'non_warranty' ? 'block' : 'none' }}
          >
            <div>
              <p style={{ marginBottom: '2%' }}>Reason for Non-warranty</p>
            </div>

            <TextField
              // error={inputError['descrip']}
              id="warranty"
              className="field"
              value={nowarranty}
              onChange={event => {
                setNowarranty(event.target.value);
              }}
              variant="outlined"
              multiline
              rows={2}
              style={{ width: '90%' }}
              InputProps={{
                classes: {
                  notchedOutline: classes.notchedOutline
                },
                className: classes.input
              }}
              // onBlur={e => handleOnBlur(e)}
            />
          </Grid>
          <Grid item xs={12}>
            <p style={{ marginBottom: '2%' }}>Service(s) to be done</p>
            <TextField
              // error={inputError['descrip']}
              id="descrip"
              className="field"
              value={services}
              onChange={event => {
                setServices(event.target.value);
              }}
              multiline
              placeholder="List down all the services that are needed to be done."
              rows={10}
              variant="outlined"
              style={{ width: '90%' }}
              InputProps={{
                classes: {
                  notchedOutline: classes.notchedOutline
                },
                className: classes.input
              }}
              // onBlur={e => handleOnBlur(e)}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            style={{ display: warranty1 != 'in_warranty' ? 'block' : 'none' }}
          >
            <p style={{ marginBottom: '2%' }}>
              Total estimated bill amount (including invoice)
            </p>
            <TextField
              // error={inputError['invoice']}
              className="field"
              id="cost"
              variant="outlined"
              style={{ width: '90%' }}
              helperText={
                inputError['cost'] && cost.length !== 0
                  ? 'Enter Only Numbers'
                  : ''
              }
              error={inputError['cost']}
              value={cost}
              placeholder="₹ Enter the total bill amount"
              onChange={event => {
                setCost(event.target.value);
                errorCheck(event);
              }}
              InputProps={{
                classes: {
                  notchedOutline: classes.notchedOutline
                },
                className: classes.input
              }}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            style={{ display: warranty1 != 'in_warranty' ? 'block' : 'none' }}
          >
            <p style={{ marginBottom: '2%' }}>
              Upload the proforma invoice of the bill
            </p>
            <LinearProgress
              className={classes.prog}
              style={{ display: uploadBill ? 'none' : 'block' }}
            />
            <Button
              style={{ display: uploadBill ? 'flex' : 'none' }}
              className={classes.frontBtn}
              variant="contained"
              startIcon={<img alt="upload" src={bill ? pic : upload} />}
              component="label"
            >
              <p style={{ display: !bill ? 'block' : 'none' }}>
                Upload from your computer
              </p>
              <p style={{ display: bill ? 'block' : 'none' }}>{bill}</p>
              <input
                type="file"
                style={{ display: 'none' }}
                onChange={fileUpload}
              />
            </Button>
            <p>Maximum size of file should be 3 MB</p>
          </Grid>

          <Grid item xs={12} sm={6}>
            <p style={{ marginBottom: '2%' }}>Due date:</p>
            <TextField
              id="datetime-local"
              type="datetime-local"
              defaultValue="2020-01-01T00:00"
              error={inputError['deliverydatecheck']}
              className={classes.input}
              value={date}
              onChange={event => {
                setDate(event.target.value);
                duedatechecker(event);
              }}
              onBlur={e => duedatechecker(e)}
              onKeyUp={e => duedatechecker(e)}
              FormHelperTextProps={{
                className: classes.helperText
              }}
              helperText={
                inputError['deliverydatecheck'] && date.length !== 0
                  ? 'Due date should be before than delievery date'
                  : ''
              }
              InputLabelProps={{
                shrink: true,
                className: classes.input
              }}
              InputProps={{
                classes: {
                  notchedOutline: classes.notchedOutline
                },
                className: classes.input
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <p style={{ marginBottom: '2%' }}>Device delivery date:</p>
            <TextField
              id="datetime-local"
              type="datetime-local"
              defaultValue="2020-01-01T00:00"
              error={inputError['deliverydatecheck']}
              className={classes.input}
              value={deliverydate}
              onChange={event => {
                setdeliverDate(event.target.value);
                duedatechecker(event);
              }}
              onBlur={e => duedatechecker(e)}
              onKeyUp={e => duedatechecker(e)}
              FormHelperTextProps={{
                className: classes.helperText
              }}
              helperText={
                inputError['deliverydatecheck'] && deliverydate.length !== 0
                  ? 'Due date should be before than delievery date'
                  : ''
              }
              InputLabelProps={{
                shrink: true,
                className: classes.input
              }}
              InputProps={{
                classes: {
                  notchedOutline: classes.notchedOutline
                },
                className: classes.input
              }}
            />
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

export default Service;
