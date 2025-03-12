import React from 'react'
import { Link } from 'react-router-dom'
import SideBarHome from './SIdeBarHome'

function NavBarHome() {
  return (


      <div style={{display: "flex", alignItems: "center", justifyContent:"center"}}>

        <img width={"63vW"} height={"63vW"} src="src\images\icono_menu_01.png" alt="icono-menu" />
        <Link to="/">
          <img src="src\images\nextfilm_logo_01.png" alt="logo-01" />
        </Link>  
        <SideBarHome />
      </div>

    
  
   
  )
}

export default NavBarHome
