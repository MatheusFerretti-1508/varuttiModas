import { Routes, Route } from "react-router-dom";
import Home from "./containers/Home";
import Verao from "./containers/catalogo";

const Rotas = () => {

    return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={<Verao/>} />
    </Routes>
    )
    
}

export default Rotas