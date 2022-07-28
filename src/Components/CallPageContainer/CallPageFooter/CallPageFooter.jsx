import React from 'react';
import './CallPageFooter.scss';
import {
  FaAngleUp,
  FaClosedCaptioning,
  FaDesktop,
  FaMicrophone,
  FaPhone,
  FaVideo,
} from 'react-icons/fa';

const CallPageFooter = () => {
  return (
    <div className="footerItem">
      <div className="leftItem">
        <div className="iconBlock">
          Meeting Details
          <FaAngleUp className="icon" />
        </div>
      </div>
      <div className="centerItem">
        <div className="iconBlock">
          <FaMicrophone className="icon" />
        </div>{' '}
        <div className="iconBlock">
          <FaPhone className="icon red" />
        </div>
        <div className="iconBlock">
          <FaVideo className="icon" />
        </div>
      </div>
      <div className="rightItem">
        <div className="iconBlock">
          <FaClosedCaptioning className="icon red" />
          <p className="title">Turn On Captions</p>
        </div>
        <div className="iconBlock">
          <FaDesktop className="icon red" />
          <p className="title">Present Now</p>
        </div>
      </div>
    </div>
  );
};

export default CallPageFooter;
