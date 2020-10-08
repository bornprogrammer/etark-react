import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import DashboardSidePanel from './DashboardSidePanel';
//import { Link } from 'react-router-dom';
//import DashboardRightSidePanel from './DashboardRightSidePanel';
import actions from '../../actionTypes';
import avatar from '../../static/images/avatar.png';
import { Button, Modal, Grid, makeStyles, TextField } from '@material-ui/core';
import AllComplaintsList from '../../components/ComplaintList/AllComplaintsList';
import CircularProgress from '@material-ui/core/CircularProgress';

import './dashboard.scss';

const useStyles = makeStyles(theme => ({
  checkboxLabel: {
    fontFamily: 'Poppins',
    fontSize: '0.9em'
  },
  input: {
    fontFamily: 'Poppins',
    fontSize: '1em',
    color: 'white',
    textTransform: 'none'
  },
  nextBtn: {
    color: 'white',
    backgroundColor: '#245fd3',
    fontFamily: 'Poppins',
    margin: '0 2%',
    padding: '1vh 3vw',
    textTransform: 'none',
    fontSize: '1em'
  },
  txtField: {
    fontFamily: 'Poppins',
    margin: '1vh 0'
  },
  addBtn: {
    fontFamily: 'Poppins',
    width: '100%',
    padding: '1vh 0',
    margin: ' 5% 0',
    textTransform: 'none',
    backgroundColor: '#245fd3'
  },
  popover: {
    pointerEvents: 'none',
    fontSize: '0.8em',
    fontFamily: 'Poppins'
  },
  pop: {
    position: 'relative',
    backgroundColor: 'white',
    margin: '10% auto',
    width: '49vw',
    padding: '4vh 2vw',
    borderRadius: '5px',
    textAlign: 'center'
  }
}));

const Dashboard = props => {
  const [currentTab, setCurrentTab] = useState('summary');
  const [complaintView, setComplaint] = useState([]);
  const [complaints, setComplaints] = useState(0);
  const [count, setCount] = useState([]);
  const [openActivity, setOpenActivity] = useState(false);
  const [activityDisplayed, setActivityDisplayed] = useState([]);
  const dispatch = useDispatch();
  const classes = useStyles();
  const [loading, setLoading] = useState(true);
  const [complaintsPerStatus, setStat] = useState([]);

  const user = JSON.parse(localStorage.getItem('userdata'));
  useEffect(() => {
    fetch(process.env.REACT_APP_PRODAPI + `users/${user.id.toString()}/`)
      .then(response => response.json())
      .then(json => {
        if (!json.result) {
          json.result = [];
        }
        json.result.sort(function(a, b) {
          return b.complainId - a.complainId;
        });
        setComplaints(json.result);
        console.log(json);
      })
      .then(() => {
        fetch(
          process.env.REACT_APP_PRODAPI +
            `users/${user.id.toString()}/order-counts`
        )
          .then(res => res.json())
          .then(resp => {
            console.log(resp);
            setCount(resp.result);
            setLoading(false);
          });
      })
      .catch(err => {});
  }, []);
  const openComplaint = complaint => {
    setOpenActivity(true);
    var view = {
      order_no: complaint.orderDetails.order_no,
      problem_description: complaint.complainDetail.problem_description,
      service_center_name: complaint.sc_name,
      service_center_contact: complaint.sc_phone,
      service_center_address: complaint.sc_address
    };
    setComplaint(view);
  };

  const handleNewComplaint = () => {
    dispatch({ type: actions.RESET_COMPLAINT_DETAIL });
    props.history.push('/complaint');
  };

  const showActivity = complaint => {
    setOpenActivity(true);
  };

  const body2 = (
    <div className="Scmodal">
      <div className="modalHead">
        <h1>Order Details</h1>
      </div>
      {console.log(complaintView)}

      <Grid container="container" className="device-detail" spacing={2}>
        <Grid item="item" xs={12} sm={6} className="device-items">
          <p
            style={{
              marginRight: '5%'
            }}
          >
            ORDER INVOICE NO.
          </p>
          <p
            style={{
              color: '#F6F6F6'
            }}
          >
            {complaintView.order_no}
          </p>
        </Grid>
        <Grid item="item" xs={12} sm={6} className="device-items">
          <p
            style={{
              marginRight: '5%'
            }}
          >
            SERVICE CENTER NAME
          </p>
          <p
            style={{
              color: '#F6F6F6'
            }}
          >
            {complaintView.service_center_name}
          </p>
        </Grid>
        <Grid item="item" xs={12} sm={6} className="device-items">
          <p
            style={{
              marginRight: '5%'
            }}
          >
            SERVICE CENTER CONTACT
          </p>
          <p
            style={{
              color: '#F6F6F6'
            }}
          >
            {complaintView.service_center_contact}
          </p>
        </Grid>
        <Grid item="item" xs={12} sm={6} className="device-items">
          <p
            style={{
              marginRight: '5%'
            }}
          >
            SERVICE CENTER ADDRESS
          </p>
          <p
            style={{
              color: '#F6F6F6'
            }}
          >
            {complaintView.service_center_address}
          </p>
        </Grid>

        <Grid item="item" xs={12}>
          <p
            style={{
              marginBottom: '2%',
              fontWeight: 'bolder'
            }}
          >
            Summary
          </p>
          <TextField
            // error={inputError['descrip']}
            id="descrip"
            value={complaintView.problem_description}
            multiline="multiline"
            rows={8}
            variant="outlined"
            style={{
              color: 'white',
              width: '80%'
            }}
            InputProps={{
              classes: {
                notchedOutline: classes.notchedOutline
              },
              className: classes.input
            }}
            // onBlur={e => handleOnBlur(e)}
          />
          <Button
            onClick={() => {
              setOpenActivity(false);
            }}
            style={{
              color: 'white',
              background: 'transparent',
              left: '50px',
              fontFamily: 'Poppins',
              boxShadow: 'none'
            }}
          >
            Close
          </Button>
        </Grid>
      </Grid>
    </div>
  );

  return (
    <div className={'dashboard-container'}>
      <DashboardSidePanel tabSelection={setCurrentTab} activeTab={currentTab} />
      <Modal
        onClose={() => {
          setOpenActivity(false);
        }}
        open={openActivity}
      >
        {body2}
      </Modal>
      {loading === true ? (
        <CircularProgress
          style={{
            marginLeft: '700px',
            marginTop: '300px'
          }}
        />
      ) : (
        <div className={'dashboard-body'}>
          {currentTab === 'summary' && (
            <>
              {' '}
              <div className={'user-info'}>
                {' '}
                <div>
                  <p className={'user-info-sub-title'}>
                    Welcome to your ETark dashboard!
                  </p>
                  <p className={'user-info-content'}>
                    Check your ongoing and past complaints, their status and
                    your complaint details
                  </p>
                </div>
                {complaints.length > 0 && (
                  <div className={'dashboard-complaint-action'}>
                    <Button
                      variant="contained"
                      color="primary"
                      className={'button'}
                      onClick={() => {
                        props.history.push('/complaint');
                      }}
                    >
                      Start your complaint
                    </Button>
                  </div>
                )}{' '}
                {complaints.length === 0 && (
                  <div className={'user-avatar'}>
                    <img src={avatar} alt={'avatar'} />
                  </div>
                )}{' '}
              </div>
              <div className={'complaint-data'}>
                <div className={'complaint-data-card'}>
                  <div className={'complaint-data-card-label'}>
                    TOTAL COMPLAINTS
                  </div>{' '}
                  <div className={'complaint-data-card-value'}>
                    {count.total_complaints}
                  </div>
                </div>
                <div className={'complaint-data-card'}>
                  <div className={'complaint-data-card-label'}>COMPLETED</div>
                  <div className={'complaint-data-card-value'}>
                    {count.completed}
                  </div>
                </div>
                <div className={'complaint-data-card'}>
                  <div className={'complaint-data-card-label'}>IN PROGRESS</div>
                  <div className={'complaint-data-card-value'}>
                    {count.in_progress}
                  </div>
                </div>
                <div className={'complaint-data-card'}>
                  <div className={'complaint-data-card-label'}>INCOMPLETE</div>
                  <div className={'complaint-data-card-value'}>
                    {count.incomplete}
                  </div>
                </div>
              </div>
            </>
          )}
          <AllComplaintsList
            complaints={complaints}
            openComplaint={openComplaint}
            handleNewComplaint={handleNewComplaint}
            currentTab={currentTab}
            handleViewAllComplaints={() => setCurrentTab('complaints')}
            showActivity={showActivity}
          />
        </div>
      )}
    </div>
  );
};

export default withRouter(Dashboard);
