import React, { useState, useEffect } from 'react';
import {
  LinearProgress,
  Box,
  Typography,
  CircularProgress,
  Button,
  makeStyles
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import actions from '../../actionTypes';

// style
import './mldata.css';
import axios from 'axios';

//production api
const prodapi = process.env.REACT_APP_PRODAPI;

const LinearProgressWithLabel = props => {
  return (
    <Box display="flex" alignItems="center">
      <Box width="100%" mr={1}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box minWidth={35}>
        <Typography variant="body2" color="textSecondary">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
};

const useStyles = makeStyles(theme => ({
  checkboxLabel: {
    fontFamily: 'Poppins',
    fontSize: '0.9em'
  },
  input: {
    fontFamily: 'Poppins'
  },
  root: {
    color: 'white',
    backgroundColor: '#245fd3',
    fontFamily: 'Poppins',
    margin: '0 2%',
    padding: '1vh 3vw',
    fontSize: '1em',
    textTransform: 'none'
  }
}));

const Mldata = () => {
  const [win, setWin] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const { complaintid } = useSelector(state => state.complaint);
  const { step } = useSelector(state => state.formstep);

  useEffect(() => {
    axios
      .get(`${prodapi}complaints/${complaintid}/winning-chances`)
      .then(response => {
        console.log(response);
        setWin(response.data.result.winning_chances_val);
        setLoaded(true);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  // style
  const classes = useStyles();

  const dispatch = useDispatch();
  const handleSubmit = event => {
    event.preventDefault();
    dispatch({
      type: actions.FORM_STEP,
      payload: 1
    });
  };
  return (
    <div className="mlcontain">
      {/* heading */}
      <div className="header">
        <div>
          <h1>You heard that right!</h1>
          <p>
            You need not be worried, our expert engine is letting you know what
            are the chances of receiving a compensation from the seller
            (ecommerce firm/offline retailer) or the smartphone manufacturer
          </p>
        </div>
        <Button
          className={classes.root}
          variant="contained"
          onClick={handleSubmit}
        >
          Next
        </Button>
      </div>
      <hr />
      {/* body */}
      {loaded === true ? (
        <div className="mlbody">
          <h1>Chances of Getting Compensation</h1>
          <p>
            Percentage chances of getting a compensation like free servicing or
            product replacement from the company against which you’ve a
            grievance
          </p>
          <LinearProgressWithLabel
            value={win}
            style={{ margin: '5vh 0', height: '0.5em', borderRadius: 5 }}
          />
          <h1 style={{ fontSize: '2em' }}>{win}%</h1>
          <p style={{ color: '#616066' }}>
            Now that you know that, check out our services in the next step!
          </p>
        </div>
      ) : (
        <CircularProgress
          style={{ marginLeft: '150px', mamrginTop: '800px' }}
        />
      )}
    </div>
  );
};

export default Mldata;
