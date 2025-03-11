import React, { useEffect, useState } from 'react'
import NavBarHome from '../components/NavBarHome'
import MovieCard from '../components/MovieCard'
import axios from "axios";

function HomePage() {

    const [listMovies, setListMovies] = useState(null);
    const [pelisVistas, setPelisVistas] = useState(false);
  
  useEffect(() => {

    axios.get(`http://localhost:5005/watchMovies?watch=${pelisVistas}`)
    .then((response) => {
        //console.log(response.data)
        setListMovies(response.data)
    })
    .catch((error) => {
        console.log(error)
    })

  },[])

  const mostrarPeliculasPendientes = () => {
        setPelisVistas(false);
        console.log(pelisVistas)
    }

  const mostrarPeliculasVistas = () => {
        setPelisVistas(true);
        console.log(pelisVistas)
    }
  

    if(listMovies === null)
    {
        return (
            <h3>Espere por favor...buscando data</h3>
        )
    }
  
    console.log(listMovies);

    return (
    <div>
        

        <div>
            <button onClick={mostrarPeliculasPendientes}>Películas pendientes</button>
            <button onClick={mostrarPeliculasVistas}>Películas ya vistas</button>

        </div>


        {listMovies.map((cadaMovie, index) => {
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
