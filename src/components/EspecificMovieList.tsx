"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation"
import { fetchMovies } from "@/fetchMovies";
import { useQuery } from "react-query";

function EspecificMovie() {

    const { id } = useParams();
    const { data, isLoading, isError } = useQuery("especificMovie", fetchMovies);

    const especificMovie = data?.results.find((movie: any) => movie.id == id);


    if (isLoading) {
        return <p className="text-center text-2xl mt-10">Carregando informações do filme...</p>
    }

    if (isError) {
        return <p className="text-center text-2xl mt-10">Falha ao carregar as informações do filme</p>
    }

    return (
        <>
            {especificMovie && (
                <div className="bg-zinc-800 flex flex-col md:flex-row gap-3 w-[98%] md:w-[50%] p-3 rounded-md">

                    <div className=" flex flex-col items-center w-full md:w-[50%]">
                        <h1 className="ml-3 text-xl font-bold mb-2">{especificMovie.title}</h1>
                        <Image src={`https://image.tmdb.org/t/p/w300${especificMovie.poster_path}`} alt={especificMovie.title} width={300} height={300} />
                    </div>

                    <div className="flex flex-col mt-5 md:mt-0 gap-2 w-full md:w-[50%]">
                        <div>
                            <p className="font-semibold">Descrição:</p> 
                            <p className="text-sm my-3">{especificMovie.overview}</p>
                        </div>

                        <div className="flex gap-2 items-center text-sm md:text-base">
                            <span className="font-semibold">Avaliação:</span> 
                            {especificMovie.vote_average.toFixed(1)}
                        </div>

                        <div className="flex gap-2 text-sm md:text-base">
                            <span className="font-semibold">Data de lancamento:</span> 
                            {especificMovie.release_date}
                        </div>

                        <div className="flex items-end justify-center h-full mb-5">
                            <Link href="/">
                                <button className="bg-blue-500 rounded-md p-2 hover:bg-blue-400 hover:scale-105">Voltar a listagem</button>
                            </Link>
                        </div>
                    </div>
                    
                </div>
            )}

        </>

    )
}

export default EspecificMovie;