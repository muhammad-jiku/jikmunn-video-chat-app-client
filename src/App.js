import React from 'react';
import './App.css';
import Notifications from './components/Notifications';
import Options from './components/Options';
import VideoPlayer from './components/VideoPlayer';

function App() {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <VideoPlayer />
      <Options />
      <Notifications />{' '}
    </div>
  );
}

export default App;
