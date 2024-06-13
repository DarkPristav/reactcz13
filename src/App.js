import allMovies from "./data"
import OneMovie from "./components/OneMovie.js";

const App = () => {
  return <section className="movie-section">
    <OneMovie
    movieDesc={allMovies[0].description} 
    movieImage={allMovies[0].image} 
    movieTitle={allMovies[0].title} 
    movieAge={allMovies[0].age} 
    movieTag={allMovies[0].tags} 
    />
    <OneMovie 
    movieDesc={allMovies[1].description} 
    movieImage={allMovies[1].image} 
    movieTitle={allMovies[1].title} 
    movieAge={allMovies[1].age} 
    movieTag={allMovies[0].tags}
    />
    <OneMovie 
    movieDesc={allMovies[2].description} 
    movieImage={allMovies[2].image} 
    movieTitle={allMovies[2].title} 
    movieAge={allMovies[2].age} 
    movieTag={allMovies[0].tags}
    />
    <OneMovie 
    movieDesc={allMovies[3].description} 
    movieImage={allMovies[3].image} 
    movieTitle={allMovies[3].title} 
    movieAge={allMovies[3].age} 
    movieTag={allMovies[0].tags}
    />
  </section>
}

export default App