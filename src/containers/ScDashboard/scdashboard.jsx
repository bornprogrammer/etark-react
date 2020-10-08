import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Nav from '../../components/ScNav/nav';
import Sidebar from '../../components/ScSidebar/scsidebar';
import * as R from 'ramda';
import { doPatternTestForInputField } from '../../utils/GeneralUtils';
import {
  Button,
  Modal,
  Grid,
  makeStyles,
  Snackbar,
  TextField
} from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import LinearProgress from '@material-ui/core/LinearProgress';
import Cards from '../../components/Cards/cards';
import axios from 'axios';
import Neworder from '../../components/Neworders/neworder';
import Orders from '../../components/Eachorders/orders';
import actions from '../../actionTypes';
import CircularProgress from '@material-ui/core/CircularProgress';

// image
import empty from '../../static/images/empty-state.png';
import orders from '../../static/images/orders.png';
import ongoing from '../../static/images/ongoing.png';
import completed from '../../static/images/completed.png';
import upload from '../../static/images/upload-white.png';
import bg from '../../static/images/abstractBg.png';
import pic from '../../static/images/pic.png';

// style
import './dashboard.scss';

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
    textTransform: 'none',
    color: '#B5B3C4'
  },
  inputBt: {
    fontFamily: 'Poppins',
    fontSize: '1em',
    textTransform: 'none',
    color: '#B5B3C4',
    backgroundColor: '#245fd3'
  },
  btnRoot: {
    color: 'white',
    backgroundColor: '#245fd3',
    fontFamily: 'Poppins',
    marginTop: '3vh',
    padding: '1vh 1.2vw',
    fontSize: '1em',
    textTransform: 'none'
  },
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
  clsBtn: {
    background: 'transparent',
    boxShadow: 'none',
    color: 'white',
    marginRight: '3%',
    fontFamily: 'Poppins',
    fontSize: '1em',
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
  },
  searchbar: {
    fontFamily: 'Poppins',
    color: '#b5b3c4'
  }
}));

const Dashboard = props => {
  console.log("New");
  const scdata = localStorage.getItem('scdata')
    ? JSON.parse(localStorage.getItem('scdata'))
    : '';
  // style
  const classes = useStyles();

  const [frontName, setFrontName] = useState('');
  const [backName, setBackName] = useState('');
  const [invoiceAmount, setInvoiceAmount] = useState('');
  const [invoiceName, setInvoiceName] = useState('');
  const [invoiceUploadVal, setInvoiceUpload] = useState(true);
  const [upload1, setUpload1] = useState(true);
  const [upload2, setUpload2] = useState(true);
  const [servererr, setServererr] = useState(false);
  const [page, setPage] = useState(1);
  const [eachOrder, setEachOrder] = useState([]);
  const [inputError, setInputError] = React.useState({
    invoice: false
  });
  const [noall, setNoall] = useState(0);
  const [nocompleted, setNocompleted] = useState(0);
  const [nodecline, setNodecline] = useState(0);
  const [noprocess, setNoprocess] = useState(0);
  const [noreq, setNoreq] = useState(0);
  const [totalOrder, setTotalord] = useState(0);
  const [totalInc, setTotalInc] = useState(0);
  const [ongoingord, setOngoing] = useState(0);
  const [ongoinginc, setOngoinginc] = useState(0);
  const [completeorder, setCompleted] = useState(0);
  const [completeinc, setCompleteInc] = useState(0);
  const [loading, setLoading] = useState(true);
  const [orderSearch, setOrdersearch] = useState('');
  const [sizeOverflow, setSizeOverflow] = useState(false);
  const { brands } = useSelector(state => state.brands);
  const {
    status,
    readyDispatch,
    orderDetail,
    invoice,
    orderno,
    imeino,
    model,
    brand,
    bop,
    warranty,
    compdetail,
    pickupid,
    statuschange,
    userdetails,
    useraddress,
    bankdetails
  } = useSelector(state => {
    // console.log("160 :", state.orderstatus);
    return state.orderstatus
  });

  const dispatch = useDispatch();

  const dict = {
    in_warranty: 'In Warranty',
    non_warranty: 'Non Warranty',
    out_of_warranty: 'Out Of Warranty'
  };

  const handleorders = id => {
    setPage(1);
    setOrdersearch('');
    dispatch({
      type: actions.ORDER_STATUS_UPDATE,
      payload: id
    });
  };
  const showBankDetails = (e, i) => {
    return (
      <Grid item xs={12} sm={6} className="device-items">
        <p style={{ marginRight: '5%' }}>{e}</p>
        <p style={{ color: '#F6F6F6' }}>{bankdetails[e]}</p>
      </Grid>
    );
  };



  const uploadFilename = () => {
    try {
      axios
        .post(`${prodapi}sc/dispatch-details/${pickupid}`, {
          device_front_image: frontName,
          device_back_image: backName,
          final_invoice_image: invoiceName,
          final_invoice_amount: Number(invoiceAmount)
        })
        .then(function(response) {
          dispatch({
            type: actions.ORDER_DISPATCH_UPDATE,
            payload: true
          });
        })
        .catch(function(error) {
          setServererr(true);
          console.log(error);
        });
    } catch (error) {}
  };

  const pattern = {
    invoice: '^[0-9]*$'
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
              setUpload1(false);
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
              setBackName(response.data.result.filename);
              setUpload2(true);
            })
            .catch(function(error) {
              setUpload2(false);
              setServererr(true);
            });
        } catch (error) {}
      }
    }
  };
  const fileUpload = event => {
    event.preventDefault();
    if (event.target.files[0]) {
      if (event.target.files[0].size > 3145728) {
        setSizeOverflow(true);
      } else {
        setInvoiceUpload(false);
        const formData = new FormData();
        formData.append('invoice', event.target.files[0]);
        try {
          axios
            .post(`${prodapi}complaints/upload-invoice`, formData)
            .then(function(response) {
              setInvoiceName(response.data.result.filename);
              setInvoiceUpload(true);
            })
            .catch(function(error) {
              setInvoiceUpload(false);
              setServererr(true);
            });
        } catch (error) {}
      }
    }
  };

  const errorCheck = event => {
    let errorCopy = R.clone(inputError);
    if (event.target.value.length > 0) {
      let validInput = doPatternTestForInputField(
        event,
        pattern[event.target.id]
      );
      console.log(event.target.value>=parseFloat(bankdetails['Amount']), bankdetails['Amount']);
      console.log();
      errorCopy[event.target.id] = !validInput || event.target.value < 0 || event.target.value>=parseFloat(bankdetails["Amount"]);
    } else {
      errorCopy[event.target.id] = true;
    }
    setInputError(errorCopy);
  };

  function getData() {
    console.log('called data');
    var each = [];
    setLoading(true);
    axios
      .get(
        `${prodapi}sc/${scdata.id}?order_type=${status}&page_no=${page}&no_of_records=4&order_no=${orderSearch}`
      )
      .then(resp => {
        var m = resp.data.result;
        // console.log(m);
        var brandObj = {};
        for (var k in brands) {
          brandObj[brands[k].id] = brands[k];
        }

        for (var i = 0; i < m.length; i++) {
          const t = m[i].serviceCenterOrderDetails.due_date;
          var duedate, daystogo;
          if (t != null) {
            const x = new Date(t).toString().split(' ');
            duedate = x[2] + ' ' + x[1] + ' ' + x[3];
            daystogo = Math.floor(
              (new Date(t).getTime() - Date.now()) / 8.64e7
            );
          }
          // console.log(m[i].complainDetail.uploaed_invoice_copy);
          var varwar = '';
          var boolCheck = false;

          if (m[i].serviceCenterOrderDetails.phone_warranty) {
            varwar = dict[m[i].serviceCenterOrderDetails.phone_warranty];
            boolCheck = true;
          }

          if (boolCheck === false) {
            varwar =
              m[i].complainDetail.under_warranty === 'yes'
                ? 'In Warranty'
                : 'Out of warranty';
          }
          const data = {
            orderid: m[i].orderDetails.order_no,
            deviceName: m[i].complainDetail.model_name,
            imeino: m[i].complainDetail.imei_number,
            brand: brandObj[Number(m[i].maker_detail_id)].maker_name,
            warranty: varwar,
            due: t == null ? '--' : duedate,
            status: m[i].serviceCenterActivityDetails.lastActivityType,
            //status: 'user_made_payment',
            compdetail: m[i].complainDetail.problem_description,
            bop: m[i].complainDetail.uploaed_invoice_copy,
            daystogo: t == null ? '--' : daystogo,
            pickupid: m[i].pickup_details.id,
            userdetails: m[i].userDetails,
            useraddress: m[i].userAddress,
            bankdetails: m[i].bankDetails
          };
          // console.log(data);
          each.push(<Orders key={i} data={data} id={i} />);
        }
        setEachOrder(each);
        setLoading(false);
      })
      .catch(err => {
        setLoading(false);
        setEachOrder([]);
      });
  }

  function getTrends() {
    console.log('called trends');
    axios
      .get(process.env.REACT_APP_PRODAPI + `sc/${scdata.id}/orders-trends`)
      .then(resp => {
        // console.log(resp);
        const count = resp.data.result.order_type_count_details;
        setNoall(count.all);
        setNocompleted(count.completed);
        setNodecline(count.decline);
        setNoprocess(count.in_process);
        setNoreq(count.order_request);

        const trends = resp.data.result.trends_detais;
        setTotalord(trends.total_order);
        setTotalInc(trends.total_order_percentage);
        setOngoing(trends.order_ongoing);
        setOngoinginc(trends.order_ongoing_percentage);
        setCompleted(trends.order_completed);
        setCompleteInc(trends.order_completed_percentage);
      });
  }
  useEffect(() => {
    if (Object.keys(brands).length === 0) {
      dispatch({
        type: actions.GET_BRANDS
      });
    } else {
      getData();
    }
    getTrends();
    const interval = setInterval(function() {
      getData();
      getTrends();
    }, 30000);
    return () => clearInterval(interval);
  }, [brands, statuschange, page]);

  // modal body
  const body2 = (
    <div className="Scmodal">
      <div className="modalHead">
        <h1>Order Details</h1>
      </div>

      <Grid container className="device-detail" spacing={2}>
        <Grid item xs={12} sm={6} className="device-items">
          <p style={{ marginRight: '5%' }}>ORDER INVOICE NO.</p>
          <p style={{ color: '#F6F6F6' }}>{orderno}</p>
        </Grid>
        <Grid item xs={12} sm={6} className="device-items">
          <p style={{ marginRight: '5%' }}>DEVICE IMEI NUMBER</p>
          <p style={{ color: '#F6F6F6' }}>{imeino}</p>
        </Grid>
        <Grid item xs={12} sm={6} className="device-items">
          <p style={{ marginRight: '5%' }}>DEVICE DETAILS</p>
          <p style={{ color: '#F6F6F6' }}>
            {model} by {brand}
          </p>
        </Grid>
        <Grid item xs={12} sm={6} className="device-items">
          <p style={{ marginRight: '5%' }}>DEVICE STATUS</p>
          <p style={{ color: '#F6F6F6' }}>{warranty}</p>
        </Grid>
        <Grid item xs={12} sm={6} className="device-items">
          <p style={{ marginRight: '5%' }}>User Name</p>
          <p style={{ color: '#F6F6F6' }}>{userdetails.name}</p>
        </Grid>
        <Grid item xs={12} sm={6} className="device-items">
          <p style={{ marginRight: '5%' }}>User Contact</p>
          <p style={{ color: '#F6F6F6' }}>{userdetails.mobile_number}</p>
        </Grid>

        <Grid item xs={12} sm={6} className="device-items">
          <p style={{ marginRight: '5%' }}>User Email</p>
          <p style={{ color: '#F6F6F6' }}>{userdetails.email}</p>
        </Grid>
        <Grid item xs={12} sm={6} className="device-items">
          <p style={{ marginRight: '5%' }}>User Address</p>
          <p style={{ color: '#F6F6F6' }}>{useraddress.address}</p>
        </Grid>
        {bankdetails != {} && bankdetails &&
          Object.keys(bankdetails).map((e, i) => showBankDetails(e, i))}
        <Grid item xs={12} sm={6} className="device-items">
          <p style={{ display: !bop ? 'none' : 'initial', marginRight: '5%' }}>
            Bill Of Purchase
          </p>
          <Button
            onClick={() => {
              // console.log(bop)
              window.open(bop, '_blank');
            }}
            style={{
              color: 'white',
              top: '-10px',
              display: !bop ? 'none' : 'initial',
              backgroundColor: '#1a237e',
              fontFamily: 'Poppins',
              '&:hover': {
                backgroundColor: '#FFF',
                color: '#000'
              }
            }}
          >
            View
          </Button>
        </Grid>
        <Grid item xs={12}>
          <p style={{ marginBottom: '2%', fontWeight: 'bolder' }}>Summary</p>
          <TextField
            // error={inputError['descrip']}
            id="descrip"
            value={compdetail}
            multiline
            rows={8}
            variant="outlined"
            style={{ width: '80%' }}
            InputProps={{
              classes: {
                notchedOutline: classes.notchedOutline
              },
              className: classes.input
            }}
            // onBlur={e => handleOnBlur(e)}
          />
          <Button
            onClick={() => {
              dispatch({
                type: actions.ORDER_DETAIL_CLOSE
              });
            }}
            style={{
              color: 'white',
              background: 'transparent',
              left: '50px',
              fontFamily: 'Poppins',
              boxShadow: 'none'
            }}
          >
            Close
          </Button>
        </Grid>
      </Grid>
    </div>
  );

  // modal body
  const body = (
    <div className="Scmodal">
      <div className="modalHead">
        <h1>Just a couple of things to prepare the device for collection</h1>
        <p>
          Please check the details of the device and upload the pictures of the
          front and back of the device prior to dispatch.
        </p>
      </div>

      <Grid container className="device-detail">
        <Grid item xs={12} sm={6} className="device-items">
          <p style={{ marginRight: '5%' }}>ORDER INVOICE NO.</p>
          <p style={{ color: '#F6F6F6' }}>{orderno}</p>
        </Grid>
        {console.log("ABOVE DEVICE : ", bankdetails && bankdetails['Amount'])}
        <Grid item xs={12} sm={6} className="device-items">
          <p style={{ marginRight: '5%' }}>DEVICE IMEI NUMBER</p>
          <p style={{ color: '#F6F6F6' }}>{imeino}</p>
        </Grid>
      </Grid>
      <Grid container className="device-detail">
        <Grid
          item
          xs={12}
          sm={6}
          style={{ display: warranty != 'In Warranty' ? 'block' : 'none' }}
        >
          <p style={{ marginBottom: '2%', color: '#F6F6F6' }}>
            Total bill amount
          </p>
          <TextField
            // error={inputError['invoice']}
            className="field"
            id="invoice"
            variant="outlined"
            error={inputError['invoice']}
            helperText={
              inputError['invoice'] && invoiceAmount.length !== 0
                ? 'Enter amount less than estimated amount (₹ '+bankdetails["Amount"]+')'
                : ''
            }
            style={{ width: '90%' }}
            value={invoiceAmount}
            placeholder={"₹ Enter the total bill amount"}
            onChange={event => {
              // console.log(bankdetails);
              setInvoiceAmount(event.target.value);
              errorCheck(event);
            }}
            InputProps={{
              classes: {
                notchedOutline: classes.notchedOutline
              },
              className: classes.input
            }}
            // onBlur={e => handleOnBlur(e)}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <p style={{ marginBottom: '2%', color: '#F6F6F6' }}>
            Upload the final invoice of the bill
          </p>
          <LinearProgress
            className={classes.prog}
            style={{ display: invoiceUploadVal ? 'none' : 'block' }}
          />
          <Button
            style={{ display: invoiceUploadVal ? 'flex' : 'none' }}
            className={classes.frontBtn}
            variant="contained"
            startIcon={<img alt="upload" src={invoiceName ? pic : upload} />}
            component="label"
          >
            <p style={{ display: !invoiceName ? 'block' : 'none' }}>
              Upload from your computer
            </p>
            <p style={{ display: invoiceName ? 'block' : 'none' }}>
              {invoiceName}
            </p>
            <input
              type="file"
              style={{ display: 'none' }}
              onChange={fileUpload}
            />
          </Button>
          <p>Maximum size of file should be 2 MB</p>
        </Grid>
      </Grid>

      <h1>Upload the pictures of the device</h1>
      <div className="sc-uploads">
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
            className={classes.frontBtn}
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
            className={classes.frontBtn}
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
      </div>

      <div className="btns">
        <Button
          onClick={() => {
            dispatch({
              type: actions.ORDER_DISPATCH_UPDATE,
              payload: {
                dispatch: false
              }
            });
          }}
          className={classes.clsBtn}
          variant="contained"
        >
          Cancel
        </Button>
        <Button
          disabled={
            !(
              frontName.length > 0 &&
              backName.length > 0 &&
              inputError['invoice'] === false
            )
          }
          className={classes.inputBt}
          variant="contained"
          onClick={uploadFilename}
        >
          Mark ready for dispatch
        </Button>
      </div>
    </div>
  );

  const handelSearch = event => {
    event.preventDefault();
    setLoading(true);
    setPage(1);
    dispatch({
      type: actions.ORDER_SEARCH
    });
  };

  return (
    <div className="scdashboard">
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
      <Nav history={props.history} />
      <div className="scBod">
        <Sidebar />
        {/* empty dashboard */}
        {/* <div className="emptyAr" style={{ display: dummy.length === 0 ? 'flex' : 'none' }}>
          <img alt="background" src={bg} style={{ position: 'absolute', width: '100%' }} />
          <img alt="empty" src={empty} />
          <h1>Looks a bit empty in here!</h1>
          <p>
            Servicing through ETark just got smarter. Enter your first servicing record to take
            advantage of our easy-to-use and efficient dashboard. Manage all your service orders
            from a single place.
          </p>
          <Button
            className={classes.btnRoot}
            variant="contained"
            onClick={() => {
              props.history.push('/order');
            }}
          >
            Make a new entry
          </Button>
        </div> */}

        {/* no empty dashboard */}
        <div className="db">
          {/* cards */}
          <div className="dbCards">
            <Cards
              title="Total Orders"
              val={totalOrder}
              duration="Week"
              inc={totalInc}
              icon={orders}
            />
            <Cards
              title="Orders Ongoing"
              val={ongoingord}
              duration="Week"
              inc={ongoinginc}
              icon={ongoing}
            />
            <Cards
              title="Order Completed"
              val={completeorder}
              duration="Week"
              inc={completeinc}
              icon={completed}
            />
          </div>

          {/* make a new entry */}
          <Neworder history={props.history} />

          {/* Past entries */}
          <div className="pastEntries" style={{ overflow: 'hidden' }}>
            <div className="gradient1" />

            {/* heading */}
            <div className="upperpart">
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                <h1>Past Entries</h1>
                <form onSubmit={handelSearch}>
                  <TextField
                    id="standard-search"
                    label="Order id"
                    type="search"
                    value={orderSearch}
                    onChange={event => {
                      setOrdersearch(event.target.value);
                      if (event.target.value === '') {
                        setLoading(true);
                        setPage(1);
                        dispatch({
                          type: actions.ORDER_SEARCH
                        });
                      }
                    }}
                    InputLabelProps={{ className: classes.searchbar }}
                    inputProps={{ className: classes.searchbar }}
                  />
                </form>
              </div>
              <div>
                <Button
                  className="filter"
                  variant="contained"
                  style={{ color: status === 'all' ? '#F6F6F6' : '#616066' }}
                  onClick={() => {
                    const id = 'all';
                    setLoading(true);
                    handleorders(id);
                  }}
                >
                  All orders({noall})
                </Button>
                <Button
                  className="filter"
                  variant="contained"
                  style={{
                    color: status === 'in_process' ? '#F6F6F6' : '#616066'
                  }}
                  onClick={() => {
                    const id = 'in_process';
                    setLoading(true);
                    handleorders(id);
                  }}
                >
                  In process({noprocess})
                </Button>
                <Button
                  className="filter"
                  variant="contained"
                  style={{
                    color: status === 'completed' ? '#F6F6F6' : '#616066'
                  }}
                  onClick={() => {
                    const id = 'completed';
                    setLoading(true);
                    handleorders(id);
                  }}
                >
                  Completed({nocompleted})
                </Button>
                <Button
                  className="filter"
                  variant="contained"
                  style={{
                    color: status === 'allocated' ? '#F6F6F6' : '#616066'
                  }}
                  onClick={() => {
                    const id = 'allocated';
                    setLoading(true);
                    handleorders(id);
                  }}
                >
                  Order Requests({noreq})
                </Button>
                <Button
                  className="filter"
                  variant="contained"
                  style={{
                    color: status === 'declined' ? '#F6F6F6' : '#616066'
                  }}
                  onClick={() => {
                    const id = 'declined';
                    setLoading(true);
                    handleorders(id);
                  }}
                >
                  Declined({nodecline})
                </Button>
              </div>
            </div>
            {/* order details */}
            <div className="orders">
              {/* all orders*/}
              {status == 'all' && (
                <div className="orderhead">
                  <div className="orderid">
                    <p>Order Invoice</p>
                  </div>
                  <div className="device">
                    <p>Device Details</p>
                  </div>
                  <div className="warranty">
                    <p>Device Status</p>
                  </div>
                  <div className="due">
                    <p>Due Date</p>
                  </div>
                  {/* <div className="pay">
                    <p>Payment Status</p>
                  </div> */}

                  <div className="status2">
                    <p>Complaint details</p>
                  </div>
                  <div className="status">
                    <p>Status</p>
                  </div>
                  <div className="actions">
                    <p>Actions</p>
                  </div>
                </div>
              )}
              {/* order request headers */}
              {status == 'allocated' && (
                <div className="orderhead">
                  <div className="orderid2">
                    <p>Order Invoice</p>
                  </div>
                  <div className="device2">
                    <p>Device Details</p>
                  </div>
                  <div className="warranty2">
                    <p>Device Status</p>
                  </div>
                  <div className="status2">
                    <p>Complaint details</p>
                  </div>
                  <div className="actions2">
                    <p>Actions</p>
                  </div>
                </div>
              )}
              {/* inprocess headers */}
              {status === 'in_process' && (
                <div className="orderhead">
                  <div className="orderid">
                    <p>Order Invoice</p>
                  </div>
                  <div className="device">
                    <p>Device Details</p>
                  </div>
                  <div className="warranty">
                    <p>Device Status</p>
                  </div>
                  <div className="due">
                    <p>Due Date</p>
                  </div>
                  {/* <div className="pay">
                    <p>Payment Status</p>
                  </div> */}

                  <div className="status2">
                    <p>Complaint details</p>
                  </div>
                  <div className="status">
                    <p>Status</p>
                  </div>
                  <div className="actions">
                    <p>Actions</p>
                  </div>
                </div>
              )}
              {/* rest headers */}
              {(status === 'completed' || status === 'declined') && (
                <div className="orderhead">
                  <div className="orderid3">
                    <p>Order Invoice</p>
                  </div>
                  <div className="device3">
                    <p>Device Details</p>
                  </div>
                  <div className="warranty3">
                    <p>Device Status</p>
                  </div>
                  <div className="status3">
                    <p>Complaint details</p>
                  </div>
                  <div className="status">
                    <p>Status</p>
                  </div>
                </div>
              )}
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
              {loading === false && eachOrder}
            </div>

            {/* page number */}
            <div className="botnav">
              <p>
                Showing {(page - 1) * 4 + 1} - {page * 4} of&nbsp;
                {status === 'completed' && nocompleted}
                {status === 'all' && noall}
                {status === 'allocated' && noreq}
                {status === 'in_process' && noprocess}
                {status === 'declined' && nodecline}
              </p>
              <div className="navs">
                <Button
                  className="navbtn"
                  variant="contained"
                  style={{ fontWeight: 'bolder', color: '#ffffff' }}
                  onClick={() => {
                    setPage(1);
                  }}
                >
                  {'<<'}
                </Button>
                <Button
                  className="navbtn"
                  variant="contained"
                  style={{ fontWeight: 'bolder', color: '#ffffff' }}
                  onClick={() => {
                    if (page > 1) setPage(page - 1);
                  }}
                >
                  {'<'}
                </Button>
                {page > 2 ? (
                  <div
                    onClick={() => {
                      if (page > 2) setPage(page - 2);
                    }}
                    style={{
                      borderRadius: '5px',
                      color: '#ffffff',
                      padding: '0 1vw'
                    }}
                  >
                    {page - 2}
                  </div>
                ) : null}
                {page > 1 ? (
                  <div
                    onClick={() => {
                      if (page > 1) setPage(page - 1);
                    }}
                    style={{
                      borderRadius: '5px',
                      color: '#ffffff',
                      padding: '0 1vw'
                    }}
                  >
                    {page - 1}
                  </div>
                ) : null}
                <div
                  style={{
                    borderRadius: '5px',
                    backgroundColor: '#245fd3',
                    color: '#ffffff',
                    padding: '0 1vw'
                  }}
                >
                  {page}
                </div>
                {(status === 'declined' && page < nodecline / 4) ||
                (status === 'in_process' && page < noprocess / 4) ||
                (status === 'all' && page < noall / 4) ||
                (status === 'completed' && page < nocompleted / 4) ||
                (status === 'allocated' && page < noreq / 4) ? (
                  <div
                    onClick={() => {
                      setPage(page + 1);
                    }}
                    style={{
                      borderRadius: '5px',
                      color: '#ffffff',
                      padding: '0 1vw'
                    }}
                  >
                    {page + 1}
                  </div>
                ) : null}
                {(status === 'declined' && page + 1 < nodecline / 4) ||
                (status === 'in_process' && page + 1 < noprocess / 4) ||
                (status === 'all' && page + 1 < noall / 4) ||
                (status === 'completed' && page + 1 < nocompleted / 4) ||
                (status === 'allocated' && page + 1 < noreq / 4) ? (
                  <div
                    onClick={() => {
                      setPage(page + 2);
                    }}
                    style={{
                      borderRadius: '5px',
                      color: '#ffffff',
                      padding: '0 1vw'
                    }}
                  >
                    {page + 2}
                  </div>
                ) : null}
                <Button
                  className="navbtn"
                  variant="contained"
                  style={{ fontWeight: 'bolder', color: '#ffffff' }}
                  onClick={() => {
                    if (
                      (status === 'declined' && page < nodecline / 4) ||
                      (status === 'in_process' && page < noprocess / 4) ||
                      (status === 'all' && page < noall / 4) ||
                      (status === 'completed' && page < nocompleted / 4) ||
                      (status === 'allocated' && page < noreq / 4)
                    ) {
                      setPage(page + 1);
                    }
                  }}
                >
                  {'>'}
                </Button>
                <Button
                  className="navbtn"
                  variant="contained"
                  style={{ fontWeight: 'bolder', color: '#ffffff' }}
                  onClick={() => {
                    if (status === 'declined')
                      setPage(Math.ceil(nodecline / 4));
                    else if (status === 'in_process')
                      setPage(Math.ceil(noprocess / 4));
                    else if (status === 'all') setPage(Math.ceil(noall / 4));
                    else if (status === 'completed')
                      setPage(Math.ceil(nocompleted / 4));
                    else if (status === 'allocated')
                      setPage(Math.ceil(nocompleted / 4));
                  }}
                >
                  {' >>'}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* upload picture of front and back of invoice */}
      <Modal
        open={readyDispatch}
        onClose={() => {
          dispatch({
            type: actions.ORDER_DISPATCH_UPDATE,
            payload: false
          });
        }}
      >
        {body}
      </Modal>
      {/* orderdetails */}
      <Modal
        open={orderDetail}
        onClose={() => {
          dispatch({
            type: actions.ORDER_DETAIL_CLOSE,
            payload: false
          });
        }}
      >
        {body2}
      </Modal>
    </div>
  );
};

export default Dashboard;
