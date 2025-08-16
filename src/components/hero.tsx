"use client";

import { DotPattern } from "@/components/magicui/dot-pattern";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="w-full min-h-screen flex flex-col items-center justify-center"
    >
      <div className="z-10 flex flex-col items-center text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
          Build the
          <span className="relative inline-block text-yellow-400 mx-4">
            Amazing
            <span
              className="absolute inset-0 pointer-events-none rounded-md border-2 border-foreground/60 animate-gentleFloat -mx-1"
              aria-hidden="true"
              style={{ zIndex: -1 }}
            />
          </span>
          Products
          <br />
          <span className="font-bold tracking-tight text-foreground/80 leading-tight">
            For turn the unreal to real
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          We are a community team of mainly Japanese students who love
          programming
        </p>
      </div>

    </section>
  );
}
