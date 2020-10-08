import React from 'react';
import Navbar from '../../components/Header/Header.jsx';
import './retailCoupon.css';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 950
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  }
}));

const RetailCoupon = () => {
  const classes = useStyles();

  const [expanded, setExpanded] = React.useState(false);
  const [expanded2, setExpanded2] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleExpandClick2 = () => {
    setExpanded2(!expanded2);
  };

  return (
    <div>
      <Navbar />
      <div style={{ textAlign: 'center', margin: '0 5%', marginTop: '5vh' }}>
        <div></div>
        <div style={{ margin: '3% 20vw' }}>
          <h1>Retail Coupon</h1>
          <div class="aboutList">
            <br />
            <br />
            <p>
              <h3>How to avail ETark Retail Coupon ?</h3>
              <ul className="retailAvail">
                <li>
                  Ask for ETark Retail Coupon at any of{' '}
                  <a href="/retailoutlet">Our Retail Partner</a> stores while
                  making a purchase of phone for the specified brand only.
                </li>
                <li>
                  Scan the QR code at the store and pay an amount of Rs 150.
                  Soon you'll be receiving an email containing the Retail Coupon
                  along with other necessary details.
                </li>
                <li>
                  Go to{' '}
                  <a href="https://www.etark.in/">https://www.etark.in/</a>
                </li>
                <li>
                  <a href="/sign_up">Signup</a> with your mobile number that is
                  mentioned on your bill from the retail outlet.
                </li>
                <li>
                  Select our Pickup and Delivery Service either solo or in
                  combination with other services and apply the coupon code at
                  the Payment summary page.
                </li>
              </ul>
            </p>

            <br />
            <br />
            <br />
            <p>
              <Card className={classes.root}>
                <CardActions disableSpacing>
                  <CardContent
                    style={{
                      fontSize: '20px',
                      fontWeight: 'bolder',
                      color: '#245fd3',
                      textAlign: 'center'
                    }}
                  >
                    Coupon Terms and conditions
                  </CardContent>
                  <IconButton
                    className={clsx(classes.expand, {
                      [classes.expandOpen]: expanded
                    })}
                    onClick={handleExpandClick2}
                    aria-expanded={expanded2}
                    aria-label="show more"
                  >
                    <ExpandMoreIcon />
                  </IconButton>
                </CardActions>
                <Collapse in={expanded2} timeout="auto" unmountOnExit>
                  <CardContent style={{ marginLeft: '3%', fontSize: '18' }}>
                    <p>
                      <b>Terms and conditions for Availing Retail Coupon:</b>
                    </p>
                    <p>
                      <ul>
                        <li>
                          ETark Retail Coupon will be applicable on only
                          purchases of phone made for the specified brand from{' '}
                          <a href="/retailoutlet">Our Retail Partner</a>.
                        </li>
                        <li>
                          ETark Retail Coupon can be used only one time within
                          90 days from the time you receive our email containing
                          the Retail Coupon.
                        </li>
                        <li>
                          Using ETark Retail Coupon will make the delivery
                          charges Zero. However, other charges might be
                          applicable.
                        </li>
                        <li>
                          While availing our Pickup and Delivery Charges,
                          separate service fee might be raised by the Service
                          Centers in addition to the prices quoted on ETark's
                          website depending on the warranty consideration of
                          your device.
                        </li>
                        <li>
                          For more information of prices, please refer to{' '}
                          <a href="/payments">Payments</a> ,{' '}
                          <a href="refund_policy">
                            Refund and Cancellation Policy
                          </a>{' '}
                          , <a href="/t&c">Terms & Conditions</a>.
                        </li>
                      </ul>
                    </p>
                  </CardContent>
                </Collapse>
              </Card>
            </p>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RetailCoupon;
