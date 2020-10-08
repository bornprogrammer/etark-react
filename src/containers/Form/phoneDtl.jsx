import React, { useState, useEffect } from 'react';
import {
  Container,
  Grid,
  MenuItem,
  TextField,
  Button,
  ButtonGroup,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormControl,
  CircularProgress,
  makeStyles,
  Snackbar,
  LinearProgress
} from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { useDispatch, useSelector } from 'react-redux';
import actions from '../../actionTypes';
import { doPatternTestForInputField } from '../../utils/GeneralUtils';
import * as R from 'ramda';
import axios from 'axios';
// style
import './phoneDtl.css';
// image
import Offline from '../../static/images/offline-icon.png';
import Online from '../../static/images/online-icon.png';
import upload from '../../static/images/upload.png';
import pic from '../../static/images/pic.png';

//production api
const prodapi = process.env.REACT_APP_PRODAPI;

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles(theme => ({
  checkboxLabel: {
    fontFamily: 'Poppins',
    fontSize: '1em'
  },
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
  },
  frontBtn: {
    fontSize: '1em',
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
    fontSize: '0.9vw',
    borderRadius: 10,
    width: '90%',
    padding: '0.5vh 0',
    marginTop: '3vh',
    backgroundColor: ' transparent',
    border: 'solid 1px #9d9ba8',
    color: '#9d9ba8'
  }
}));

const PhoneDtl = () => {
  // states
  const [isLoading, setLoading] = useState(true);
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [imei, setImei] = useState('');
  const [price, setPrice] = useState('');
  const [online, setOnline] = useState('');
  const [purchase, setPurchase] = useState('');
  const [own, setOwn] = useState('');
  const [warranty, setWarranty] = useState('');
  const [prob, setProb] = useState('');
  const [fake, setFake] = useState('');
  const [comm, setComm] = useState('');
  const [issue, setIssue] = useState('');
  const [resp, setResponse] = useState('');
  const [invoice, setInvoice] = useState('');
  const [storeAdd, setstoreAdd] = useState('');
  const [nextEnable, setNextEnabled] = useState('');
  const [upload1, setUpload1] = useState(true);
  const [servererr, setServererr] = useState(false);
  const [storename, setStorename] = useState('');
  const [storeinput, setStoreinput] = useState('');

  // input validation
  const pattern = {
    model: '^[A-Za-z0-9 _.-]+$',
    imei: '^[0-9]{15}$',
    price: '^[0-9.]*$',
    store: '^[A-Za-z_.-]+$',
    issue: '^[A-Za-z_.-]+$',
    storeadd: '^[A-Za-z0-9 _.,-]+$',
    storename: '^[A-Za-z ]+$'
  };

  const [inputError, setInputError] = useState({
    model: false,
    imei: false,
    price: false,
    issue: false,
    storeadd: false,
    descrip: false,
    storename: false
  });

  const handleOnBlur = event => {
    let errorCopy = R.clone(inputError);
    if (event.target.value.length > 0) {
      let validInput = doPatternTestForInputField(
        event,
        pattern[event.target.id]
      );
      if (event.target.id === 'model') {
        let model1 = event.target.value.toLowerCase();
        brandNames.forEach((x, i) => {
          if (brands[i].id !== brand) {
            if (model1.match(x.toLowerCase())) validInput = false;
          }
        });
      }
      errorCopy[event.target.id] = !validInput;
    } else {
      errorCopy[event.target.id] = true;
    }
    setInputError(errorCopy);
    setNextEnabled(R.isEmpty(R.pickBy((v, k) => v === true, errorCopy)));
  };

  // style
  const classes = useStyles();

  // get user gata from localstorage
  const user = JSON.parse(localStorage.getItem('userdata'));
  const { uploadError } = useSelector(state => state.complaint);
  const { brands, gotBrands } = useSelector(state => state.brands);
  const { offlinestr, gotOff } = useSelector(state => state.offlineStr);
  const { onlinestr, gotOn } = useSelector(state => state.onlineStr);
  const { complaintid } = useSelector(state => state.complaint);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: actions.GET_BRANDS
    });
    dispatch({
      type: actions.GET_STORE_OFFLINE
    });
    dispatch({
      type: actions.GET_STORE_ONLINE
    });
  }, []);

  useEffect(() => {
    if (gotOff === true && gotBrands === true && gotOn === true) {
      setLoading(false);
    }
  }, [gotOff, gotOn, gotBrands]);

  const child = [],
    nextBtn = [],
    brandNames = [],
    sortBrand = [],
    sortOnStore = [],
    sortOffStore = [];

  // brands
  for (const x in brands) {
    brandNames.push(brands[x].maker_name);
    sortBrand.push([brands[x].makerDetails[0].id, brands[x].maker_name]);
  }
  sortBrand.sort((a, b) => {
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
  sortBrand.forEach(x => {
    child.push(
      <MenuItem key={x[0]} value={x[0]} className={classes.input}>
        {x[1] === 'Xiomi Mi' ? 'Xiaomi (Mi)' : x[1]}
      </MenuItem>
    );
  });
  const brandProps = {
    options: sortBrand,
    getOptionLabel: option => option[1]
  };

  // online store
  for (const x in onlinestr) {
    sortOnStore.push([onlinestr[x].id, onlinestr[x].merchant_name]);
  }
  sortOnStore.sort((a, b) => {
    var nameA = a[1];
    var nameB = b[1];
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });
  sortOnStore.push(['Other', 'Other']);

  // offline store
  for (const x in offlinestr) {
    sortOffStore.push([offlinestr[x].id, offlinestr[x].merchant_name]);
  }
  sortOffStore.sort((a, b) => {
    var nameA = a[1];
    var nameB = b[1];
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });
  sortOffStore.push(['Other', 'Other']);

  const storeProps = {
    options: online ? sortOnStore : sortOffStore,
    getOptionLabel: option => option[1]
  };

  const handleSubmit = event => {
    setLoading(true);
    event.preventDefault();
    dispatch({
      type:
        complaintid === ''
          ? actions.COMPLAINT_UPLOAD
          : actions.COMPLAINT_UPDATE,
      payload: {
        user_id: user.id.toString(),
        maker_detail_id: brand.toString(),
        imei_number: imei,
        model_name: model,
        phone_price: Number(price),
        purchase_mode: online ? 'online' : 'offline',
        merchant_id: purchase.toString(),
        how_long_phone_owned: own,
        problem_description: prob,
        is_device_fake: fake ? 'yes' : 'no',
        uploaed_invoice_copy: invoice,
        communicated_ecom_firm: comm ? 'yes' : 'no',
        problem_type: issue,
        merchant_response: resp,
        under_warranty: warranty ? 'yes' : 'no',
        merchant_name_offline: storename.concat('\n' + storeAdd)
      },
      id: complaintid
    });
    setLoading(false);
  };

  const fileUpload = event => {
    event.preventDefault();
    setUpload1(false);

    const invoice = event.target.files[0];
    const formData = new FormData();
    formData.append('invoice', invoice);
    if (invoice != null) {
      try {
        axios
          .post(`${prodapi}/complaints/upload-invoice`, formData)
          .then(function(response) {
            setInvoice(response.data.result.filename);
            setUpload1(true);
          })
          .catch(function(error) {
            console.log(error);
            setUpload1(true);
            setServererr(true);
          });
      } catch (error) {}
    }
  };

  nextBtn.push(
    isLoading ? (
      <CircularProgress />
    ) : (
      <Button
        disabled={
          !(
            nextEnable &&
            brand !== '' &&
            model !== '' &&
            own !== '' &&
            imei !== '' &&
            price !== '' &&
            purchase !== '' &&
            prob !== '' &&
            (storeAdd !== '' || online) &&
            ((!fake && issue !== '') ||
              (fake && comm && resp !== '') ||
              (fake && comm !== '' && !comm))
          )
        }
        className={classes.btnRoot}
        variant="contained"
        onClick={handleSubmit}
      >
        Next
      </Button>
    )
  );

  return (
    <Container className="form">
      {/* submit error*/}
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={uploadError || servererr}
        onClose={() => {
          setServererr(false);
        }}
        key={'topcenter'}
        autoHideDuration={3000}
      >
        <Alert severity="error">
          <span style={{ fontFamily: 'Poppins' }}>Server error!</span>
        </Alert>
      </Snackbar>
      {/* heading */}
      <div className="header">
        <div>
          <h1>Tell us a bit about your device</h1>
          <p>
            We need to get some details about your device and the type of
            problem you’re facing, so that we can do an instant analysis of your
            complaint and let you know right away
          </p>
        </div>
        {nextBtn}
      </div>
      <hr />
      {/* form */}
      {isLoading === true ? (
        <CircularProgress style={{ marginTop: '150px', marginLeft: '500px' }} />
      ) : (
        <div className="phonedtlbody">
          <Grid container>
            <Grid item xs={12} sm={6}>
              <p style={{ margin: '2% 0' }}>
                What is the brand of your smartphone?
              </p>
              <Autocomplete
                {...brandProps}
                disableClearable={true}
                id="brand"
                renderOption={option => (
                  <p style={{ fontFamily: 'Poppins', fontSize: '1em' }}>
                    {option[1]}
                  </p>
                )}
                onChange={(event, newValue) => {
                  if (newValue) setBrand(newValue[0]);
                }}
                style={{ width: '90%' }}
                classes={{ inputRoot: classes.input }}
                renderInput={params => (
                  <TextField
                    {...params}
                    className="field"
                    placeholder="E.g. Samsung"
                    variant="outlined"
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <p style={{ margin: '2% 0' }}>Model Name</p>
              <TextField
                placeholder="E.g. SM-A150F"
                error={inputError['model']}
                className="field"
                id="model"
                variant="outlined"
                style={{ width: '90%' }}
                value={model}
                onChange={event => {
                  setModel(event.target.value);
                  handleOnBlur(event);
                }}
                helperText={inputError['model'] ? 'Invalid model name' : ''}
                FormHelperTextProps={{
                  className: classes.input
                }}
                InputProps={{
                  className: classes.input
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <p style={{ margin: '7% 0 2% 0' }}>IMEI 1 Number?</p>
              <TextField
                placeholder="Enter your device’s IMEI Number"
                error={inputError['imei']}
                className="field"
                id="imei"
                value={imei}
                onChange={event => {
                  setImei(event.target.value);
                  handleOnBlur(event);
                }}
                variant="outlined"
                helperText={
                  inputError['imei']
                    ? 'Invalid IMEI number'
                    : 'Dial *#06# on your phone to know your IMEI 1'
                }
                style={{ width: '90%' }}
                InputProps={{
                  className: classes.input
                }}
                FormHelperTextProps={{
                  className: classes.input
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <p style={{ margin: '7% 0 2% 0' }}>Latest price of your phone?</p>
              <TextField
                placeholder="₹ Enter your phone’s price"
                error={inputError['price']}
                helperText={
                  inputError['price'] ? 'Only numbers are allowed!' : ''
                }
                value={price}
                onChange={event => {
                  setPrice(event.target.value);
                  handleOnBlur(event);
                }}
                className="field"
                id="price"
                variant="outlined"
                style={{ width: '90%' }}
                InputProps={{
                  className: classes.input
                }}
                FormHelperTextProps={{
                  className: classes.input
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <p style={{ margin: '7% 0 2% 0' }}>
                How did you purchase your smartphone?
              </p>
              <div
                style={{
                  width: '90%',
                  display: 'flex',
                  justifyContent: 'space-between'
                }}
              >
                <Button
                  className={classes.input}
                  variant="contained"
                  startIcon={
                    <img
                      alt="offline"
                      src={Offline}
                      style={{ width: '1.5vw' }}
                    />
                  }
                  style={{
                    width: '45%',
                    padding: '1.5vh 0',
                    background:
                      online || online === '' ? 'transparent' : '#245FD3',
                    color: online || online === '' ? 'black' : 'white'
                  }}
                  onClick={() => {
                    if (online || online === '') {
                      setOnline(false);
                      setPurchase('');
                      setStoreinput('');
                    }
                  }}
                >
                  Offline
                </Button>
                <Button
                  className={classes.input}
                  variant="contained"
                  startIcon={
                    <img alt="online" src={Online} style={{ width: '1.5vw' }} />
                  }
                  style={{
                    width: '45%',
                    background:
                      online && online !== '' ? '#245FD3' : 'transparent',
                    color: !online ? 'black' : 'white'
                  }}
                  onClick={() => {
                    if (!online) {
                      setOnline(true);
                      setPurchase('');
                      setStoreinput('');
                    }
                  }}
                >
                  Online
                </Button>
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <p style={{ margin: '7% 0 2% 0' }}>
                Where did you purchase it from?
              </p>
              <Autocomplete
                {...storeProps}
                disableClearable={true}
                id="store"
                renderOption={option => (
                  <p style={{ fontFamily: 'Poppins', fontSize: '1em' }}>
                    {option[1]}
                  </p>
                )}
                onChange={(event, newValue) => {
                  if (newValue) setPurchase(newValue[0]);
                }}
                inputValue={storeinput}
                onInputChange={(event, newInputValue) => {
                  setStoreinput(newInputValue);
                }}
                style={{ width: '90%' }}
                classes={{ inputRoot: classes.input }}
                renderInput={params => (
                  <TextField
                    {...params}
                    className="field"
                    placeholder="E.g. Amazon, Flipkart"
                    variant="outlined"
                  />
                )}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <Grid container>
                <Grid item xs={12}>
                  <p style={{ margin: '7% 0 2% 0' }}>
                    How long have you had the phone for?
                  </p>
                  <TextField
                    className="field"
                    id="time"
                    select
                    value={own}
                    onChange={event => {
                      setOwn(event.target.value);
                    }}
                    variant="outlined"
                    style={{ width: '90%' }}
                    InputProps={{
                      className: classes.input
                    }}
                  >
                    <MenuItem
                      value="less than 10 days"
                      className={classes.input}
                    >
                      less than 10 days
                    </MenuItem>
                    <MenuItem
                      value="10 days to 1 year"
                      className={classes.input}
                    >
                      10 days to 1 year
                    </MenuItem>
                    <MenuItem value="1 to 2 years" className={classes.input}>
                      1 to 2 years
                    </MenuItem>
                    <MenuItem
                      value="more than 2 years"
                      className={classes.input}
                    >
                      more than 2 years
                    </MenuItem>
                  </TextField>
                </Grid>
                <Grid item xs={12}>
                  <p style={{ margin: '7% 0 2% 0' }}>
                    Is your phone still under warranty/extended warranty?
                  </p>
                  <ButtonGroup variant="contained">
                    <Button
                      onClick={() => {
                        setWarranty(true);
                      }}
                      className={classes.btnRoot}
                      style={{
                        padding: '1vh 1vw',
                        background: warranty ? '#245FD3' : 'transparent',
                        color: !warranty ? 'black' : 'white'
                      }}
                    >
                      Yes
                    </Button>
                    <Button
                      onClick={() => {
                        setWarranty(false);
                      }}
                      className={classes.btnRoot}
                      style={{
                        padding: '1vh 1vw',
                        background:
                          warranty || warranty === ''
                            ? 'transparent'
                            : '#245FD3',
                        color: warranty || warranty === '' ? 'black' : 'white'
                      }}
                    >
                      No
                    </Button>
                  </ButtonGroup>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Grid container>
                <Grid
                  item
                  xs={12}
                  style={{ display: purchase === 'Other' ? 'block' : 'none' }}
                >
                  <p
                    style={{
                      width: '100%',
                      margin: '7% 0 2% 0'
                    }}
                  >
                    Please enter the name of the {online ? 'website' : 'store'}:
                  </p>
                  <TextField
                    error={inputError['storename']}
                    value={storename}
                    onChange={event => {
                      setStorename(event.target.value);
                      handleOnBlur(event);
                    }}
                    className="field"
                    id="storename"
                    variant="outlined"
                    helperText={
                      inputError['storeadd'] ? 'Invalid address!' : ''
                    }
                    style={{ width: '90%' }}
                    InputProps={{
                      className: classes.input
                    }}
                    FormHelperTextProps={{
                      className: classes.input
                    }}
                  />
                </Grid>

                <Grid
                  item
                  xs={12}
                  style={{
                    display:
                      online === false || purchase === 'Other'
                        ? 'block'
                        : 'none'
                  }}
                >
                  <p
                    style={{
                      width: '100%',

                      margin: '7% 0 2% 0'
                    }}
                  >
                    Please enter the address of the{' '}
                    {online ? 'website' : 'store'}:
                  </p>
                  <TextField
                    error={inputError['storeadd']}
                    value={storeAdd}
                    onChange={event => {
                      setstoreAdd(event.target.value);
                      handleOnBlur(event);
                    }}
                    className="field"
                    id="storeadd"
                    variant="outlined"
                    helperText={
                      inputError['storeadd'] ? 'Invalid address!' : ''
                    }
                    style={{
                      width: '90%'
                    }}
                    InputProps={{
                      className: classes.input
                    }}
                    FormHelperTextProps={{
                      className: classes.input
                    }}
                  />
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} style={{ position: 'relative' }}>
              <div
                className="words"
                style={{ bottom: inputError['descrip'] ? '8%' : '3%' }}
              >
                <p>{3000 - prob.length} characters remaining</p>
              </div>
              <p style={{ margin: '7% 0 2% 0' }}>
                Describe the problem you’re facing
              </p>
              <TextField
                placeholder="Tell us a bit about your issue"
                error={inputError['descrip']}
                id="descrip"
                className="field"
                value={prob}
                onChange={event => {
                  setProb(event.target.value);
                  if (prob === '') {
                    setInputError({ ...inputError, descrip: true });
                  } else {
                    setInputError({ ...inputError, descrip: false });
                  }
                }}
                multiline
                rows={10}
                variant="outlined"
                style={{ width: '90%' }}
                InputProps={{
                  className: classes.input
                }}
                helperText={
                  inputError['descrip'] ? 'Field cannot be empty.' : ''
                }
                FormHelperTextProps={{
                  className: classes.input
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <p style={{ margin: '7% 0 2% 0' }}>
                Do you think the device delivered to you is fake?
              </p>
              <ButtonGroup variant="contained">
                <Button
                  className={classes.btnRoot}
                  onClick={() => {
                    setFake(true);
                  }}
                  style={{
                    padding: '1vh 1vw',
                    background: fake ? '#245FD3' : 'transparent',
                    color: !fake ? 'black' : 'white'
                  }}
                >
                  Yes
                </Button>
                <Button
                  className={classes.btnRoot}
                  onClick={() => {
                    setFake(false);
                  }}
                  style={{
                    padding: '1vh 1vw',
                    background: fake || fake === '' ? 'transparent' : '#245FD3',
                    color: fake || fake === '' ? 'black' : 'white'
                  }}
                >
                  No
                </Button>
              </ButtonGroup>
            </Grid>
            <Grid item xs={12} sm={6}>
              <p style={{ margin: '7% 0 2% 0' }}>
                Upload the original invoice (OPTIONAL)
              </p>
              <div style={{ width: '90%' }}>
                <LinearProgress
                  className={classes.prog}
                  style={{ display: upload1 ? 'none' : 'block' }}
                />
                <Button
                  style={{ display: upload1 ? 'flex' : 'none' }}
                  className={classes.frontBtn}
                  variant="contained"
                  startIcon={<img alt="upload" src={!invoice ? upload : pic} />}
                  component="label"
                >
                  <p style={{ display: invoice ? 'block' : 'none' }}>
                    {invoice}
                  </p>
                  <p
                    style={{
                      display: !invoice ? 'block' : 'none',
                      color: '#616066'
                    }}
                  >
                    Upload from your computer
                  </p>
                  <input
                    type="file"
                    style={{ display: 'none' }}
                    onChange={fileUpload}
                  />
                </Button>
                <p>Maximum size of file should be 2 MB</p>
                <p style={{ margin: '7% 0 2% 0' }}>
                  This is required if you want consideration of your device
                  warranty
                </p>
              </div>
            </Grid>
            <div style={{ display: fake === '' ? 'none' : 'block' }}>
              <Grid item xs={12} style={{ display: fake ? 'none' : 'block' }}>
                <p style={{ margin: '7% 0 2% 0', marginBottom: 0 }}>
                  What is the problem you are facing?
                </p>
                <FormControl className="field">
                  <RadioGroup
                    className="field"
                    row
                    value={issue}
                    onChange={event => {
                      setIssue(event.target.value);
                    }}
                  >
                    <FormControlLabel
                      classes={{
                        label: classes.checkboxLabel
                      }}
                      className="field"
                      value="Missing Item"
                      control={<Radio color="primary" />}
                      label="Missing Item"
                    />
                    <FormControlLabel
                      classes={{
                        label: classes.checkboxLabel
                      }}
                      className="field"
                      value="Device Malfunction"
                      control={<Radio color="primary" />}
                      label="Device Malfunction"
                    />
                    <FormControlLabel
                      classes={{
                        label: classes.checkboxLabel
                      }}
                      className="field"
                      value="Payment Related"
                      control={<Radio color="primary" />}
                      label="Payment Related"
                      style={{ fontFamily: 'Poppins' }}
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid item xs={12} style={{ display: fake ? 'block' : 'none' }}>
                <p style={{ margin: '7% 0 2% 0' }}>
                  Have you communicated the E-commerce firm?
                </p>
                <ButtonGroup variant="contained">
                  <Button
                    className={classes.btnRoot}
                    onClick={() => {
                      setComm(true);
                    }}
                    style={{
                      padding: '1vh 1vw',
                      background: comm ? '#245FD3' : 'transparent',
                      color: !comm ? 'black' : 'white'
                    }}
                  >
                    Yes
                  </Button>
                  <Button
                    className={classes.btnRoot}
                    onClick={() => {
                      setComm(false);
                    }}
                    style={{
                      padding: '1vh 1vw',
                      background:
                        comm || comm === '' ? 'transparent' : '#245FD3',
                      color: comm || comm === '' ? 'black' : 'white'
                    }}
                  >
                    No
                  </Button>
                </ButtonGroup>
              </Grid>
              <Grid
                item
                xs={12}
                style={{ display: comm && fake ? 'block' : 'none' }}
              >
                <p style={{ margin: '7% 0 2% 0', marginBottom: 0 }}>
                  What is their response?
                </p>
                <RadioGroup
                  id="issue"
                  value={resp}
                  onChange={event => {
                    setResponse(event.target.value);
                  }}
                  onBlur={e => handleOnBlur(e)}
                >
                  <FormControlLabel
                    classes={{
                      label: classes.checkboxLabel
                    }}
                    className="field"
                    value="Agreed to replace the product"
                    control={<Radio color="primary" />}
                    label="Agreed to replace the product"
                  />
                  <FormControlLabel
                    classes={{
                      label: classes.checkboxLabel
                    }}
                    className="field"
                    value="The E-Commerce firm will physically check the product and then only confirm on replacement"
                    control={<Radio color="primary" />}
                    label="The E-Commerce firm will physically check the product and then only confirm on replacement"
                  />
                  <FormControlLabel
                    classes={{
                      label: classes.checkboxLabel
                    }}
                    className="field"
                    value="Refused to replace (As the request was placed beyond the replacement period or the product was tampered)"
                    control={<Radio color="primary" />}
                    label="Refused to replace (As the request was placed beyond the replacement period or the product was tampered)"
                  />
                  <FormControlLabel
                    classes={{
                      label: classes.checkboxLabel
                    }}
                    className="field"
                    value="None of the above"
                    control={<Radio color="primary" />}
                    label="None of the above"
                  />
                </RadioGroup>
              </Grid>
            </div>
          </Grid>
        </div>
      )}
    </Container>
  );
};

export default PhoneDtl;
