import React from 'react'
import styled from 'styled-components'

function Details() {
  return (
    <Container>
      <Background>
        <img src='/images/bao.jpg' alt='Bao' />
      </Background>
      <Title>
        <img src='/images/bao-logo.webp' alt='bao logo' />
      </Title>
    </Container>
  )
}

export default Details


const Container = styled.div`
    height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
`
const Background = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
    opacity: 0.8;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

`
const Title = styled.div``