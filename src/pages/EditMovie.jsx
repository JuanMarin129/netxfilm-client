import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

function EditMovie() {

const [movieDB, setMovieDB] = useState(null)
const [datoMovieAPI, setDatoMovieAPI] = useState(null)
const [rating, setRating] = useState(0)
const [watch, setWatch] = useState(false)
const parametrosDinamicos = useParams()
const navigate = useNavigate()
console.log(parametrosDinamicos)
const baseURLImage = `${import.meta.env.VITE_BASEIMAGEN_URL_API}`
let imageURL = "";



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

  const realizarEdicion = async (evento) => {
    evento.preventDefault()



    try {
        await axios.patch(`${import.meta.env.VITE_SERVER_URL}/watchMovies/${parametrosDinamicos.movieID}`, {
            rating: rating,
            watch: watch
        })
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

   // Asignamos a la base URL de la imagen y le añadimos el path que nos devuelve la data. Así tendremos una URL válida para mostrar el poster
   imageURL = baseURLImage + datoMovieAPI.poster_path;
   //console.log("Esto es Watch")
   //console.log(watch)


    return (
    <div>

        <h1>EDITAR PELI</h1>
        <h2>{datoMovieAPI.title}</h2>
        <img src={imageURL} alt="poster-peli" />
        <form onSubmit={realizarEdicion}>
            <label>Rating:</label>
            <input type="number" name="rating" value={rating} onChange={(e) => setRating(parseInt(e.target.value))}/>

            <fieldset>
                <legend>Selecciona si has visto la película o no la has visto:</legend>
                <div>
                    <input type="radio" name="watch" value={false} onChange={(e) => setWatch(false)} />
                    <label>No la he visto</label>

                    <input type="radio" name="watch" value={true} onChange={(e) => setWatch(true)}/>
                    <label>Sí la he visto</label>
                </div>

            </fieldset>
            <button type="submit" >Editar los datos</button>
        </form>
        

    </div>
  )
}

export default EditMovie
