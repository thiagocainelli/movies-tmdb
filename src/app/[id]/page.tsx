"use client";

import EspecificMovieList  from "@/components/EspecificMovieList";
import { QueryClient, QueryClientProvider } from "react-query";

const clientQuery = new QueryClient();

function EspecificMovie () {
    return ( 
        <QueryClientProvider client={clientQuery}>
            <section className="flex flex-col items-center w-full min-h-screen bg-zinc-950 text-zinc-50">
                
                <h1 className="text-center text-xl sm:text-3xl font-semibold my-5">Detalhes do Filme</h1>

                <EspecificMovieList />
                
            </section>
        </QueryClientProvider>   
    )
}

export default EspecificMovie
