import { Link } from "react-router-dom"

function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-[#16A34A]">
          <Link to="/">AEP<span className="text-[#FACC15]">Resíduos</span></Link>
        </h1>
        <nav className="hidden md:flex gap-8">
          <Link to="/">Home</Link>
          <Link to="/empresas">Empresas</Link>
          <Link to="/agendar">Agendar</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/sobre">Sobre</Link>
          <Link to="/recompensas">Recompensas</Link>
        </nav>
        <div className="flex gap-4">
          <Link
            to="/login"
            className="border border-[#16A34A] text-[#16A34A] px-4 py-1 rounded hover:bg-[#16A34A] hover:text-white transition"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="bg-[#16A34A] text-white px-4 py-1 rounded hover:bg-[#15803d] transition"
          >
            Cadastro
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
