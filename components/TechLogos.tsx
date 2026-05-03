'use client';

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaBootstrap,
  FaPython,
  FaJava,
} from 'react-icons/fa';
import { SiTailwindcss, SiSupabase, SiVercel } from 'react-icons/si';

export const LogoHTML = () => (
  <FaHtml5 className="w-12 h-12 text-orange-500" />
);

export const LogoCSS = () => (
  <FaCss3Alt className="w-12 h-12 text-blue-500" />
);

export const LogoJavaScript = () => (
  <FaJs className="w-12 h-12 text-yellow-400" />
);

export const LogoTailwind = () => (
  <SiTailwindcss className="w-12 h-12 text-cyan-400" />
);

export const LogoReact = () => (
  <FaReact className="w-12 h-12 text-cyan-400 animate-spin" style={{ animationDuration: '3s' }} />
);

export const LogoNode = () => (
  <FaNodeJs className="w-12 h-12 text-green-500" />
);

export const LogoBootstrap = () => (
  <FaBootstrap className="w-12 h-12 text-purple-600" />
);

export const LogoSupabase = () => (
  <SiSupabase className="w-12 h-12 text-green-400" />
);

export const LogoPython = () => (
  <FaPython className="w-12 h-12 text-blue-400" />
);

export const LogoJava = () => (
  <FaJava className="w-12 h-12 text-red-500" />
);

export const LogoVercel = () => (
  <SiVercel className="w-12 h-12 text-purple-300" />
);
