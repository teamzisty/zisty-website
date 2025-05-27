"use client";

import { cn } from "@/lib/utils";
import { DotPattern } from "@/components/magicui/dot-pattern";
import { LogIn } from "lucide-react"
import { SiDiscord } from "@icons-pack/react-simple-icons";

export default function Members() {

    return (
        <section className="relative flex flex-col w-full items-center justify-center text-center py-20 border-t border-b border-neutral-950 overflow-hidden">
            <DotPattern glow={true} className={cn("absolute inset-0 w-full h-full text-neutral-500 [mask-image:radial-gradient(1000px_circle_at_center,white,transparent)]",)} />
            <div className="w-150 text-center relative flex flex-col items-center justify-center">
                <p className="bg-white/5 border border-[#252525] text-[#cccccc] px-5 py-1.5 text-xs rounded-full inline-flex items-center gap-2 mb-2 shadow-[0_0_1px_rgb(38,38,38)] animate-fadeIn"><SiDiscord size={10} />Zisty Hub</p>
                <h1 className="relative z-10 text-3xl text-neutral-50 md:text-4xl font-bold mb-6">We&#39;d love to see you there</h1>
                <p className="text-neutral-400">By joining Zisty Hub, you can engage in various interactions such as development updates and VC sessions. Please feel free to join us.</p>
                <button onClick={() => window.open('https://discord.gg/6BPfVm6cST', '_blank')} className="cursor-pointer mt-7 px-8 py-2 bg-neutral-900/50 text-neutral-200 rounded-full transition-colors duration-200 flex items-center gap-2"><LogIn size={15} /> Join Us</button>
            </div>
        </section>

    )
}
