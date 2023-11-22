import axios from "axios";

export const fetchMovies = async () => {
     
    const response = await axios.get("https://api.themoviedb.org/3/movie/top_rated?language=pt-BR&page=1&api_key=b91aaf827797d117cc8088b6dbf681c8");

    return response.data;
}
