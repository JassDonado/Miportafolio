import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#0a0a0a] text-white">
        <section
          id="home"
          className="flex min-h-screen items-center justify-center px-6 pt-28"
        >
          <div className="max-w-4xl text-center">
            <h1 className="text-5xl font-bold md:text-7xl">
              Jasseff <span className="text-cyan-400">Dev</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300 md:text-xl">
              Desarrollador web creando experiencias modernas, limpias y
              funcionales.
            </p>
          </div>
        </section>

        <section id="about" className="px-6 py-24 md:px-10">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-6 text-4xl font-bold">Sobre mí</h2>
            <p className="text-lg leading-8 text-gray-300">
              Soy Jasseff, apasionado por el desarrollo web y la creación de
              interfaces modernas. Me gusta construir proyectos con React,
              Next.js y Tailwind CSS, cuidando tanto el diseño como la
              experiencia del usuario.
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
    </>
  );
}