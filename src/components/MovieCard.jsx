import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";

function MovieCard(props) {

    //const [datosMovieAPI, setDatosMovieAPI] = useState(null)
    //const baseURLImage = "http://image.tmdb.org/t/p/w342"
    //let imageURL;

    //console.log("Estás en MovieCard y esto es el props de movieIdAPI")
    //console.log(props.cadaMovie)
    /*
    useEffect(() => {

        const options = {
            method: 'GET',
            url: `https://api.themoviedb.org/3/movie/${props.cadaMovie.movieIdAPI}?language=es-ES`,
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YjExZjI0MWYzNzRjNzFhMjViMWRkODY4M2RlNzJmMSIsIm5iZiI6MTc0MTM0NTQ3Ny40MjcsInN1YiI6IjY3Y2FkMmM1ZGJhMTQ5MTYwNjJiNTI3YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QLOiltC4xZXMGLdLGztTsLldFMP-av2I3QW6WpC7uRM'
            }
          };
          
          axios
            .request(options)
            .then((res => 
                //console.log(res.data),
                setDatosMovieAPI(res.data)
            ))
            .catch(err => console.error(err));

    },[props.pelisVistas])

    if(datosMovieAPI === null) {
        return (
            <h3>Espere por favor...cargando la Data de la API de TMDB</h3>
        )
    }
        */

    // Asignamos a la base URL de la imagen y le añadimos el path que nos devuelve la data. Así tendremos una URL válida para mostrar el poster
    // imageURL = baseURLImage + datosMovieAPI.poster_path;


    //console.log("Esto es datosMovieAPI")
    //console.log(datosMovieAPI)

    // Pasamos la data de tipo entero a tipo String para no dar problemas por parámetros dinámicos
    // let movieIdForDetails = datosMovieAPI.id.toString()

  return (
    <div>

        <h2>{props.cadaMovie.title}</h2>
        <Link to = {`/movieDetails/${props.cadaMovie.id}/${props.cadaMovie.movieIdAPI}`} >
            <img src={props.cadaMovie.imagen} alt="poster-pelicula" />
        </Link>



    </div>
  )
}

export default MovieCard


