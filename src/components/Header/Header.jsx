import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import logo from '../../static/images/etark-logo.png';
import { useDispatch } from 'react-redux';
import actions from '../../actionTypes';
import { withRouter } from 'react-router-dom';
// style
import './header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const Header = props => {
  const user = localStorage.getItem('userdata')
    ? JSON.parse(localStorage.getItem('userdata'))
    : '';

  const dispatch = useDispatch();
  const logout = event => {
    event.preventDefault();
    dispatch({
      type: actions.SIGNOUT
    });
    props.history.push('/');
  };

  const child = [];
  if (user) {
    child.push(
      <div className="user-2">
        Signed in as {user.name}
        <Link to="/" onClick={logout}>
          <p>&nbsp;&nbsp;Signout</p>
        </Link>
      </div>
    );
  } else {
    child.push(
      <div className={'login-signup'}>
        <Link to={`/login`} className="tab login-link">
          LOGIN
        </Link>
        <Link to={`/sign_up`}>
          <Button variant="contained" color="primary" className={'button'}>
            GET STARTED
          </Button>
        </Link>
      </div>
    );
  }
  return (
    <div className={'header-container'}>
      <div className={'logo'}>
        <Link to={``} className="tabs">
          <img src={logo} alt={'etark'} />
        </Link>
      </div>
      <div className={'tabs'}>
        <Link to={`/how_to_use`} className="tab">
          HOW TO USE
        </Link>
        <Link to={`/about`} className="tab">
          ABOUT US
        </Link>
        <a
          href="https://zfrmz.in/U2f4qzZWmYtS7IOgbMEz"
          target="_blank"
          rel="noopener noreferrer"
          className="tab"
        >
          CONTACT US
        </a>
        <Link
          to={`/complaint`}
          className="tab"
          style={{ display: user ? 'block' : 'none' }}
        >
          NEW COMPLAINT
        </Link>
      </div>
      {child}
    </div>
  );
};

export default withRouter(Header);
