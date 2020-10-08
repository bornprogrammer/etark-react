import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, makeStyles } from '@material-ui/core';
import Nav from '../../components/Navbar/Nav';
import Sidebar from '../../components/Sidebar/sidebar';
import PhoneDtl from './phoneDtl';
import Mldata from './mldata';
import Plan from './plan';
import Checkout from './checkout';
import Scexist from './zerostep';
import actions from '../../actionTypes';
import { Helmet } from 'react-helmet';

// style
import './form.css';
// image
import back from '../../static/images/back.png';
import icon from '../../static/images/etark-logo2.png';

const useStyles = makeStyles(theme => ({
  backBtn: {
    fontFamily: 'Poppins',
    textTransform: 'none',
    padding: '1em 0'
  }
}));

const ComplaintForm = props => {
  // style
  const classes = useStyles();
  const { step } = useSelector(state => state.formstep);
  const [child, setChild] = useState([]);
  const dispatch = useDispatch();
  const handleBack = event => {
    event.preventDefault();
    dispatch({
      type: actions.FORM_STEP,
      payload: -1
    });
  };

  const sideData = [
    {
      heading: 'Smartphone Details',
      detail:
        'Just some details of your device so that we can analyse your issue'
    },
    {
      heading: 'Chance of Winning',
      detail: 'We’re going to let you know what are your chances of winning '
    },
    {
      heading: 'Choose your plan',
      detail: 'We’ve got you covered. Select the plan according to your need.'
    },
    {
      heading: 'You’ve got this!',
      detail: 'We’ll present you a smooth checkout according to your plan.'
    }
  ];

  const eachstep = [
    '',
    '',
    'Smartphone details',
    'Chances of winning',
    'Choose your plan'
  ];

  useEffect(() => {
    if (step === 1) setChild(<Scexist history={props.history} />);
    else if (step === 2) setChild(<PhoneDtl />);
    else if (step === 3) setChild(<Mldata />);
    else if (step === 4) setChild(<Plan />);
    else setChild(<Checkout myhistory={props.history} />);
  }, [step]);

  return (
    <div className="formcontain">
      {/* head contents */}
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="keywords"
          content="ETark,compalint,automated,automated complaint,smartphone,"
        />
        <meta
          name="description"
          content="Your one-stop solution for all your smartphone complaints even if it is out of warranty, without having to go to any service centre, call at any customer support or even google about it, , all this instantly, at your convenience, at your own time."
        />
        {/* OGP (Open Graph Protocol) */}
        <meta property="og:locale" content="en_IN" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="E-tark" />
        <meta
          property="og:description"
          content="Your one-stop solution for all your smartphone complaints even if it is out of warranty, without having to go to any service centre, call at any customer support or even google about it, , all this instantly, at your convenience, at your own time."
        />
        <meta property="og:url" content="http://www.etark.in" />
        <meta property="og:site_name" content="E-tark" />
        <meta property="og:image" content=" " />
        <title>ETark | Complaint form</title>
        <link rel="canonical" href="http://www.etark.in/" />

        <link rel="icon" type="image/png" href={icon} sizes="16x16" />
      </Helmet>

      {/* main contents */}
      <Nav myhistory={props.history} />
      <div className="form-container">
        <div className="heading">
          <Button
            className={classes.backBtn}
            onClick={handleBack}
            style={{
              display: step < 3 ? 'none' : 'flex'
            }}
          >
            <img alt="<" src={back} />
            <p>&nbsp;{eachstep[step - 1]}</p>
          </Button>
          <h1>Get your smartphone's issue resolved</h1>
          <p>
            we'll help you resolve your issue in many different ways in just 5
            minutes
          </p>
        </div>
        <div className="mob-heading">
          {step === 1 ? sideData[step - 1].heading : sideData[step - 2].heading}
        </div>
        <div className="contain">
          <Sidebar
            data={sideData}
            bgcolor="#D0DCF2"
            nocolor1="#245fd3"
            nocolor2="#B5B3C3"
          />
          {/* each step */}
          <div className="main-form">{child}</div>
        </div>
      </div>
    </div>
  );
};

export default ComplaintForm;
