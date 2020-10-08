import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../components/Header/Header';
import axios from 'axios';
import {
  Container,
  Grid,
  MenuItem,
  TextField,
  Button,
  ButtonGroup,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormControl,
  CircularProgress,
  makeStyles,
  Snackbar,
  LinearProgress
} from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import actions from '../../actionTypes';

import formBtn from '../../static/images/primary-cta.svg';
import pickup from '../../static/images/receive.png';
import analyse from '../../static/images/analytics.png';
import tick from '../../static/images/vector1.png';
import wrong from '../../static/images/wrong.png';
import cancelimg from '../../static/images/primary-cta2.svg';

const useStyles = makeStyles(theme => ({
  input: {
    fontFamily: 'Poppins',
    fontSize: '1em',
    textTransform: 'none'
  },
  btnRoot: {
    color: 'white',
    backgroundColor: '#245fd3',
    fontFamily: 'Poppins',
    margin: '0 2%',
    padding: '1vh 3vw',
    fontSize: '1em',
    textTransform: 'none'
  },
  btnCancel: {
    margin: '0 2%',
    width: '15vw'
  }
}));

const Scexist = props => {
  // style
  const classes = useStyles();
  const { cityName, gotCity } = useSelector(state => state.cities);
  const [brand, setBrand] = useState('');
  const [city, setCity] = useState('');
  const [scexist, setScexist] = useState('');
  const [isLoading, setLoading] = useState(true);
  const [cancel, setCancel] = useState(false);
  const { brands, gotBrands } = useSelector(state => state.brands);
  const child = [],
    brandNames = [],
    sortBrand = [];

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: actions.GET_BRANDS
    });
    dispatch({
      type: actions.GET_CITY
    });
  }, []);

  useEffect(() => {
    if (gotCity === true && gotBrands === true) {
      setLoading(false);
    }
  }, [gotCity, gotBrands]);

  // brands
  for (const x in brands) {
    brandNames.push(brands[x].maker_name);
    sortBrand.push([brands[x].id, brands[x].maker_name]);
  }
  sortBrand.sort((a, b) => {
    var nameA = a[1].toUpperCase();
    var nameB = b[1].toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });
  sortBrand.forEach(x => {
    child.push(
      <MenuItem key={x[0]} value={x[0]} className={classes.input}>
        {x[1] === 'Xiomi Mi' ? 'Xiaomi (Mi)' : x[1]}
      </MenuItem>
    );
  });
  const brandProps = {
    options: sortBrand,
    getOptionLabel: option => option[1]
  };

  const sortCity = [];

  for (const x in cityName) {
    sortCity.push([cityName[x].id, cityName[x].name]);
  }
  sortCity.sort((a, b) => {
    var nameA = a[1].toUpperCase();
    var nameB = b[1].toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });
  const cityProps = {
    options: sortCity,
    getOptionLabel: option => option[1]
  };

  const handleSubmit = () => {
    setLoading(true);
    axios
      .get(process.env.REACT_APP_PRODAPI + `sc/existance/${city}/${brand}`)
      .then(res => {
        setScexist(res.data.result.does_sc_exists);
        setCancel(true);
        setLoading(false);
      })
      .catch(() => {});
  };

  const nextBtn = [];
  nextBtn.push(
    isLoading ? null : cancel === true ? (
      <Button
        className={classes.btnCancel}
        onClick={() => {
          props.history.push('/');
        }}
      >
        <img alt="calcel" src={cancelimg} style={{ width: '100%' }} />
      </Button>
    ) : (
      <Button
        disabled={city === '' || brand === ''}
        className={classes.btnRoot}
        variant="contained"
        onClick={handleSubmit}
      >
        Next
      </Button>
    )
  );

  const nextStep = event => {
    event.preventDefault();
    dispatch({
      type: actions.FORM_STEP,
      payload: 1
    });
  };

  return (
    <Container className="form">
      {/* heading */}
      <div className="header">
        <div>
          <h1>Tell us a bit about your device</h1>
          <p>
            We need to get some details about your device and the type of
            problem you’re facing, so that we can do an instant analysis of your
            complaint and let you know right away
          </p>
        </div>
        {nextBtn}
      </div>
      <hr />
      {/* form */}
      {isLoading === true ? (
        <CircularProgress style={{ marginTop: '150px', marginLeft: '500px' }} />
      ) : (
        <div className="phonedtlbody">
          <Grid container>
            <Grid item xs={12} sm={6}>
              <p style={{ margin: '2% 0', marginTop: '5%', textAlign: 'left' }}>
                What is the brand of your smartphone?
              </p>
              <Autocomplete
                {...brandProps}
                disableClearable={true}
                id="brand"
                renderOption={option => (
                  <p style={{ fontFamily: 'Poppins', fontSize: '1em' }}>
                    {option[1]}
                  </p>
                )}
                onChange={(event, newValue) => {
                  if (newValue) setBrand(newValue[0]);
                }}
                style={{ width: '90%' }}
                classes={{ inputRoot: classes.input }}
                renderInput={params => (
                  <TextField
                    {...params}
                    className="field"
                    placeholder="E.g. Samsung"
                    variant="outlined"
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <p style={{ margin: '2% 0', marginTop: '5%', textAlign: 'left' }}>
                Which city are you based it?
              </p>
              <Autocomplete
                {...cityProps}
                id="city"
                disableClearable={true}
                renderOption={option => (
                  <p style={{ fontFamily: 'Poppins', fontSize: '1em' }}>
                    {option[1]}
                  </p>
                )}
                onChange={(event, newValue) => {
                  if (newValue) setCity(newValue[0]);
                }}
                style={{ width: '90%' }}
                classes={{ inputRoot: classes.input }}
                renderInput={params => (
                  <TextField
                    {...params}
                    className="field"
                    placeholder="City"
                    variant="outlined"
                  />
                )}
              />
            </Grid>

            {scexist === true && (
              <Grid item xs={12} style={{ marginTop: '2vh' }}>
                <div
                  style={{
                    margin: '2% 0',
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  <img alt="pickup" src={pickup} />
                  &nbsp;&nbsp;<p>Pickup and delivery service</p>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <img alt="tick" src={tick} />
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <img alt="analyse" src={analyse} />
                  &nbsp;&nbsp;
                  <p>Our expert complaint analysis report</p>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <img alt="tick" src={tick} />
                </div>
              </Grid>
            )}
            {scexist === false && (
              <Grid item xs={12} style={{ marginTop: '2vh' }}>
                <div
                  style={{
                    margin: '2% 0',
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  <img alt="pickup" src={pickup} />
                  &nbsp;&nbsp;<p>Pickup and delivery service</p>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <img alt="wrong" src={wrong} style={{ width: '1vw' }} />
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <img alt="analyse" src={analyse} />
                  &nbsp;&nbsp;
                  <p>Our expert complaint analysis report</p>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <img
                    alt="tick"
                    src={tick}
                    style={{ width: '1vw', height: 'auto' }}
                  />
                </div>
              </Grid>
            )}
            {scexist !== '' && (
              <Button style={{ marginTop: '2%' }} onClick={nextStep}>
                <img alt="next" src={formBtn} />
              </Button>
            )}
          </Grid>
        </div>
      )}
    </Container>
  );
};

export default Scexist;
