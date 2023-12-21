import axios from "axios";

export const fetchMovies = async () => {
    try {
        const response = await axios.get("https://api.themoviedb.org/3/movie/popular?language=pt-BR&page=1&api_key=b91aaf827797d117cc8088b6dbf681c8");
        return response.data;
    } catch (error) {
        console.log(error);
    }
}
