import "../css/Favorites.css"
import { useMovieContext } from "../contexts/MovieContext"
import MovieCard from "../components/MovieCard"
function Favorites(){
        const {favorites} = useMovieContext();

        if(favorites) {
            return (
                <div className="favorites">
                    <h2> Your Fvorites</h2>
                <div className="movies-grid">
            {favorites.map(
                (movie) => 
                  //  movie.title.toLowerCase().includes(searchQuery.toLowerCase()) && //imp point to note here 
                (<MovieCard movie={movie} key={movie.imdbID}/>
            ))}
        </div>
        </div>
            )
        }


    return(
        <>
        <h2>no Fav movies </h2>
        <p>add some movies</p>
        </>
    )
}

export default Favorites