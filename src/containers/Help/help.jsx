import React from 'react';
import Navbar from '../../components/Header/Header.jsx';
import { Link } from 'react-router-dom';
import './help.css';
const About = () => {
  return (
    <div>
      <Navbar />
      <div style={{ textAlign: 'center', margin: '0 5%', marginTop: '5vh' }}>
        <div></div>
        <div style={{ margin: '3% 20vw' }}>
          <h1>Resolve your smartphone complaint in these five simple steps</h1>
          <div class="helpList">
            <p style={{ textAlign: 'left', marginTop: '2vh' }}>
              <ol>
                <li>
                  If you are new to our website, create an account by clicking
                  on <Link to={`/sign_up`}>GET STARTED</Link>. Users already
                  registered with us may simply click on{' '}
                  <Link to={`/login`}>LOGIN</Link>
                </li>
                <li>
                  Log in to ETark and select the brand of your smartphone which
                  is causing trouble and the city from where you belong
                </li>
                <li>
                  Proceed to Fill in your Complaint details and know your
                  chances of winning
                </li>
                <li>
                  Select the plan you wish to avail.
                  <ul style={{ marginLeft: 80 }}>
                    <li>
                      <b>Pickup And Delivery Service</b>: It is advisable that
                      for technical issues, you choose this plan which will get
                      your phone taken to the authorized service center for an
                      unparalleled quality service, get it fixed and returned
                      safely to you in the shortest possible time under our
                      strict supervision
                    </li>
                    <li>
                      <b>Neo plan</b>: This is advisable for non- technical
                      issues like Missing item or Payment where you may follow
                      up with the company against which you have a grievance on
                      your own but before you do so make use of our expert
                      analysis covered under this plan so that you understand
                      your position against the company.
                    </li>
                    <li>
                      <b>Pickup And Delivery Service + Neo plan</b>: This is
                      advisable when you have a technical issue with your
                      smartphone but you also need clarification on your
                      position against the company.
                    </li>
                  </ul>
                </li>
                <li>
                  After you make the payment :
                  <ul style={{ marginLeft: 80 }}>
                    <li>
                      You will be able to use our Instant Complaint analysis
                      covered under the <b>Neo</b> plan instantly by clicking on
                      the <a href="">Download Report</a> button
                    </li>
                    <li>
                      For the <b>Pickup and Delivery Service</b>, we shall reach
                      out to you within 24 hours* of your booking for the pickup
                      of your phone between the service center open timings.
                      We’ll take it up from there and return your phone when
                      it’s serviced.
                    </li>
                  </ul>
                </li>
              </ol>
            </p>
            <p style={{ textAlign: 'right', fontSize: 10 }}>
              {' '}
              *Refer to <a href="/t&c">T&C</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
