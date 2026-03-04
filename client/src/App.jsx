import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import QuotePage from "./pages/QuotePage"

export default function App(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/quote" element={<QuotePage />} />
            </Routes>
        </BrowserRouter>
    )
}