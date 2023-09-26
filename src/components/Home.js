import React, { useEffect } from 'react'
import styled from 'styled-components'
import ImgSlider from './ImgSlider'
import Viewers from './Viewers'
import Movies from './Movies'
import db from '../firebase'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { setMovies } from '../features/movie/movieSlice'

function Home() {

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

  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Movies />
    </Container>
  )
}

export default Home


// Styled Component CSS code
const Container = styled.main`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
    &:before {
        position: absolute;
        content: "";
        background: url("/images/home-background.png");
        background-size: cover;
        background-position: center;
        background-attachment: fixed;
        background-repeat: no-repeat;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: -1;
    }
`
// Styled Component CSS code