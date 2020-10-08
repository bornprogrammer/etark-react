import React from 'react';
import Navbar from '../../components/Header/Header.jsx';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';

import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import hygiene from '../../static/images/illustrations/hygiene.png';
import loc1 from '../../static/images/illustrations/location/1.PNG';
import loc2 from '../../static/images/illustrations/location/2.PNG';
import loc3 from '../../static/images/illustrations/location/3.PNG';
import loc4 from '../../static/images/illustrations/location/4.PNG';
import getco1 from '../../static/images/illustrations/getco/1.PNG';
import getco2 from '../../static/images/illustrations/getco/2.PNG';
import getco3 from '../../static/images/illustrations/getco/3.PNG';
import getco4 from '../../static/images/illustrations/getco/4.PNG';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import './help.css';

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

function About() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [expanded2, setExpanded2] = React.useState(false);
  const [expanded3, setExpanded3] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleExpandClick2 = () => {
    setExpanded2(!expanded2);
  };

  const handleExpandClick3 = () => {
    setExpanded3(!expanded3);
  };
  return (
    <div>
      <Navbar />
      <div style={{ textAlign: 'center', margin: '0 5%', marginTop: '5vh' }}>
        <div></div>

        <div style={{ margin: '3% 20vw' }}>
          <h1>Help And Documentation</h1>
          <br />
          <div class="helpList">
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
                  Basic hygiene to use ETark
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
                <CardContent style={{ fontSize: '18' }}>
                  <p>
                    1. Do not refresh the page when the payment pop up appears
                    after you click on our Pay Now button. If at all you need to
                    cancel the payment, simply close the pop up. As you click on
                    Proceed, you will enter Paytm's payment gateway interface
                    where ETark has no role and Paytm's own policies would be
                    applicable there.
                  </p>
                  <br />
                  <img style={{ maxWidth: '750px' }} src={hygiene} />
                  <br />
                  <p>
                    2. If you get stuck somewhere while using ETark (except
                    Paytm's Payment gateway) with errors like{' '}
                    <div style={{ display: 'inline', color: '#245fd3' }}>
                      <b>Server Error</b>
                    </div>{' '}
                    or{' '}
                    <div style={{ display: 'inline', color: '#245fd3' }}>
                      <b> Invalid Credentials</b>
                    </div>
                    , simply refresh the page, otherwise drop us a mail at
                    support@etark.in with proper screenshots of the error /and
                    Order Invoice No. (if any)
                  </p>{' '}
                  <br />
                  <p>
                    3. Avoid uploading multiple attachments simultaneously while
                    using ETark. Doing so might make the process slow for you.
                    Wait till one file gets uploaded, then proceed with the next
                    one.
                  </p>
                  <br />
                  <p>
                    4. Wherever possible, mention the Order Invoice No. (if any)
                    in every mail that you write to us.
                  </p>
                  <br />
                  <p>
                    5. For the Pickup and Delivery Service, it is mandatory to
                    have the coordinates (latitude and longitude values) of the
                    Pickup address mentioned in the respective fields. By
                    default, the coordinates are chosen from your device's
                    present location if{' '}
                    <div style={{ display: 'inline', color: '#245fd3' }}>
                      <b>location access</b>
                    </div>{' '}
                    in enabled for ETark. In case you wish to change the Pickup
                    address location to some other place, you need to{' '}
                    <div style={{ display: 'inline', color: '#245fd3' }}>
                      <b>enter the coordinates</b>
                    </div>{' '}
                    of that place in the Latitude and Longitude fields as well
                    as type in the address details in the respective fields.{' '}
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
                  Steps to enable location access for ETark on your device
                </CardContent>
                <IconButton
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded2
                  })}
                  onClick={handleExpandClick2}
                  aria-expanded={expanded2}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </IconButton>
              </CardActions>
              <Collapse in={expanded2} timeout="auto" unmountOnExit>
                <CardContent style={{ fontSize: '18' }}>
                  <p>
                    If you are getting this message on your screen, then follow
                    the steps shown below
                  </p>
                  <br />
                  <img style={{ maxWidth: '750px' }} src={loc1} />
                  <p>
                    1. On your computer, open Chrome. At the top right, click
                    More. Settings.
                  </p>
                  <br />
                  <img style={{ maxWidth: '750px' }} src={loc2} />
                  <br />
                  <p>
                    2. Under "Privacy and security," click Site settings. Select
                    www.etark.in
                  </p>{' '}
                  <br />
                  <img style={{ maxWidth: '750px' }} src={loc3} />
                  <br />
                  <p>3. Click Location. Turn Allow on and refresh the page.</p>
                  <br />
                  <img style={{ maxWidth: '750px' }} src={loc4} />
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
                  Get the coordinates (latitude and longitude) of any place you
                  wish to have as your Pickup Address
                </CardContent>
                <IconButton
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded3
                  })}
                  onClick={handleExpandClick3}
                  aria-expanded={expanded3}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </IconButton>
              </CardActions>
              <Collapse in={expanded3} timeout="auto" unmountOnExit>
                <CardContent style={{ fontSize: '18' }}>
                  <p>
                    1. On your computer, open Google Maps. If you're using Maps
                    in Lite mode, you'll see a lightning bolt at the bottom and
                    you won't be able to get the coordinates of a place.
                    <br />
                    <img style={{ maxWidth: '750px' }} src={getco1} />
                    <br />
                    2. Right-click the place or area on the map.
                  </p>
                  <br />
                  <p>3. Select What's here?</p> <br />
                  <img style={{ maxWidth: '750px' }} src={getco2} />
                  <p>
                    4. At the bottom, you'll see a card with the coordinates
                  </p>
                  <br />
                  <img style={{ maxWidth: '750px' }} src={getco3} />
                  <br />
                  <p>
                    5. Copy those coordinates and paste the first value in the
                    latitude field (remove the comma or space if any) and the
                    second value in the longitude field (remove the space if
                    any) of the Address column in ETark
                  </p>
                  <br />
                  <img style={{ maxWidth: '750px' }} src={getco4} />
                  <br />
                  <p>
                    For more info on how to get coordinates on Other devices or
                    Operating systems, refer to{' '}
                    <a href="https://www.wikihow.com/Get-Latitude-and-Longitude-from-Google-Maps">
                      here.
                    </a>
                  </p>
                </CardContent>
              </Collapse>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
