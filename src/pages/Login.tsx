import { Link } from "react-router-dom"

function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#F9FAFB] dark:bg-[#111827]">
      <div className="bg-white dark:bg-[#1f2937] p-8 rounded-2xl shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold mb-8 text-center dark:text-white">
          Entrar na <span className="text-[#16A34A]">Plataforma</span>
        </h1>

        <form className="space-y-6">
          <div>
            <label className="block mb-2 font-medium dark:text-white">
              E-mail
            </label>
            <input
              type="email"
              placeholder="seuemail@email.com"
              className="w-full border border-gray-300 dark:border-gray-600 dark:bg-[#111827] dark:text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#16A34A] transition"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium dark:text-white">
              Senha
            </label>
            <input
              type="password"
              placeholder="********"
              className="w-full border border-gray-300 dark:border-gray-600 dark:bg-[#111827] dark:text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#16A34A] transition"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#16A34A] text-white py-3 rounded-full font-medium hover:bg-[#15803d] transition"
          >
            Entrar
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 dark:text-gray-300 mt-6">
          Não tem uma conta?{" "}
          <Link
            to="/register"
            className="text-[#16A34A] font-medium hover:underline"
          >
            Cadastre-se
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Login
