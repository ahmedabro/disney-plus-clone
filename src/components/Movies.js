import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

function Movies() {
  return (
    <Container>
        <h4>Recommended for You</h4>
      <Content>
        <Wrap>
            <Link to='details/:id'>
                <img src='/images/avengers.jpg' alt='Avengers'/>
            </Link>
        </Wrap>
        <Wrap>
            <Link to='details/:id'>
                <img src='/images/avengers.jpg' alt='Avengers'/>
            </Link>
        </Wrap>
        <Wrap>
            <Link to='details/:id'>
                <img src='/images/avengers.jpg' alt='Avengers'/>
            </Link>
        </Wrap>
        <Wrap>
            <Link to='details/:id'>
                <img src='/images/avengers.jpg' alt='Avengers'/>
            </Link>
        </Wrap>
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
    img {
        width: 100%;
        object-fit: cover;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        border-radius: 12px;
    }
    &:hover {
        transform: scale(1.05);
    }
`