import Link from "next/link"

function Header () {
    return (
        <header className="w-full p-5 flex items-center justify-between">
            <Link href="/" >
                <p>Cainelli Movies</p>
            </Link>
            <nav className="flex items-center gap-2">
               <label htmlFor="search">Pesquisar um filme:</label> 
               <input 
                type="text" 
                id="search" 
                placeholder="Nome do filme..."
                className="bg-zinc-800 rounded-md outline-none py-1 px-2"
                />
            </nav>
        </header>
    )
}

export default Header