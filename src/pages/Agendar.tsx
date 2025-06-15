function Agendar() {
  return (
    <div className="container mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold mb-8">Agendar Coleta</h1>

      <form className="bg-white p-8 rounded-xl shadow-md max-w-xl mx-auto space-y-6">
        <div>
          <label className="block mb-1 font-medium">Selecione a Empresa</label>
          <select className="w-full border border-gray-300 p-3 rounded">
            <option>EcoLógica Coletas</option>
            <option>Recicla Fácil</option>
            <option>Verde Vida</option>
          </select>
        </div>
        <div>
          <label className="block mb-1 font-medium">Endereço para Coleta</label>
          <input
            type="text"
            placeholder="Digite seu endereço completo"
            className="w-full border border-gray-300 p-3 rounded"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Data da Coleta</label>
          <input
            type="date"
            className="w-full border border-gray-300 p-3 rounded"
          />
        </div>
        <button className="w-full bg-[#16A34A] text-white py-3 rounded-lg hover:bg-[#15803d] transition">
          Confirmar Agendamento
        </button>
      </form>
    </div>
  )
}

export default Agendar
