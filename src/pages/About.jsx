import React from 'react'

function About() {
  return (
    <div id="AboutCSS">
        <h3>Este proyecto ha sido creado por Juan Marín para el bootcamp de WD en Iron Hack</h3>
        
        <a className="linkeGitHub" href="https://www.linkedin.com/in/juan-marin-ortiz-5a618610b/">LinkedIn</a>
        <a className="linkeGitHub" href="https://github.com/JuanMarin129">GitHub</a>

        <h2>Esta aplicación usa los datos externos de The Movie Data Base (TMDB), a quienes agradezco su trabajo para poder conseguir los datos necesarios para la aplicación</h2>

        <p>This product uses the TMDb API but is not endorsed or certified by TMDb.</p>
        <img width="30%" style={{display: "flex", alignSelf:"anchor-center"}} src="TMDB_01.png" alt="logo-TMDB" />

    </div>
  )
}

export default About
