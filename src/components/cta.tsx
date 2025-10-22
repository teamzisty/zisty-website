"use client";

import { Button } from "./ui/button";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Highlighter } from "@/components/ui/highlighter"
import MultiCursor from "./ui/multiCursor";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
const CircularNames = () => {
  return (
    <div className="hidden xl:flex absolute top-0 left-0 w-full h-full justify-center items-center gap-200 hide-cursor">
      <div className="relative w-[200px] h-[500px]">
        <div className="absolute top-0 right-0">
          <MultiCursor
            cursors={[
              { id: 1, name: "Rion", color: "202, 138, 4 ", side: "left" },
            ]}
          />
        </div>
        <div className="absolute top-[130px] right-2">
          <MultiCursor
            cursors={[
              {
                id: 3,
                name: "tanahiro2010",
                color: "22, 163, 74 ",
                side: "left",
              },
            ]}
          />
        </div>
        <div className="absolute top-[260px] right-4">
          <MultiCursor
            cursors={[
              { id: 5, name: "Sigma", color: "8, 145, 178 ", side: "left" },
            ]}
          />
        </div>
        <div className="absolute top-[390px] right-[10px]">
          <MultiCursor
            cursors={[
              { id: 7, name: "age_water", color: "147, 51, 234 ", side: "left" },
            ]}
          />
        </div>
      </div>

      <div className="relative w-[200px] h-[500px]">
        <div className="absolute top-0 left-0">
          <MultiCursor
            cursors={[
              {
                id: 2,
                name: "Syobosyobonn",
                color: "22, 163, 74 ",
                side: "right"
              },
            ]}
          />
        </div>
        <div className="absolute top-[130px] left-2">
          <MultiCursor
            cursors={[
              {
                id: 4,
                name: "Maguro",
                color: "8, 145, 178 ",
                side: "right",
              },
            ]}
          />
        </div>
        <div className="absolute top-[260px] left-4">
          <MultiCursor
            cursors={[
              {
                id: 6,
                name: "tom",
                color: "147, 51, 234 ",
                side: "right",
              },
            ]}
          />
        </div>
        <div className="absolute top-[390px] left-[-10px]">
          <MultiCursor
            cursors={[
              { id: 8, name: "rai", color: "22, 163, 74 ", side: "right" },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default function Cta() {
  return (
    <section id="join-us" className="py-30 lg:py-80 w-full relative overflow-hidden">
      <CircularNames />
      <FlickeringGrid className="absolute inset-0 z-0 [mask-image:radial-gradient(450px_circle_at_center,white,transparent)]" squareSize={4} gridGap={6} color="#2f2709" maxOpacity={1} />
      <div className="container mx-auto px-4">
        <div className="relative flex flex-col items-center text-center z-10">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-2">
            Want to{" "}
            <Highlighter action="underline" color="#fdc700">
              Join
            </Highlighter>{" "}
            us?
          </h2>
          <p className="mt-4 text-sm md:text-lg text-muted-foreground max-w-2xl mx-auto">
            By joining Zisty Hub, you can engage in various interactions such as
            development updates and VC sessions. Please feel free to join us.
          </p>

          <div className="flex lg:hidden">
            <Button className="mt-9" asChild>
              <Link href="https://discord.gg/teamzisty">
                Join Discord <ArrowUpRight size={18} />
              </Link>
            </Button>
          </div>
          <div className="hidden lg:flex">
            <Button size="lg" className="mt-9" asChild>
              <Link href="https://discord.gg/teamzisty">
                Join Discord <ArrowUpRight size={18} />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
