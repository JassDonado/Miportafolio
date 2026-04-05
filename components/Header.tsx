"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/85 backdrop-blur-md border-b border-white/10 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex items-center justify-between h-20">
          <a
            href="#home"
            className="text-2xl font-bold tracking-tight text-white"
          >
            Jasseff <span className="text-cyan-400">Dev</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
            <a
              href="#about"
              className="transition hover:text-white hover:-translate-y-0.5"
            >
              Sobre mí
            </a>
            <a
              href="#projects"
              className="transition hover:text-white hover:-translate-y-0.5"
            >
              Proyectos
            </a>
            <a
              href="#contact"
              className="px-4 py-2 rounded-full bg-cyan-500 text-black font-semibold transition hover:scale-105"
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
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-4 mb-4 rounded-2xl border border-white/10 bg-black/90 backdrop-blur-md p-6 flex flex-col gap-4 text-gray-300">
          <a
            href="#about"
            onClick={closeMenu}
            className="transition hover:text-white"
          >
            Sobre mí
          </a>
          <a
            href="#projects"
            onClick={closeMenu}
            className="transition hover:text-white"
          >
            Proyectos
          </a>
          <a
            href="#contact"
            onClick={closeMenu}
            className="rounded-full bg-cyan-500 px-4 py-2 text-center font-semibold text-black transition hover:scale-[1.02]"
          >
            Contáctame
          </a>
        </div>
      </div>
    </header>
  );
}