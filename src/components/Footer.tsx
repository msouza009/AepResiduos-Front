import { Facebook, Instagram, Linkedin } from "lucide-react"
import { Link } from "react-router-dom"

function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-[#16A34A]">
            <Link to="/">AEP<span className="text-[#FACC15]">Resíduos</span></Link>
          </h2>
          <p className="text-gray-600 mt-2">
            © {new Date().getFullYear()} Todos os direitos reservados.
          </p>
        </div>

        <div className="flex gap-6">
          <Link to="/">Home</Link>
          <Link to="/empresas">Empresas</Link>
          <Link to="/agendar">Agendar</Link>
          <Link to="/sobre">Sobre</Link>
          <Link to="/recompensas">Recompensas</Link>
        </div>

        <div className="flex gap-4">
          <a href="#" className="hover:text-[#16A34A]">
            <Instagram />
          </a>
          <a href="#" className="hover:text-[#16A34A]">
            <Facebook />
          </a>
          <a href="#" className="hover:text-[#16A34A]">
            <Linkedin />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
