import React from 'react'
import { Link } from 'react-router-dom'

function SideBarHome(props) {
  
  //CSS

  const sideBarCSS = {
    background: "url(imagen_fondo_sidebar_01.jpg) 0" ,
    backgroundSize: "cover",
    backgroundColor: "black 20%",
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
    transition: "all 0.4s",
  }

  console.log("Esto es dentro de SideBar")
  console.log(props.cambioScaleY)
  
  return (
    <div style={sideBarCSS}>

        <Link to="/buscar_peliculas"><h2 className="enlacesSideBar">Buscar Películas</h2></Link>
        <Link to="/about"><h2 className="enlacesSideBar">Créditos de la página</h2></Link>

    </div>
  )
}

export default SideBarHome
