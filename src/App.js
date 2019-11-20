import React from 'react';  
import './App.css';

import Navbar from './components/Navbar';
import Body from './components/Body';
import RightColumn from './components/RightColumn';
import LeftColumn from './components/LeftColumn';
function App() {
  return (
    <div>
      <Navbar />
      <div className="main">
        <LeftColumn />
        <Body />
        <RightColumn />
      </div>
    </div>
  );
}

export default App;
