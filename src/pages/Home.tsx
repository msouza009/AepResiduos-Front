import { Leaf, MapPin, CalendarCheck, Gift } from "lucide-react"

function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-10">
          <div className="flex-1">
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Transforme <span className="text-[#16A34A]">Resíduos</span> em <span className="text-[#FACC15]">Impacto</span>.
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Agende coletas, encontre pontos de reciclagem e contribua para um futuro mais sustentável.
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

      {/* Funcionalidades */}
      <section className="py-16 bg-[#F9FAFB]">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-10 text-center">O que você pode fazer?</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <Leaf className="w-12 h-12 mx-auto text-[#16A34A]" />
              <h3 className="text-xl font-semibold mt-4 mb-2">Conscientize</h3>
              <p className="text-gray-600">Aprenda como contribuir para um meio ambiente mais limpo.</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <MapPin className="w-12 h-12 mx-auto text-[#FACC15]" />
              <h3 className="text-xl font-semibold mt-4 mb-2">Encontre Pontos</h3>
              <p className="text-gray-600">Descubra empresas e locais de coleta próximos de você.</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <CalendarCheck className="w-12 h-12 mx-auto text-[#16A34A]" />
              <h3 className="text-xl font-semibold mt-4 mb-2">Agende Coletas</h3>
              <p className="text-gray-600">Programe coletas rápidas e práticas diretamente pela plataforma.</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <Gift className="w-12 h-12 mx-auto text-[#FACC15]" />
              <h3 className="text-xl font-semibold mt-4 mb-2">Ganhe Recompensas</h3>
              <p className="text-gray-600">Acumule pontos e troque por recompensas exclusivas.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
