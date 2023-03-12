import React from 'react'

import { Routes, Route, Navigate } from 'react-router-dom'
import styled from 'styled-components'

import SignIn from './pages/SignIn/index.jsx'

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const App = () => {
  return <AppContainer>
    <SignIn/>
  </AppContainer>
}

export default App;
