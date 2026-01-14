import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import UI01 from './pages/ui/UI01';
import UI02 from './pages/ui/UI02';
import UI03 from './pages/ui/UI03';
import UI04 from './pages/ui/UI04';
import UI05 from './pages/ui/UI05';
import UI06 from './pages/ui/UI06';
import UI07 from './pages/ui/UI07';
import UI08 from './pages/ui/UI08';
import UI09 from './pages/ui/UI09';
import UI10 from './pages/ui/UI10';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ui/01" element={<UI01 />} />
        <Route path="/ui/02" element={<UI02 />} />
        <Route path="/ui/03" element={<UI03 />} />
        <Route path="/ui/04" element={<UI04 />} />
        <Route path="/ui/05" element={<UI05 />} />
        <Route path="/ui/06" element={<UI06 />} />
        <Route path="/ui/07" element={<UI07 />} />
        <Route path="/ui/08" element={<UI08 />} />
        <Route path="/ui/09" element={<UI09 />} />
        <Route path="/ui/10" element={<UI10 />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
