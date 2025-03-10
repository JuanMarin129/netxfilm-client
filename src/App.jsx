import { useState } from 'react'
import './App.css'
import HomePage from './pages/HomePage'
import MovieDetails from './pages/MovieDetails';
import { Route, Routes } from 'react-router-dom';
import NavBarHome from './components/NavBarHome';

function App() {
 

  return (
    <>

      <NavBarHome />

       <Routes >

        <Route path="/" element={<HomePage />} />
        
        <Route path ="/movieDetails/:movieID" element={<MovieDetails />} />

       </Routes>

 
    </>
  )
}

export default App


/*       <Routes >

      {/*  <Route path="/movieDetails" element= {<MovieDetails />} /> }

      </Routes>  */
