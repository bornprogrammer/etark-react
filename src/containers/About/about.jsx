import React from 'react';
import Navbar from '../../components/Header/Header.jsx';
import './about.css';
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
const About = () => {
  const classes = useStyles();

  const [expanded, setExpanded] = React.useState(false);
  const [expanded2, setExpanded2] = React.useState(false);
  const [expanded3, setExpanded3] = React.useState(false);
  const [expanded6, setExpanded6] = React.useState(false);
  const [expanded5, setExpanded5] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const [expanded4, setExpanded4] = React.useState(false);

  const handleExpandClick4 = () => {
    setExpanded4(!expanded4);
  };

  const handleExpandClick2 = () => {
    setExpanded2(!expanded2);
  };

  const handleExpandClick5 = () => {
    setExpanded5(!expanded5);
  };

  const handleExpandClick6 = () => {
    setExpanded6(!expanded6);
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
          <h1>About Us</h1>
          <div class="aboutList">
            <p>
              ETark is an automated complaint resolution platform for smartphone
              complaints. We help in resolving both technical and non-technical
              smartphone problems via. our service offerings. ETark was
              conceptualized after identifying the plight of hapless smartphone
              customers and the inefficiency of the service centers.
              <br />
              <br />
              How ETark helps customers?
              <br />
              <br />
            </p>
            <h3>Resolving technical problems :</h3>
            <p>
              Having a technical problem with your smartphone can be disastrous
              because unlike any other gadget, a smartphone lets you stay
              connected with the world and manage all your electronic records.
              The current approaches that a user usually takes :
            </p>
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
                    Visit an authorized service center
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
                        While an authorized service center is always
                        recommended, but as a user, you don’t know if:
                      </b>
                    </p>
                    <p>
                      <ul>
                        <p>
                          A. Parts are available at the service center to
                          service your device
                        </p>
                        <p>
                          B. Your device would be considered within warranty by
                          the service center
                        </p>
                        <p>
                          C. The exact problem in your device and the price to
                          be paid to fix that
                        </p>
                      </ul>
                    </p>
                    <p>
                      All this demands you to visit the service center and wait
                      in a queue with other customers which can often take hours
                      with the possibility of parts not available or the device
                      not considered within warranty by the service center or
                      the quoted price of servicing out of your budget!
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
                    Visit an unauthorized service center
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
                        Although an unauthorized service center might seem light
                        on your pocket, this route is never recommended because
                        :
                      </b>
                    </p>
                    <p>
                      <ul>
                        <li>
                          Due to the poor quality of servicing, they often
                          result in frequent annual repairs for the same issue
                          or some other problem thus making the actual cost of
                          repair for that phone way higher than the cost of
                          repair by an authorized service center
                        </li>
                        <li>
                          Your personal data could be retrieved from your device
                          even if you have removed the same from your device. So
                          due to low accountability of unauthorized service
                          centers, data could be stolen from your device during
                          servicing.
                        </li>
                      </ul>
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
                    Book for a home visit repair service
                  </CardContent>
                  <IconButton
                    className={clsx(classes.expand, {
                      [classes.expandOpen]: expanded
                    })}
                    onClick={handleExpandClick3}
                    aria-expanded={expanded3}
                    aria-label="show more"
                  >
                    <ExpandMoreIcon />
                  </IconButton>
                </CardActions>
                <Collapse in={expanded3} timeout="auto" unmountOnExit>
                  <CardContent style={{ marginLeft: '3%', fontSize: '18' }}>
                    <p>
                      <b>
                        Home visit repair services are quite popular nowadays
                        due to the convenience of home repair that they promise
                        but this should be avoided due to the following reasons:
                      </b>
                    </p>
                    <p>
                      <ul>
                        <li>
                          Most of the home repair services don’t have any
                          authorization from the device manufacture to provide
                          servicing, thus the accountability and quality of
                          servicing is low
                        </li>
                        <li>
                          Many a times your device demands a part replacement
                          which may not be available for the home visit repair
                          agent at that point and post their inspection of the
                          device at your location, they might take your device
                          to their service center thus causing an additional
                          delay in the servicing of the device
                        </li>
                      </ul>
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
                    Device Insurance companies
                  </CardContent>
                  <IconButton
                    className={clsx(classes.expand, {
                      [classes.expandOpen]: expanded
                    })}
                    onClick={handleExpandClick4}
                    aria-expanded={expanded4}
                    aria-label="show more"
                  >
                    <ExpandMoreIcon />
                  </IconButton>
                </CardActions>
                <Collapse in={expanded4} timeout="auto" unmountOnExit>
                  <CardContent style={{ marginLeft: '3%', fontSize: '18' }}>
                    <p>
                      <b>
                        Although device Insurance companies promise to insure
                        your device from future damage or malfunctioning:
                      </b>
                    </p>
                    <p>
                      They often result in long waiting time to get clearance
                      from the smartphone manufacturer to get the ensuing
                      servicing covered which offsets the cost savings that they
                      promise through their insurance
                      <br />
                      <br />
                      All these approaches have their own share of flaws.
                      <br />
                      <br /> ETark firmly believes that the best way to solve
                      any technical issue is through authorized service centers
                      only provided the inefficiencies of the service centers
                      are removed and the customer doesn’t have to go through
                      any hassle. This is exactly where we step in and we ensure
                      that both the customer and the service center are
                      seamlessly connected!
                    </p>
                  </CardContent>
                </Collapse>
              </Card>
            </p>

            <br />
            <h3>Resolving non-technical problems :</h3>
            <p>
              Problems like missing, damaged or duplicate items during purchase
              or Payment related issues like improper bill, wrongful deductions
              etc are some of the examples of non- technical problems that
              customers face.
              <br />
              <br />
              The ideal way to solve this is to reach out to the seller
              (e-commerce firm/ offline retailer) or the device manufacturer
              (e.g. Samsung, Apple etc.). However a customer’s voice can go
              unheard in a discussion with the other party. So to lend a
              strength to the customer’s voice, we do an instant analysis of
              his/ her complaint and share certain reports with him/ her which
              can help identify the merit of the complaint/ grievance.
              <br />
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
                    Chances of winning
                  </CardContent>
                  <IconButton
                    className={clsx(classes.expand, {
                      [classes.expandOpen]: expanded
                    })}
                    onClick={handleExpandClick5}
                    aria-expanded={expanded5}
                    aria-label="show more"
                  >
                    <ExpandMoreIcon />
                  </IconButton>
                </CardActions>
                <Collapse in={expanded5} timeout="auto" unmountOnExit>
                  <CardContent style={{ marginLeft: '3%', fontSize: '18' }}>
                    <p>
                      Chances of winning tells you how likely you are to win in
                      a consumer court had the complaint been filed there
                      <br />
                      <br />
                      Or Alternatively,
                      <br />
                      <br />
                      How likely you are to win in a negotiation with the other
                      party (device manufacturer or seller) by quoting your
                      winning chances in a consumer court as a reference
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
                    Expected compensation
                  </CardContent>
                  <IconButton
                    className={clsx(classes.expand, {
                      [classes.expandOpen]: expanded
                    })}
                    onClick={handleExpandClick6}
                    aria-expanded={expanded6}
                    aria-label="show more"
                  >
                    <ExpandMoreIcon />
                  </IconButton>
                </CardActions>
                <Collapse in={expanded6} timeout="auto" unmountOnExit>
                  <CardContent style={{ marginLeft: '3%', fontSize: '18' }}>
                    Expected compensation tells you what compensation (free
                    servicing, product/ part replacement or monetary
                    compensation) you are likely to get from the other party had
                    your complaint been filed in a consumer court
                    <br />
                    <br />
                    Or Alternatively,
                    <br />
                    <br />
                    what compensation (free servicing, product/ part
                    replacement) you are likely to get from the other party in a
                    negotiation
                  </CardContent>
                </Collapse>
              </Card>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
