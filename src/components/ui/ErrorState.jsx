// src/components/ErrorComponent.js
import React from "react";

export default function ErrorState() {
  return (
    <div className="flex items-center justify-center">
      <div className="text-red-500 font-bold animate-shake">Something went wrong!</div>
    </div>
  );
}
