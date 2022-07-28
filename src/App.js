import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
// import Header from './Components/Shared/Header/Header';
import NotFound from './Components/Shared/NotFound/NotFound';
import CallPage from './Pages/CallPage/CallPage';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<CallPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
