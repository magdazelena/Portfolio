import React, { useState } from 'react';
import Background from './components/Background';
import Header from './components/Header';
import Container from './pages/Container';

import './style/base.scss';
function App() {
  const [navStatus, setNavStatus] = useState(false);
  const [location, setLocation] = useState(0);
  return (
    <div className="App">
      <Background isForeground={navStatus} location={location} />
      <Header setNavStatus={setNavStatus} />
      <Container setBackgroundLocation={setLocation} />
    </div>
  );
}

export default App;
