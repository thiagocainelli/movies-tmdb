import Link from "next/link"
import { IconMovie } from "@tabler/icons-react"

function Header () {
    return (
        <header className="w-full p-5 flex items-center justify-center text-5xl">
            <Link href="/" >
                <p className="flex items-center gap-2"> <IconMovie className="w-12 h-12" /> Cainelli Movies</p>
            </Link>
        </header>
    )
}

export default Header