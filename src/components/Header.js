import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <Nav>
          <Link to='/'>
            <Logo src="/images/logo.svg" />
          </Link>
          <NavMenu>
              <Link to='/'>
                  <img src='/images/home-icon.svg' />
                  <span>Home</span>
              </Link>
              <Link>
                  <img src='/images/search-icon.svg' />
                  <span>Search</span>
              </Link>
              <Link>
                  <img src='/images/watchlist-icon.svg' />
                  <span>Watchlist</span>
              </Link>
              <Link>
                  <img src='/images/original-icon.svg' />
                  <span>Originals</span>
              </Link>
              <Link>
                  <img src='/images/movie-icon.svg' />
                  <span>Movies</span>
              </Link>
              <Link>
                  <img src='/images/series-icon.svg' />
                  <span>Series</span>
              </Link>
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
        color: inherit;
        text-decoration: none;
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