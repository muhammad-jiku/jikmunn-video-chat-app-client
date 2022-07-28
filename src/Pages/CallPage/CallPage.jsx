import React from 'react';
import CallPageFooter from '../../Components/CallPageContainer/CallPageFooter/CallPageFooter';
import CallPageHeader from '../../Components/CallPageContainer/CallPageHeader/CallPageHeader';
import MeetingInfo from '../../Components/CallPageContainer/MeetingInfo/MeetingInfo';
import Messenger from '../../Components/CallPageContainer/Messenger/Messenger';
import './CallPage.scss';

const CallPage = () => {
  return (
    <div className="callPageContainer">
      <video className="videoContainer" src="" controls></video>
      <CallPageHeader />
      <CallPageFooter />
      <MeetingInfo />
      <Messenger />
    </div>
  );
};

export default CallPage;
