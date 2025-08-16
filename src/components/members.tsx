"use client";

import Image from "next/image";
import { useState } from "react";

const members = [
  {
    name: "Rion",
    role: "Founder, Developer",
    image: "https://github.com/ri0n-dev.png",
  },
  {
    name: "tanahiro2010",
    role: "Mod, Developer",
    image: "https://github.com/tanahiro2010.png",
  },
  {
    name: "Syobosyobon",
    role: "Mod, Developer",
    image:
      "https://pbs.twimg.com/profile_images/1772492028636737536/bClftlxv_400x400.jpg",
  },
  {
    name: "kazu",
    role: "Mod, Developer",
    image:
      "https://cdn.discordapp.com/avatars/1004348660181630977/6445e3f6eddfbad4b0130e9680552673.webp?size=1024",
  },
  {
    name: "rai",
    role: "Mod, Developer",
    image:
      "https://pbs.twimg.com/profile_images/1915770562779209728/yZyDjjpC_400x400.jpg",
  },
  {
    name: "Sigma",
    role: "Developer",
    image: "https://cdn.discordapp.com/avatars/809373892183195668/b8bdc8737e0dff4fc3282d0358e44168.webp?size=1024g",
  },
  {
    name: "tom",
    role: "Developer",
    image:
      "https://pbs.twimg.com/profile_images/1863135999087505408/5qjunahh_400x400.jpg",
  },
  {
    name: "hypi",
    role: "Developer",
    image:
      "https://pbs.twimg.com/profile_images/1908406182680907776/SNjY1S66_400x400.jpg",
  },
  {
    name: "age_water",
    role: "Developer",
    image:
      "https://pbs.twimg.com/profile_images/1436185055584350227/LiN0mIi__400x400.png",
  },
];

const MemberCard = ({ member }: { member: (typeof members)[0] }) => {
  return (
    <div
      className="group relative rounded-xl overflow-hidden transition-all duration-500 ease-in-out"
      style={{ minHeight: 340 }}
    >
      {/* Blurred background image covering the card */}
      <div className="absolute inset-0 z-0">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover w-full h-full filter blur-2xl scale-110 brightness-25 transition duration-500 grayscale group-hover:grayscale-0 group-hover:brightness-50 ease-in-out"
          sizes="(max-width: 768px) 100vw, 260px"
          draggable={false}
        />
        {/* Optional: dark overlay for better contrast */}
        <div className="absolute inset-0 bg-black/30 z-1" />
      </div>
      {/* Profile Image */}
      <div className="relative z-10 m-4 flex items-center justify-center aspect-square w-[calc(100%-2rem)]">
        <div className="relative w-full h-full">
          <Image
            src={member.image}
            alt={member.name}
            fill
            sizes="(max-width: 768px) 100vw, 260px"
            draggable={false}
            className="
    rounded-2xl object-cover w-full h-full
    filter grayscale brightness-75
    transition-all duration-500 ease-in-out
    group-hover:grayscale-0 group-hover:brightness-100
  "
          />
        </div>
      </div>

      {/* Footer info */}
      <div className="relative z-10 w-full px-4 pb-3 flex flex-col items-start gap-1">
        <p className="font-semibold truncate w-full">{member.name}</p>
        <p className="text-sm text-gray-400 truncate w-full">{member.role}</p>
      </div>
    </div>
  );
};

export default function Members() {
  const [mousePos, setMousePos] = useState({ x: "50%", y: "50%" });
  const [isMouseInside, setIsMouseInside] = useState(false);
  return (
    <section id="people" className="py-10 w-full">
        <div
          className="relative mt-12 pb-16"
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            let x = e.clientX - rect.left;
            let y = e.clientY - rect.top;

            // spotlightの下制限
            // yがrect.heightの80%より下に行かないようにする
            const maxY = rect.height * 0.7;
            if (y > maxY) y = maxY;
            if (y < 0) y = 0;
            if (x < 0) x = 0;
            if (x > rect.width) x = rect.width;

            setMousePos({ x: `${x}px`, y: `${y}px` });
            setIsMouseInside(true);
          }}
          onMouseLeave={() => {
            setMousePos({ x: "50%", y: "50%" });
            setIsMouseInside(false);
          }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {members.map((member) => (
              <MemberCard key={member.name} member={member} />
            ))}
          </div>
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background: isMouseInside 
                ? `radial-gradient(circle at ${mousePos.x} ${mousePos.y}, rgba(255,255,255,0.1), transparent 30%)`
                : 'transparent',
            }}
          />
        </div>
    </section>
  );
}
