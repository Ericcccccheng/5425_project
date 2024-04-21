import React from 'react';
import MainPage from './pages/MainPage';
import Spring from './pages/cate_spring';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MainPage/>} />
          <Route path="/cate_spring" element={<Spring />} />
          <Route path="/main" element={<MainPage />} />
         
        </Routes>
      </Router>
    </div>
  );
}

export default App;
