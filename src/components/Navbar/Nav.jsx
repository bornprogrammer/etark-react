import React from 'react';
import { Link } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import actions from '../../actionTypes';
import { withRouter } from 'react-router-dom';

// image
import logo from '../../static/images/logo-white.png';
// style
import './navbar.css';

const Nav = props => {
  const { step } = useSelector(state => state.formstep);
  const user = localStorage.getItem('userdata')
    ? JSON.parse(localStorage.getItem('userdata'))
    : '';

  const dispatch = useDispatch();
  const logout = event => {
    event.preventDefault();
    dispatch({
      type: actions.SIGNOUT
    });
    if (step > 1) {
      dispatch({
        type: actions.FORM_STEP,
        payload: 1 - step
      });
    }
    props.history.push('/');
  };

  return (
    <div className="container">
      <div className="inner">
        <div className="logo">
          <a href="/">
            <img src={logo} alt="logo" style={{ height: '6vh' }} />
          </a>
        </div>
        <div className="user">
          <div className="dashboarduser">
            <a href="/userDash">Dashboard</a>
          </div>
          Signed in as {user.name}
          <Link underline="always" onClick={logout} style={{ color: 'white' }}>
            <p>&nbsp;&nbsp;Not you?</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Nav);
