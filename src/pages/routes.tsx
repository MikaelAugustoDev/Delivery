import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Inicio } from "./home"
import { Logar } from "./login"
import { Cadastrar } from "./cadastro"


const AppRoutes = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Inicio/> }/>
                <Route path="/login" element={ <Logar/> }/>
                <Route path="/cadastro" element={ <Cadastrar/> }/>
            </Routes>
        </BrowserRouter>
    )
}

export { AppRoutes }