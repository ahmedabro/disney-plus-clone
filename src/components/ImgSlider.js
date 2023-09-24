import React from 'react'
import styled from 'styled-components';
import Slider from "react-slick";

function ImgSlider() {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true,
        centerMode: true,
        arrows: false,
        focusOnSelect: true,
    
    };
    
  return (
    <Carousel {...settings}>
        <Wrap>
            <img src='/images/slider-badag.jpg' />      
        </Wrap>
        <Wrap>
            <img src='/images/slider-badging.jpg' />      
        </Wrap>
        <Wrap>
            <img src='/images/slider-scale.jpg' />      
        </Wrap>
        <Wrap>
            <img src='/images/slider-scales.jpg' />      
        </Wrap>
    </Carousel>
  )
}

export default ImgSlider

// Styled Component CSS code
const Carousel = styled(Slider)`
    .slick-list {
        overflow: visible;
    }
    .slick-slide > div {
        margin: 30px 15px;
    }
    ul.slick-dots {
        bottom: 0;
    }
    ul.slick-dots li button::before {
        font-size: 10px;
        color: #fff;
    }
    ul.slick-dots li.slick-active button::before {
        font-size: 10px;
    }
`
const Wrap = styled.div`
    cursor: pointer;
    img {
        width: 100%;
        border-radius: 5px;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
        rgb(0 0 0 / 73%) 0px 16px 10px -10px; 
        border: 3px solid transparent;
        transition: 300ms ease-in-out;
        &:hover {
            border: 3px solid rgba(255, 255, 255, 0.75);
        }
    }
`
// Styled Component CSS code