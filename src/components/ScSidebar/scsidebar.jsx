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
import './scsidebar.scss';
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
        <h1>Services Summary</h1>
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
        <p>ORDERS</p>

        <div className="side-items">
          <Button
            className={classes.input}
            onClick={() => {
              const id = 'in_process';
              handleorders(id);
            }}
          >
            <div className="sideitem-image">
              <img alt="ongoing" src={ongoing} />
            </div>
            &nbsp;&nbsp;
            <h1>In process</h1>
          </Button>
        </div>

        <div className="side-items">
          <Button
            className={classes.input}
            onClick={() => {
              const id = 'completed';
              handleorders(id);
            }}
          >
            <div className="sideitem-image">
              <img alt="ongoing" src={completed} />
            </div>
            &nbsp;&nbsp;
            <h1>Completed</h1>
          </Button>
        </div>
        {/* <hr
          style={{
            height: 2,
            borderWidth: 0,
            color: 'gray',
            backgroundColor: 'gray',
            margin: '2% 0'
          }}
        />
        <div className="side-items">
          <div className="sideitem-image">
            <img alt="ongoing" src={settings} />
          </div>
          &nbsp;&nbsp;
          <h1>Settings</h1>
        </div> */}
      </div>
    </div>
  );
};

export default Sidebar;
