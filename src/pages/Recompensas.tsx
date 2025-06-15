import { Gift } from "lucide-react"

function Recompensas() {
  const recompensas = [
    { id: 1, titulo: "Caneca Sustentável", pontos: 100 },
    { id: 2, titulo: "Desconto na Coleta", pontos: 200 },
    { id: 3, titulo: "Camiseta Eco-Friendly", pontos: 300 },
    { id: 4, titulo: "Kit Reciclagem", pontos: 500 },
  ]

  return (
    <div className="container mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold mb-8">Recompensas</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {recompensas.map((item) => (
          <div key={item.id} className="bg-white p-6 rounded-xl shadow hover:shadow-md transition flex flex-col items-center gap-4">
            <Gift className="w-12 h-12 text-[#FACC15]" />
            <h2 className="text-2xl font-semibold">{item.titulo}</h2>
            <p className="text-gray-600">Pontos necessários: <b>{item.pontos}</b></p>
            <button className="bg-[#16A34A] text-white px-6 py-2 rounded-lg hover:bg-[#15803d] transition">
              Resgatar
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Recompensas
