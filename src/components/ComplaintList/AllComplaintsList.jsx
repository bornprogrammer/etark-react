import React from 'react';
import Button from '@material-ui/core/Button';
import ComplaintList from './ComplaintList';

import './allComplaintsList.scss';

const AllComplaintsList = props => {
  return (
    <>
      {props.complaints.length > 0 && (
        <div className={'complaint-info'}>
          <div className={'complaint-info-header'}>
            <div className={'complaint-info-header-title'}>Your Dashboard</div>
            {props.currentTab === 'summary' && (
              <div>
                <Button
                  variant="text"
                  color="default"
                  className={'button btn-all-complaint'}
                  onClick={props.handleViewAllComplaints}
                  disableRipple={true}
                >
                  View All Complaints
                </Button>
              </div>
            )}
          </div>
          <div className={'complaint-info-data'}>
            <ComplaintList
              openComplaint={props.openComplaint}
              complaints={props.complaints}
              showActivity={props.showActivity}
            />
          </div>
        </div>
      )}
      {props.complaints.length === 0 && (
        <div className={'no-complaint-info'}>
          <div className={'no-complaint-info-content'}>
            <span>
              Looks like you haven’t haven’t initiated any complaint yet. We’re
              here to listen to you even when no one does.
            </span>
          </div>
          <div className={'dashboard-complaint-action'}>
            <Button
              variant="contained"
              color="primary"
              className={'button'}
              onClick={props.handleNewComplaint}
            >
              Start your complaint
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default AllComplaintsList;
