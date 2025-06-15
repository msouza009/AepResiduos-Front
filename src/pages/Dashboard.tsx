import { CalendarCheck, Trash2, Gift, CheckCircle2 } from "lucide-react"

function Dashboard() {
  const agendamentos = [
    { id: 1, data: "10/06/2024", status: "Concluído" },
    { id: 2, data: "15/06/2024", status: "Pendente" },
    { id: 3, data: "20/06/2024", status: "Cancelado" },
  ]

  const pontos = 150

  return (
    <div className="container mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold mb-8">Dashboard</h1>

      {/* Pontuação */}
      <div className="bg-white rounded-xl shadow p-6 mb-10 flex items-center gap-6">
        <Gift className="w-12 h-12 text-[#FACC15]" />
        <div>
          <p className="text-xl font-semibold">Seus Pontos</p>
          <p className="text-3xl font-bold">{pontos}</p>
        </div>
      </div>

      {/* Agendamentos */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Meus Agendamentos</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {agendamentos.map((item) => (
            <div key={item.id} className="bg-white p-6 rounded-xl shadow flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <CalendarCheck className="w-8 h-8 text-[#16A34A]" />
                <div>
                  <p className="text-lg font-semibold">Data</p>
                  <p>{item.data}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Trash2 className="w-8 h-8 text-[#FACC15]" />
                <div>
                  <p className="text-lg font-semibold">Status</p>
                  <p className={item.status === "Concluído" ? "text-green-600" : item.status === "Pendente" ? "text-yellow-600" : "text-red-600"}>
                    {item.status}
                  </p>
                </div>
              </div>
              {item.status === "Pendente" && (
                <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
                  Cancelar Agendamento
                </button>
              )}
              {item.status === "Concluído" && (
                <div className="flex items-center gap-2 text-green-600">
                  <CheckCircle2 className="w-5 h-5" />
                  <p>Coleta realizada!</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Dashboard
