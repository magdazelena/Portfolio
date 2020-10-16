import React, { useState } from 'react';
import Background from './components/Background';
import Header from './components/Header';
import Container from './pages/Container';

import './style/base.scss';
function App() {
  const [navStatus, setNavStatus] = useState(false);
  return (
    <div className="App">
      <Background isForeground={navStatus} />
      <Header setNavStatus={setNavStatus} />
      <Container />


    </div>
  );
}

export default App;
