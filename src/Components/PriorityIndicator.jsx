import React from "react";

export default function PriorityIndicator({ priority = "low" }) {
  const colorMap = {
    high: "#ef4444",    // red
    medium: "#facc15",  // yellow
    low: "#22c55e",     // green
  };

  const color = colorMap[priority.toLowerCase()] || colorMap.low;

  return (
    <div className="priority-indicator" title={`Priority: ${priority}`}>
      <span
        className="priority-dot"
        style={{ backgroundColor: color, boxShadow: `0 0 6px 2px ${color}55` }}
      ></span>
    </div>
  );
}
