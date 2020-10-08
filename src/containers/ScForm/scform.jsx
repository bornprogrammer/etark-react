import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, makeStyles } from '@material-ui/core';
import Nav from '../../components/ScNav/nav';
import Sidebar from '../../components/Sidebar/sidebar';
import Device from './device';
import Service from './service';
import actions from '../../actionTypes';

// style
import './form.scss';
// images
import back from '../../static/images/back.png';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  backBtn: {
    fontFamily: 'Poppins',
    textTransform: 'none',
    padding: '1em 0',
    fontSize: '1em',
    textDecoration: 'none'
  },
  linkClose: {
    textDecoration: 'none'
  }
}));

const ComplaintForm = props => {
  // style
  const classes = useStyles();

  const { step } = useSelector(state => state.formstep);
  const sideData = [
    {
      heading: 'Device Details',
      detail: 'Enter the details of the device at the time of receival'
    },
    {
      heading: 'Service details',
      detail: 'Enter the details of the servicing and estimated invoice amount'
    }
  ];
  const dispatch = useDispatch();
  const handleBack = event => {
    event.preventDefault();
    dispatch({
      type: actions.FORM_STEP,
      payload: -2
    });
  };

  return (
    <div className="formcontain-2">
      <Nav myhistory={props.history} />
      <div className="body-2">
        <div className="heading-2">
          <Button
            className={classes.backBtn}
            style={{
              display: step === 1 ? 'flex' : 'none'
            }}
          >
            <img alt="<" src={back} />
            <Link to="/servicecentre" className={classes.linkClose}>
              <p>&nbsp; Close</p>
            </Link>
          </Button>
          <Button
            className={classes.backBtn}
            onClick={handleBack}
            style={{
              display: step === 1 ? 'none' : 'flex'
            }}
          >
            <img alt="<" src={back} />
            <p>&nbsp;Device details</p>
          </Button>

          <h1>Enter the order details</h1>
          <p>Enter the details and track your orders in 3 easy steps.</p>
        </div>
        <div className="contain-2">
          <Sidebar
            data={sideData}
            bgcolor="linear-gradient(170.78deg, #2B2B2B -7.22%, #181818 114.66%)"
            txt1="#F6F6F6"
            txt2="#B5B3C4"
            fadetxt1="#3B3F46"
            fadetxt2="#616066"
            nocolor1="#245FD3"
            nocolor2="#26252E"
          />
          {/* step1 */}
          <div
            className="sc-form"
            style={{ display: step === 1 ? 'block' : 'none' }}
          >
            <Device />
          </div>
          {/* step2 */}
          <div
            className="sc-form"
            style={{ display: step === 3 ? 'block' : 'none' }}
          >
            <Service myhistory={props.history} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComplaintForm;
