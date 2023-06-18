import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Inicio } from "./home"


const AppRoutes = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Inicio/> }/>
            </Routes>
        </BrowserRouter>
    )
}

export { AppRoutes }