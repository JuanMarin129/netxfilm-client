
# NEXTFILM

## [See the App!](https://nextfilmproject.netlify.app/)

![App Logo](public\nextfilm_logo_01.png)

## Description

Aplicación web donde puedes guardar las películas que quieras ver en un futuro. Tienes un listado de películas pendientes y otro listado de películas vistas. Tienes un buscador para encontrar cualquier película que necesites y añadirla a tu lista de pendientes o vista.


#### [Client Repo here](https://github.com/JuanMarin129/netxfilm-client)
#### [Server Repo here](https://github.com/JuanMarin129/netxfilm-server)

## Technologies, Libraries & APIs used

- HTML
- CSS
- Javascript
- React
- Routes
- TMDB API
- Bootstrap
- Axios

## Backlog Functionalities

- AddMovie()
- BuscarPeliculas()
- EditMovie()
- MovieDetails()
- NavBar()
- SearchBar()
- SideBar()

# Client Structure

## User Stories

**NOTE -**  List here all the actions a user can do in the app. Example:

- **404** - As a user I want to see a nice 404 page when I go to a page that doesn’t exist so that I know it was my fault 
- **500** - As a user I want to see a nice error page when the super team screws it up so that I know that is not my fault
- **homepage** - As a user I want to be able to access the homepage so that I see what the app is about and login and signup
- **events list** - As a user I want to see all the events available so that I can choose which ones I want to attend
- **events create** - As a user I want to create an event so that I can invite others to attend

## Client Routes

**NOTE -** Use below table to list your frontend routes

## React Router Routes (React App)
| Path                                | Page                    | Components        | Behavior                                                      |
| ----------------------------------- | ------------------------| ------------------|  ------------------------------------------------------------ |
| `/`                                 | Home                    |                   | Home page                                                     |
| `/buscar_peliculas`                 | Buscar Películas        |  searchBar()      | Para buscar las películas que quieras añadir                  |
| `/addMovie/:movieIdAPI`             | Añadir Película         |                   | Login form, link to signup, navigate to homepage after login  |
| `/movieDetails/:movieID/:movieIdAPI`| Detalles de la Película | MovieCard()       | Muestra los detalles de la película                           |
| `/editMovie/:movieID/:movieIdAPI`   | Editar Película         |                   | Edita los elementos de una película                           |
| `/about`                            | Sobre mi                |                   | Sobre mi                                                      |
 
## Other Components

- About
- NotFound
- Footer
  
## Links

### Collaborators

[Developer 1 name](https://github.com/JuanMarin129)


### Project

[Repository Link Client](https://github.com/JuanMarin129/netxfilm-client)

[Repository Link Server](https://github.com/JuanMarin129/netxfilm-server)

[Deploy Link](https://nextfilmproject.netlify.app/)

### Warframes
[Excalidraw](https://excalidraw.com/#json=EOUzN4sBX_ND6iVEVN0Hf,capii3bCfSZ-X7A40CTMbA)

### Slides

[Slides Link](https://docs.google.com/presentation/d/1vJuX_MjmYOzZiOJfmLiWf85LpBFUTQD6dRE_HTiFxuc/edit?usp=sharing)
