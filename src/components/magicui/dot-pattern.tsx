"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";

export function DotPattern({
  width = 16,
  height = 16,
  cx = 1,
  cy = 1,
  cr = 1,
  className,
  glow = false,
  ...props
}: {
  width?: number;
  height?: number;
  cx?: number;
  cy?: number;
  cr?: number;
  className?: string;
  glow?: boolean;
  [key: string]: unknown;
}) {
  const containerRef = useRef<SVGSVGElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [uniqueId] = useState(() => `dotpattern-${Math.random().toString(36).slice(2)}`);

  useEffect(() => {
    if (!containerRef.current) return;

    const updateDimensions = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        if (width !== dimensions.width || height !== dimensions.height) {
          setDimensions({ width, height });
        }
      }
    };

    updateDimensions();

    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, [dimensions.width, dimensions.height]);

  const cols = Math.max(1, Math.ceil(dimensions.width / width));
  const rows = Math.max(1, Math.ceil(dimensions.height / height));

  const dots = Array.from({ length: cols * rows }, (_, i) => {
    const col = i % cols;
    const row = Math.floor(i / cols);
    return {
      x: col * width + cx,
      y: row * height + cy,
      delay: Math.random() * 5,
      duration: Math.random() * 3 + 2,
    };
  });

  return (
    <svg
      ref={containerRef}
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0 h-full w-full", className)}
      {...props}
    >
      <defs>
        <radialGradient id={`${uniqueId}-gradient`}>
          <stop offset="0%" stopColor="currentColor" stopOpacity="1" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </radialGradient>
      </defs>
      {dots.map((dot) => (
        <motion.circle
          key={`${dot.x}-${dot.y}`}
          cx={dot.x}
          cy={dot.y}
          r={cr}
          fill={glow ? `url(#${uniqueId}-gradient)` : "currentColor"}
          className="text-neutral-400/80"
          initial={glow ? { opacity: 0.4, scale: 1 } : undefined}
          animate={
            glow
              ? {
                  opacity: [0.4, 1, 0.4],
                  scale: [1, 1.5, 1],
                }
              : undefined
          }
          transition={
            glow
              ? {
                  duration: dot.duration,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: dot.delay,
                  ease: "easeInOut",
                }
              : undefined
          }
        />
      ))}
    </svg>
  );
}
