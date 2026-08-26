"use client";

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative px-6 py-6 md:px-12 lg:px-20">
      <div className="flex items-center justify-between">
        <a href="#" className="text-xl font-bold tracking-tight transition hover:opacity-60">
          WANNUR.
        </a>

        {/* Desktop Menu */}
        <div className="hidden gap-8 text-sm font-medium md:flex">
          <a href="#about" className="relative transition hover:opacity-60">
            About
          </a>

          <a href="#skills" className="relative transition hover:opacity-60">
            Skills
          </a>

          <a href="#projects" className="relative transition hover:opacity-60">
            Projects
          </a>

          <a href="#contact" className="relative transition hover:opacity-60">
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute left-6 right-6 top-20 z-50 rounded-2xl border border-gray-200 bg-white p-6 shadow-lg md:hidden">
          <div className="flex flex-col gap-5 text-lg font-medium">
            <a href="#about" onClick={() => setIsOpen(false)}>
              About
            </a>

            <a href="#skills" onClick={() => setIsOpen(false)}>
              Skills
            </a>

            <a href="#projects" onClick={() => setIsOpen(false)}>
              Projects
            </a>

            <a href="#contact" onClick={() => setIsOpen(false)}>
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}