import React from 'react';
import { HiUsers } from 'react-icons/hi';
import { BsFillChatFill } from 'react-icons/bs';
import { FaUserCircle } from 'react-icons/fa';
import './CallPageHeader.scss';

const CallPageHeader = () => {
  return (
    <div className="frameHeader">
      <div className="headerItems iconBlock">
        {' '}
        <HiUsers className="icon" />
      </div>
      <div className="headerItems iconBlock">
        {' '}
        <BsFillChatFill className="icon" />
        <span className="alertCircleIcon"></span>
      </div>
      <div className="headerItems timeBlock">
        <span> 12:00 P.M.</span>
      </div>
      <div className="headerItems iconBlock">
        {' '}
        <FaUserCircle className="icon" />
      </div>
    </div>
  );
};

export default CallPageHeader;
