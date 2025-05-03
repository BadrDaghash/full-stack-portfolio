import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Layout from "./Components/Layout";
import FrontEnd from './Components/Project/front-end/Frontend';
import Backend from './Components/Project/backend/Backend';
import NotFound from './Components/notfound/NotFound';


function App() {
  return (
    <>
    
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/projects/frontend" element={<FrontEnd/>} />
        <Route path="/projects/backend" element={<Backend/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
