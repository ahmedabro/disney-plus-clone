import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { auth, provider } from '../firebase'
import { Link, useNavigate } from 'react-router-dom'
import { selectUserName, selectUserPhoto, selectUserEmail, setUserLogin, setSignOut } from '../features/user/userSlice'
import { useSelector, useDispatch } from 'react-redux'

function Header() {
    const dispatch = useDispatch()

    const navigate = useNavigate()

    const [showLogout, setShowLogout] = useState(false)
    const logoutContainer = useRef()

    const userName = useSelector(selectUserName)
    const userPhoto = useSelector(selectUserPhoto)
    const userEmail = useSelector(selectUserEmail)

    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
            if (user) {
                dispatch(setUserLogin({
                    name: user.displayName,
                    email: user.email,
                    photo: user.photoURL,
                }))
                navigate("/")
            }
        })
    }, [])

    const signIn = () => {
        auth.signInWithPopup(provider)
            .then(result => {
                // console.log(result)
                let user = result.user
                dispatch(setUserLogin({
                    name: user.displayName,
                    email: user.email,
                    photo: user.photoURL,
                }))
                navigate("/")
        })
    }

    const signOut = () => {
        auth.signOut()
            .then(() => {
                dispatch(setSignOut())
                navigate("/login")
        })
    }

    const handleShowLogout = () => {
        setShowLogout(!showLogout)
        if (showLogout == true) {
            logoutContainer.current.children[1].style.display = "flex"
        }
        else {
            logoutContainer.current.children[1].style.display = "none"
        }
    }
    
  return (
    <Nav>
          <Link to='/'>
            <Logo src="/images/logo.svg" />
          </Link>
          {
              userName ?
              <>
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
                <UserMenu ref={logoutContainer} onClick={handleShowLogout}>
                    <UserImg src={userPhoto} />
                    <UserMenuBox>
                        <button onClick={() => {
                            signOut()
                        }}>Log Out</button>
                    </UserMenuBox>
                </UserMenu>
             </> 
             :
            <LoginButtonContainer>
                <LoginButton onClick={signIn}>Login</LoginButton>
            </LoginButtonContainer>
    
          }
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
const LoginButtonContainer = styled.div`
    display: flex;
    justify-content: end;
    flex: 1;
`
const LoginButton = styled.button`
    background: transparent;
    border: 1px solid #ffffff;
    border-radius: 5px;
    color: #fff;
    font-size: 15px;
    padding: 10px 20px;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    transition: all 250ms ease 0s;
    &:hover {
        background: #fff;
        color: #090b13;
    }
`
const UserMenu = styled.div`
    display: flex;
    position: relative;
    cursor: pointer;
`
const UserMenuBox = styled.div`
    position: absolute;
    min-width: 120px;
    right: 0;
    bottom: -94px;
    display: none;
    justify-content: center;
    align-items: center;
    background: #20263f;
    padding: 30px 0;
    border-radius: 0;
    z-index: 1;
    transition: 250ms all ease 0s;
    button {
        background: transparent;
        border: none;
        font-size: 15px;
        color: #fff;
        font-weight: 600;
        letter-spacing: 1.5px;
        text-transform: uppercase;
    }
`
// Styled Component CSS code