import styles from './Banner.module.css'

function BannerEtexto (props) {
    return (
        <>
            <div className={styles.Banner} 
                style={{backgroundImage: `url('/imagens/banner-${props.imagem}.png')`}}>   
            </div>
            <div className={styles.Texto}>
                <h1>{props.texto}</h1>
            </div>
        </>
    )
}

export default BannerEtexto;