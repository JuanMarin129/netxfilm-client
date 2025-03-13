import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SideBar from './SideBar'

function NavBarHome() {

  const [stateSideBar, setStateSideBar] = useState(false)
  const [cambioScaleY, setCambioScaleY] = useState("scaleY(0)")
  //let cambioScaleY = "scaleY(0)";

  console.log(stateSideBar)

  const cambioStateSideBar = () => {
    let clone;
  
    if(stateSideBar === true) {
      clone = false;
      setStateSideBar(clone);
      setCambioScaleY("scaleY(0)"); // Lo hacemos invisible
    }
    else if(stateSideBar === false) {
      clone = true;
      setStateSideBar(clone);
      setCambioScaleY("scaleY(1)"); // Lo hacemos visible
      console.log(cambioScaleY)
    }
  }


  return (

      <>
      <div id="navBarCSS">
        <div id="btnSidebarCSS" onClick={() => cambioStateSideBar()}>
          <img width={"63vW"} height={"63vW"} src="icono_menu_01.png" alt="icono-menu" />
        </div>
        <Link to="/">
          <img src="nextfilm_logo_01.png" alt="logo-01" />
        </Link>  
      </div>

      <SideBar cambioScaleY={cambioScaleY} />
      </>

    
  
   
  )
}

export default NavBarHome
