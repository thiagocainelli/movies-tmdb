"use client";

import MoviesList from "@/components/MoviesList"

function AllMovies () {
    return ( 
        <section>
            <h1 className="text-center text-lg sm:text-2xl font-semibold mt-5">Filmes Melhores Avaliados</h1>
            <MoviesList />
        </section>
        
    )
}

export default AllMovies