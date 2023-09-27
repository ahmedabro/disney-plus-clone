import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Details from './components/Details';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Login from './components/Login';
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { setMovies } from './features/movie/movieSlice'


function App() {

  const dispatch = useDispatch()

  useEffect(() => {

    const options = {
      method: 'GET',
      url: `https://api.themoviedb.org/3/trending/all/week`,
      params: {language: 'en-US'},
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOWFjMzAxMGI1OTI2YWQ2NDcwYzU3MDg0ODliZTliYiIsInN1YiI6IjY1MTMyMzg0OGE4NGQyMDBlMDVkNmIwNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jW6H6QTa7r9Cj5iE_2ZVvCL92sZXxZ9lhENZqLN_J4g'
      }
    };

    axios
      .request(options)
      .then((response) => {
        let tempMovies = response.data.results
        dispatch(setMovies(tempMovies))
        // console.log(tempMovies)
      })
      .catch((error) => {
        console.error(error);
      });
    
  }, [])



  // Router Setup
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='details/:id' element={<Details />}></Route>
          <Route path='/login' element={<Login />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
