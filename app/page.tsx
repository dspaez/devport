export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900 flex flex-col items-center justify-center gap-6">
      {/* Título principal */}
      <h1 className="text-5xl font-bold text-white">
        Bienvenido a <span
          className="text-blue-400">DevPort</span>
      </h1>
      {/* Subtítulo */}
      <p className="text-lg text-slate-400 max-w-md text-center">
        El portal de empleos y proyectos
        para la comunidad tech.
      </p>
      {/* Botón placeholder */}
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors">
        Explorar proyectos
      </button>
    </main>
  )
}