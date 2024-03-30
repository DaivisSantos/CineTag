import BannerEtexto from "componentes/Banner&Texto";
import Card from "componentes/Card";
import styles from './inicio.module.css'
import React, { useEffect, useState } from "react";

function Inicio () {

    const [videos, setVideos] = useState([]);

    useEffect (() => {
        fetch('https://my-json-server.typicode.com/DaivisSantos/Cinetag-api/video')
        .then(resposta => resposta.json())
        .then(dados => {
            setVideos(dados)
        })
    }, [])

    return (
        <>
            <BannerEtexto
                imagem="home" 
                texto="um lugar para guardar seus vídeos e filmes!"/>
                <ul className={styles.lista}>
                    {videos.map(video => {
                        return <li><Card {...video} key={video.id}/></li>
                    })} 
                </ul>
        </>
    )
}

export default Inicio;