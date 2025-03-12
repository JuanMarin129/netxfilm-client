import React, { useState } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';

function SearchBarHome() {
  
  const [searchValue, setSearchValue] = useState("")
  const [listMoviesAPI, setListMoviesAPI] = useState(null);
  const baseURLImage = "http://image.tmdb.org/t/p/w342"
  let imageURL = "";

  const iniciarBusquedaPelicula = (evento) => {
      
      evento.preventDefault()
      console.log(searchValue)
    
      
      const options = {
        method: 'GET',
        url: `${import.meta.env.VITE_API_URL}search/movie?query=${searchValue}&language=es-ES`,
        headers: {
          accept: 'application/json',
          Authorization: `${import.meta.env.VITE_TOKEN_API}`
        }
      };
      
      axios
        .request(options)
        .then((response) => {
          //console.log(response.data)
          setListMoviesAPI(response.data.results)
        
          

        })
        .catch(err => console.error(err));


  }



  console.log(listMoviesAPI)
  


  return (

    <> 
    <div>

    <h2>Barra de Búsqueda</h2>

    <form onSubmit={iniciarBusquedaPelicula}> 
      <input type="text" onChange={(e) => setSearchValue(e.target.value)} />
      <button type="submit">Iniciar Búsqueda</button>

    </form>
    </div>

    <div>
        
        { listMoviesAPI !== null 
        
        ? listMoviesAPI.map((cadaPelicula, i) => {
          imageURL = baseURLImage + cadaPelicula.poster_path
          //console.log(imageURL)
          return (
            < div key={i}>
              <h2>{cadaPelicula.title}</h2>
              <Link to = {`/addMovie/${cadaPelicula.id}`}>    
                <img src={imageURL} alt="Poster-pelicula" />
              </Link>
              

            </div>
              
          )
        })
        : <h2>Introduce la película que quieres buscar</h2>  /* Mensaje de bienvenida cuando todavía no hay data */
        
        }

        {/* En caso de no encontrar ninguna data que coincida */}
        {listMoviesAPI !== null  && listMoviesAPI.length === 0 ? <h2>No se encontró data ninguna</h2> : null}
      
      

    </div>




    </>
  )
}

export default SearchBarHome
