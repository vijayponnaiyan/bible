// src/components/EmptyStateComponent.js
import React from "react";

export default function EmptyState() {
  return (
    <div className="flex items-center justify-center w-full">
      <div className="text-gray-500 font-medium animate-pulse w-full text-center block">
        No data available <br /> Try add new data
      </div>
    </div>
  );
}
