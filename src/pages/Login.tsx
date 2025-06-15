function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#F9FAFB]">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center">Entrar na Plataforma</h1>
        <form className="space-y-6">
          <div>
            <label className="block mb-1 font-medium">E-mail</label>
            <input
              type="email"
              placeholder="seuemail@email.com"
              className="w-full border border-gray-300 p-3 rounded"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Senha</label>
            <input
              type="password"
              placeholder="********"
              className="w-full border border-gray-300 p-3 rounded"
            />
          </div>
          <button className="w-full bg-[#16A34A] text-white py-3 rounded-lg hover:bg-[#15803d] transition">
            Entrar
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-6">
          Não tem uma conta?{" "}
          <a href="/register" className="text-[#16A34A] hover:underline">
            Cadastre-se
          </a>
        </p>
      </div>
    </div>
  )
}

export default Login
