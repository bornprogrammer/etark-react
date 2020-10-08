import React from 'react';

// images
import up from '../../static/images/up-arrow.png';
import down from '../../static/images/down-arrow.png';
// style
import './cards.scss';

const Cards = props => {
  return (
    <div className="cardBod">
      <div className="card-left" style={{ display: 'flex' }}>
        <div className="card-icon">
          <img src={props.icon} alt="total-orders" />
        </div>
        <div className="card-cont">
          <p style={{ fontSize: '1.1em', marginBottom: '1vh' }}>{props.title}</p>
          <h1>{props.val}</h1>
          <p style={{ fontSize: '0.9em' }}>This {props.duration}</p>
        </div>
      </div>
      <div className="cardRight">
        <div className="diff">
          <img alt="inc" src={props.inc > 0 ? up : down} />
          <p style={{ color: props.inc > 0 ? '#52b03b' : '#E52B2B' }}> {props.inc}</p>
        </div>
        <p style={{ fontSize: '0.6em' }}>As compared to last week</p>
      </div>
    </div>
  );
};

export default Cards;
