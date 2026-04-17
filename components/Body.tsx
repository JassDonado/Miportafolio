'use client';

import Image from "next/image"
import Retrato from "@/imagenes/Retrato.png"
import TypewriterTitle from "./TypewriterTitle"
import { useInView } from "@/hooks/UseInViev";

export default function Body() {
        const { ref: aboutRef, inView: aboutInView } = useInView();
    return (

        <main 
          className="relative min-h-screen bg-[#1a1a1a] text-white overflow-hidden"
          style={{
            backgroundImage: 'url(/background-splash.svg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'scroll'
          }}
        >
        <section
          id="home"
          className="flex min-h-screen items-center justify-between px-6 pt-28 gap-12"
        >
          <div className="max-w-2xl flex-1 animate-fade-in-left">
            <TypewriterTitle />
            <p className="mt-6 text-lg leading-8 text-gray-300 md:text-xl">
                Desarrollador Web & Especialista en TI.
                <br />
                Diseño soluciones digitales modernas, combinando
                desarrollo web con experiencia en soporte y sistemas.
            </p>
          </div>

          <div className="flex-1 flex justify-center animate-fade-in-right">
            
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
            className={`mx-auto max-w-5xl transition-all duration-2000 ${aboutInView ? "animate-slide-in-bottom" : "opacity-0"}`}
          >
            <h2 className="mb-6 text-4xl font-bold">Sobre mí</h2>
            <p className="text-lg leading-8 text-gray-300">
              Soy desarrollador web y tecnologo en sistemas, con experiencia
              en soporte TI, redes y mantenimiento de infraestructura
              tecnológica.

                  Actualmente trabajo en soporte N2, gestionando incidentes
                  y asegurando la continuidad de los servicios. 
                  Complemento esta experiencia con desarrollo web, creando
                  soluciones digitales modernas, eficientes y enfocadas
                  en el usuario final.

                  Me apasiona la tecnología, el aprendizaje continuo y la construcción
                  de soluciones que generen impacto..
            </p>
          </div>
        </section>

        <section>
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
              <ul>
                <li>tiktok</li>
                <li>instagram</li>
                <li>linkedin</li>
              </ul>
          </div>
        </section>
      </main>


    );
}