import React from 'react';
import { useDispatch } from 'react-redux';
import { Button, makeStyles } from '@material-ui/core';
import actions from '../../actionTypes';

// images
import ongoing from '../../static/images/repair.png';
import completed from '../../static/images/product-details-icon.png';
import settings from '../../static/images/settings.png';
import summary from '../../static/images/summary.png';

// style
import './rpsidebar.scss';
const useStyles = makeStyles(theme => ({
  input: {
    fontFamily: 'Poppins',
    fontSize: '1em',
    textTransform: 'none',
    color: 'white',
    width: '100%',
    justifyContent: 'left'
  }
}));

const Sidebar = () => {
  // style
  const classes = useStyles();

  const dispatch = useDispatch();
  const handleorders = id => {
    dispatch({
      type: actions.ORDER_STATUS_UPDATE,
      payload: id
    });
  };

  return (
    <div className="ScContain">
      <div className="side-items-top">
        <div className="sideitem-image">
          <img alt="ongoing" src={summary} />
        </div>
        &nbsp;&nbsp;
        <h1>Retail Summary</h1>
      </div>
      <div className="ScSide">
        <hr
          style={{
            height: 2,
            borderWidth: 0,
            color: 'gray',
            backgroundColor: 'gray',
            margin: '2% 0'
          }}
        />
        <p>COUPONS</p>
      </div>
    </div>
  );
};

export default Sidebar;
