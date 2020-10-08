import React from 'react';
import { Button, Menu, MenuItem, Link, makeStyles } from '@material-ui/core';

// image
import logo from '../../static/images/logo-white.png';
import dropdown from '../../static/images/dropdown.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCoffee,
  faQuestionCircle,
  faSignOutAlt
} from '@fortawesome/free-solid-svg-icons';
// style
import './nav.css';

const Nav = props => {
  const rpdata = localStorage.getItem('rpdata')
    ? JSON.parse(localStorage.getItem('rpdata'))
    : '';
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logout = () => {
    localStorage.clear();
    props.history.push('/');
  };

  return (
    <div className="container-2">
      <div className="logo">
        <a href="/">
          <img src={logo} alt="logo" style={{ height: '2.2em' }} />
        </a>
      </div>
      <div className="user">
        <p>{rpdata.retailer_name}</p>
        <Button
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          <img alt="dtop" src={dropdown} />
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={logout}>
            <p>
              <i>
                <FontAwesomeIcon icon={faSignOutAlt} />
              </i>
              Logout
            </p>
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
};

export default Nav;
