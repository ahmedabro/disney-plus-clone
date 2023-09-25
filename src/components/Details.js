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
      <ButtonGroup>
        <PlayBtn>
          <img src='/images/play-icon-black.png' />
          <span>Play</span>
        </PlayBtn>
        <TrailerBtn>
          <img src='/images/play-icon-white.png' />
          <span>Trailer</span>
        </TrailerBtn>
        <AddBtn>
          +
        </AddBtn>
        <GroupWatchBtn>
          <img src='/images/group-icon.png' />
        </GroupWatchBtn>
      </ButtonGroup>
      <Subtitle>
        <p>Hello world this is a dummy text just written in order to fill the space</p>
      </Subtitle>
      <Description>
        <p>
          Filler text is text that shares some characteristics of a real written text, but is random or otherwise generated. It may be used to display a sample of fonts, generate text for testing, or to spoof an e-mail spam filter.
        </p>
      </Description>
    </Container>
  )
}

export default Details


const Container = styled.div`
    height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
    padding-top: 70px;
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
const Title = styled.div`
    width: 250px;
    margin-bottom: 25px;
    img {
      width: 100%;
      object-fit: contain;
      min-width: 200px;
    }
`
const ButtonGroup = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 20px;
`
const PlayBtn = styled.button`
    background: #ffffffd6;
    border: 1px solid transparent;
    border-radius: 4px;
    display: flex;
    align-items: center;
    gap: 3px;
    padding: 5px 20px;
    text-transform: uppercase;
    font-size: 16px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    &:hover {
      background: #ffffff75;
    }
`
const TrailerBtn = styled.button`
    background: #00000052;
    border: 1px solid #fff;
    color: #fff;
    border-radius: 4px;
    display: flex;
    align-items: center;
    gap: 3px;
    padding: 5px 20px;
    text-transform: uppercase;
    font-size: 16px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    &:hover {
      background: #000;
    }
`
const AddBtn = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    color: #fff;
    border-radius: 50%;
    background: #000000c7;
    border: 2px solid #fff;
    font-size: 20px;
    font-weight: 500;
`
const GroupWatchBtn = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    color: #fff;
    border-radius: 50%;
    background: #000;
    border: 2px solid #fff;
    font-size: 20px;
    font-weight: 500;
`
const Subtitle = styled.div`
    font-size: 15px;
    min-height: 35px;
`
const Description = styled.div`
    font-size: 18px;
    max-width: 650px;
    line-height: 1.4;
`