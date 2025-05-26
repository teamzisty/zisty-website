import Image from "next/image";

export default function Header() {
    return (
        <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-7 py-6 bg-gradient-to-b from-black to-transparent">
            <div>
                <Image src="/zisty.svg" alt="Zisty" width={500} height={500} className="invert w-6 h-6" />
            </div>
        </header>
    )
}
