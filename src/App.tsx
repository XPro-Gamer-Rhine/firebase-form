import React from 'react';
import './App.css';
import Upload from './components/upload';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Post } from './components/[id]';

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col items-center h-screen">
        <Routes>
          <Route path="/" element={<Upload />} />
          <Route path="/components/:id" element={<Post />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
