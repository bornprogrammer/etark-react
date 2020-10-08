import React from 'react';
import Navbar from '../../components/Header/Header.jsx';
import { Link } from 'react-router-dom';
import heroChair from '../../static/images/hero-image.png';
import './shipping.css';
const About = () => {
  return (
    <div>
      <Navbar />
      <div style={{ textAlign: 'center', margin: '0 5%', marginTop: '5vh' }}>
        <div></div>
        <div style={{ margin: '3% 20vw' }}>
          <h1>Applicable for our Pickup and Delivery Service</h1>
          <div class="aboutList">
            <p>
              <b>
                What are the delivery charges for our Pickup and Delivery
                Service?
              </b>
              <br />
              <br />
              Delivery charge varies with each City and the distance between the
              User’s location and the Authorized Service Partner’s location. Our
              system automatically allocates a User of a particular brand in a
              particular city to the nearest Authorized Service Center Partner
              for that brand.
              <br />
              <br />A User will be shown a higher delivery charge when the
              delivery distance increases. For any delivery trip, there is a
              base fare and a variable fare which varies from city to city.
              <br />
              <br />
              Right now, the minimum base fare for our deliveries is Rs 30 for
              the first three KM and the minimum variable fare for our
              deliveries is Rs 7 for every additional KM beyond first three KM
              while the maximum base fare for our deliveries is Rs 40 for the
              first two KM and the maximum variable fare for our deliveries is
              Rs 18 for the every additional KM beyond the first two KM.
              <br />
              <br />
              The delivery charges for a user may be computed using any
              combination of base and variable fare for delivery within and
              including these limit values
              <br />
              <br />
              <b>
                Why does the delivery date not correspond to the delivery
                timeline of X-Y business days?
              </b>
              <br />
              <br />
              It is possible that a User has registered for our Pickup and
              Delivery Service at some time of the day when service centers are
              closed because that time is beyond their open timings or it’s an
              off day for the service center or some extraneous circumstances
              like Lockdown due to which the center is closed temporarily. As
              such, depending on case to case basis, for the trip to the service
              center, we will maintain a constant communication with the
              customer and inform them the nearest date the Service Center will
              open. In case there’s an unprecedented delay, the order shall be
              delivered to the next nearest service center from the User’s
              location.
              <br />
              <br />
              Similarly, for the return trip back to the User’s address, the
              delivery will happen post servicing of the phone, on the fact that
              when the service center has notified us of the service completion
              on their end the service center is open, and on other extraneous
              reasons like Lockdown in the area or temporary shut down due to
              which the return delivery might get delayed.
              <br />
              <br />
              <b>What is the estimated delivery time?</b>
              <br />
              <br />
              Generally, Service Centers try to service the devices delivered to
              them within the same Business day. Business days exclude public
              holidays and Sundays. However, due to unprecedented circumstances
              like lockdown or some other extraneous reasons where parts
              required to be replaced in the device is taking time to be
              procured, delay might happen. Under all circumstances, we shall
              keep the User informed about the latest developments on the
              servicing of their device.
              <br />
              <br />
              Estimated delivery time depends on the following factors:
              <ul>
                <li>Availability of Parts at the Service Center</li>
                <li>Existing orders traffic at the Service Center</li>
                <li>
                  Extraneous reasons like Lockdown or Service Center closed
                  temporarily as a consequence
                </li>
              </ul>
              <br />
              <br />
              <b>
                Are there any hidden costs on servicing done by Service Partners
                of ETark?
              </b>
              <br />
              <br />
              There are NO hidden charges. After the device is delivered to the
              Service Partner, post an initial inspection, the Service Partner
              through ETark’s platform sends an estimated bill for the servicing
              to be done in the form of a Proforma Invoice which can be
              authenticated at the User, in case he/ she wishes to with the
              manufacturer. After the user makes the payment online through the
              link shared with them, the Service Partner commences servicing.
              Please refer to the{' '}
              <Link to={`/refund_policy`}>
                Refund and Cancellation Policy
              </Link>{' '}
              for more information.
              <br />
              <br />
              <b>
                Does the Pickup and Delivery Service apply to any location
                within a city?
              </b>
              <br />
              <br />
              Generally, it does. We are usually capable of delivering orders
              irrespective of the distance between the Service Partner’s
              location and the User’s location. However, due to unprecedented or
              unforeseen circumstances like Lockdown in certain pockets of the
              city, there might be temporary issues with our accessibility.
              <br />
              <br />
              <b>
                ETark does not/cannot provide pickup and delivery to my area.
                Why?
              </b>
              <br />
              <br />
              Whether your location is covered under our Pickup and Delivery
              Service depends on:
              <ul>
                <li>
                  Whether there are ETark Service Partners for that particular
                  brand of your device in your location
                </li>
                <li>
                  Legal restrictions, if any, in providing Pickup and Delivery
                  Service for particular devices in your location
                </li>
                <li>
                  The availability of reliable Logistics partners in your
                  location
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
