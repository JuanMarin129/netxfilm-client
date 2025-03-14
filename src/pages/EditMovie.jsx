import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

function EditMovie() {

const [movieDB, setMovieDB] = useState(null)
const [datoMovieAPI, setDatoMovieAPI] = useState(null)
const [rating, setRating] = useState(0)
const [watch, setWatch] = useState(null)
const parametrosDinamicos = useParams()
const navigate = useNavigate()
console.log(parametrosDinamicos)
const baseURLImage = "http://image.tmdb.org/t/p/original"
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
    //console.log("Esto es la Watch que viene de antes en la Movie Card")
    //console.log(watch)

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


   // Iniciamos los valores watch y rating al que venía ya puesto en la ficha de la película
   if(watch === null) {
    setWatch(movieDB.watch)
    setRating(movieDB.rating)
   }

    return (
    <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
        <div className="movieDTCard"> 
          <img src={imageURL} alt="poster-peli" />
          <h2>{datoMovieAPI.title}</h2>

          {/* Formulario para introducir los datos a editar */}
          <form onSubmit={realizarEdicion}>
              <div id="formRating"> 
                <label>Rating:</label>
                <input type="number" name="rating" value={rating} onChange={(e) => setRating(parseInt(e.target.value))}/> 
                {/* El parseInt es para pasarlo a número. El valor de onChange lo cambia a string y nosotros queremos que sea un type number*/}
              </div>

              <fieldset style={{display: "flex", flexWrap: "wrap", justifyContent: "space-around"}}>
                  <legend>Selecciona si has visto la película o no la has visto:</legend>
                  <div className="formEditMovie">
                      <input type="radio" name="watch" value={false} onChange={(e) => setWatch(false)} />
                      <label>No la he visto</label>
                  </div>
                  <div className="formEditMovie"> 
                      <input type="radio" name="watch" value={true} onChange={(e) => setWatch(true)} />
                      <label>Sí la he visto</label>
                 </div>
                  

              </fieldset>
              <button id="btnEditDatos" type="submit" >Editar los datos</button>
          </form>
        </div>

    </div>
  )
}

export default EditMovie
