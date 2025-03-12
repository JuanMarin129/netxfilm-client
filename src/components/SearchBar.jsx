import React, { useState } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function SearchBarHome() {
  
  const [searchValue, setSearchValue] = useState("")
  const [listMoviesAPI, setListMoviesAPI] = useState(null);
  const baseURLImage = `${import.meta.env.VITE_BASEIMAGEN_URL_API}`
  let imageURL = "";

  const iniciarBusquedaPelicula = (evento) => {
      
      evento.preventDefault()
      console.log(searchValue)
    
      
      const options = {
        method: 'GET',
        url: `${import.meta.env.VITE_API_URL}/search/movie?query=${searchValue}&language=es-ES`,
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
    <Form onSubmit={iniciarBusquedaPelicula}> 
      <InputGroup className='mb-3'>
        <Form.Control type="text" onChange={(e) => setSearchValue(e.target.value)} />
        <Button variant="outline-secondary" type="submit">Iniciar Búsqueda</Button>
      </InputGroup>
      
    </Form>
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
        : <h2>Por favor, introduce la película que quieres buscar</h2>  /* Mensaje de bienvenida cuando todavía no hay data */
        
        }

        {/* En caso de no encontrar ninguna data que coincida */}
        {listMoviesAPI !== null  && listMoviesAPI.length === 0 ? <h2>No se encontró data ninguna</h2> : null}
      
      

    </div>




    </>
  )
}

export default SearchBarHome
