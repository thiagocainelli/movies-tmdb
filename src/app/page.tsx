"use client";

import { QueryClient, QueryClientProvider } from "react-query"
import Header from "@/components/Header";
import AllMovies from "@/components/AllMovies";
import Footer from "@/components/Footer";

const client = new QueryClient();

export default function Home() {
  return (
    
    <QueryClientProvider client={client}>

      <main className="flex flex-col items-center min-h-screen w-screen max-w-full  bg-zinc-950 text-zinc-50">
      
        <Header />

        <AllMovies />

        <Footer />

      </main>

    </QueryClientProvider>
  )
}
