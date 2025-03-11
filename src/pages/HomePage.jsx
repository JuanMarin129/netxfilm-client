import React, { useEffect, useState } from 'react'
import NavBarHome from '../components/NavBarHome'
import MovieCard from '../components/MovieCard'
import axios from "axios";

function HomePage() {

    const [listMovies, setListMovies] = useState(null);
    const [pelisNoVistas, setPelisNoVistas] = useState(true);
  
  useEffect(() => {

    axios.get("http://localhost:5005/watchMovies?watch=false")
    .then((response) => {
        //console.log(response.data)
        setListMovies(response.data)
    })
    .catch((error) => {
        console.log(error)
    })

  },[])
  

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
            <button>Películas pendientes</button>
            <button>Películas ya vistas</button>
            
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
