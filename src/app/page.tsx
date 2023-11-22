"use client";

import { QueryClient, QueryClientProvider } from "react-query"
import Movies from "./movies/page";
import Header from "@/components/Header";

const client = new QueryClient();


export default function Home() {
  return (
    <main className="flex min-h-screen w-screen max-w-full flex-col items-center bg-zinc-950 text-zinc-50">
      
      <QueryClientProvider client={client}>
        
        <Header />

        <Movies />

      </QueryClientProvider>
      
    </main>
  )
}
