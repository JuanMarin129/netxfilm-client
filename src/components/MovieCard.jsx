import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';

function MovieCard(props) {

  return (
    <Card style={{ width: '18rem', margin: "25px"}}>
      <Card.Body> 
          <Card.Title>{props.cadaMovie.title}</Card.Title>
      </Card.Body> 
      <Link to = {`/movieDetails/${props.cadaMovie.id}/${props.cadaMovie.movieIdAPI}`} >
          <Card.Img variant="top" src={props.cadaMovie.imagen} alt="poster-pelicula" />
      </Link> 
    </Card>
  )
}

export default MovieCard


