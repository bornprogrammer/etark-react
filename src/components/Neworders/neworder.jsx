import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Grid, Button, makeStyles, TextField } from '@material-ui/core';
import axios from 'axios';
import actions from '../../actionTypes';

// style
import './neworder.scss';

// images
import comp from '../../static/images/comp-detail.svg';
import reg from '../../static/images/regorder.svg';
import next from '../../static/images/next-card.svg';
import prev from '../../static/images/prev-card.png';
import { SettingsVoice } from '@material-ui/icons';

//production api
const prodapi = process.env.REACT_APP_PRODAPI;
const scdata = localStorage.getItem('scdata')
  ? JSON.parse(localStorage.getItem('scdata'))
  : '';

const useStyles = makeStyles(theme => ({
  input: {
    fontFamily: 'Poppins',
    fontSize: '1em',
    textTransform: 'none'
  },
  searchbar: {
    fontFamily: 'Poppins',
    color: '#b5b3c4'
  }
}));

export const Contents = props => {
  // style
  const classes = useStyles();
  const [orderid, setOrder] = useState('--');
  const [warranty, setWarranty] = useState('--');
  const [model, setModel] = useState('--');
  const [brand, setBrand] = useState('--');
  const [pickupid, setpickupid] = useState('');
  const [imei, setImei] = useState('--');
  const [compdetail, setCompdetail] = useState('');
  const [page, setPage] = useState(1);
  const [empty, setEmpty] = useState(true);
  const [loading, setLoading] = useState(true);
  const { brands } = useSelector(state => state.brands);
  const { statuschange } = useSelector(state => state.orderstatus);
  const [userdetails, setUserDetails] = useState('');
  const [bop, setBop] = useState('');
  const [useraddress, setUserAddress] = useState('');
  const [bankdetails, setBankDetails] = useState('');
  const dispatch = useDispatch();
  useEffect(() => {
    if (props.orderno !== '') setPage(1);
    if (Object.keys(brands).length === 0) {
      dispatch({
        type: actions.GET_BRANDS
      });
    } else {
      setLoading(true);
      axios
        .get(
          `${prodapi}sc/${scdata.id}?order_type=order_accepted&page_no=${page}&no_of_records=1&order_no=${props.orderno}`
        )
        .then(resp => {
          console.log(resp.data.result);
          var m = resp.data.result;
          var brandObj = {};
          for (var k in brands) {
            brandObj[brands[k].id] = brands[k];
          }
          for (var i = 0; i < m.length; i++) {
            setOrder(m[i].orderDetails.order_no);
            setModel(m[i].complainDetail.model_name);
            setBrand(brandObj[Number(m[i].maker_detail_id)].maker_name);
            setImei(m[i].complainDetail.imei_number);
            setWarranty(
              m[i].complainDetail.under_warranty === 'yes'
                ? 'In warranty'
                : 'Out of warranty'
            );
            setCompdetail(m[i].complainDetail.problem_description);
            setBop(m[i].complainDetail.uploaed_invoice_copy);
            setpickupid(m[i].pickup_details.id);
            setUserDetails(m[i].userDetails);
            // setInvoice(m[i].complainDetail.invoice_report);
            setUserAddress(m[i].userAddress);
            setBankDetails(m[i].bankDetails);
          }
          setEmpty(false);
          setLoading(false);
        })
        .catch(() => {
          setEmpty(true);
        });
    }
  }, [statuschange, page, brands]);

  const handleOrder = () => {
    dispatch({
      type: actions.ORDER_DETAIL_OPEN,
      payload: {
        orderno: orderid,
        imeino: imei,
        model: model,
        brand: brand,
        warranty: warranty,
        bop: bop,
        compdetail: compdetail,
        userdetails: userdetails,
        useraddress: useraddress,
        bankdetails: bankdetails
        //invoice:invoice
      }
    });
  };

  const registerOrder = () => {
    dispatch({
      type: actions.ORDER_DISPATCH_UPDATE,
      payload: {
        dispatch: false,
        orderno: orderid,
        imeino: imei,
        model: model,
        brand: brand,
        warranty: warranty,
        compdetail: compdetail,
        pickupid: pickupid,
        userdetails: userdetails
      }
    });
    props.history.push('/order');
  };

  if (empty === false) {
    return (
      <Grid container className="order-info">
        <Grid item xs={12} sm={1}>
          {page > 1 && (
            <Button
              onClick={() => {
                setPage(page - 1);
              }}
            >
              <img alt="prev" src={prev} style={{ width: '2vw' }} />
            </Button>
          )}
        </Grid>
        {/* details */}
        <Grid item xs={12} sm={8}>
          <Grid container>
            {/* left */}
            <Grid item xs={12} sm={6} style={{ paddingRight: '2%' }}>
              <Grid container spacing={3}>
                {/* l1 */}
                <Grid item xs={4}>
                  <p>Order Invoice</p>
                </Grid>
                <Grid item xs={8}>
                  <p>{orderid}</p>
                </Grid>
                {/* l2 */}
                <Grid item xs={4}>
                  <p>Device Status</p>
                </Grid>
                <Grid item xs={8}>
                  <p>{warranty} </p>
                  {/* <p>(Document Provided)</p> */}
                </Grid>
              </Grid>
            </Grid>

            {/* right */}
            <Grid item xs={12} sm={6}>
              <Grid container spacing={3}>
                {/* l1 */}
                <Grid item xs={4}>
                  <p>Device</p>
                </Grid>
                <Grid item xs={8}>
                  <p>
                    {model} by {brand}
                  </p>
                </Grid>
                {/* l2 */}
                <Grid item xs={4}>
                  <p>Complaint</p>
                </Grid>
                <Grid item xs={8}>
                  <Button onClick={handleOrder}>
                    <img
                      alt="compaint details"
                      src={comp}
                      style={{ width: '10vw' }}
                    />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        {/* buttons */}
        <Grid item xs={12} sm={3}>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <Button onClick={registerOrder}>
                <img alt="register-order" src={reg} style={{ width: '10vw' }} />
              </Button>
              <Button
                style={{ marginTop: '1vh' }}
                className={classes.input}
                onClick={() => {
                  dispatch({
                    type: actions.ORDER_STATE_UPDATE,
                    payload: {
                      pickupid: pickupid,
                      activity: 'service_denied_after_inspection'
                    }
                  });
                }}
              >
                <p>Decline order</p>
              </Button>
            </div>
            <div>
              <Button
                onClick={() => {
                  setPage(page + 1);
                }}
              >
                <img alt="next" src={next} style={{ width: '2vw' }} />
              </Button>
            </div>
          </div>
        </Grid>
      </Grid>
    );
  } else {
    return (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Button
          onClick={() => {
            setPage(page - 1);
          }}
        >
          <img alt="prev" src={prev} style={{ width: '2vw' }} />
        </Button>
        <p>&nbsp;&nbsp;Empty</p>
      </div>
    );
  }
};

const Neworder = props => {
  // style
  const classes = useStyles();
  const [orderSearch, setOrdersearch] = useState('');

  const dispatch = useDispatch();
  const handelSearch = event => {
    event.preventDefault();
    dispatch({
      type: actions.ORDER_SEARCH
    });
  };
  return (
    // new entry
    <div className="newEntry">
      {/* gradients */}
      <div className="gradient3" />
      <div className="gradient2" />
      <div className="gradient5" />
      <div className="gradient4" />

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          textAlign: 'right'
        }}
      >
        <h1 style={{ color: '#F6F6F6' }}>Latest order requests accepted</h1>
        <form onSubmit={handelSearch}>
          <TextField
            id="standard-search"
            label="Order id"
            type="search"
            value={orderSearch}
            onChange={event => {
              setOrdersearch(event.target.value);
              if (event.target.value === '') {
                dispatch({
                  type: actions.ORDER_SEARCH
                });
              }
            }}
            style={{ width: '80%' }}
            InputLabelProps={{ className: classes.searchbar }}
            inputProps={{ className: classes.searchbar }}
          />
        </form>
      </div>
      <p style={{ color: '#B5B3C4' }}>
        The order requests you accepted have to be registered before processing
        their services.
      </p>

      <hr style={{ margin: '2% 0', border: '1px solid #3B3F46' }} />
      <Contents history={props.history} orderno={orderSearch} />
    </div>
  );
};

export default Neworder;
