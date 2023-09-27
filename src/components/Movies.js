import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { selectMovies } from '../features/movie/movieSlice'
import { useSelector } from 'react-redux'

function Movies() {

    const base_url = "https://image.tmdb.org/t/p/original/"
    const movies = useSelector(selectMovies)
    // console.log("This is movies", movies)

  return (
    <Container>
        <h4>Recommended for You</h4>
      <Content>
        { movies && 
            movies.map((movie) => (
                <Wrap key={movie.id}>
                    <Link to={`/details/${movie.id}`}>
                        <img src={`${base_url}${movie.poster_path}`} alt={movie.name ? movie.name : movie.title} />
                        {/* <p>{ movie.name ? movie.name : movie.title }</p> */}
                    </Link>
                </Wrap>
            ))
        }
      </Content>
    </Container>
  )
}

export default Movies


const Container = styled.div`
    padding: 50px 0;
    h4 {
        margin-bottom: 20px;
        font-size: 18px;
    }
`
const Content = styled.div`
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    align-items: center;
    justify-content: center;
    grid-gap: 25px;
`
const Wrap = styled.div`
    cursor: pointer;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    border: 3px solid #ffffff17;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;


    img {
        width: 100%;
        object-fit: cover;
    }
    &:hover {
        border: 3px solid rgba(255, 255, 255, 0.75);
        transform: scale(1.05);
    }

    a {
        display: flex;
    }
`