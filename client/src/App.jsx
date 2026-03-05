import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import FormPage from "./pages/FormPage";
import QuotePage from "./pages/QuotePage";

export default function App(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/get-a-quote" element={<FormPage />} />
                <Route path="/quote" element={<QuotePage />} />
            </Routes>
        </BrowserRouter>
    )
}