import React from "react";

// Importa os módulos necessários do React
import { createContext, useContext, useState } from "react";

// Cria um novo contexto do React para gerenciar os favoritos
export const FavoritosContext = createContext();

// Define um nome para o contexto (opcional, usado para facilitar a depuração)
FavoritosContext.displayName = "Favoritos";

// Define o componente React FavoritosProvider que será responsável por fornecer o contexto dos favoritos para seus componentes filhos
export default function FavoritosProvider({ children }) {
    // Define um estado para armazenar a lista de favoritos
    const [favoritos, setFavoritos] = useState([]);

    // Retorna o provedor de contexto, envolvendo os componentes filhos com o contexto dos favoritos
    return (
        <FavoritosContext.Provider value={{favoritos, setFavoritos}}>
            {children} {/* Renderiza os componentes filhos */}
        </FavoritosContext.Provider>
    )
}

export function useFavoritoContext() {
    const { favoritos, setFavoritos } = useContext(FavoritosContext);

    function AdicionarFavorito(novoFavorito) {
        const favoritosRepetidos = favoritos.some(item => item.id === novoFavorito.id);

        let novaLista = [...favoritos];

        if (!favoritosRepetidos) {
            novaLista.push(novoFavorito);
            return setFavoritos(novaLista);
        }

        novaLista = favoritos.filter(fav => fav.id !== novoFavorito.id);
        return setFavoritos(novaLista);
    }

    return {
        favoritos,
        AdicionarFavorito
    };
}

