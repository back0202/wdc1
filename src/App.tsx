import React from 'react';
import AllMembers from './pages/AllMembers';
import NotPresent from './pages/NotPresent';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/AllMembers' element={<AllMembers />} />
      <Route path='/NotPresent' element={<NotPresent />} />
    </Routes>
  );
}

export default App;
