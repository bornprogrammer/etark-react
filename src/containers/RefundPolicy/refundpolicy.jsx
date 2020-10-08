import React from 'react';
import Navbar from '../../components/Header/Header.jsx';
import './style.css';

const refundpolicy = () => {
  return (
    <div className={'refundDiv'}>
      <Navbar />
      <div className={'form-bod'}>
        <h1>Refund and Cancellation Policy</h1>
        <div className={'tnc-bod'}>
          <p>
            <i>
              Any Capitalized terms used but not defined herein shall have the
              meaning assigned to them under the Terms of Use which govern your
              use of our website www.etark.in (the “<b>Website</b>”). The
              Website is also referred to as the “<b>Platform</b>”.
            </i>
          </p>
          <h3>(i) User Cancellation</h3>
          <p style={{ marginLeft: 0 }}>
            As a general rule User shall not be entitled to cancel Order once
            placed. The User can never cancel an order placed just the Neo Plan
            which comprises the complaint analysis. Any refund, if applicable
            shall be applicable for the Pickup and Delivery service or Pickup
            and Delivery service availed in conjunction with the Neo Plan,
            however even when the Neo Plan is availed in conjunction with the
            Pickup and Delivery service, matters of refund and cancellation
            shall be subjected to only the Pickup and Delivery service. The User
            may choose to cancel Order only for the pickup and delivery or
            pickup and delivery along with Neo plan only within 24 hours of
            receiving the service center estimate bill for those orders where
            the service partner has not considered the warranty of the device.
          </p>
          <p style={{ marginLeft: 0 }}>
            The User may also choose to cancel Order only for the pickup and
            delivery or pickup and delivery along with Neo plan only within 24
            hours of receiving the service center estimate bill for those orders
            where the service partner has considered the warranty of the device
            subjected to the condition that the service partner has not finished
            the servicing of the device or the service partner is in the middle
            of fixing the device in such a position that returning the device by
            simply assembling the parts would render the device non-functional.
          </p>
          <p style={{ marginLeft: 0 }}>
            Under both these cases of the User entitled to cancel, the device
            would be returned to the User’s address without repair with or
            without forfeiting of the Inspection Fee deposit, initially
            collected from the user by ETark, by the service center
          </p>
          <h3>(ii) Non-User Cancellation</h3>
          <p style={{ marginLeft: 0 }}>
            ETark reserves the right to collect a penalty for the Orders
            constrained to be cancelled by ETark for reasons not attributable to
            ETark, including but not limited to:
          </p>
          <p style={{ marginLeft: 0 }}>
            in the event if the address provided by User is either wrong or
            falls outside the pickup and delivery zone;
            <br />
            or
            <br />
            failure to contact User by phone or email or user being unavailable
            at the time of picking up the Order booking;
            <br />
            or
            <br />
            failure to contact User by phone or email at the time of servicing
            the Order booking;
            <br /> or
            <br /> Decline of servicing by the service center after inspecting
            the device. <br />
            or <br />
            failure to service the device after receiving payment from the user
            by the service center
            <br />
            <br />
            However, in the unlikely event of the Order for the device’s
            servicing being accepted by no service partner, ETark will contact
            the User on the phone number provided to us at the time of placing
            the Order and inform User of such non- acceptance. In such an event
            User shall be entitled to a refund to an amount upto 0% of the Order
            value.
          </p>
          <p style={{ marginLeft: 0 }}>
            Also, in the unlikely event of failure to service the device after
            receiving payment from the User by the service center, the User will
            be entitled to a refund to an amount up to the Service Center
            Estimate Bill sent to the User via. email.
          </p>
          <p style={{ marginLeft: 0 }}>
            In case of cancellations for the reasons attributable to ETark or
            the Service Partner before the device is picked up from the User’s
            location, the User shall be entitled to a refund to an amount upto
            0% of the Order value.
          </p>
          <p style={{ marginLeft: 0 }}>
            <br />
            In case of cancellations for the reasons attributable to the
            Logistics Partner, the User shall be entitled to a refund to an
            amount upto 0% of the Delivery value.
          </p>
          <h3>(iii) Cancellation policy for ETark</h3>
          <p style={{ marginLeft: 0 }}>
            The Orders placed by Users using the Platform are non-cancellable
            and non-refundable except if refund is requested under the following
            conditions –
          </p>
          <p style={{ marginLeft: 0 }}>
            If the Order could not be Picked up within 24 hours from the User’s
            location except reasons extraneous to ETark like offday for our
            Service Partners, National holiday, local or nationwide lockdown or
            Service Partner unavailable temporarily due to any pandemic;
            <br />
            If the User’s order isn’t accepted by any service partner doesn't
            accept or cancels the Order due to reasons not attributable to User,
            including but not limited to non-availability of spare parts, store
            cannot service online orders at that moment, store is overcrowded,
            etc.
            <br />
            If ETark cancels the Order due to reasons not attributable to Users,
            including but not limited to non-availability of Logistics Partner,
            etc.
          </p>
          <p style={{ marginLeft: 0 }}>
            ETark reserves the right to look into the cancellation request of
            the User and determine if such cancelation request falls under the
            conditions mentioned above. If ETark is satisfied that the request
            and same fulfills any of the aforesaid conditions, then ETark shall
            process the cancellation request and refund amounts to the Buyer.
          </p>
          <h3>(iv) Refunds or Compensation</h3>
          <p style={{ marginLeft: 0 }}>
            User may be entitled to a refund for postpaid Orders. ETark retains
            the right to retain the penalty payable by the Buyer in Section (ii)
            from the amount refundable to him/her.
            <br />
            <br />
            The User shall also be entitled to a refund of value in
            proportionate to the depreciated value as per the WDV method of
            depreciation of the smartphone when the phone’s purchase copy is
            provided by the User in our platform or the salvage value in case
            the phone’s purchase copy is not provided by the User in our
            platform in the event the device provided by the User for servicing
            is not returned to him/ her and the User requests for a refund for
            the said reason;
            <br />
            <br />
            User shall not be entitled for any compensation from ETark in the
            event the User finds the device to be non-functional after returned
            by ETark or the device bearing any external damage or internal
            damage, hardware or software malfunctioning
            <br />
            <br />
            User may be entitled to a refund upto 0% of the Order value if
            Service Partner fails to Service the Order due to a cause
            attributable to either Service Partner or ETark after paying the
            Service Center estimate fee, however such refunds will be assessed
            on a case to case basis by ETark.
            <br />
            <br />
            Our decision on refunds shall be final and binding.
          </p>
        </div>
      </div>
    </div>
  );
};

export default refundpolicy;
