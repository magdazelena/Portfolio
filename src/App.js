import React, { useState } from 'react';
import Background from './components/Background';
import Header from './components/Header';
import Landing from './pages/Landing';
import './style/base.scss';
function App() {
  const [navStatus, setNavStatus] = useState(false);
  return (
    <div className="App">
      <Background isForeground={navStatus} />
      <Header setNavStatus={setNavStatus} />
      <Landing />
    </div>
  );
}

export default App;
