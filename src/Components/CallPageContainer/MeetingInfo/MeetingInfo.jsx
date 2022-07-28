import React from 'react';
import { GrClose, GrCopy, GrUserAdd } from 'react-icons/gr';
import { FaShieldAlt } from 'react-icons/fa';
import './MeetingInfo.scss';

const MeetingInfo = () => {
  return (
    <div className="meetingInfoBlock">
      <div className="meetingHeader">
        <h3>Your Meeting is ready</h3>
        <GrClose className="icon" />
      </div>
      <button className="addPeopleButton">
        <GrUserAdd className="icon" /> Add Others
      </button>
      <p className="infoText">Or share the meeting links with the others</p>
      <div className="meetLink">
        <span>some random URL</span>
        <GrCopy className="icon" />
      </div>
      <div className="permissionText">
        <FaShieldAlt className="icon" />
        <p className="smallText">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente,
          suscipit.
        </p>
      </div>
      <p className="smallText">Joined as xyz@gmail.com</p>
    </div>
  );
};

export default MeetingInfo;
