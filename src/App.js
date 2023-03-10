import React from 'react'

import { Routes, Route, Navigate } from 'react-router-dom'

import SignIn from './pages/SignIn/index.jsx'

const App = () => {
  return (
    <Routes>
        <Route path="/" element={<SignIn />} />
    </Routes>
  );
}

export default App;
