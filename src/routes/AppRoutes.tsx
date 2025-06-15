import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import Empresas from "../pages/Empresas"
import Agendar from "../pages/Agendar"
import Dashboard from "../pages/Dashboard"
import Login from "../pages/Login"
import Register from "../pages/Register"
import Sobre from "../pages/Sobre"
import Recompensas from "../pages/Recompensas"
import Header from "../components/Header"
import Footer from "../components/Footer"

function AppRoutes() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/empresas" element={<Empresas />} />
        <Route path="/agendar" element={<Agendar />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/recompensas" element={<Recompensas />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default AppRoutes
