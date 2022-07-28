import React from 'react';
import Header from '../../Components/Shared/Header/Header';
import './Home.scss';
import { BiVideoPlus } from 'react-icons/bi';
import { BsKeyboardFill } from 'react-icons/bs';
import meeting from '../../assests/meeting.png';

const Home = () => {
  return (
    <div className="homePage">
      <Header />
      <div className="body">
        <div className="left">
          <div className="content">
            <h2>Video Chat App</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae
              debitis, illum animi corrupti asperiores facere iste, eligendi
              fugiat aliquid obcaecati harum, minus nam quidem! Sequi?
            </p>
            <div className="actionBtn">
              <button className="btn green">
                <BiVideoPlus className="btnGreenJoin" /> New Meeting
              </button>
              <div className="inputBlock">
                <div className="inputSection">
                  <BsKeyboardFill className="iconBlock" />
                  <input type="text" placeholder="Enter meeting link" />
                </div>
                <div className="btn noBg">Join</div>
              </div>
            </div>
          </div>
          <div className="helpText">
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div className="right">
          <div className="content">
            <img src={meeting} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
