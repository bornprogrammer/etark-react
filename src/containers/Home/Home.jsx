import React, { useState } from 'react';
import { Button, Grid } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import { Helmet } from 'react-helmet';
import {
  createMuiTheme,
  ThemeProvider,
  useTheme
} from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Fade from 'react-reveal/Fade';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

// image
import heroChair from '../../static/images/hero-image.png';
import heroTower from '../../static/images/hero-towers.png';
import lowerTower from '../../static/images/lower-towers.png';
import complaintStrength from '../../static/images/complaint-strength.png';
import chancesWinning from '../../static/images/chances-winning.png';
import expectedCompensation from '../../static/images/expected-compensation.png';
import icon from '../../static/images/etark-logo2.png';

import offerIllustration from '../../static/images/illustrations/Offer1.png';

import pickup from '../../static/images/pickup-delivery.png';
import doorstep from '../../static/images/door-setp-icon.png';
import nodelay from '../../static/images/no-delay-icon.png';
import pickupicon from '../../static/images/pickup-icon.png';
import mapillus from '../../static/images/ill0.png';
import authorized from '../../static/images/ill1.png';
import moniter from '../../static/images/ill2.png';
import analysis from '../../static/images/ill6.png';
import companalysis from '../../static/images/ill5.png';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import complaintStrength1x from '../../static/images/complaint-strength-small.png';
import chancesWinning1x from '../../static/images/chances-winning-small.png';
import MuiAlert from '@material-ui/lab/Alert';
import expectedCompensation1x from '../../static/images/expected-compensation-small.png';

import './home.scss';

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

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Home = () => {
  const classes = useStyles();
  const [page, setPage] = useState(1);

  const [expanded, setExpanded] = React.useState(false);
  const [expanded2, setExpanded2] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleExpandClick2 = () => {
    setExpanded2(!expanded2);
  };

  function MyComponent() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('xs'));

    if (matches) {
      return (
        <div
          style={{
            maxWidth: '95vw',
            padding: '5%',
            textAlign: 'center',
            margin: '1.5% 0',
            borderRadius: '10px',
            float: 'center',
            fontSize: '16px',
            fontFamily: 'Poppins',
            backgroundColor: '#245FD3',
            color: '#fff'
          }}
        >
          <b>
            We'll come up with our mobile version shortly! Till then request you
            to select Desktop site from your browser settings for best viewing
            experience!
          </b>
        </div>
      );
    } else {
      return null;
    }
  }

  const theme = createMuiTheme();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={'app'}>
      {/* head contents */}
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="keywords"
          content="E-Tark,compalint,automated,automated complaint,smartphone,"
        />
        <meta
          name="description"
          content="Your one-stop solution for all your smartphone complaints even if it is out of warranty, without having to go to any service centre, call at any customer support or even google about it, , all this instantly, at your convenience, at your own time."
        />{' '}
        {/* OGP (Open Graph Protocol) */}
        <meta property="og:locale" content="en_IN" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="E-tark" />
        <meta
          property="og:description"
          content="Your one-stop solution for all your smartphone complaints even if it is out of warranty, without having to go to any service centre, call at any customer support or even google about it, , all this instantly, at your convenience, at your own time."
        />
        <meta property="og:url" content="https://www.etark.in" />
        <meta property="og:site_name" content="E-tark" />
        <meta property="og:image" content=" " />
        <title>ETark </title>
        <link rel=" canonical" href=" https://www.etark.in/" />
        <link rel="icon" type="image/png" href={icon} sizes="16x16" />
      </Helmet>

      <Fade>
        <Header />
      </Fade>

      {/* <div className="" id="offerbanner"></div>   */}
      <Fade>
        <Dialog
          fullWidth={true}
          maxWidth={'md'}
          open={open}
          onClose={handleClose}
          aria-labelledby="max-width-dialog-title"
          id={'offerbanner'}
        >
          <div id="closeofferbutton" onClick={handleClose}></div>
          <div className="offerBannerHeader">
            For fresh purchases made at our retail partner outlets post 30th
            Sep'20
          </div>
          <div className="offerView">
            <div className="offerillustrations">
              <img src={offerIllustration} alt="offer-banner" />
            </div>
            <div className="offerhighlights">
              <ul>
                <li>No more shady insurance covers</li>
                <li>No more waiting in a queue while servicing</li>
                <li>
                  No more tricks by unauthorized or home repair technicians
                </li>
                <li>
                  No more confusion on the warranty consideration of your device
                </li>
              </ul>
            </div>
          </div>
          <div className="offerextended">
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
                  Did you know ?
                </CardContent>
                <IconButton
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded
                  })}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </IconButton>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent style={{ marginLeft: '3%', fontSize: '18' }}>
                  <p>
                    <b>
                      Even while your phone is within the warranty period, your
                      phone may not be considered under warranty by service
                      centers when you visit there for servicing.
                    </b>
                  </p>
                </CardContent>
              </Collapse>
            </Card>
            <br />
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
                  How ETark Retail Coupons helps ?
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
                    <b>
                      Zero delivery charges for Pickup and Delivery of your
                      phone from your location to Authorized Service Centers and
                      vice versa.
                    </b>
                  </p>
                </CardContent>
              </Collapse>
            </Card>
          </div>

          <div className="offerBannerFooter">
            Buy from <a href="/retailoutlet">Our Retailer Partners</a> now!
          </div>
        </Dialog>
      </Fade>

      <div className="home">
        <Fade>
          <ThemeProvider theme={theme}>
            <div>
              <MyComponent />
            </div>
          </ThemeProvider>
          <div className={'top-section'}>
            <div className={'intro-section'}>
              <div className={'offer-button'} style={{ display: 'none' }}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleClickOpen}
                  className={'button'}
                >
                  OFFERS
                </Button>
              </div>
              <div className={'information'}>
                <h1>
                  The easiest and instant way for your smartphone complaint
                  resolution
                </h1>
                <p>
                  Your one-stop solution for all your smartphone complaints even
                  if it is out of warranty, without having to go to any service
                  centre, call at any customer support or even google about it,
                  all this instantly, at your convenience, at your own time.
                </p>
              </div>
              <div>
                <div className={'actions'}>
                  <Link to={`/sign_up`}>
                    <Button
                      variant="contained"
                      color="primary"
                      className={'button'}
                    >
                      GET STARTED
                    </Button>
                  </Link>
                  <Link to={`/login`} className="login-link">
                    EXISTING USER
                  </Link>
                </div>
                <div
                  style={{
                    marginTop: '4vh',
                    textAlign: 'center'
                  }}
                >
                  <Link to={`/servicecentrelogin`} className="login-link">
                    SERVICE CENTRE
                  </Link>
                </div>
              </div>

              <div className={'image-tower'}>
                <img src={lowerTower} alt={'hero-chair'} />
              </div>
            </div>
            <div className={'image-section'}>
              <img
                src={heroTower}
                alt={'hero-tower'}
                className={'hero-tower'}
              />
              <img
                src={heroChair}
                alt={'hero-chair'}
                className={'hero-chair'}
              />
            </div>
          </div>
        </Fade>
        <Fade>
          <div className="pickup">
            {/* page 1 */}
            {page === 1 && (
              <Grid container="container" spacing={3}>
                <Grid item="item" xs={6}>
                  <p
                    style={{
                      color: '#245FD3'
                    }}
                  >
                    WHY OPT FOR ETARK?
                  </p>
                  <p
                    style={{
                      fontSize: '1.5em'
                    }}
                  >
                    We’ve got multiple offerings to cover all your smartphone
                    issues
                  </p>
                </Grid>
                <Grid item="item" xs={6}>
                  <div
                    style={{
                      textAlign: 'right'
                    }}
                  >
                    <Button
                      onClick={() => {
                        setPage(1);
                      }}
                    >
                      <h1
                        style={{
                          fontFamily: 'Poppins',
                          fontSize: '2em',
                          fontWeight: 400
                        }}
                      >
                        {'<'}
                      </h1>
                    </Button>
                    <Button
                      onClick={() => {
                        setPage(2);
                      }}
                    >
                      <h1
                        style={{
                          fontFamily: 'Poppins',
                          fontSize: '2em'
                        }}
                      >
                        {'>'}
                      </h1>
                    </Button>
                  </div>
                </Grid>
                <Grid item="item" xs={12} sm={6}>
                  <img alt="pickup&del" src={pickup} />
                </Grid>
                <Grid item="item" xs={12} sm={6} className="pcikup-right">
                  <div className="points">
                    <img alt="pickup" src={pickupicon} />
                    &nbsp;
                    <p>
                      India's first intracity delivery for phone servicing to
                      get service by the top service centers in town
                    </p>
                  </div>
                  <div className="points">
                    <img alt="doorstep" src={doorstep} />
                    &nbsp;
                    <p>
                      Complete phone servicing experience without the hassle of
                      engaging with service centers
                    </p>
                  </div>
                  <div className="points">
                    <img alt="nodelay" src={nodelay} />
                    &nbsp;
                    <p>
                      No delay and additional costs in servicing due to
                      unavailability of spare parts
                    </p>
                  </div>
                </Grid>
              </Grid>
            )}
            {page === 2 && (
              <Grid container="container" spacing={3}>
                <Grid item="item" xs={6}>
                  <p
                    style={{
                      color: '#245FD3'
                    }}
                  >
                    WHY OPT FOR ETARK?
                  </p>
                  <p
                    style={{
                      fontSize: '1.5em'
                    }}
                  >
                    We’ve got multiple offerings to cover all your smartphone
                    issues
                  </p>
                </Grid>
                <Grid item="item" xs={6}>
                  <div
                    style={{
                      textAlign: 'right'
                    }}
                  >
                    <Button
                      onClick={() => {
                        setPage(1);
                      }}
                    >
                      <h1
                        style={{
                          fontFamily: 'Poppins',
                          fontSize: '2em'
                        }}
                      >
                        {'<'}
                      </h1>
                    </Button>
                    <Button
                      onClick={() => {
                        setPage(2);
                      }}
                    >
                      <h1
                        style={{
                          fontFamily: 'Poppins',
                          fontSize: '2em',
                          fontWeight: 400
                        }}
                      >
                        {'>'}
                      </h1>
                    </Button>
                  </div>
                </Grid>
                <Grid item="item" xs={12} sm={6}>
                  <img
                    alt="companalysis"
                    src={companalysis}
                    style={{
                      width: '80%'
                    }}
                  />
                </Grid>
                <Grid item="item" xs={12} sm={6} className="pcikup-right">
                  <div className="points">
                    <img alt="nodelay" src={chancesWinning1x} />
                    &nbsp;
                    <p>
                      Chances of winning at consumer court or in negotiation
                      with the manufacterer or seller
                    </p>
                  </div>
                  <div className="points">
                    <img alt="pickup" src={expectedCompensation1x} />
                    &nbsp;
                    <p>
                      Expected compensation you could get from the manufacturer
                      or seller for your complaint
                    </p>
                  </div>
                </Grid>
              </Grid>
            )}
          </div>
        </Fade>
        <Fade>
          <div className={'info-section'}>
            <span className={'info-text'}>
              Get your <strong>smartphone complaint </strong>
              resolved <strong>faster </strong>
              than ever before
            </span>
          </div>
        </Fade>
        <div className={'complaint-info-section'}>
          <Fade left="left">
            <div className={'right-side'}>
              <span className={'title-text'}>
                ETark vs Others
              </span>
              <span className={'sub-title-text'}>
                <p>
                  ETark instant intracity Pickup & delivery gets you assured
                  service from only the Top performing authorized service centres
                  in your city
                </p>
                <br />
                <p>
                  Your Phone company's own delivery might get you service from a
                  low performing service centre due to the hyperlocal nature of their delivery
                </p>
                <br />
                <p>Thus, ETark gets your phone serviced faster than anyone else</p>
              </span>
            </div>
          </Fade>
          <Fade right="right">
            <div className={'left-side'}>
              <img
                src={mapillus}
                alt={'hero-chair'}
                style={{
                  width: '80%'
                }}
              />
            </div>
          </Fade>
        </div>
        <div className={'complaint-info-section'}>
          <Fade left="left">
            <div className={'right-side'}>
              <img
                src={authorized}
                alt={'hero-chair'}
                style={{
                  width: '80%'
                }}
              />
            </div>
          </Fade>
          <Fade right="right">
            <div className={'left-side'}>
              <span className={'title-text'}>Our Credibility</span>
              <span className={'sub-title-text'}>
                <p>
                  1. We deal with smartphone company authorized service centers
                  only to get you the best in class service
                </p>
                <br />
                <p>
                  2. Avoid home visit repair agents or unauthorized service
                  centers who might lure you with lower prices or discounts only
                  to cause more problems in your phone in future
                </p>
              </span>
            </div>
          </Fade>
        </div>
        <div className={'complaint-info-section'}>
          <Fade left="left">
            <div className={'right-side'}>
              <span className={'title-text'}>
                Strict monitoring of your phone's servicing
              </span>
              <span className={'sub-title-text'}>
                <p>
                  1. Through our intelligent monitoring system, we'll track your
                  phone at each and every stage of service
                </p>
                <br />
                <p>
                  2. Seamless integration between service centers and our users
                  for a superior customer experience
                </p>
                <br />
                <p>3. Real-time status update of servicing</p>
              </span>
            </div>
          </Fade>
          <Fade right="right">
            <div className={'left-side'}>
              <img
                src={moniter}
                alt={'hero-chair'}
                style={{
                  width: '80%'
                }}
              />
            </div>
          </Fade>
        </div>
        <div className={'complaint-info-section'}>
          <Fade left="left">
            <div className={'right-side'}>
              <img
                src={analysis}
                alt={'hero-chair'}
                style={{
                  width: '80%'
                }}
              />
            </div>
          </Fade>
          <Fade right="right">
            <div className={'left-side'}>
              <span className={'title-text'}>
                Automated Instant Complaint analysis
              </span>
              <span className={'sub-title-text'}>
                We are the world's first service to do an instant online
                analysis of your complaint in the form of two parameters -{' '}
                <br />
                <strong>1. Chances of Winning</strong>
                <br />
                <strong>2. Expected Compensation</strong>
                <br />
                so that you can know instantly what is likely to happen had you
                filed your complaint in a consumer forum/ court
              </span>
            </div>
          </Fade>
        </div>
      </div>
      <div className={'bottom-section'}>
        <div className={'bottom-section-text'}>
          <span>
            Don’t wait, get your smartphone complaint resolved instantly
          </span>
        </div>
        <div className={'actions'}>
          <Link to={`/sign_up`}>
            <Button variant="contained" color="primary" className={'button'}>
              GET STARTED
            </Button>
          </Link>
          <Link to={`/how_to_use`} className="login-link">
            HOW TO USE
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
