import React from 'react';
import MainPage from './pages/MainPage';
import Animal from './pages/cate_animal';
import Car from './pages/cate_car';
import Plant from './pages/cate_plant';
import Space from './pages/cate_space';
import Upload from './pages/upload_re';
import SearchResult from './pages/search_result';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/toAnimal" element={<Animal />} />
          <Route path="/toCar" element={<Car />} />
          <Route path="/toPlant" element={<Plant />} />
          <Route path="/toSpace" element={<Space />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/toUpload" element={<Upload />} />
          <Route path="/SearchResult" element={<SearchResult />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
