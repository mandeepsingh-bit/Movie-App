import "../css/MovieCard.css"
import { useMovieContext } from "../contexts/MovieContext"

function MovieCard({movie}){
    const{isFavorite, addToFavorites, removeFromFavorites}= useMovieContext()

    const favorite = isFavorite(movie.imdbID)


    function onfavclick(e){
        e.preventDefault()
        if(favorite) removeFromFavorites(movie.imdbID)
        
        else addToFavorites(movie)
        
    }



    return(
        <>
            <div className="movie-card">
                <div className="movie-poster">
                    <img src={
                        movie.Poster !== "N/A"
                        ? movie.Poster
                        :"https://via.placeholder.com/300x450?text=No+Image"
                        } 
                        alt={movie.Title} />
                    <div className="movie-overlay">
                        <button className="favorite-btn" onClick={onfavclick}>
                            {favorite ? "❤️" : "🤍"} 
                            </button>
                    </div>
                </div>
                <div className="movie-info">
                    <h1>{movie.Title}</h1>
                    <p>{movie.Year}</p>
                </div>
            </div>
        </>
    )
}

export default MovieCard