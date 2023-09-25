import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Details from './components/Details';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';


function App() {

  // Router Setup
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='details/:id' element={<Details />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
