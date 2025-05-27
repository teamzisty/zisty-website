import React from "react";

const CursorArrow = ({ color, side }: { color: string; side: "left" | "right" }) => (
  <svg className={`w-6 h-6`} style={{ color: `rgba(${color}, 0.6)`, transform: side === "left" ? "rotate(-45deg)" : "scaleX(-1) rotate(-45deg)"  }} viewBox="0 0 24 24" fill="currentColor">
    <polygon points="2,21 23,12 2,3 6,12 2,21" />
  </svg>
);

const MultiCursor = ({ cursors }: { cursors: { id: number; name: string; color: string; side: "left" | "right" }[] }) => (
  <div>
    {cursors.map((cursor) => (
      <div key={cursor.id} className="relative inline-block m-4 gentleFloat">
        <div className="absolute" style={ cursor.side === "left" ? { top: -20, right: -25 } : { top: -20, left: -25 } }>
          <CursorArrow color={cursor.color} side={cursor.side} />
        </div>
        <span className={`text-white px-3 py-1 rounded-lg text-base font-semibold`} style={{ boxShadow: `0 0 10px 5px rgba(${cursor.color}, 0.1), 0 0 50px 30px rgba(${cursor.color}, 0.1)`, backgroundColor: `rgba(${cursor.color}, 0.2)` }}>
           {cursor.name}
        </span>
      </div>
    ))}
  </div>
);

export default MultiCursor;
