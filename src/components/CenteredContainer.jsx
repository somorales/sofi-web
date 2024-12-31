import React from "react";

export default function CenteredContainer({ children, className }) {
  return (
    <div className={`max-w-6xl mx-auto ${className || ""}`}>{children}</div>
  );
}
