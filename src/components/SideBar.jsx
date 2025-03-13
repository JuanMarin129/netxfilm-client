import React from 'react'
import { Link } from 'react-router-dom'

function SideBarHome(props) {
  
  //CSS

  const sideBarCSS = {

    backgroundColor: "#9C1A1A", // Rojo Oscuro #9C1A1A
    //backgroundImage: "url:(imagen_fondo_sidebar_01.jpg)"
    alignItems: "center", 
    borderRadius: "10px",
    border: "solid", 
    paddingLeft: "15px",
    paddingRight: "15px",
    marginLeft: "30px",
    marginRight: "30px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    left: "200px",
    transform: props.cambioScaleY,
    transition: "all 0.4s"
  }

  console.log("Esto es dentro de SideBar")
  console.log(props.cambioScaleY)
  
  return (
    <div style={sideBarCSS}>

        <Link to="/buscar_peliculas"><h2 style={{color: "white"}}>Buscar Películas</h2></Link>
        <Link to="/"><h2 style={{color: "white"}}>Películas Pendientes de Ver</h2></Link>

    </div>
  )
}

export default SideBarHome
