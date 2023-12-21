"use client";

import Image from "next/image";
import { useQuery } from "react-query";
import { fetchMovies } from "@/fetchMovies"
import { IconStarFilled } from "@tabler/icons-react";
import Link from "next/link";
import { useEffect, useState } from "react";

type MoviesProps = {
    id: number,
    title: string,
    poster_path: string,
    vote_average: number,
}

function MoviesList() {

    const { data, isLoading, isError } = useQuery("movies", fetchMovies)
    const [search, setSearch] = useState<string>("");

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }
    
    const filteredMovies = data?.results.filter((movie: MoviesProps) => {
        return movie.title.toLowerCase().includes(search.toLowerCase())
    })

    if (isLoading) {
        return <p className="text-center text-2xl mt-10">Carregando lista de filmes...</p>
    }

    if (isError) {
        return <p className="text-center text-2xl mt-10">Falha ao carregar a lista de filmes</p>
    }

    return (
        <section className="flex items-center justify-center flex-wrap gap-8 py-10">
            <div className="w-full max-w-[1200px] flex items-center justify-center">
                <input 
                    type="text" 
                    placeholder="Pesquisar Filme..."
                    className="w-[50%] p-3 rounded-md bg-zinc-800 text-white focus:outline-none focus:ring-2 focus:ring-zinc-600 focus:ring-offset-2 focus:ring-offset-zinc-800"
                    value = {search}
                    onChange={handleSearch}
                />
            </div>

            <div className="flex items-center justify-center flex-wrap gap-8 max-w-[1200px]">
                {filteredMovies.map((movie: MoviesProps) => (
                    <div className="bg-zinc-800 rounded-md p-3 flex flex-col items-center justify-center border border-transparent transition-all hover:border-zinc-50 w-[330px]" key={movie.id}>
                        <h2 className="mb-4 text-center text-xl font-semibold">{movie.title}</h2>

                        <Image className="rounded-md" src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title} width={300} height={300} />

                        <div className="flex items-center justify-between w-full mt-2">
                            <span>Avaliação:</span>
                            <p className="flex items-center gap-2"> <IconStarFilled className="w-5 h-5 text-yellow-300" /> {movie.vote_average.toFixed(1)}</p>
                        </div>

                        <Link href={`/${movie.id}`}>
                            <button className="bg-blue-500 rounded-md p-2 mt-5 hover:bg-blue-400 hover:scale-105">Mais detalhes</button>
                        </Link>
                    </div>
                ))}
            </div>

        </section>
    )
}

export default MoviesList