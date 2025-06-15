function Hero() {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-6 py-20 flex flex-col-reverse md:flex-row items-center gap-12">
        <div className="flex-1">
          <h2 className="text-5xl font-bold mb-6 leading-tight">
            Transforme <span className="text-[#16A34A]">Resíduos</span> em <span className="text-[#FACC15]">Impacto Positivo</span>.
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Agende coletas, encontre pontos de reciclagem e ajude o meio ambiente de forma simples e rápida.
          </p>
          <div className="flex gap-4">
            <button className="bg-[#16A34A] text-white px-6 py-3 rounded-lg hover:bg-[#15803d] transition">
              Agendar Coleta
            </button>
            <button className="border border-[#16A34A] text-[#16A34A] px-6 py-3 rounded-lg hover:bg-[#16A34A] hover:text-white transition">
              Ver Empresas
            </button>
          </div>
        </div>
        <div className="flex-1">
          <img 
            src="https://cdn-icons-png.flaticon.com/512/2907/2907253.png" 
            alt="Reciclagem" 
            className="w-full max-w-sm mx-auto"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
