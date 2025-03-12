import React from 'react'
import { Link } from 'react-router-dom'
import SideBar from './SideBar'

function NavBarHome() {
  return (


      <div style={{display: "flex", alignItems: "center", justifyContent:"center"}}>

        <img width={"63vW"} height={"63vW"} src="icono_menu_01.png" alt="icono-menu" />
        <Link to="/">
          <img src="nextfilm_logo_01.png" alt="logo-01" />
        </Link>  
        <SideBar />
      </div>

    
  
   
  )
}

export default NavBarHome
