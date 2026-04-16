"use client";

import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="fixed top-4 left-0 w-full z-50 px-4 md:px-8">
      <header className="mx-auto flex max-w-6xl items-center justify-between rounded-2xl border
       border-white/10 bg-white/10 px-6 py-4 backdrop-blur-lg shadow-lg">
        <a href="#home" className="text-2xl font-bold tracking-tight text-white transition hover:scale-110">
          Jasseff <span className="text-violet-800">Dev</span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-200">
          <a href="#about" className="transition hover:text-white">
            Sobre mí
          </a>
          <a href="#projects" className="transition hover:text-white">
            Proyectos
          </a>
          <a
            href="#contact"
            className="rounded-full bg-violet-800 px-4 py-2 font-semibold text-white transition hover:scale-105"
          >
            Contáctame
          </a>
        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden group inline-flex w-12 h-12 bg-violet-800 text-white text-center items-center justify-center rounded transition duration-300 hover:shadow-lg"
          aria-label="Abrir menú"
          aria-pressed={menuOpen}
        >
          <span className="sr-only">Menu</span>
          <svg
            className="w-6 h-6 fill-current pointer-events-none"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              className="origin-center -translate-y-[5px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-[[aria-pressed=true]]:translate-x-0 group-[[aria-pressed=true]]:translate-y-0 group-[[aria-pressed=true]]:rotate-[315deg]"
              y="7"
              width="9"
              height="2"
              rx="1"
            ></rect>
            <rect
              className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-[[aria-pressed=true]]:rotate-45"
              y="7"
              width="16"
              height="2"
              rx="1"
            ></rect>
            <rect
              className="origin-center translate-y-[5px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-[[aria-pressed=true]]:translate-y-0 group-[[aria-pressed=true]]:rotate-[135deg]"
              y="7"
              width="9"
              height="2"
              rx="1"
            ></rect>
          </svg>
        </button>
      </header>

      {menuOpen && (
        <div 
          className="mx-auto mt-3 max-w-6xl rounded-2xl border border-white/10 bg-black/80 p-6 backdrop-blur-lg md:hidden"
          style={{
            animation: 'slide-down 0.3s ease-out'
          }}
        >
          <nav className="flex flex-col gap-4 text-gray-200">
            <a href="#about" onClick={closeMenu} className="transition hover:text-white hover:translate-x-1">
              Sobre mí
            </a>
            <a href="#projects" onClick={closeMenu} className="transition hover:text-white hover:translate-x-1">
              Proyectos
            </a>
            <a
              href="#contact"
              onClick={closeMenu}
              className="rounded-full bg-violet-800 px-4 py-2 text-center font-semibold text-white transition hover:scale-105"
            >
              Contáctame
            </a>
          </nav>
        </div>
      )}
    </div>
  );
}