import React, { useState } from 'react'
import styled from 'styled-components'

function Viewers() {


  return (
    <ViewerContainer>
      <Row>
        <ViewerBox>
            <img src='/images/viewers-disney.png' alt='disney' />
            <video>
                <source src="/videos/1564674844-disney.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </ViewerBox>
        <ViewerBox>
            <img src='/images/viewers-pixar.png' alt='pixar' />
            <video>
                <source src="/videos/1564676714-pixar.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </ViewerBox>
        <ViewerBox>
            <img src='/images/viewers-marvel.png' alt='marvel studios' />
            <video>
                <source src="/videos/1564676115-marvel.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </ViewerBox>
        <ViewerBox>
            <img src='/images/viewers-starwars.png' alt='starwars' />
            <video>
                <source src="/videos/1608229455-star-wars.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </ViewerBox>
        <ViewerBox>
            <img src='/images/viewers-national.png' alt='national geographic' />
            <video>
                <source src="/videos/1564676296-national-geographic.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </ViewerBox>
      </Row>
    </ViewerContainer>
  )
}

export default Viewers

// Styled Components CSS code
const ViewerContainer = styled.div`
    margin-top: 35px;
`
export const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    align-items: center;
    justify-content: center;
    grid-gap: 25px;
`
const ViewerBox = styled.div`
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    padding: 10px 0;
    border: 3px solid #ffffff17;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    position: relative;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    cursor: pointer;
    img {
        width: 85%;
    }
    video {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        z-index: -1;
        object-fit: cover;
        border-radius: 10px;
        opacity: 0;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    }
    &:hover {
        border: 3px solid rgba(255, 255, 255, 0.75);
        transform: scale(1.05);
        video {
            opacity: 1;
        }
    }
`
// Styled Components CSS code
