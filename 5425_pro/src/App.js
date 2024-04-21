import React from 'react';
import MainPage from './pages/MainPage';
import Request from './pages/Request';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MainPage/>} />
          <Route path="/request" element={<Request />} />
          <Route path="/main" element={<MainPage />} />
         
        </Routes>
      </Router>
    </div>
  );
}

export default App;
