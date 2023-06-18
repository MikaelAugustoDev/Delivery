import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Inicio } from "./home"
import { Logar } from "./login"


const AppRoutes = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Inicio/> }/>
                <Route path="/login" element={ <Logar/> }/>
            </Routes>
        </BrowserRouter>
    )
}

export { AppRoutes }