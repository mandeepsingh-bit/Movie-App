import MovieCard from "../components/MovieCard"
import { useState, useEffect} from "react";
import { searchMovies } from "../Services/api";
import { getPopularMovies } from "../Services/api";
import "../css/Home.css"


function Home(){

const[searchQuery , setSearchQuery] = useState("")

const [movies, setMovies ] = useState([])

const [error , setError] = useState(null)

const [loading, setLoading] = useState(true)
    
useEffect(() => {
    const loadPopularMovies = async () => {
        try{
            const popularMovies = await getPopularMovies()
            setMovies(popularMovies)
        } catch(err){
                console.log(err)
                setError("failed to load the movies")
        }
        finally{
            setLoading(false)
        }
    }
    loadPopularMovies()
},[])
 

async function handleSearch(e){
    e.preventDefault()

     if (!searchQuery.trim()) return;

    try {
        setLoading(true);

        const results = await searchMovies(searchQuery);

        setMovies(results);
    } catch (err) {
        console.log(err);
        setError("Failed to search movies");
    } finally {
        setLoading(false);
    }
    setSearchQuery("");

}

if (loading) {
    return <h2>Loading...</h2>;
}

if (error) {
    return <h2>{error}</h2>;
}

 return (
    <div className="home">
        
        <form onSubmit={handleSearch} className="search-form">
        <input 
            type="text" 
            placeholder="search for movies" 
            className="search-input" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            />
        <button type= "submit" className="search-button">Search</button>
        
        </form>


        <div className="movies-grid">
            {movies.map(
                (movie) => 
                  //  movie.title.toLowerCase().includes(searchQuery.toLowerCase()) && //imp point to note here 
                (<MovieCard movie={movie} key={movie.imdbID}/>
            ))}
        </div>
    </div>
 );
}

export default Home