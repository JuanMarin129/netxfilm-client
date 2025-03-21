import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Spinner from 'react-bootstrap/Spinner'
import Carousel from 'react-bootstrap/Carousel'
//import ExampleCarouselImage from 'components/ExampleCarouselImage'




function MovieDetails() {

const [movieDB, setMovieDB] = useState(null)
const [datoMovieAPI, setDatoMovieAPI] = useState(null)
const parametrosDinamicos = useParams();
const navigate = useNavigate();
const baseURLImage = "http://image.tmdb.org/t/p/original"
const baseURLImageProfileActors = "http://image.tmdb.org/t/p/w185"
//let imageURL ="";



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
  let texto = "¿Estás seguro de eliminar la película?"
  if(confirm(texto) == true) { 
    evento.preventDefault()
    try {
        await axios.delete(`${import.meta.env.VITE_SERVER_URL}/watchMovies/${parametrosDinamicos.movieID}`)
        navigate("/")
    } 
    
    catch (error) {
      console.log(error)
    }
  }
}

// Cláusula de Guardia
if (datoMovieAPI === null || movieDB === null) {
  return (
      <div>
        <h3>Espere por favor...le estamos pidiendo la Data a las buenas gentes de TMDB</h3>
        <Spinner animation="border" variant="danger" />
      </div>
  )
}
  
  return (

    <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}> 
     
       <div className="movieDTCard"> 
          <img src={baseURLImage + datoMovieAPI.poster_path} alt="poster-pelicula" />
          <h2>{datoMovieAPI.title}</h2>
          <div className="movieDTCardBody"> 
            <div className="ratingCard" > 
              <p>Rating: {movieDB.rating}</p>
              <p>{movieDB.watch === true ? "✅" : "❌"}</p>
            </div>
            <p>Duración: {datoMovieAPI.runtime} minutos</p>
            <p>Fecha de estreno: {datoMovieAPI.release_date}</p>  
            <p>{datoMovieAPI.overview}</p>
          </div>

          {/* El Carousel de las actrices y actores de la película */}
          <div className="carouselProfileCast">
            <Carousel>
                {datoMovieAPI.credits.cast.map((cadaActor, i) => {
                  return (
                      <Carousel.Item key={i}>
                      <img src={baseURLImageProfileActors + cadaActor.profile_path} alt="foto-profile" />
                      {/*<ExampleCarouselImage text="First slide" /> */}
                        <Carousel.Caption>
                          <p>{cadaActor.name}</p>
                        </Carousel.Caption>
                      </Carousel.Item>
                  )
                })}
              </Carousel>
            </div>

      </div>
      <div id="movieDTCardButton">
        <Link to={`/editMovie/${parametrosDinamicos.movieID}/${parametrosDinamicos.movieIdAPI}`}   > 
          <button id="btnEdit">Editar película</button>
        </Link>
        <button id="btnDelete" onClick={eliminarPelicula}>Eliminar película</button>
      </div>

    </div>
  )
}

export default MovieDetails
