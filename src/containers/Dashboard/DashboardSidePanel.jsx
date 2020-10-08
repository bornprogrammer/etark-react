import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import logo from '../../static/images/logo-white.png';
import summaryIcon from '../../static/images/product-details-icon.png';
import complaintsIcon from '../../static/images/complaint-icon.png';
import nextIcon from '../../static/images/next-icon.png';

import './dashboardSidePanel.scss';

const useStyles = makeStyles(theme => ({
  logo: {
    marginTop: 24,
    marginLeft: 32
  }
}));

const DashboardSidePanel = props => {
  const classes = useStyles();
  return (
    <div className={'dashboard-side-panel'}>
      <div className={classes.logo}>
        <Link to={``}>
          <img src={logo} alt={'etark'} />
        </Link>
      </div>
      <div className={'dashboard-tabs-section'}>
        <div
          className={
            props.activeTab === 'summary'
              ? 'dashboard-tabs active-tab'
              : 'dashboard-tabs'
          }
          onClick={() => props.tabSelection('summary')}
        >
          <img className={'dashboard-tabs-icon'} src={summaryIcon} alt={''} />
          <span>Summary</span>
          <img className={'dashboard-tabs-next-icon'} src={nextIcon} alt={''} />
        </div>
        <div
          className={
            props.activeTab === 'complaints'
              ? 'dashboard-tabs active-tab'
              : 'dashboard-tabs'
          }
          onClick={() => props.tabSelection('complaints')}
        >
          <img
            className={'dashboard-tabs-icon'}
            src={complaintsIcon}
            alt={''}
          />
          <span>Your Complaints</span>
          <img className={'dashboard-tabs-next-icon'} src={nextIcon} alt={''} />
        </div>
      </div>
      <div className={'sidepanel-footer'}>
        <div className={'help-text'}>Need help? Check out</div>
        <div className={'guide-text'}>
          <a href="/how_to_use">How to Use</a>
        </div>
      </div>
    </div>
  );
};

export default DashboardSidePanel;
