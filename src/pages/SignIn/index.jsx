import React from "react"
import styled from "styled-components"
import { LoginForm } from "./loginForm";

const BoxContainer = styled.div`
    width: 280px;
    min-height: 550px;
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    background-color: #fff;
    box-shadow: 0 0 2px rgba(15,15,15,0.28);
    position: relative;
    overflow: hidden;
`;

const TopContainer = styled.div`
    width: 160%;
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 0 1.8em;
    padding-bottom: 5em;
`;

const Backdrop = styled.div`
    width: 160%;
    height: 550px;
    position: absolute;
    display: flex;
    flex-direction: column;
    border-radius: 50%;
    transform: rotate(60);
    top: -290px;
    right: -35px;
    background: rgb(2,0,36);
    background: linear-gradient(
        38deg, 
        rgba(2,0,36,1) 0%, 
        rgba(183,229,241,1) 100%, 
        rgba(0,212,255,1) 100%
        );
`
const HeaderContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const HeaderText = styled.h2`
    font-size: 25;
    font-weight: 500;
    line-heightL 1.24;
    color: #fff;
    z-index: 8;
`;

const InnerContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 1.8em;
    margin-top: 20px;
`;
const SignIn = () => {
    return <BoxContainer>
        <TopContainer>
            <Backdrop/>
            <HeaderContainer>
                <HeaderText>خوش آمدید</HeaderText>
            </HeaderContainer>
        </TopContainer>
        <InnerContainer>
            <LoginForm/>
        </InnerContainer>
    </BoxContainer>

}

export default SignIn