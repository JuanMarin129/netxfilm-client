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
        
        <NavBarHome />
{/*}
        {listMovies.map((cadaMovieConsole) => { 
            console.log(cadaMovieConsole)
        })}

        {listMovies.map((cadaMovie) => {
            return (
            <MovieCard 
            cadaMovieID={cadaMovie.ID}/>
            )
        })}

        */}


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
