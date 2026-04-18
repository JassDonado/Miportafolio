'use client';

import Image from "next/image";
import Retrato from "@/imagenes/Retrato.png";
import TypewriterTitle from "./TypewriterTitle";
import { useInView } from "@/hooks/UseInViev";

export default function Body() {
  const { ref: heroTextRef, inView: heroTextInView } = useInView(0.25);
  const { ref: heroImageRef, inView: heroImageInView } = useInView(0.25);
  const { ref: aboutRef, inView: aboutInView } = useInView(0.2);

  return (
    <main
      className="relative min-h-screen bg-[#1a1a1a] text-white overflow-hidden"
      style={{
        backgroundImage: 'url(/background-splash.svg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'scroll',
      }}
    >
      <section
        id="home"
        className="flex min-h-screen flex-col items-center justify-center gap-12 px-6 pt-28 md:flex-row"
      >
        <div
          ref={heroTextRef}
          className={`max-w-2xl flex-1 transform transition-all duration-1000 ease-out ${
            heroTextInView
              ? "translate-x-0 opacity-100 blur-0"
              : "-translate-x-16 opacity-0 blur-sm"
          }`}
        >
          <TypewriterTitle />
          <p className="mt-6 text-lg leading-8 text-gray-300 md:text-xl">
            Desarrollador Web & Especialista en TI.
            <br />
            Diseño soluciones digitales modernas, combinando
            desarrollo web con experiencia en soporte y sistemas.
          </p>
        </div>

        <div
          ref={heroImageRef}
          className={`flex flex-1 justify-center transform transition-all duration-1000 ease-out ${
            heroImageInView
              ? "translate-x-0 scale-100 opacity-100 blur-0"
              : "translate-x-16 scale-95 opacity-0 blur-sm"
          }`}
        >
          <Image
            src={Retrato}
            alt="Jasseff Dev"
            className="rounded-full border-4 border-violet-800 shadow-lg"
            width={280}
            height={250}
            priority
          />
        </div>
      </section>

      <section id="about" className="px-6 py-24 md:px-10">
        <div
          ref={aboutRef}
          className={`mx-auto max-w-5xl transform transition-all duration-1000 ease-out ${
            aboutInView
              ? "translate-y-0 opacity-100 blur-0"
              : "translate-y-24 opacity-0 blur-md"
          }`}
        >
          <h2 className="mb-6 text-4xl font-bold">Sobre mí</h2>
          <p className="text-lg leading-8 text-gray-300">
            Soy desarrollador web y tecnólogo en sistemas, con experiencia
            en soporte TI, redes y mantenimiento de infraestructura
            tecnológica.
            <br />
            <br />
            Actualmente laboro como soporte N2 en sistemas, gestionando
            incidentes y asegurando la continuidad de los servicios.
            Complemento esta experiencia con desarrollo web, creando
            soluciones digitales modernas, eficientes y enfocadas
            en el usuario final.
            <br />
            <br />
            Me apasiona la tecnología, el aprendizaje continuo y la construcción
            de soluciones que generen impacto.
          </p>
        </div>
      </section>

      <section className="px-6 py-24 md:px-10">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-6 text-4xl font-bold">Lenguajes</h2>
          <p className="text-lg leading-8 text-gray-300">
            Desarrollo web: HTML, CSS, JavaScript, React, Next.js.
          </p>
        </div>
      </section>

      <section id="projects" className="px-6 py-24 md:px-10">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-6 text-4xl font-bold">Proyectos</h2>
          <p className="text-lg leading-8 text-gray-300">
            Aquí irán tus proyectos destacados con su descripción,
            tecnologías utilizadas y enlaces a GitHub o demo.
          </p>
        </div>
      </section>

      <section id="contact" className="px-6 py-24 md:px-10">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-6 text-4xl font-bold">Contáctame</h2>
          <p className="text-lg leading-8 text-gray-300">
            Puedes agregar aquí tu correo, GitHub, LinkedIn o un formulario
            de contacto.
          </p>
          <ul className="mt-4 space-y-2 text-gray-300">
            <li>TikTok</li>
            <li>Instagram</li>
            <li>LinkedIn</li>
          </ul>
        </div>
      </section>
    </main>
  );
}