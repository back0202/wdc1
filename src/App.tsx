import React from 'react';
import { Reset } from 'styled-reset';
import AllMembers from './pages/AllMembers';
import NotPresent from './pages/NotPresent';
import Home from './pages/Home';
function App() {
  return (
    <div>
      <Reset />

      <Home />
    </div>
  );
}

export default App;
