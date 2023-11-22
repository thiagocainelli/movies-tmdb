import Image from "next/image";
import { useQuery } from "react-query";
import axios from "axios";

export const fetchMovies = async () => {
     
    const response = await axios.get("https://api.themoviedb.org/3/movie/top_rated?language=pt-BR&page=1&api_key=b91aaf827797d117cc8088b6dbf681c8");

    return response.data;
}

function MoviesList () {

    
    const { data, isLoading, isError } = useQuery("movies", fetchMovies)
    

    console.log(data);

    if(isLoading) {
        return <p>Carregando lista de filmes...</p>
    }

    if(isError) {
        return <p>Falha ao carregar a lista de filmes</p>	
    }

    return (
        <section>
            {data.results.map((movie: any) => (
                <div key={movie.id}>
                    <h2>{movie.title}</h2>
                    <Image src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} width={200} height={300} />
                    <p>{movie.vote_average.toFixed(1)}</p>
                    <button>Mais detalhes</button>
                </div>
            ))}
        </section>
    )
}

export default MoviesList