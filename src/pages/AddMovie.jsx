import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate, useParams } from "react-router-dom";


function AddMovie() {

    const [datoMovieAPI, setDatoMovieAPI] = useState(null)
    const baseURLImage = "http://image.tmdb.org/t/p/w342"
    let imageURL;
    const parametrosDinamicos = useParams()
    const navigate = useNavigate();

    //console.log(parametrosDinamicos)

    useEffect(() => {

        const options = {
            method: 'GET',
            url: `${import.meta.env.VITE_API_URL}movie/${parametrosDinamicos.movieIdAPI}?language=es-ES`,
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

            const response = await axios.post(`${import.meta.env.VITE_SERVER_URL}`, {
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

            const response = await axios.post(`${import.meta.env.VITE_SERVER_URL}`, {
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
            <h3>Espere por favor...cargando la Data de la API de TMDB</h3>
        )
    }

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
      <button onClick={addPeliculaListaVista}>Añadir a la lista de películas vistas</button>
      <button onClick={addPeliculaListaPendiente}>Añadir a la lista de películas pendientes</button>
    </div>
    <div>
        <button onClick={volverABusqueda}>Volver a la búsqueda</button>
    </div>

  </>
  )
}

export default AddMovie
