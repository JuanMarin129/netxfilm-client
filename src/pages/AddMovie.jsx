import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

function AddMovie() {

    const [datoMovieAPI, setDatoMovieAPI] = useState(null)
    const baseURLImage = "http://image.tmdb.org/t/p/original"
    let imageURL;
    const parametrosDinamicos = useParams()
    const navigate = useNavigate();




    //console.log(parametrosDinamicos)

    useEffect(() => {

        const options = {
            method: 'GET',
            url: `${import.meta.env.VITE_API_URL}/movie/${parametrosDinamicos.movieIdAPI}?language=es-ES`,
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
            })
            .catch(err => console.error(err));

    },[])


    // Añadimos la película a una lista. Depende de a cuál botón le de el usuario, lo añade con un valor "watch" distinto
    const addPeliculaListaVista = async (evento) => {
        evento.preventDefault()
        try {

            const response = await axios.post(`${import.meta.env.VITE_SERVER_URL}/watchMovies`, {
                rating: null,
                watch: true,
                title: datoMovieAPI.title,
                imagen: imageURL,
                movieIdAPI: datoMovieAPI.id
            })
            navigate("/")
            
        } catch (error) {
            console.log(error)
        }
    }

    const addPeliculaListaPendiente = async (evento) => {
        evento.preventDefault()
        try {

            const response = await axios.post(`${import.meta.env.VITE_SERVER_URL}/watchMovies`, {
                rating: null,
                watch: false,
                title: datoMovieAPI.title,
                imagen: imageURL,
                movieIdAPI: datoMovieAPI.id
            })
            navigate("/")
            
        } catch (error) {
            console.log(error)
        }
    }

    const volverABusqueda = () => {
        navigate("/buscar_peliculas")
    }

    // Claúsula de Guardia
    if(datoMovieAPI === null) {
        return (
            <div>
                <h3>Espere por favor...estamos pidiendo la Data a las buenas gentes de TMDB</h3>
                <Spinner animation="border" variant="danger" />
            </div>
        )
    }

    // Asignamos a la base URL de la imagen y le añadimos el path que nos devuelve la data. Así tendremos una URL válida para mostrar el poster
    imageURL = baseURLImage + datoMovieAPI.poster_path

  return (
    <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}> 
    <div className="movieDTCard">
        <img src={imageURL} alt="poster-pelicula" />
        <h2>{datoMovieAPI.title}</h2>
        <div className="movieDTCardBody"> 
            <p>Duración: {datoMovieAPI.runtime} minutos</p>
            <p>Fecha de estreno: {datoMovieAPI.release_date}</p>
            <p>{datoMovieAPI.overview}</p>
        </div>
    </div>

    <div style={{display: "flex", justifyContent:"space-beetwen", gap:"40px", margin: "10px"}}>
      <button className="btnAddGreen" onClick={addPeliculaListaVista}>Añadir a la lista de películas vistas</button>
      <button className="btnAddRed" onClick={addPeliculaListaPendiente}>Añadir a la lista de películas pendientes</button>
    </div>
    <div>
        <Button onClick={volverABusqueda}>Volver a la búsqueda</Button>
    </div>

  </div>
  )
}

export default AddMovie
