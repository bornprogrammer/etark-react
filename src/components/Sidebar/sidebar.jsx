import React from 'react';
import { useSelector } from 'react-redux';

// img
import done from '../../static/images/done.png';
// style
import './sidebar.css';

// cards
export const Step = props => {
  return (
    <div
      className="items"
      style={{ background: props.active ? props.bgcolor : 'transparent' }}
    >
      <div
        className="number"
        style={{ display: props.curr > props.step ? 'none' : 'block' }}
      >
        <span
          className="step"
          style={{
            background: props.active ? props.nocolor1 : props.nocolor2,
            color: props.fadetxt1 == null || props.active ? 'white' : '#9D9BA8'
          }}
        >
          {props.step}
        </span>
      </div>
      <div
        className="done"
        style={{ display: props.curr > props.step ? 'block' : 'none' }}
      >
        <img alt="done" src={done} style={{ width: '1.2vw' }} />
      </div>
      <div className="itemarea">
        <h1 style={{ color: props.active ? props.txt1 : props.fadetxt1 }}>
          {props.heading}
        </h1>
        <p style={{ color: props.active ? props.txt2 : props.fadetxt2 }}>
          {props.detail}
        </p>
      </div>
    </div>
  );
};

const Sidebar = props => {
  const { step } = useSelector(state => state.formstep);
  var i = 1;
  const items = props.data.map(dtl => (
    <Step
      heading={dtl.heading}
      detail={dtl.detail}
      active={step === 1 ? step === i : step - 1 === i}
      step={i++}
      curr={step === 1 ? step : step - 1}
      bgcolor={props.bgcolor}
      txt1={props.txt1}
      txt2={props.txt2}
      fadetxt1={props.fadetxt1}
      fadetxt2={props.fadetxt2}
      nocolor1={props.nocolor1}
      nocolor2={props.nocolor2}
    />
  ));
  return <div className="side-body">{items}</div>;
};

export default Sidebar;
