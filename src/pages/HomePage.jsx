import React, { useEffect, useState } from 'react'
import MovieCard from '../components/MovieCard'
import axios from "axios";
import Spinner from 'react-bootstrap/Spinner';

function HomePage() {

    const [listMovies, setListMovies] = useState(null);
    const [isWatched, setIsWatched] = useState(false);
  
  useEffect(() => {

    axios.get(`${import.meta.env.VITE_SERVER_URL}/watchMovies?watch=${isWatched}`)
    .then((response) => {
        //console.log(response.data)
        setListMovies(response.data)
    })
    .catch((error) => {
        console.log(error)
    })

  },[isWatched])

  const mostrarPeliculasPendientes = () => {
     setIsWatched(false);
        //console.log(isWatched)
    }

  const mostrarPeliculasVistas = () => {
    setIsWatched(true);
        //console.log(isWatched)
    }
  

    if(listMovies === null)
    {
        return (
            <div> 
                <h3>Espere un minuto, por favor. Estamos trayendo a la data en este momento...</h3>
                <Spinner animation="border" variant="danger" />
            </div>
        )
    }
  
    //console.log(listMovies);

    return (
    <div>
        

        <div style={{display: "flex", justifyContent: "space-around"}}>
            <button className="btnMainRed" onClick={mostrarPeliculasPendientes}>Películas pendientes</button>
            <button className="btnMainGreen" onClick={mostrarPeliculasVistas}>Películas ya vistas</button>

        </div>

        <div className="d-flex justify-content-center align-content-center flex-wrap" style={{marginTop: "25px"}}>
            {listMovies.map((cadaMovie, index) => {
                //console.log(cadaMovie)
                return ( <MovieCard 
                key={index}
                cadaMovie={cadaMovie}
                />
                )
        
            })}
        </div>

    </div>
  )
}

export default HomePage
