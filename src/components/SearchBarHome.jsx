import React, { useState } from 'react'

function SearchBarHome() {
  
  const [searchValue, setSearchValue] = useState("")
  

  const iniciarBusquedaPelicula = async (evento) => {
      evento.preventDefault()
      console.log(searchValue)
      

  }


  return (
    <div>

    <h2>Barra de Búsqueda</h2>

    <form onSubmit={iniciarBusquedaPelicula}> 
      <input type="text" onChange={(e) => setSearchValue(e.target.value)} />
      <button type="submit">Iniciar Búsqueda</button>

    </form>
    </div>
  )
}

export default SearchBarHome
