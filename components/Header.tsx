"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="fixed top-4 left-0 w-full z-50 px-4 md:px-8">
      <header className="mx-auto flex max-w-6xl items-center justify-between rounded-2xl border border-white/10 bg-white/10 px-6 py-4 backdrop-blur-lg shadow-lg">
        <a href="#home" className="text-2xl font-bold tracking-tight text-white">
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
          className="md:hidden text-white"
          aria-label="Abrir menú"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </header>

      {menuOpen && (
        <div className="mx-auto mt-3 max-w-6xl rounded-2xl border border-white/10 bg-black/80 p-6 backdrop-blur-lg md:hidden">
          <nav className="flex flex-col gap-4 text-gray-200">
            <a href="#about" onClick={closeMenu} className="hover:text-white">
              Sobre mí
            </a>
            <a href="#projects" onClick={closeMenu} className="hover:text-white">
              Proyectos
            </a>
            <a
              href="#contact"
              onClick={closeMenu}
              className="rounded-full bg-violet-800 px-4 py-2 text-center font-semibold text-white"
            >
              Contáctame
            </a>
          </nav>
        </div>
      )}
    </div>
  );
}