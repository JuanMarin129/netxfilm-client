import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'




function MovieDetails() {

const [movieDB, setMovieDB] = useState(null)
const [datoMovieAPI, setDatoMovieAPI] = useState(null)
const parametrosDinamicos = useParams();
const navigate = useNavigate();
const baseURLImage = `${import.meta.env.VITE_BASEIMAGEN_URL_API}`



useEffect(() => {

  axios.get(`${import.meta.env.VITE_SERVER_URL}/watchMovies/${parametrosDinamicos.movieID}`)
  .then((response) => {
    console.log(response.data)
    setMovieDB(response.data)
  })
  .catch((error) => {
    console.log(error)
  })


    const options = {
      method: 'GET',
      url: `${import.meta.env.VITE_API_URL}/movie/${parametrosDinamicos.movieIdAPI}?language=es-ES?&append_to_response=credits`,
      headers: {
        accept: 'application/json',
        Authorization: `${import.meta.env.VITE_TOKEN_API}`
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

const eliminarPelicula = async (evento) => {

  evento.preventDefault()

  try {
      await axios.delete(`${import.meta.env.VITE_SERVER_URL}/watchMovies/${parametrosDinamicos.movieID}`)

      navigate("/")
    
  } 
  
  catch (error) {
    console.log(error)
    
  }



}


if (datoMovieAPI === null || movieDB === null) {
  return (
      <h3>Espere por favor...cargando la Data de la API de TMDB</h3>
  )
}
  


/*
if(movieDB === null) {
  return (
    <h3>Espere por favor...cargando la Data</h3>
  )
}
  */
/*
console.log("Esto es movieDB")
console.log(movieDB)
console.log(movieDB.movieIdAPI)
*/

//console.log("Esto es datoMovieAPI de MovieDetails");
//console.log(datoMovieAPI.poster_path);




  return (

    <> 
      <div>
          <h3>DETALLES DE LA PELÍCULA</h3>


          <h2>{datoMovieAPI.title}</h2>
          <img src={baseURLImage + datoMovieAPI.poster_path} alt="poster-pelicula" />
          <p>Duración: {datoMovieAPI.runtime} minutos</p>
          <p>Fecha de estreno: {datoMovieAPI.release_date}</p>
          <p>{datoMovieAPI.overview}</p>
          <p>Rating: {movieDB.rating}</p>
          <p>{movieDB.watch === true ? "✅" : "❌"}</p>

      </div>

      <div>

        <Link to={`/editMovie/${parametrosDinamicos.movieID}/${parametrosDinamicos.movieIdAPI}`}   > 
          <button>Editar película</button>
        </Link>
        <button onClick={eliminarPelicula}>Eliminar película</button>


      </div>

    </>
  )
}

export default MovieDetails
