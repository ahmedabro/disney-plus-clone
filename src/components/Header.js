import React from 'react'
import styled from 'styled-components'

function Header() {
  return (
    <Nav>
          <Logo src="/images/logo.svg" />
          <NavMenu>
              <a>
                  <img src='/images/home-icon.svg' />
                  <span>Home</span>
              </a>
              <a>
                  <img src='/images/search-icon.svg' />
                  <span>Search</span>
              </a>
              <a>
                  <img src='/images/watchlist-icon.svg' />
                  <span>Watchlist</span>
              </a>
              <a>
                  <img src='/images/original-icon.svg' />
                  <span>Originals</span>
              </a>
              <a>
                  <img src='/images/movie-icon.svg' />
                  <span>Movies</span>
              </a>
              <a>
                  <img src='/images/series-icon.svg' />
                  <span>Series</span>
              </a>
          </NavMenu>
          <UserImg src='/images/profile.jpeg' />
    </Nav>
  )
}

export default Header


// Styled Component CSS code
const Nav = styled.nav`
    height: 70px;
    background: #090b13;
    display: flex;
    align-items: center;
    padding: 0 36px;
`
const Logo = styled.img`
    width: 80px;
`
const NavMenu = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    gap: 35px;
    justify-content: center;
    a {
        display: flex;
        align-items: center;
        gap: 5px;
        img {
            width: 20px;
        }
        span {
            font-size: 15px;
            text-transform: uppercase;
            position: relative;
            &:after {
                position: absolute;
                content: "";
                width: 100%;
                height: 2px;
                background: #fff;
                bottom: -2px;
                left: 0;
                opacity: 0;
                transform: scaleX(0);
                transform-origin: left center;
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
            }
        }
        &:hover {
            span:after {
                transform: scaleX(1);
                opacity: 1;
            }
        }
    }
`
const UserImg = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
    object-position: center;
`
// Styled Component CSS code