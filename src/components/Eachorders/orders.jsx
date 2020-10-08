import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Menu, MenuItem, Link, makeStyles } from '@material-ui/core';
import axios from 'axios';
import actions from '../../actionTypes';

// images
import accept from '../../static/images/accept.svg';
import decline from '../../static/images/decline.svg';
import { useEffect } from 'react';
import { prop } from 'ramda';

//production api
const prodapi = process.env.REACT_APP_PRODAPI;

const useStyles = makeStyles(theme => ({
  input: {
    fontFamily: 'Poppins',
    fontSize: '1em',
    textTransform: 'none'
  }
}));

const Orders = props => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { status } = useSelector(state => state.orderstatus);
  const dispatch = useDispatch();

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleModal = () => {
    dispatch({
      type: actions.ORDER_DISPATCH_UPDATE,
      payload: {
        dispatch: true,
        orderno: props.data.orderid,
        bop: props.data.bop,
        imeino: props.data.imeino,
        model: props.data.deviceName,
        brand: props.data.brand,
        warranty: props.data.warranty,
        compdetail: props.data.compdetail,
        pickupid: props.data.pickupid,
        bankdetails: props.data.bankdetails
      }
    });
    setAnchorEl(null);
  };

  const handleOrder = () => {
    console.log(props.data);
    dispatch({
      type: actions.ORDER_DETAIL_OPEN,
      payload: {
        orderno: props.data.orderid,
        imeino: props.data.imeino,
        model: props.data.deviceName,
        bop: props.data.bop,
        brand: props.data.brand,
        warranty: props.data.warranty,
        compdetail: props.data.compdetail,
        pickupid: props.data.pickupid,
        userdetails: props.data.userdetails,
        useraddress: props.data.useraddress,
        bankdetails: props.data.bankdetails
      }
    });
  };

  return (
    <div>
      {/* all orders */}
      {status === 'all' && (
        <div className="eachOrder">
          <div className="orderid">
            <p>{props.data.orderid}</p>
          </div>
          <div className="device">
            <div style={{ textAlign: 'left' }}>
              <p>{props.data.deviceName}</p>
              <p style={{ fontSize: '0.8em' }}>
                <span style={{ color: '#939393' }}>by</span> {props.data.brand}
              </p>
            </div>
          </div>
          <div className="warranty">
            <p>{props.data.warranty}</p>
          </div>
          <div className="due">
            <div style={{ textAlign: 'left' }}>
              <p>{props.data.due}</p>
              {props.data.daystogo !== '--' && props.data.daystogo >= 0 && (
                <p
                  style={{
                    fontSize: '0.8em',
                    color: '#52B03B'
                  }}
                >
                  {props.data.daystogo}{' '}
                  {(props.data.daystogo == 1 || props.data.daystogo == 0) && (
                    <span>day</span>
                  )}
                  {props.data.daystogo != 0 && props.data.daystogo != 1 && (
                    <span>days</span>
                  )}{' '}
                  to go
                </p>
              )}
              {props.data.daystogo !== '--' && props.data.daystogo < 0 && (
                <p
                  style={{
                    fontSize: '0.8em',
                    color: '#D3485D'
                  }}
                >
                  {Math.abs(props.data.daystogo)}{' '}
                  {props.data.daystogo == -1 && <span>day</span>}
                  {props.data.daystogo != -1 && <span>days</span>} overdue
                </p>
              )}
            </div>
          </div>
          <div className="status2">
            <p>{props.data.compdetail.match(/.{1,20}/g)[0]}</p>
            {/* <Button className={classes.input} onClick={handleClick}> */}
            <Link style={{ color: '#5B88E1' }} onClick={handleOrder}>
              View Details
            </Link>
            {/* </Button> */}
          </div>
          <div className="status">
            {props.data.status == 'allocated' && <p>Allocated</p>}
            {props.data.status == 'user_to_confirm' && <p>User to confirm</p>}
            {props.data.status == 'user_made_payment' && <p>Confirmed</p>}
            {props.data.status == 'ready_to_dispatch' && (
              <p>Ready to dispatch</p>
            )}
            {props.data.status == 'user_declined_payment' && (
              <p>User Declined</p>
            )}
            {props.data.status == 'service_denied_after_inspection' && (
              <p>Inspected but cancelled</p>
            )}
            {props.data.status == 'failure' && <p>Failed</p>}
            {props.data.status == 'dispatched' && <p>Dispatched</p>}
            {props.data.status == 'inspection_fee_claimed' && (
              <p>Claimed inspection fee</p>
            )}
            {props.data.status == 'inspection_fee_denied' && (
              <p>Declined inspection fee</p>
            )}
            {props.data.status == 'service_denied' && <p>Service denied</p>}
            {props.data.status === 'user_made_payment' && (
              <Link style={{ color: '#5B88E1' }} onClick={handleOrder}>
                View Details
              </Link>
            )}
          </div>
          <div className="actions">
            <Button
              className="statusBtn"
              onClick={handleClick}
              style={{ color: '#ffffff', fontSize: '1em' }}
            >
              <b>...</b>
            </Button>
            {(props.data.status == 'user_to_confirm' ||
              props.data.status == 'user_made_payment' ||
              props.data.status == 'user_declined_payment' ||
              props.data.status == 'service_denied_after_inspection' ||
              props.data.status == 'failure' ||
              props.data.status == 'ready_to_dispatch') && (
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                {props.data.status == 'user_to_confirm'}
                {props.data.status == 'user_made_payment' && (
                  <MenuItem className={classes.input} onClick={handleModal}>
                    Mark ready for Dispatch
                  </MenuItem>
                )}
                {props.data.status == 'user_made_payment' && (
                  <MenuItem
                    className={classes.input}
                    onClick={() => {
                      dispatch({
                        type: actions.ORDER_STATE_UPDATE,
                        payload: {
                          pickupid: props.data.pickupid,
                          activity: 'failure'
                        }
                      });
                    }}
                  >
                    Mark failed
                  </MenuItem>
                )}
                {(props.data.status == 'user_declined_payment' ||
                  props.data.status == 'service_denied_after_inspection' ||
                  props.data.status == 'failure') && (
                  <MenuItem
                    className={classes.input}
                    onClick={() => {
                      dispatch({
                        type: actions.ORDER_STATE_UPDATE,
                        payload: {
                          pickupid: props.data.pickupid,
                          activity: 'inspection_fee_claimed'
                        }
                      });
                    }}
                  >
                    Claim Inspection Fees
                  </MenuItem>
                )}
                {(props.data.status == 'user_declined_payment' ||
                  props.data.status == 'service_denied_after_inspection' ||
                  props.data.status == 'failure') && (
                  <MenuItem
                    className={classes.input}
                    onClick={() => {
                      dispatch({
                        type: actions.ORDER_STATE_UPDATE,
                        payload: {
                          pickupid: props.data.pickupid,
                          activity: 'inspection_fee_denied'
                        }
                      });
                    }}
                  >
                    Decline Inspection Fees
                  </MenuItem>
                )}
                {props.data.status == 'ready_to_dispatch' && (
                  <MenuItem
                    className={classes.input}
                    onClick={() => {
                      dispatch({
                        type: actions.ORDER_STATE_UPDATE,
                        payload: {
                          pickupid: props.data.pickupid,
                          activity: 'dispatched'
                        }
                      });
                    }}
                  >
                    Mark Dispatched
                  </MenuItem>
                )}
                {/* <MenuItem className={classes.input} onClick={handleClose}>
                Delete Order
                </MenuItem> */}
              </Menu>
            )}
          </div>
        </div>
      )}
      {/* completed*/}
      {status === 'completed' && (
        <div className="eachOrder">
          <div className="orderid3">
            <p>{props.data.orderid}</p>
          </div>
          <div className="device3">
            <div>
              <p>{props.data.deviceName}</p>
              <p style={{ fontSize: '0.8em' }}>
                <span style={{ color: '#939393' }}>by</span> {props.data.brand}
              </p>
            </div>
          </div>
          <div className="warranty3">
            <p>{props.data.warranty}</p>
          </div>
          <div className="status3">
            <p>{props.data.compdetail.match(/.{1,20}/g)[0]}</p>
            {/* <Button className={classes.input} onClick={handleClick}> */}
            <Link style={{ color: '#5B88E1' }} onClick={handleOrder}>
              View Details
            </Link>
            {/* </Button> */}
          </div>
          <div className="status">
            {props.data.status == 'dispatched' && <p>Dispatched</p>}
          </div>
        </div>
      )}
      {/*Declined*/}
      {status === 'declined' && (
        <div className="eachOrder">
          <div className="orderid3">
            <p>{props.data.orderid}</p>
          </div>
          <div className="device3">
            <div>
              <p>{props.data.deviceName}</p>
              <p style={{ fontSize: '0.8em' }}>
                <span style={{ color: '#939393' }}>by</span> {props.data.brand}
              </p>
            </div>
          </div>
          <div className="warranty3">
            <p>{props.data.warranty}</p>
          </div>
          <div className="status3">
            <p>{props.data.compdetail.match(/.{1,20}/g)[0]}</p>
            {/* <Button className={classes.input} onClick={handleClick}> */}
            <Link style={{ color: '#5B88E1' }} onClick={handleOrder}>
              View Details
            </Link>
            {/* </Button> */}
          </div>
          <div className="status">
            {props.data.status == 'inspection_fee_claimed' && (
              <p>Claimed inspection fee</p>
            )}
            {props.data.status == 'inspection_fee_denied' && (
              <p>Declined inspection fee</p>
            )}
            {props.data.status == 'service_denied' && <p>Service denied</p>}
          </div>
        </div>
      )}
      {/* order requests */}
      {status === 'allocated' && (
        <div className="eachOrder">
          <div className="orderid2">
            <p>{props.data.orderid}</p>
          </div>
          <div className="device2">
            <div style={{ textAlign: 'left' }}>
              <p>{props.data.deviceName}</p>
              <p style={{ fontSize: '0.8em' }}>
                <span style={{ color: '#939393' }}>by</span> {props.data.brand}
              </p>
            </div>
          </div>
          <div className="warranty2">
            <p>{props.data.warranty}</p>
          </div>
          <div className="status2">
            <p>{props.data.compdetail.match(/.{1,20}/g)[0]}</p>
            {/* <Button className={classes.input} onClick={handleClick}> */}
            <Link style={{ color: '#5B88E1' }} onClick={handleOrder}>
              View Details
            </Link>
            {/* </Button> */}
          </div>
          <div className="actions2">
            <Button
              className="statusBtn"
              onClick={() => {
                dispatch({
                  type: actions.ORDER_STATE_UPDATE,
                  payload: {
                    pickupid: props.data.pickupid,
                    activity: 'order_accepted'
                  }
                });
              }}
            >
              <img alt="accept" src={accept} style={{ width: '5vw' }} />
            </Button>
            <Button
              className="statusBtn"
              onClick={() => {
                dispatch({
                  type: actions.ORDER_STATE_UPDATE,
                  payload: {
                    pickupid: props.data.pickupid,
                    activity: 'service_denied'
                  }
                });
              }}
            >
              <img alt="decline" src={decline} style={{ width: '5vw' }} />
            </Button>
          </div>
        </div>
      )}
      {/* inprocess */}
      {status === 'in_process' && (
        <div className="eachOrder">
          <div className="orderid">
            <p>{props.data.orderid}</p>
          </div>
          <div className="device">
            <div style={{ textAlign: 'left' }}>
              <p>{props.data.deviceName}</p>
              <p style={{ fontSize: '0.8em' }}>
                <span style={{ color: '#939393' }}>by</span> {props.data.brand}
              </p>
            </div>
          </div>
          <div className="warranty">
            <p>{props.data.warranty}</p>
          </div>
          <div className="due">
            <div style={{ textAlign: 'left' }}>
              <p>{props.data.due}</p>
              {props.data.daystogo !== '--' && props.data.daystogo >= 0 && (
                <p
                  style={{
                    fontSize: '0.8em',
                    color: '#52B03B'
                  }}
                >
                  {props.data.daystogo}{' '}
                  {(props.data.daystogo == 1 || props.data.daystogo == 0) && (
                    <span>day</span>
                  )}
                  {props.data.daystogo != 0 && props.data.daystogo != 1 && (
                    <span>days</span>
                  )}{' '}
                  to go
                </p>
              )}
              {props.data.daystogo !== '--' && props.data.daystogo < 0 && (
                <p
                  style={{
                    fontSize: '0.8em',
                    color: '#D3485D'
                  }}
                >
                  {Math.abs(props.data.daystogo)}{' '}
                  {props.data.daystogo == -1 && <span>day</span>}
                  {props.data.daystogo != -1 && <span>days</span>} overdue
                </p>
              )}
            </div>
          </div>
          <div className="status2">
            <p>{props.data.compdetail.match(/.{1,20}/g)[0]}</p>
            {/* <Button className={classes.input} onClick={handleClick}> */}
            <Link style={{ color: '#5B88E1' }} onClick={handleOrder}>
              View Details
            </Link>
            {/* </Button> */}
          </div>
          {/* <div className="pay">
            <p>Paid</p>
          </div> */}
          <div className="status">
            {props.data.status == 'user_to_confirm' && <p>User to confirm</p>}
            {props.data.status == 'user_made_payment' && <p>Confirmed</p>}
            {props.data.status == 'ready_to_dispatch' && (
              <p>Ready to dispatch</p>
            )}
            {props.data.status == 'user_declined_payment' && (
              <p>User Declined</p>
            )}
            {props.data.status == 'service_denied_after_inspection' && (
              <p>Inspected but cancelled</p>
            )}
            {props.data.status == 'failure' && <p>Failed</p>}

            {props.data.status === 'user_made_payment' && (
              <Link style={{ color: '#5B88E1' }} onClick={handleOrder}>
                View Details
              </Link>
            )}
          </div>
          <div className="actions">
            <Button
              className="statusBtn"
              onClick={handleClick}
              style={{ color: '#ffffff', fontSize: '1em' }}
            >
              <b>...</b>
            </Button>
            {props.data.status != 'user_to_confirm' && (
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                {props.data.status == 'user_to_confirm'}
                {props.data.status == 'user_made_payment' && (
                  <MenuItem className={classes.input} onClick={handleModal}>
                    Mark ready for Dispatch
                  </MenuItem>
                )}
                {props.data.status == 'user_made_payment' && (
                  <MenuItem
                    className={classes.input}
                    onClick={() => {
                      dispatch({
                        type: actions.ORDER_STATE_UPDATE,
                        payload: {
                          pickupid: props.data.pickupid,
                          activity: 'failure'
                        }
                      });
                    }}
                  >
                    Mark failed
                  </MenuItem>
                )}
                {(props.data.status == 'user_declined_payment' ||
                  props.data.status == 'service_denied_after_inspection' ||
                  props.data.status == 'failure') && (
                  <MenuItem
                    className={classes.input}
                    onClick={() => {
                      dispatch({
                        type: actions.ORDER_STATE_UPDATE,
                        payload: {
                          pickupid: props.data.pickupid,
                          activity: 'inspection_fee_claimed'
                        }
                      });
                    }}
                  >
                    Claim Inspection Fees
                  </MenuItem>
                )}
                {(props.data.status == 'user_declined_payment' ||
                  props.data.status == 'service_denied_after_inspection' ||
                  props.data.status == 'failure') && (
                  <MenuItem
                    className={classes.input}
                    onClick={() => {
                      dispatch({
                        type: actions.ORDER_STATE_UPDATE,
                        payload: {
                          pickupid: props.data.pickupid,
                          activity: 'inspection_fee_denied'
                        }
                      });
                    }}
                  >
                    Decline Inspection Fees
                  </MenuItem>
                )}
                {props.data.status == 'ready_to_dispatch' && (
                  <MenuItem
                    className={classes.input}
                    onClick={() => {
                      dispatch({
                        type: actions.ORDER_STATE_UPDATE,
                        payload: {
                          pickupid: props.data.pickupid,
                          activity: 'dispatched'
                        }
                      });
                    }}
                  >
                    Mark Dispatched
                  </MenuItem>
                )}
                {/* <MenuItem className={classes.input} onClick={handleClose}>
                Delete Order
                </MenuItem> */}
              </Menu>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Orders;
