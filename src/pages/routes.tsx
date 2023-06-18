import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Inicio } from "./home"
import { Logar } from "./login"
import { Cadastrar } from "./cadastro"
import { EsqueceuSenha } from "./esqueceuSenha"
import { Contato } from "./contato"


const AppRoutes = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Inicio/> }/>
                <Route path="/login" element={ <Logar/> }/>
                <Route path="/cadastro" element={ <Cadastrar/> }/>
                <Route path="/esqueceuasenha" element={ <EsqueceuSenha/> }/>
                <Route path="/contato" element={ <Contato/> }/>
            </Routes>
        </BrowserRouter>
    )
}

export { AppRoutes }