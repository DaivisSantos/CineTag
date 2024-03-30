import { useEffect, useState } from 'react';
import styles from './Card.module.css'
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { useFavoritoContext } from 'contextos/Favoritos';
import { Link } from 'react-router-dom';

function Card ({id, titulo, capa, favorito }) {

    const [favoritado, setFavoritado] = useState(false);
    const {AdicionarFavorito} = useFavoritoContext();

    useEffect(() => {
        const favoritoSalvo = localStorage.getItem(`favorito-${id}`)
        if (favoritoSalvo) {
            setFavoritado(true);
        }
    }, [id]);


    const handlerClick = () => {
        const novoEstado = !favoritado;
        setFavoritado(novoEstado);
        if (novoEstado) {
            localStorage.setItem(`favorito-${id}`, 'true');
            AdicionarFavorito({id, titulo, capa});
        } else {
            localStorage.removeItem(`favorito-${id}`)
        }
    }

    return (
        <div className={styles.card}>
            <Link className={styles.link} to={`/${id}`}>
                <img src={capa} alt='capa' className={styles.Capa}/>
                <h2 className={styles.titulo}>{titulo}</h2>
            </Link> 

            <button onClick={handlerClick} >

            {favoritado ? <FaHeart className={styles.favoritar} size={40}/> : <FaRegHeart className={styles.favoritar} size={40}/>}

            </button>
                       
        </div>
    )
}

export default Card;