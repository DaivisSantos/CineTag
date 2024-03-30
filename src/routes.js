import React from "react";
import Favoritos from "pages/favoritos";
import Inicio from "./pages/inicio";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cabecalho from 'componentes/Cabecalho';
import Rodape from "componentes/Rodape";
import FavoritosProvider from "contextos/Favoritos";
import Player from "pages/player";
import NaoEncontrado from "pages/NaoEncontrado";

function AppRoutes () {
    return (
        <BrowserRouter>
        <Cabecalho />
            <FavoritosProvider>
                <Routes >
                    <Route path="/" element={<Inicio />}></Route>
                    <Route path="/Favoritos" element={<Favoritos />}></Route>
                    <Route path="/:id" element={<Player />}></Route>
                    <Route path="*" element={<NaoEncontrado />}></Route>
                </Routes>
            </FavoritosProvider>
        <Rodape />
        </BrowserRouter>
    )
}

export default AppRoutes;