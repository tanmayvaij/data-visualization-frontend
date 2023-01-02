import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MainContext from "./context";

export default function App() {
    return (
        <MainContext>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Home/>} />
                </Routes>
            </BrowserRouter>
        </MainContext>
    )
}
