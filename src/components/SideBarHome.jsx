import React from 'react'
import { Link } from 'react-router-dom'

function SideBarHome() {
  return (
    <div>

        <Link to="/buscar_peliculas"><h2>Buscar Películas</h2></Link>
        <Link to="/"><h2>Películas Pendientes de Ver</h2></Link>

    </div>
  )
}

export default SideBarHome
