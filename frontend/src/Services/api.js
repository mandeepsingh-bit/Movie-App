const API_KEY = "412b3bd8";

 
const BASE_URL = "https://www.omdbapi.com/";

export const getPopularMovies = async () => {
    const keywords = [
        "batman",
        "avengers",
        "marvel",
        "spiderman",
        "harry",
        "star",
        "action",
        "superman",
        "ironman",
        "matrix"
    ];

    const randomKeyword =
        keywords[Math.floor(Math.random() * keywords.length)];

    const response = await fetch(
        `${BASE_URL}?apikey=${API_KEY}&s=${randomKeyword}`
    );

    const data = await response.json();

    return data.Search || [];
};

export const searchMovies = async (query) => {
    const response = await fetch(
        `${BASE_URL}?apikey=${API_KEY}&s=${encodeURIComponent(query)}`
    );

    const data = await response.json();

    return data.Search || [];
};