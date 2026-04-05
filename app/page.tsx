import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header />

      <main className="bg-black text-white scroll-smooth">
        <section
          id="home"
          className="min-h-screen flex items-center justify-center px-6"
        >
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold">
              Jasseff <span className="text-cyan-400">Dev</span>
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-300">
              Desarrollador web creando experiencias modernas y funcionales
            </p>
          </div>
        </section>

        <section
          id="about"
          className="min-h-screen px-6 md:px-10 py-24 border-t border-white/10"
        >
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Sobre mí</h2>
            <p className="text-gray-300 text-lg leading-8">
              Soy Jasseff, apasionado por el desarrollo web y la creación de
              interfaces modernas. Me gusta construir proyectos con Next.js,
              React y Tailwind CSS.
            </p>
          </div>
        </section>

        <section
          id="projects"
          className="min-h-screen px-6 md:px-10 py-24 border-t border-white/10"
        >
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Proyectos</h2>
            <p className="text-gray-300 text-lg leading-8">
              Aquí irán tus proyectos destacados con imágenes, descripción,
              tecnologías y enlaces.
            </p>
          </div>
        </section>

        <section
          id="contact"
          className="min-h-screen px-6 md:px-10 py-24 border-t border-white/10"
        >
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Contáctame</h2>
            <p className="text-gray-300 text-lg leading-8">
              Puedes agregar aquí tu correo, GitHub, LinkedIn o formulario de
              contacto.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}