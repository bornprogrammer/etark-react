import React from 'react';
import Navbar from '../../components/Header/Header.jsx';
import './payments.css';
const About = () => {
  return (
    <div>
      <Navbar />
      <div style={{ textAlign: 'center', margin: '0 5%', marginTop: '5vh' }}>
        <div></div>
        <div style={{ margin: '3% 20vw' }}>
          <h1>Payments</h1>
          <div class="aboutList">
            <p>
              <b>How do I pay for an ETark purchase?</b>
              <br />
              <br />
              ETark offers you multiple payment methods. Whatever your online
              mode of payment, you can rest assured that ETark's trusted payment
              gateway partners use secure encryption technology to keep your
              transaction details confidential at all times.
              <br />
              <br />
              You may use Internet Banking, Debit/ Credit Card, and Wallet to
              make your purchase.
              <br />
              <br />
              <b>
                Are there any hidden charges when I make a purchase on ETark?
              </b>
              <br />
              <br />
              There are NO hidden charges when you make a purchase on ETark. The
              prices listed for all the items are final and all-inclusive of
              taxes. The price you see on the Complaint page under the summary
              section may not be the only price that you pay for. In case of our
              Pickup and Delivery service, a separate Proforma Invoice ,
              depending on the warranty consideration status of the device by
              the Service Partner corresponding to our Service Partner’s
              estimate before commencing the servicing the device may be shared
              with the user later over email asking him to make payment for the
              same.
              <br />
              <br />
              In order to offset the deduction in payments made per transaction
              on ETark due to charges levied by our Payments partner, we levy an
              additional charge to the tune of 2.41% over and above the final
              amount.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
