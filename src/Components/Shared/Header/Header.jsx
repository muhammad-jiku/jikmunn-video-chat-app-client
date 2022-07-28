import React from 'react';
import './Header.scss';
import { BsCameraVideo, BsFillExclamationOctagonFill } from 'react-icons/bs';
import { BiHelpCircle } from 'react-icons/bi';
import { GrSettingsOption } from 'react-icons/gr';

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <BsCameraVideo style={{ fontSize: '50px' }} />
      </div>
      <div className="actions">
        <BsFillExclamationOctagonFill />
        <BiHelpCircle />
        <GrSettingsOption />
      </div>
    </div>
  );
};

export default Header;
