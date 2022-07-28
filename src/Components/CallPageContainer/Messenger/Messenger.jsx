import React from 'react';
import './Messenger.scss';
import {
  FaCommentAlt,
  FaPaperPlane,
  FaTimes,
  FaUserFriends,
} from 'react-icons/fa';

const Messenger = () => {
  return (
    <div className="messengerContainer">
      <div className="messengerHeader">
        <h3>Meeting Details</h3>
        <FaTimes className="icon" />
      </div>
      <div className="messengerHeaderTabs">
        <div className="tab">
          <FaUserFriends className="icon" />
          <p>People (1)</p>
        </div>

        <div className="tab active">
          <FaCommentAlt className="icon" />
          <p>chat</p>
        </div>
      </div>

      <div className="chatSection">
        <div className="chatBlock">
          <div className="sender">
            You <small>12 PM</small>
          </div>{' '}
          <p className="msg">Here comes actual message</p>
        </div>
      </div>

      <div className="sendMsgSection">
        <input type="text" placeholder="Send a message to everyone" />
        <FaPaperPlane className="icon" />
      </div>
    </div>
  );
};

export default Messenger;
