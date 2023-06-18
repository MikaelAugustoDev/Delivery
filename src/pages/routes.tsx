import { BrowserRouter, Route, Routes } from "react-router-dom"


const AppRoutes = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/"/>
            </Routes>
        </BrowserRouter>
    )
}

export { AppRoutes }