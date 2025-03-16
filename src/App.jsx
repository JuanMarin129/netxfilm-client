import { useState } from 'react'
import './App.css'
import HomePage from './pages/HomePage'
import MovieDetails from './pages/MovieDetails';
import { Route, Routes } from 'react-router-dom';
import NavBarHome from './components/NavBar';
import BuscarPeliculas from './pages/BuscarPeliculas';
import AddMovie from './pages/AddMovie';
import EditMovie from './pages/EditMovie';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';

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

        <Route path="/about" element={<About />} />

        <Route path="*" element={<NotFound />} />

       </Routes>

      <Footer />
    </>
  )
}

export default App


