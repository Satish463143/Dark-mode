import React, { useState } from 'react'
import useLocalStorage from "use-local-storage"
import './App.css'
import Home from './component/home/home'
import Toogle from './component/toogle/toogle';
import About from './component/about/about';
import {BrowserRouter, Route, Routes }from 'react-router-dom';

const App = () => {
 
  const [isDark, setIsDark] = useLocalStorage(false)
  return (
    <div className="app" data-theme={isDark ? "dark" :"light"}>
      <BrowserRouter  >
        <Toogle isChecked={isDark} handleChange={()=> setIsDark(!isDark)}/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App