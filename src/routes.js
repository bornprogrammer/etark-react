import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import history from './history';
import MyLoadingComponent from './MyLoadingComponent';
import Loadable from 'react-loadable';
import NotFound from './containers/NotFound/notfound';
import Payment from './containers/Payment/payment';
const AsyncHome = Loadable({
  loader: () => import('./containers/Home/Home'),
  loading: MyLoadingComponent
});

const AsyncLogin = Loadable({
  loader: () => import('./containers/SignIn/SignIn'),
  loading: MyLoadingComponent
});

const AsyncForgotPassword = Loadable({
  loader: () => import('./containers/SignIn/forgotpass'),
  loading: MyLoadingComponent
});

const AsyncResetPassword = Loadable({
  loader: () => import('./containers/SignIn/resetpass'),
  loading: MyLoadingComponent
});

const AsyncSignUp = Loadable({
  loader: () => import('./containers/SignUp/SignUp'),
  loading: MyLoadingComponent
});

const AsyncForm = Loadable({
  loader: () => import('./containers/Form/form'),
  loading: MyLoadingComponent
});

const AsyncConfirm = Loadable({
  loader: () => import('./containers/Confirm/confirm'),
  loading: MyLoadingComponent
});

const AsyncPayment = Loadable({
  loader: () => import('./containers/Payment/payment'),
  loading: MyLoadingComponent
});

const ScDashboard = Loadable({
  loader: () => import('./containers/ScDashboard/scdashboard'),
  loading: MyLoadingComponent
});

const RpDashboard = Loadable({
  loader: () => import('./containers/RpDashboard/RpDashboard'),
  loading: MyLoadingComponent
});

const ScForm = Loadable({
  loader: () => import('./containers/ScForm/scform'),
  loading: MyLoadingComponent
});

const Help = Loadable({
  loader: () => import('./containers/Help/help'),
  loading: MyLoadingComponent
});

const AsyncScLogin = Loadable({
  loader: () => import('./containers/Sclogin/ScSignIn'),
  loading: MyLoadingComponent
});

const AsyncRpLogin = Loadable({
  loader: () => import('./containers/Rplogin/Rplogin'),
  loading: MyLoadingComponent
});

const About = Loadable({
  loader: () => import('./containers/About/about'),
  loading: MyLoadingComponent
});

const RetailCoupon = Loadable({
  loader: () => import('./containers/retailCoupon/retailCoupon'),
  loading: MyLoadingComponent
});

const RetailStatus = Loadable({
  loader: () => import('./containers/RetailStatus/RetailStatus'),
  loading: MyLoadingComponent
});

const Terms = Loadable({
  loader: () => import('./containers/Terms/terms'),
  loading: MyLoadingComponent
});

const servicePayment = Loadable({
  loader: () => import('./containers/ServicePayment/servicePayment'),
  loading: MyLoadingComponent
});

const Payments = Loadable({
  loader: () => import('./containers/Payments/payments'),
  loading: MyLoadingComponent
});

const Shipping = Loadable({
  loader: () => import('./containers/Shipping/shipping'),
  loading: MyLoadingComponent
});

const T = Loadable({
  loader: () => import('./containers/T/T'),
  loading: MyLoadingComponent
});
const Disclaimer = Loadable({
  loader: () => import('./containers/Disclaimer/disclaimer'),
  loading: MyLoadingComponent
});
const IntellectualProperty = Loadable({
  loader: () =>
    import('./containers/IntellectualProperty/intellectualProperty'),
  loading: MyLoadingComponent
});

const Refund = Loadable({
  loader: () => import('./containers/RefundPolicy/refundpolicy'),
  loading: MyLoadingComponent
});

const BsTerms = Loadable({
  loader: () => import('./containers/bsTerms/bsTerms'),
  loading: MyLoadingComponent
});

const ReTerms = Loadable({
  loader: () => import('./containers/reTerms/reTerms'),
  loading: MyLoadingComponent
});

const RetailOutlet = Loadable({
  loader: () => import('./containers/retailOutlet/retailOutlet'),
  loading: MyLoadingComponent
});

const Privacy = Loadable({
  loader: () => import('./containers/Privacy/privacy'),
  loading: MyLoadingComponent
});

const HnD = Loadable({
  loader: () => import('./containers/HnD/HnD'),
  loading: MyLoadingComponent
});

const userDash = Loadable({
  loader: () => import('./containers/Dashboard/Dashboard'),
  loading: MyLoadingComponent
});

const ProtectedRoute = props => {
  const user = localStorage.getItem('userdata');
  return user ? (
    <props.component history={props.history} />
  ) : (
    <Redirect to={{ pathname: '/login' }} />
  );
};

const ProtectedRoute2 = props => {
  const user = localStorage.getItem('scdata');
  return user ? (
    <props.component history={props.history} />
  ) : (
    <Redirect to={{ pathname: '/servicecentrelogin' }} />
  );
};

const ProtectedRoute3 = props => {
  const user = localStorage.getItem('rpdata');
  return user ? (
    <props.component history={props.history} />
  ) : (
    <Redirect
      to={{
        pathname: '/retailoutletlogin'
      }}
    />
  );
};

export default props => (
  <div>
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={AsyncHome} />
        <Route exact path="/login" component={AsyncLogin} />
        <Route exact path="/forgot_pwd" component={AsyncForgotPassword} />
        <Route exact path="/servicePayment" component={servicePayment} />
        <Route exact path="/reset_pwd" component={AsyncResetPassword} />
        <Route exact path="/sign_up" component={AsyncSignUp} />
        <ProtectedRoute exact path="/userDash" component={userDash} />
        <Route exact path="/payment" component={AsyncPayment} />
        <Route exact path="/HnD" component={HnD} />
        <ProtectedRoute
          history={history}
          exact
          path="/complaint"
          component={AsyncForm}
        />
        {/* <Route exact path="/complaint" component={AsyncForm} /> */}
        <ProtectedRoute
          history={history}
          exact
          path="/confirm"
          component={AsyncConfirm}
        />
        {/* <Route eaxct path="/confirm" component={AsyncConfirm} /> */}
        <Route exact path="/servicecentrelogin" component={AsyncScLogin} />
        <Route exact path="/retailoutletlogin" component={AsyncRpLogin} />
        <ProtectedRoute2
          history={history}
          exact
          path="/servicecentre"
          component={ScDashboard}
        />
        <ProtectedRoute3
          history={history}
          exact
          path="/retaildashboard"
          component={RpDashboard}
        />
        {/* <Route exact path="/retaildashboard" component={RpDashboard} /> */}
        <ProtectedRoute2
          history={history}
          exact
          path="/order"
          component={ScForm}
        />
        <ProtectedRoute3
          history={history}
          exact
          path="/couponconfirm"
          component={RetailStatus}
        />
        {/* <Route exact path="/order" component={ScForm} /> */}
        <Route exact path="/about" component={About} />
        <Route exact path="/t&c" component={Terms} />
        <Route exact path="/privacy" component={Privacy} />
        <Route exact path="/how_to_use" component={Help} />
        <Route exact path="/partner" component={BsTerms} />
        <Route exact path="/servicepartner" component={BsTerms} />
        <Route exact path="/retailpartner" component={ReTerms} />
        <Route exact path="/retailcoupon" component={RetailCoupon} />
        <Route exact path="/retailoutlet" component={RetailOutlet} />
        <Route exact path="/refund_policy" component={Refund} />
        <Route exact path="/shipping" component={Shipping} />
        <Route exact path="/terms" component={T} />
        <Route
          exact
          path="/intellectual_property"
          component={IntellectualProperty}
        />
        <Route exact path="/disclaimer" component={Disclaimer} />

        <Route exact path="/payments" component={Payments} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  </div>
);
