import BannerEtexto from 'componentes/Banner&Texto';
import styles from './favoritos.module.css'
import Card from 'componentes/Card'
import { useFavoritoContext } from 'contextos/Favoritos'

function Favoritos () {

    const {favoritos} = useFavoritoContext()

    return (
        <>
            <BannerEtexto 
                imagem="favoritos" 
                texto="somente o favoritos de seu gosto!"/>
            <ul className={styles.lista}>
                    {favoritos.map(video => {
                        return <li><Card {...video} key={video.id}/></li>
                    })} 
            </ul>
        </>
        )
}

export default Favoritos;