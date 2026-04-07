import Image from "next/image"
import Retrato from "@/imagenes/Retrato.png"

export default function Body() {
    return (

        <main className="min-h-screen bg-[#0a0a0a] text-white">
        <section
          id="home"
          className="flex min-h-screen items-center justify-between px-6 pt-28 gap-12"
        >
          <div className="max-w-2xl flex-1">
            <h1 className="text-5xl font-bold md:text-7xl">
              Jasseff <span className="text-violet-800">Dev</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300 md:text-xl">
                Desarrollador Web & Especialista en TI
                Creo soluciones digitales modernas, combinando
                desarrollo web con experiencia en soporte y sistemas.
            </p>
          </div>
          <div className="flex-1 flex justify-center">
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
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-6 text-4xl font-bold">Sobre mí</h2>
            <p className="text-lg leading-8 text-gray-300">
              Soy desarrollador web y técnico en sistemas, con experiencia
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
          </div>
        </section>
      </main>


    );
}