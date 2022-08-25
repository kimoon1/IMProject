import React from 'react';
import Home from './routes/Home';
import SetMember from './routes/SetMember';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/setmember' element={<SetMember />} />
      </Routes>
    </Router>
  );
}

export default App;
