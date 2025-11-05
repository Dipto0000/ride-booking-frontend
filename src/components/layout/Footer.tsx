// src/components/Footer.tsx
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 mt-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
        {/* Brand or Logo */}
        <h2 className="text-lg font-semibold mb-3 sm:mb-0 text-white">
          Rideo
        </h2>
        <p className="text-xs mt-3 sm:mt-0">
          © {new Date().getFullYear()} Rideio. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
