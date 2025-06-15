import { MapPin } from "lucide-react"

function Empresas() {
  const empresas = [
    {
      id: 1,
      nome: "EcoLógica Coletas",
      endereco: "Rua Verde, 123",
      telefone: "(44) 99999-0000",
    },
    {
      id: 2,
      nome: "Recicla Fácil",
      endereco: "Av. Sustentável, 456",
      telefone: "(44) 98888-1111",
    },
    {
      id: 3,
      nome: "Verde Vida",
      endereco: "Rua das Árvores, 789",
      telefone: "(44) 97777-2222",
    },
  ]

  return (
    <div className="container mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold mb-8">Empresas Parceiras</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {empresas.map((empresa) => (
          <div key={empresa.id} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold mb-2">{empresa.nome}</h2>
            <div className="flex items-center gap-2 mb-2">
              <MapPin className="w-5 h-5 text-[#16A34A]" />
              <p className="text-gray-700">{empresa.endereco}</p>
            </div>
            <p className="text-gray-700 mb-4">📞 {empresa.telefone}</p>
            <button className="w-full bg-[#16A34A] text-white py-2 rounded-lg hover:bg-[#15803d] transition">
              Agendar Coleta
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Empresas
