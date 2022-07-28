import { movies } from './data/movie';
import Movies from './Movie1'
import './movies.css';


const fetchMovieData = () => {
    return movies;
}

const Movie = () => {
    const movieData = fetchMovieData(); // this movieData is not available to other components until I pass it as a prop.

    return (
        <div className = "movie-container">
            <h2>React Movies</h2>
            <ul className = "movie-list">
                {
                    movieData.map(movie => (
                        <Movies key = {movie.id}
                        movie = {movie} />
                    ))
                }
            </ul>
        </div>
    )
}


export default Movie;