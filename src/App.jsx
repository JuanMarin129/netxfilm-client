import { useState } from 'react'
import './App.css'
import HomePage from './pages/HomePage'
import MovieDetails from './pages/MovieDetails';
import { Route, Routes } from 'react-router-dom';
import NavBarHome from './components/NavBarHome';
import BuscarPeliculas from './pages/BuscarPeliculas';
import AddMovie from './pages/AddMovie';
import EditMovie from './pages/EditMovie';

function App() {
 

  return (
    <>

      <NavBarHome />

       <Routes >

       <Route path="/" element={<HomePage />} />

        <Route path="/buscar_peliculas" element= {<BuscarPeliculas />} />

        <Route path="/addMovie/:movieIdAPI" element= {<AddMovie />}    />
        
        <Route path ="/movieDetails/:movieID/:movieIdAPI" element={<MovieDetails />} />

        <Route path ="/editMovie/:movieID/:movieIdAPI" element={<EditMovie />}   />

       </Routes>

 
    </>
  )
}

export default App


/*       <Routes >

      {/*  <Route path="/movieDetails" element= {<MovieDetails />} /> }

      </Routes>  */
