import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { Button } from '@material-ui/core';

import './RetailStatus.scss';

const RetailStatus = props => {
  return (
    <div className={'retailMessageDiv'}>
      <Header />
      <div className="messageHeader">
        <div className="retailStatusHeading">Success</div>
      </div>
      <div className="messageView">
        <div className="StatusMessage">
          You have Successfully Generated ETark Retail Coupon for customer,{' '}
          <span>User Name</span>{' '}
        </div>
        <div className="nextButton">
          <a href="/retaildashboard">
            <Button className="freshRetailButton" variant="contained">
              Generate a Fresh Retail Coupon
            </Button>
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RetailStatus;
