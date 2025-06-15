import { Link } from "react-router-dom"
import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"

function Header() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark"
  })

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }, [darkMode])

  return (
    <header className="bg-white dark:bg-[#1f2937] shadow-sm sticky top-0 z-50 transition">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-[#16A34A]">
          <Link to="/">
            AEP<span className="text-[#FACC15]">Resíduos</span>
          </Link>
        </h1>

        <nav className="hidden md:flex gap-8">
          <Link to="/" className="hover:text-[#16A34A] transition">
            Home
          </Link>
          <Link to="/empresas" className="hover:text-[#16A34A] transition">
            Empresas
          </Link>
          <Link to="/agendar" className="hover:text-[#16A34A] transition">
            Agendar
          </Link>
          <Link to="/dashboard" className="hover:text-[#16A34A] transition">
            Dashboard
          </Link>
          <Link to="/sobre" className="hover:text-[#16A34A] transition">
            Sobre
          </Link>
          <Link to="/recompensas" className="hover:text-[#16A34A] transition">
            Recompensas
          </Link>
        </nav>

        <div className="flex gap-3 items-center">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition"
          >
            {darkMode ? (
              <Sun className="w-5 h-5 text-yellow-400" />
            ) : (
              <Moon className="w-5 h-5 text-gray-800 dark:text-white" />
            )}
          </button>

          <Link
            to="/login"
            className="border border-[#16A34A] text-[#16A34A] px-5 py-2 rounded-full font-medium hover:bg-[#16A34A] hover:text-white transition"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="bg-[#16A34A] text-white px-5 py-2 rounded-full font-medium hover:bg-[#15803d] transition"
          >
            Registro
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
