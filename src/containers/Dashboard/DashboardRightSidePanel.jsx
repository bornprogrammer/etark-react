import React, { useRef, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import DialogContent from '@material-ui/core/DialogContent';
import Dialog from '@material-ui/core/Dialog';

import './dashboardRightSidePanel.scss';
import moment from 'moment';

const useStyles = makeStyles(theme => ({
  large: {
    width: theme.spacing(15),
    height: theme.spacing(15)
  }
}));

const DashboardRightSidePanel = props => {
  const classes = useStyles();
  const inputRef = useRef(null);

  const [isActivitySelected, setActivitySelected] = useState(false);
  const [selectedActivity, setSelectedActivity] = useState({});

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   let reply = inputRef.innerText.trim();
  //   alert(reply);
  // };

  const handleActivitySelection = activity => {
    setActivitySelected(true);
    setSelectedActivity(activity);
  };

  return (
    <>
      <div className={'dashboard-right-side-panel'}>
        <div className={'logout-section'}>
          <Button
            variant="text"
            color="default"
            className={'button btn-logout'}
            onClick={props.handleLogout}
            disableRipple={true}
            endIcon={<ExitToAppIcon />}
          >
            Logout
          </Button>
        </div>
        <div className={'user-pic'}>
          <Avatar className={classes.large} />
        </div>
        <div className={'activity-feed-section'}>
          <div className={'title-label'}>
            <span>
              Activity <strong className={'feed-text'}>Feed</strong>
            </span>
          </div>
          <div className={'activity-feeds'}>
            {props.activities && props.activities.length > 0 ? (
              props.activities.map(activity => (
                <div
                  className={'activity-list-data'}
                  onClick={() => handleActivitySelection(activity)}
                >
                  {activity.type === 'COMPLAINT_CREATED' && (
                    <>
                      <span className={'event-title'}>
                        Complaint created by{' '}
                        <strong>{props.userInfo.name}</strong>
                      </span>
                      <span className={'event-date'}>
                        {moment(activity.createdAt).format('DD-MM-YYYY')}
                      </span>
                    </>
                  )}
                  {activity.type === 'COMPANY_RESPONSE' && (
                    <>
                      <span className={'event-title'}>
                        <strong>Company</strong> response on the complaint
                      </span>
                      <span className={'event-date'}>
                        {moment(activity.createdAt).format('DD-MM-YYYY')}
                      </span>
                    </>
                  )}
                  {activity.type === 'USER_RESPONSE' && (
                    <>
                      <span className={'event-title'}>
                        <strong>{activity.created_by}</strong> response on the
                        complaint
                      </span>
                      <span className={'event-date'}>
                        {moment(activity.createdAt).format('DD-MM-YYYY')}
                      </span>
                    </>
                  )}
                  {activity.type === 'LAWYER_RESPONSE' && (
                    <>
                      <span className={'event-title'}>
                        <strong>{activity.created_by}</strong> response on the
                        complaint
                      </span>
                      <span className={'event-date'}>
                        {moment(activity.createdAt).format('DD-MM-YYYY')}
                      </span>
                    </>
                  )}
                </div>
              ))
            ) : (
              <div className={'no-activty-section'}>
                <span>
                  Activities related to your complaint will appear here.
                </span>
              </div>
            )}
          </div>
        </div>
        {/*<div className={'customer-reply-section'}>*/}
        {/*  <form onSubmit={handleSubmit}>*/}
        {/*    <div id="reply-text-area" contentEditable="true" ref={inputRef}></div>*/}
        {/*  </form>*/}
        {/*</div>*/}
        <div className={'activity-response-action'}>
          <Button
            variant="contained"
            color="primary"
            className={'button'}
            onClick={props.handleActivtyResponse}
          >
            Add Response
          </Button>
        </div>
      </div>
      <Dialog
        open={isActivitySelected}
        onClose={() => setActivitySelected(false)}
        className={'show-activity-dialog'}
        maxWidth={'xl'}
      >
        <DialogContent className={'show-activity-dialog-content'}>
          <span className={'show-activity-title'}>Activity Data</span>
          <div className={'show-activity-dialog-main-content'}>
            {selectedActivity.activity_data}
          </div>
          <div className={'show-activity-dialog-user-info'}>
            <div className={'show-activity-audit-info'}>
              <em>Created On</em> -{' '}
              {moment(selectedActivity.createdAt).format('DD-MM-YYYY HH:mm:ss')}
            </div>
            <div className={'show-activity-audit-info'}>
              <em>Created by</em> - {selectedActivity.created_by}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default DashboardRightSidePanel;
