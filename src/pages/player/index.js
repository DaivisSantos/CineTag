import BannerEtexto from 'componentes/Banner&Texto';
import styles from './player.module.css'
import { useParams } from 'react-router-dom';
import NaoEncontrado from 'pages/NaoEncontrado';
import { useEffect, useState } from 'react';

function Player () {

    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/DaivisSantos/Cinetag-api/video')
        .then(resposta => resposta.json())
        .then(dados => {
            setVideos(dados)
        })
    }, [])

    const parametros = useParams();
    const video = videos.find(video => {
        return video.id === Number(parametros.id)
    });

    if(!video) {
        return <NaoEncontrado />
    }

    return (
        <>
        <BannerEtexto 
            imagem="player" 
            texto="Player"/>
        <section>
            <iframe className={styles.player}
                width="80%" 
                height="100%" 
                src={video.link} 
                title={video.titulo}
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen></iframe>
        </section>
        </>
    );
};

export default Player