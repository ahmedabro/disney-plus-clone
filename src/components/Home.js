import React, { useEffect } from 'react'
import styled from 'styled-components'
import ImgSlider from './ImgSlider'
import Viewers from './Viewers'
import Movies from './Movies'
import { useNavigate } from 'react-router-dom'
import { selectUserName } from '../features/user/userSlice'
import { useSelector } from 'react-redux'


function Home() {

  const navigate = useNavigate()
  
  const user = useSelector(selectUserName)

  useEffect(() => {
    if (!user) {
      navigate("/login")
    }
  })
  
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