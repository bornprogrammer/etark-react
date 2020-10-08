import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Nav from '../../components/RpNav/nav';
import Sidebar from '../../components/RpSidebar/rpsidebar';
import * as R from 'ramda';
import { doPatternTestForInputField } from '../../utils/GeneralUtils';
import {
  Button,
  Modal,
  Grid,
  makeStyles,
  Snackbar,
  TextField,
  Select,
  InputLabel,
  MenuItem
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
import './rpdashboard.scss';

//production api
const prodapi = 'https://api.etark.in/api/';

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
  const rpdata = localStorage.getItem('rpdata')
    ? JSON.parse(localStorage.getItem('rpdata'))
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
  } = useSelector(state => state.orderstatus);

  const dispatch = useDispatch();

  const dict = {
    in_warranty: 'In Warranty',
    non_warranty: 'Non Warranty',
    out_of_warranty: 'Out Of Warranty'
  };


  const pattern = {
    invoice: '^[0-9]*$'
  };

  function getData() {
    console.log('caled data');
    var each = [];
    setLoading(true);
    axios
      .get(
        `${prodapi}sc/${rpdata.id}?order_type=${status}&page_no=${page}&no_of_records=4&order_no=${orderSearch}`
      )
      .then(resp => {
        var m = resp.data.result;
        console.log(m);
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
          console.log(m[i].complainDetail.uploaed_invoice_copy);
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
          console.log(data);
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
    console.log('caled trends');
    axios
      .get(`https://api.etark.in/api/sc/${rpdata.id}/orders-trends`)
      .then(resp => {
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
    // setInterval(function() {
    //   getData();
    //   getTrends();
    // }, 30000);
  }, [brands, statuschange, page]);

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
        <div className="db">
          <div className="dbCards">
            <div className="newEntry">
              <div className="gradient3"></div>
              <div className="gradient2"></div>
              <div className="gradient5"></div>
              <div className="gradient4"></div>
              <div className="div5">
                <h1>Customer Details to be filled per purchase</h1>
                <form>
                  <div className="MuiFormControl-root MuiTextField-root">
                    <div className="rowInputField">
                      <TextField id="name" label="Name" type="text" />
                      <TextField id="email" label="Email" type="email" />
                    </div>
                    <div className="rowInputField">
                      <TextField id="contact" label="Contact" type="text" />
                      <TextField id="billId" label="Bill ID" type="text" />
                    </div>
                    <div className="rowInputField">
                      <div className="choosebrand">
                        <InputLabel id="brand-select-label">Brand</InputLabel>
                        <Select
                          labelId="brand-select-label"
                          id="brand-select"
                          defaultValue={'Samsung'}
                          size={6}
                        >
                          {brands[0] &&
                            brands.map(brand => {
                              return (
                                <MenuItem value={brand.maker_name}>
                                  {brand.maker_name}
                                </MenuItem>
                              );
                            })}
                        </Select>
                      </div>
                      <div className="couponpricedetail">
                        Coupon Price : <span>₹ 150</span>
                      </div>
                    </div>
                    <div className="rowInputField">
                      <TextField id="imei" label="IMEI NUMBER 1" type="text" />
                      <TextField style={{visibility: "hidden"}}/>
                    </div>
                  </div>
                  <div className="submitbutton">
                    <Button className="submitdetails" variant="contained">
                      Generate Retail Coupon
                    </Button>
                  </div>
                </form>
              </div>
              {/* <hr/> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
