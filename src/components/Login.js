import React from 'react'
import styled from 'styled-components'

function Login() {
  return (
    <Container>
      <CTA>
        <CTALogoOne src="/images/cta-logo-one.svg" />
        <SignupBtn>Get All There</SignupBtn>
        <Description>
            Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription. As of 03/26/21, the price of Disney+ and The Disney Bundle will increase by $1.
        </Description>
        <CTALogoTwo src="/images/cta-logo-two.png" />
      </CTA>
    </Container>
  )
}

export default Login

const Container = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 calc(3.5vw + 5px);
    height: calc(100vh - 70px);
    &:before {
        position: absolute;
        content: "";
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background: url("/images/login-background.jpg");
        bacground-size: cover;
        background-position: top;
        z-index: -1;
    }
`
const CTA = styled.div`
    max-width: 650px;
    width: 75%;
    padding: 80px 40px;
    img {
        
    }
`
const CTALogoOne = styled.img`
    width: 100%;
    padding: 0 25px 10px;
`
const SignupBtn = styled.a`
    display: block;
    width: 100%;
    background: #0063e5;
    font-weight: bold;
    text-align: center;
    padding: 17px 0;
    text-transform: uppercase;
    font-size: 18px;
    border-radius: 5px;
    letter-spacing: 1.5px;
    margin-bottom: 12px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    &:hover {
        background: #0483ee;
    }
`
const Description = styled.p`
    font-size: 11px;
    letter-spacing: 1.5px;
    text-align: center;
    line-height: 1.5;
    padding: 0 30px;
    margin-bottom: 15px;
`
const CTALogoTwo = styled.img`
    width: 100%;
    padding: 0 25px;
`
