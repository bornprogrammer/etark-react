import React from 'react';

import './footer.scss';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import twitter from '../../static/images/twitter-footer.png';
import insta from '../../static/images/insta.png';
import linkedIn from '../../static/images/linkedIn-footer.png';
import facebook from '../../static/images/facebook-footer.png';

const Footer = () => (
  <div className={'footer'}>
    <div className={'top-section'}>
      <div className={'top-left'}>
        <a
          href="https://zfrmz.in/U2f4qzZWmYtS7IOgbMEz"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="contained" color="primary" className={'button'}>
            CONTACT US
          </Button>
        </a>
        <span className={'phone-text'}>+91 - 8250778560</span>
        <span className={'info-text email'}>support@etark.in</span>
        <span className={'info-text address'}>
          13 K.B. Sarani, Kolkata, India
        </span>
        <div className={'social-links'}>
          <a
            href="https://www.facebook.com/etarkcompany"
            target="_blank"
            rel="noopener noreferrer"
            className="social-media-links"
          >
            <img src={facebook} alt={'facebook'} />
          </a>
          <a
            href="https://www.linkedin.com/company/etark"
            target="_blank"
            rel="noopener noreferrer"
            className="social-media-links"
          >
            <img src={linkedIn} alt={'linkedIn'} />
          </a>
          <a
            href="https://twitter.com/ETark4"
            target="_blank"
            rel="noopener noreferrer"
            className="social-media-links"
          >
            <img src={twitter} alt={'twitter'} />
          </a>
          <a
            href="https://www.instagram.com/etark_official/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-media-links"
            style={{
              marginTop: '40px'
            }}
          >
            <img
              src={insta}
              style={{
                maxWidth: '25px'
              }}
              alt={'insta'}
            />
          </a>
        </div>
      </div>
      <div className={'top-right'}>
        <div className={'top-right-left'}>
          <span className={'title-text'}>Offers</span>
          <a href="/retailcoupon" className={'sub-title-text'}>
            Retail Coupon
          </a>
        </div>
        <div className={'top-right-left'}>
          <span className={'title-text'}>Our services</span>
          <span className={'sub-title-text'}>Smartphone complaints</span>
        </div>
        <div className={'top-right-right'}>
          <span className={'title-text'}>Information</span>
          <Link to={`/about`} className="tab login-link sub-title-text">
            About Us
          </Link>
          <Link to={`/HnD`} className="tab login-link sub-title-text">
            Help and Documentation
          </Link>
          <a
            href="https://zfrmz.in/U2f4qzZWmYtS7IOgbMEz"
            target="_blank"
            rel="noopener noreferrer"
            className="tab login-link sub-title-text"
          >
            Contact Us
          </a>
          <a
            href="https://zfrmz.in/U2f4qzZWmYtS7IOgbMEz"
            target="_blank"
            rel="noopener noreferrer"
            className="tab login-link sub-title-text"
          >
            Support
          </a>
          <Link to={`/payments`} className="tab login-link sub-title-text">
            Payments
          </Link>
          <Link to={`/shipping`} className="tab login-link sub-title-text">
            Shipping
          </Link>
          <Link
            to={`/intellectual_property`}
            className="tab login-link sub-title-text"
          >
            Intellectual Property
          </Link>
          <Link to={`/disclaimer`} className="tab login-link sub-title-text">
            Disclaimer
          </Link>
          <a
            href="https://etark471938549.wordpress.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="tab login-link sub-title-text"
          >
            Blog
          </a>
        </div>
        <div className={'top-right-right top-right-right-partners'}>
          <div>
            <span className={'title-text'}>Service Partner</span>
            <Link
              to={`/servicepartner`}
              target="_blank"
              rel="noopener noreferrer"
              className="tab login-link sub-title-text"
            >
              Become ETark Service Partner
            </Link>
            <a
              href="https://zfrmz.in/nodbQp5jwI7VPVjw9dQk"
              target="_blank"
              rel="noopener noreferrer"
              className="tab login-link sub-title-text"
            >
              Update info
            </a>
          </div>
          <div>
            <span className={'title-text'}>Retail Partner</span>
            <Link
              to={`/retailpartner`}
              target="_blank"
              rel="noopener noreferrer"
              className="tab login-link sub-title-text"
            >
              Become ETark Retail Partner
            </Link>
            <a
              href="/retailoutletlogin"
              target="_blank"
              rel="noopener noreferrer"
              className="tab login-link sub-title-text"
            >
              Retail Access
            </a>
            <a
              href="/retailoutlet"
              target="_blank"
              rel="noopener noreferrer"
              className="tab login-link sub-title-text"
            >
              Our Retail Partner
            </a>
          </div>
        </div>
      </div>
    </div>
    <hr />
    <div className={'down-section2'}>
      <span className={'copy-right-text'}>
        Copyright 2020. ETark Tech. Pvt. Ltd. All rights reserved
      </span>
      <Link
        to={`/privacy`}
        className="down-section-text"
        style={{
          textDecoration: 'none',
          color: 'white'
        }}
      >
        Privacy
      </Link>

      <Link
        to={`/t&c`}
        className="down-section-text"
        style={{
          textDecoration: 'none',
          color: 'white'
        }}
      >
        Terms & Conditions
      </Link>

      <Link
        to={`/refund_policy`}
        className={'down-section-text'}
        style={{
          textDecoration: 'none',
          color: 'white'
        }}
      >
        Refund and Cancellation Policy
      </Link>
    </div>
  </div>
);
export default Footer;
