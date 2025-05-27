"use client";

import Marquee from "react-fast-marquee";
import { useState } from "react";

export default function Members() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

    const members = [
        {
            name: "Rion",
            role: "Founder, Developer",
            image: "https://pbs.twimg.com/profile_images/1914457806679498756/gi2pV6jy_400x400.jpg",
        },
        {
            name: "tanahiro2010",
            role: "Staff, Developer",
            image: "https://pbs.twimg.com/profile_images/1879463762627072000/WnD4sJ1V_400x400.jpg",
        },
        {
            name: "Syobosyobon",
            role: "Staff, Developer",
            image: "https://pbs.twimg.com/profile_images/1772492028636737536/bClftlxv_400x400.jpg",
        },
        {
            name: "kazu",
            role: "Staff, Developer",
            image: "https://cdn.discordapp.com/avatars/1004348660181630977/6445e3f6eddfbad4b0130e9680552673.webp?size=1024",
        },
        {
            name: "Webfullsympathy",
            role: "Developer",
            image: "https://pbs.twimg.com/profile_images/1860597396885110784/3gyUduSE_400x400.jpg",
        },
        {
            name: "tom",
            role: "Developer",
            image: "https://pbs.twimg.com/profile_images/1863135999087505408/5qjunahh_400x400.jpg",
        },
        {
            name: "rai",
            role: "Developer",
            image: "https://pbs.twimg.com/profile_images/1915770562779209728/yZyDjjpC_400x400.jpg",
        },
        {
            name: "umaidango",
            role: "Developer",
            image: "https://pbs.twimg.com/profile_images/1873678657379774464/_IXeWAJ0_400x400.jpg",
        },
        {
            name: "doracord",
            role: "Developer",
            image: "https://pbs.twimg.com/profile_images/1921911571833360384/A5YMnSED_400x400.jpg",
        },
        {
            name: "takoyaki",
            role: "Developer",
            image: "https://pbs.twimg.com/profile_images/1773615356420239360/UglquU_j_400x400.jpg",
        },
    ]

    return (
        <section className="relative w-full overflow-hidden flex flex-col justify-center border-t border-b border-neutral-950">
            <Marquee gradient={false} speed={50} loop={0}>
                <div className="flex whitespace-nowrap">
                    <span className="text-4xl py-7 px-12 text-white/10 font-bold tracking-tight">Members</span>
                    <span className="text-4xl py-7 px-12 text-white/10 font-bold tracking-tight">Members</span>
                    <span className="text-4xl py-7 px-12 text-white/10 font-bold tracking-tight">Members</span>
                    <span className="text-4xl py-7 px-12 text-white/10 font-bold tracking-tight">Members</span>
                    <span className="text-4xl py-7 px-12 text-white/10 font-bold tracking-tight">Members</span>
                    <span className="text-4xl py-7 px-12 text-white/10 font-bold tracking-tight">Members</span>
                    <span className="text-4xl py-7 px-12 text-white/10 font-bold tracking-tight">Members</span>
                </div>
            </Marquee>
            <div className="relative w-full overflow-hidden flex justify-center border-t border-b border-neutral-950">
                <div className="grid grid-cols-3">
                    {members.map((member, index) => {
                        const isOtherHovered = hoveredIndex !== null && hoveredIndex !== index
                        return (
                            <div key={index} className={`group relative shadow-xl backdrop-blur-lg p-15 w-80 flex flex-col items-center border border-neutral-950 transition duration-300 ${isOtherHovered ? 'opacity-30' : 'opacity-100'}`} onMouseEnter={() => setHoveredIndex(index)} onMouseLeave={() => setHoveredIndex(null)}>
                                <img src={member.image} alt={member.name} className="w-24 h-24 rounded-full object-cover shadow-lg mb-6 filter grayscale transition duration-300 group-hover:grayscale-0" />
                                <div className="text-white font-semibold text-lg text-center mb-2">{member.name}</div>
                                <div className="text-neutral-400 text-sm text-center">{member.role}</div>
                            </div>
                        )
                    })}

                    {/* fill in the blanks */}
                    <div className="group relative shadow-xl backdrop-blur-lg p-15 w-80 flex flex-col items-center border border-neutral-950"></div>
                    <div className="group relative shadow-xl backdrop-blur-lg p-15 w-80 flex flex-col items-center border border-neutral-950"></div>
                </div>
            </div>
            <Marquee gradient={false} speed={50} loop={0}>
                <div className="flex whitespace-nowrap">
                    <span className="text-4xl py-7 px-12 text-white/10 font-bold tracking-tight">Members</span>
                    <span className="text-4xl py-7 px-12 text-white/10 font-bold tracking-tight">Members</span>
                    <span className="text-4xl py-7 px-12 text-white/10 font-bold tracking-tight">Members</span>
                    <span className="text-4xl py-7 px-12 text-white/10 font-bold tracking-tight">Members</span>
                    <span className="text-4xl py-7 px-12 text-white/10 font-bold tracking-tight">Members</span>
                    <span className="text-4xl py-7 px-12 text-white/10 font-bold tracking-tight">Members</span>
                    <span className="text-4xl py-7 px-12 text-white/10 font-bold tracking-tight">Members</span>
                </div>
            </Marquee>
        </section>
    )
}
