import './OneMovie.css'

const OneMovie = (props) => {
  return <div className="one-movie">
    <img src={props.movieImage} alt="obrazek filmu" />
    <h2>{props.movieTitle}</h2>
    <p>Věk: {props.movieAge}</p>
    <p>Tagy: {props.movieTag}</p>
    <p>Popis: {props.movieDesc}</p>
  </div>
}

export default OneMovie