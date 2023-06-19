import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Inicio } from "./home"
import { Logar } from "./login"
import { Cadastrar } from "./cadastro"
import { EsqueceuSenha } from "./esqueceuSenha"
import { Contato } from "./contato"
import { Cardapio } from "./cardapio"
import { HamburguerPage } from "./hamburguerPage"
import { ScrollToTop } from "../components/scrollToTop"


const AppRoutes = () => {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/login" element={<Logar />} />
                <Route path="/cadastro" element={<Cadastrar />} />
                <Route path="/esqueceuasenha" element={<EsqueceuSenha />} />
                <Route path="/contato" element={<Contato />} />
                <Route path="/cardapio" element={<Cardapio />} />
                <Route path="/cardapio/:id" element={<HamburguerPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export { AppRoutes }