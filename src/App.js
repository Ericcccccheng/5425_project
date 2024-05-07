import React from 'react';
import MainPage from './pages/MainPage';
import Spring from './pages/cate_spring';
import Upload from './pages/upload_re';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MainPage/>} />
          <Route path="/toSpring" element={<Spring />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/toUpload" element={<Upload />} />
         
        </Routes>
      </Router>
    </div>
  );
}

export default App;
