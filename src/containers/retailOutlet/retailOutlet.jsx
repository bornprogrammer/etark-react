import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { Helmet } from 'react-helmet';
import icon from '../../static/images/etark-logo2.png';

import axios from 'axios';

import './retailOutlet.scss';

//production api
const prodapi = process.env.REACT_APP_PRODAPI;

class RetailOutlet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emptymessage: 'Select Brand and City to filter',
      currentcity: 'Select a city',
      currentbrand: 'Select a brand',
      currentcityid: 0,
      currentbrandid: 0,
      cities: [],
      brands: [],
      retailers: []
    };
  }

  dropBrandList() {
    document
      .getElementById('brandFilter')
      .classList.toggle('droppedFilterOptions');
  }

  dropCityList() {
    document
      .getElementById('cityFilter')
      .classList.toggle('droppedFilterOptions');
  }

  changecity(ele) {
    this.setState(
      {
        currentcityid: ele.target.getAttribute('value'),
        currentcity: ele.target.innerText
      },
      () => {
        this.getRetailer();
      }
    );

    this.dropCityList();
  }

  changebrand(ele) {
    this.setState(
      {
        currentbrandid: ele.target.getAttribute('value'),
        currentbrand: ele.target.innerText
      },
      () => {
        this.getRetailer();
      }
    );
    this.dropBrandList();
  }

  getBrands() {
    axios
      .get(`${prodapi}masters/categories/1/makers`)
      // .then(res => )
      .then(res => {
        this.setState({ brands: res.data.result });
      })
      .catch(err => {
        console.log('Error');
        console.log(err);
      });
  }

  getCites() {
    axios
      .get(`${prodapi}masters/cities`)
      .then(res => {
        this.setState({ cities: res.data.result });
      })
      .catch(err => {
        console.log('Error');
        console.log(err);
      });
  }

  getRetailer() {
    var retailurl = `${prodapi}retailer?`;

    if (this.state.currentcityid != 0) {
    }
    retailurl += `city_id=${this.state.currentcityid}&`;

    if (this.state.currentbrandid != 0) {
    }
    retailurl += `maker_id=${this.state.currentbrandid}&`;

    console.log(retailurl);

    axios
      .get(retailurl)
      .then(res => {
        if (res.data.httpStatus == 200) {
          this.setState({ retailers: res.data.result });
        } else {
          this.setState({ retailers: [] });
        }
      })
      .catch(err => {
        console.log('Error');
        console.log(err);
        this.setState({ retailers: [], emptymessage: 'No Retailers found' });
      });
  }

  componentWillMount() {
    this.getBrands();
    this.getCites();
  }

  render() {
    return (
      <div className={'retailOutDiv'}>
        <Helmet>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta
            name="keywords"
            content="ETark,compalint,automated,automated complaint,smartphone,"
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
          <title>Retail Partner</title>
          <link rel="canonical" href=" https://www.etark.in/" />
          <link rel="icon" type="image/png" href={icon} sizes="16x16" />
        </Helmet>
        <Header />
        <div className="retailHeader">
          <div className="retailHeading">Our Retailer Partners</div>
        </div>
        <div className={'retailFilters'}>
          <div className="selectFilters">
            <div className="filterInputs">
              <div className="selectedValue" onClick={this.dropBrandList}>
                {this.state.currentbrand}
              </div>
              <div className="filterOptions" id="brandFilter">
                {this.state.brands.map(brand => {
                  return (
                    <div onClick={this.changebrand.bind(this)} value={brand.id}>
                      {brand.maker_name}
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="filterInputs">
              <div className="selectedValue" onClick={this.dropCityList}>
                {this.state.currentcity}
              </div>
              <div className="filterOptions" id="cityFilter">
                {this.state.cities.map(city => {
                  return (
                    <div onClick={this.changecity.bind(this)} value={city.id}>
                      {city.name}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="showRetailers">
            {this.state.retailers.map(retailer => {
              return (
                <div className="retailers">
                  <div className="verifiedMark">Verified</div>
                  <div className="retailDetails">
                    <div className="retailer">
                      <div className="retailName">
                        <span>Name</span>
                        <span>{retailer.retailer_name}</span>
                      </div>
                      <div className="retailContact">
                        <span>Contact</span>
                        <span>{retailer.phone_number}</span>
                      </div>
                    </div>
                    <div className="retailAddress">
                      <span>Address</span>
                      <span>{retailer.address}</span>
                    </div>
                  </div>
                </div>
              );
            })}
            {this.state.retailers.length % 2 == 1 ? (
              <div className="hiddenretailers"></div>
            ) : null}
            {this.state.retailers.length == 0 ? (
              <div className="emptyretailers">{this.state.emptymessage}</div>
            ) : null}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default RetailOutlet;
