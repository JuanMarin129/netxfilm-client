import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'




function MovieDetails() {

const [datoMovieAPI, setDatoMovieAPI] = useState(null)
const parametrosDinamicos = useParams();
console.log(parametrosDinamicos.movieID)
const baseURLImage = "http://image.tmdb.org/t/p/w342"
let imageURL;


useEffect(() => {

  const options = {
    method: 'GET',
    url: `https://api.themoviedb.org/3/movie/${parametrosDinamicos.movieID}?language=es-ES?&append_to_response=credits`,
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YjExZjI0MWYzNzRjNzFhMjViMWRkODY4M2RlNzJmMSIsIm5iZiI6MTc0MTM0NTQ3Ny40MjcsInN1YiI6IjY3Y2FkMmM1ZGJhMTQ5MTYwNjJiNTI3YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QLOiltC4xZXMGLdLGztTsLldFMP-av2I3QW6WpC7uRM'
    }
  };
  
  axios
    .request(options)
    .then((res) => { 
        console.log(res.data)
        setDatoMovieAPI(res.data)
    }
    )
    .catch(err => console.error(err));


},[])

if(datoMovieAPI === null) {
  return (
      <h3>Espere por favor...cargando la Data de la API de TMDB</h3>
  )
}

//console.log("Esto es datoMovieAPI de MovieDetails");
//console.log(datoMovieAPI.poster_path);


// Asignamos a la base URL de la imagen y le añadimos el path que nos devuelve la data. Así tendremos una URL válida para mostrar el poster
imageURL = baseURLImage + datoMovieAPI.poster_path

  return (

    <> 
      <div>
          <h3>DETALLES DE LA PELÍCULA</h3>

          <h2>{datoMovieAPI.title}</h2>
          <img src={imageURL} alt="poster-pelicula" />
          <p>Duración: {datoMovieAPI.runtime} minutos</p>
          <p>Fecha de estreno: {datoMovieAPI.release_date}</p>
          <p>{datoMovieAPI.overview}</p>
      </div>

      <div>
        <button>Añadir a la lista de películas vistas</button>
        <button>Añadir a la lista de películas pendientes</button>


      </div>

    </>
  )
}

export default MovieDetails
