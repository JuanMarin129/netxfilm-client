import React, { useEffect, useState } from 'react'
import NavBarHome from '../components/NavBar'
import MovieCard from '../components/MovieCard'
import axios from "axios";

function HomePage() {

    const [listMovies, setListMovies] = useState(null);
    const [isWatched, setIsWatched] = useState(false);
  
  useEffect(() => {

    axios.get(`${import.meta.env.VITE_SERVER_URL}?watch=${isWatched}`)
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
            <h3>Espere por favor...buscando data</h3>
        )
    }
  
    //console.log(listMovies);

    return (
    <div>
        

        <div>
            <button onClick={mostrarPeliculasPendientes}>Películas pendientes</button>
            <button onClick={mostrarPeliculasVistas}>Películas ya vistas</button>

        </div>


        {listMovies.map((cadaMovie, index) => {
            //console.log(cadaMovie)
            return ( <MovieCard 
             key={index}
             cadaMovie={cadaMovie}
             />
            )
     
        })}

    </div>
  )
}

export default HomePage
