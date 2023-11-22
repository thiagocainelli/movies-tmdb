import Link from "next/link"
import { IconCopyright } from "@tabler/icons-react"

function Footer () {
    return (
        <footer className="w-full p-5 flex items-center justify-center text-xl">
            <Link href="https://portfolio-thiago-cainelli.vercel.app/" target="_blank" >
                <p className="flex items-center gap-2 font-thin transition-all text-zinc-50 hover:text-zinc-300 hover:scale-105" > &copy; Criado por Thiago Cainelli - 2023</p>
            </Link>
        </footer>
    )
}

export default Footer