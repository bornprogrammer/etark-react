import React, { useState, useEffect } from 'react';
import {
  Container,
  Grid,
  TextField,
  makeStyles,
  Button,
  LinearProgress,
  Snackbar
} from '@material-ui/core';
import { useSelector } from 'react-redux';
import MuiAlert from '@material-ui/lab/Alert';
import { Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import actions from '../../actionTypes';
import axios from 'axios';
import * as R from 'ramda';
import { doPatternTestForInputField } from '../../utils/GeneralUtils';

// images
import upload from '../../static/images/upload-white.png';
import pic from '../../static/images/pic.png';

// style
import './device.scss';
const useStyles = makeStyles(theme => ({
  checkboxLabel: {
    fontFamily: 'Poppins',
    fontSize: '0.9em'
  },
  input: {
    fontFamily: 'Poppins',
    color: '#B5B3C4',
    fontSize: '0.9em'
  },
  notchedOutline: {
    borderWidth: '1px',
    borderColor: '#9D9BA8 !important'
  },
  btnRoot: {
    fontFamily: 'Poppins',
    color: 'white',
    backgroundColor: '#245fd3',
    margin: '0 2%',
    padding: '1.5% 7%',
    textTransform: 'none',
    fontSize: '0.9em',
    '&$disabled': {
      color: 'white',
      backgroundColor: 'rgb(0 0 0 / 20%)'
    }
  },
  disabled: {},
  frontBtn: {
    fontSize: '0.9em',
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
  prog: {
    fontSize: '0.9em',
    borderRadius: 10,
    width: '100%',
    padding: '0.5vh 0',
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

const Device = () => {
  const classes = useStyles();
  const [invoice, setInvoice] = useState('');
  const [imei, setImei] = useState('');
  const [front, setFront] = useState('');
  const [back, setBack] = useState('');
  const [upload1, setUpload1] = useState(true);
  const [upload2, setUpload2] = useState(true);
  const [next, setNext] = useState(false);
  const [servererr, setServererr] = useState(false);
  const [sizeOverflow, setSizeOverflow] = useState(false);
  const { status, orderno } = useSelector(state => state.orderstatus);
  // input validation
  const pattern = {
    imei: '^[0-9]{15}$'
  };
  const [inputError, setInputError] = useState({
    imei: false
  });

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
    setNext(R.isEmpty(R.pickBy((v, k) => v === true, errorCopy)));
  };

  const dispatch = useDispatch();
  const handleSubmit = event => {
    event.preventDefault();
    dispatch({
      type: actions.ORDER_UPDATE,
      payload: {
        imei: imei,
        invoice: orderno,
        front: front,
        back: back
      }
    });
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
              setFront(response.data.result.filename);
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
        setUpload2(false);
        const formData = new FormData();
        formData.append('device-image', event.target.files[0]);
        try {
          axios
            .post(`${prodapi}complaints/upload-device-image`, formData)
            .then(function(response) {
              setBack(response.data.result.filename);
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

  if (orderno === '') {
    return <Redirect to="/servicecentre" />;
  } else {
    return (
      <Container className="deviceCont">
        {/* server error */}
        <Snackbar
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          open={servererr}
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
        <div className="header-2">
          <div className="txt">
            <h1>Enter the details of the device</h1>
            <p>
              Please enter the required details after receival of the device
              from our delivery partners. Upload the pictures of front and back
              side at the time of receival.
            </p>
          </div>
          <Button
            classes={{
              root: classes.btnRoot,
              disabled: classes.disabled
            }}
            disabled={imei === '' || front === '' || back === '' || !next}
            variant="contained"
            onClick={handleSubmit}
          >
            Next
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
        <div className="body-1">
          <Grid container spacing={7}>
            <Grid item xs={12} sm={6}>
              <p style={{ margin: '5% 0' }}>Order Invoice Number</p>
              {/* <TextField
              // error={inputError['invoice']}
              className="field"
              id="invoice"
              variant="outlined"
              style={{ width: '90%' }}
              value={invoice}
              onChange={event => {
                setInvoice(event.target.value);
              }}
              placeholder="# 213BJHBS213"
              InputProps={{
                classes: {
                  notchedOutline: classes.notchedOutline
                },
                className: classes.input
              }}
              FormHelperTextProps={{
                className: classes.input
              }}
              // onBlur={e => handleOnBlur(e)}
            /> */}
              <h1>{orderno}</h1>
            </Grid>
            <Grid item xs={12} sm={6}>
              <p style={{ margin: '5% 0' }}>IMEI 1 Number</p>
              <TextField
                error={inputError['imei']}
                required={true}
                className="field"
                id="imei"
                variant="outlined"
                style={{ width: '90%' }}
                value={imei}
                onChange={event => {
                  setImei(event.target.value);
                  handleOnBlur(event);
                }}
                placeholder="2132131298379"
                InputProps={{
                  classes: {
                    notchedOutline: classes.notchedOutline
                  },
                  className: classes.input
                }}
                FormHelperTextProps={{
                  className: classes.input
                }}
                helperText={
                  inputError['imei']
                    ? 'Invalid IMEI number'
                    : 'Dial *#06# on your phone to know your IMEI 1'
                }
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              Upload the picture of the <strong>front side</strong> of your
              phone
              <LinearProgress
                className={classes.prog}
                style={{ display: upload1 ? 'none' : 'block' }}
              />
              <Button
                style={{ display: upload1 ? 'flex' : 'none' }}
                className={classes.frontBtn}
                variant="contained"
                startIcon={<img alt="upload" src={front ? pic : upload} />}
                component="label"
              >
                <p style={{ display: !front ? 'block' : 'none' }}>
                  Upload from your computer
                </p>
                <p style={{ display: front ? 'block' : 'none' }}>{front}</p>
                <input
                  type="file"
                  style={{ display: 'none' }}
                  onChange={fileUpload1}
                />
              </Button>
              <p style={{ fontSize: '1em' }}>
                Maximum size of file should be 2 MB
              </p>
            </Grid>

            <Grid item xs={12} sm={6}>
              Upload the picture of the <strong>back side</strong> of your phone
              <LinearProgress
                className={classes.prog}
                style={{ display: upload2 ? 'none' : 'block' }}
              />
              <Button
                style={{ display: upload2 ? 'flex' : 'none' }}
                className={classes.frontBtn}
                variant="contained"
                startIcon={<img alt="upload" src={back ? pic : upload} />}
                component="label"
              >
                <p style={{ display: !back ? 'block' : 'none' }}>
                  Upload from your computer
                </p>
                <p style={{ display: back ? 'block' : 'none' }}>{back}</p>
                <input
                  type="file"
                  style={{ display: 'none' }}
                  onChange={fileUpload2}
                />
              </Button>
              <p style={{ fontSize: '1em' }}>
                Maximum size of file should be 2 MB
              </p>
            </Grid>
          </Grid>
        </div>
      </Container>
    );
  }
};

export default Device;
