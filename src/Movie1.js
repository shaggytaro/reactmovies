

const Movie = ({ movie }) => { //Basically props have been destructred to get what exactly we need here.

    return (
        <li className = "movie" key={movie.id}>
            <img src = {movie.poster} alt = {movie.title}/>
            <p>
                {movie.title} by {movie.director} was released on {movie.year}
            </p>
            <p>Rating: {movie.rating}</p>
        </li>
    )
}

export default Movie;