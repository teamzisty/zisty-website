"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { BlurFade } from "@/components/magicui/blur-fade";

export default function Header() {
  const [activeSection, setActiveSection] = useState("home");
  const sectionIds = useMemo(() => ["home", "people", "join-us"], []);

  useEffect(() => {
    let observer: IntersectionObserver;

    const setupObserver = () => {
      const elements = sectionIds
        .map(id => document.getElementById(id))
        .filter(el => el !== null) as HTMLElement[];

      if (elements.length !== sectionIds.length) {
        return false;
      }

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(entry.target.id);
            }
          });
        },
        {
          rootMargin: "0px 0px -60% 0px",
          threshold: 0.1,
        }
      );

      elements.forEach(el => observer.observe(el));
      return true;
    };

    let attempts = 0;
    const trySetup = () => {
      if (setupObserver()) return;
      attempts++;
      if (attempts < 10) setTimeout(trySetup, 100);
    };
    trySetup();

    // Home Active Section Detection
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setActiveSection("home");
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      if (observer) observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sectionIds]);

  return (
    <header
      className={cn(
        "fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-in-out",
      )}
    >
      <div
        className="container mx-auto flex items-center justify-center rounded-full bg-black/50 px-4 py-2 backdrop-blur-sm"
      >
        <nav className="flex justify-center gap-2">
          <Link href="#home">
            <button className={cn(
              "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ease-in-out",
              activeSection === "home"
                ? "bg-white text-black"
                : "text-muted-foreground hover:text-white"
            )}>
              Home
            </button>
          </Link>
          <Link href="#people">
            <button className={cn(
              "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ease-in-out",
              activeSection === "people"
                ? "bg-white text-black"
                : "text-muted-foreground hover:text-white"
            )}>
              People
            </button>
          </Link>
          <Link href="#join-us">
            <button className={cn(
              "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ease-in-out",
              activeSection === "join-us"
                ? "bg-white text-black"
                : "text-muted-foreground hover:text-white"
            )}>
              Join
            </button>
          </Link>
        </nav>
      </div>
    </header>
  );
}
