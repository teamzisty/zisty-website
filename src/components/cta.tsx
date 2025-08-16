"use client";

import { Button } from "./ui/button";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import React from "react";
import MultiCursor from "./ui/multiCursor";
const CircularNames = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center gap-200 hide-cursor">
      <div className="relative w-[200px] h-[500px]">
        <div className="absolute top-0 right-0">
          <MultiCursor
            cursors={[
              { id: 1, name: "Rion", color: "202, 138, 4 ", side: "left" },
            ]}
          />
        </div>
        <div className="absolute top-[85px] right-2">
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
        <div className="absolute top-[180px] right-4">
          <MultiCursor
            cursors={[
              { id: 5, name: "Sigma", color: "8, 145, 178 ", side: "left" },
            ]}
          />
        </div>
        <div className="absolute top-[260px] right-[10px]">
          <MultiCursor
            cursors={[
              { id: 7, name: "Yunai", color: "147, 51, 234 ", side: "left" },
            ]}
          />
        </div>
        <div className="absolute top-[340px] right-[0px]">
          <MultiCursor
            cursors={[
              { id: 9, name: "h_ypi", color: "202, 138, 4 ", side: "left" },
            ]}
          />
        </div>
        <div className="absolute top-[420px] right-[-30px]">
          <MultiCursor
            cursors={[
              { id: 11, name: "tom", color: "22, 163, 74 ", side: "left" },
            ]}
          />
        </div>
      </div>

      <div className="relative w-[200px] h-[500px]">
        <div className="absolute top-0 left-0">
          <MultiCursor
            cursors={[
              { id: 2, name: "kazu", color: "22, 163, 74 ", side: "right" },
            ]}
          />
        </div>
        <div className="absolute top-[85px] left-2">
          <MultiCursor
            cursors={[
              {
                id: 4,
                name: "Syobosyobonn",
                color: "8, 145, 178 ",
                side: "right",
              },
            ]}
          />
        </div>
        <div className="absolute top-[190px] left-4">
          <MultiCursor
            cursors={[
              {
                id: 6,
                name: "umaidango",
                color: "147, 51, 234 ",
                side: "right",
              },
            ]}
          />
        </div>
        <div className="absolute top-[290px] left-[-10px]">
          <MultiCursor
            cursors={[
              { id: 8, name: "takoyaki", color: "22, 163, 74 ", side: "right" },
            ]}
          />
        </div>
        <div className="absolute top-[380px] left-[-40px]">
          <MultiCursor
            cursors={[
              { id: 10, name: "rai", color: "202, 138, 4 ", side: "right" },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default function Cta() {
  return (
    <section id="join-us" className="py-80 w-full relative overflow-hidden">
      <CircularNames />
      <div className="container mx-auto px-4">
        <div className="relative flex flex-col items-center text-center z-10">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-2">
            Want to{" "}
            <span className="relative inline-block">
              <span className="border-b-4 border-yellow-400 px-1 pb-1">
                join
                <span
                  className="absolute -right-3 -top-5 text-2xl animate-wave"
                  style={{ transformOrigin: "70% 70%" }}
                  aria-label="waving hand"
                  role="img"
                >
                  {/* SVG hand for colorless emoji */}
                  <svg
                    width="24px"
                    height="24px"
                    viewBox="0 0 36 36"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    className="iconify iconify--twemoji"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <path
                      fill="#EF9645"
                      d="M4.861 9.147c.94-.657 2.357-.531 3.201.166l-.968-1.407c-.779-1.111-.5-2.313.612-3.093c1.112-.777 4.263 1.312 4.263 1.312c-.786-1.122-.639-2.544.483-3.331a2.483 2.483 0 0 1 3.456.611l10.42 14.72L25 31l-11.083-4.042L4.25 12.625a2.495 2.495 0 0 1 .611-3.478z"
                    ></path>

                    <path
                      fill="#FFDC5D"
                      d="M2.695 17.336s-1.132-1.65.519-2.781c1.649-1.131 2.78.518 2.78.518l5.251 7.658c.181-.302.379-.6.6-.894L4.557 11.21s-1.131-1.649.519-2.78c1.649-1.131 2.78.518 2.78.518l6.855 9.997c.255-.208.516-.417.785-.622L7.549 6.732s-1.131-1.649.519-2.78c1.649-1.131 2.78.518 2.78.518l7.947 11.589c.292-.179.581-.334.871-.498L12.238 4.729s-1.131-1.649.518-2.78c1.649-1.131 2.78.518 2.78.518l7.854 11.454l1.194 1.742c-4.948 3.394-5.419 9.779-2.592 13.902c.565.825 1.39.26 1.39.26c-3.393-4.949-2.357-10.51 2.592-13.903L24.515 8.62s-.545-1.924 1.378-2.47c1.924-.545 2.47 1.379 2.47 1.379l1.685 5.004c.668 1.984 1.379 3.961 2.32 5.831c2.657 5.28 1.07 11.842-3.94 15.279c-5.465 3.747-12.936 2.354-16.684-3.11L2.695 17.336z"
                    ></path>

                    <g fill="#5DADEC">
                      <path d="M12 32.042C8 32.042 3.958 28 3.958 24c0-.553-.405-1-.958-1s-1.042.447-1.042 1C1.958 30 6 34.042 12 34.042c.553 0 1-.489 1-1.042s-.447-.958-1-.958z"></path>

                      <path d="M7 34c-3 0-5-2-5-5a1 1 0 1 0-2 0c0 4 3 7 7 7a1 1 0 1 0 0-2zM24 2a1 1 0 0 0 0 2c4 0 8 3.589 8 8a1 1 0 0 0 2 0c0-5.514-4-10-10-10z"></path>

                      <path d="M29 .042c-.552 0-1 .406-1 .958s.448 1.042 1 1.042c3 0 4.958 2.225 4.958 4.958c0 .552.489 1 1.042 1s.958-.448.958-1C35.958 3.163 33 .042 29 .042z"></path>
                    </g>
                  </svg>
                </span>
              </span>
            </span>{" "}
            us?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            By joining Zisty Hub, you can engage in various interactions such as
            development updates and VC sessions. Please feel free to join us.
          </p>
          <Button variant="outline" size="lg" className="mt-8" asChild>
            <Link href="https://discord.gg/teamzisty">
              Join Discord <ArrowUpRight size={18} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
