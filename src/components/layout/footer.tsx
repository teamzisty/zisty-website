import Image from "next/image";
import { SiDiscord, SiGithub, SiX } from "@icons-pack/react-simple-icons";

export default function Footer() {
    return (
        <footer className="w-full border-t border-neutral-950 py-6 mt-auto">
            <div className="max-w-7xl mx-auto px-7 flex flex-col md:flex-row items-center justify-between">
                <Image src="/zisty.svg" alt="Zisty" width={500} height={500} className="w-6 h-6" style={{ filter: 'invert(90%) sepia(4%) saturate(0%) hue-rotate(187deg) brightness(90%) contrast(86%)' }} />
                <div className="flex items-center space-x-4 text-neutral-400 px-4 py-6 md:p-10">
                    <a href="/about" className="text-[15px] flex items-center space-x-1 hover:text-neutral-300 duration-200 ease-in-out"><SiDiscord size={15} /><span>Discord</span></a>
                    <a href="/contact" className="text-[15px] flex items-center space-x-1 hover:text-neutral-300 duration-200 ease-in-out"><SiGithub size={15} /><span>Github</span></a>
                    <a href="/privacy" className="text-[15px] flex items-center space-x-1 hover:text-neutral-300 duration-200 ease-in-out"><SiX size={15} /><span>X</span></a>
                </div>
            </div>
            <Image src="/footer.png" alt="Zisty" width={1920} height={500} className="w-full h-full mx-auto mt-4" />
        </footer>
    )
}
