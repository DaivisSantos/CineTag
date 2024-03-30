import styles from './NaoEncontrado.module.css'

function NaoEncontrado () {
    return <section className={styles.NaoEncontrado}>
                {/* <h1>Oops! Não disponivel</h1>
                <p>Não foi possivel encontrar a pagina!</p> */}
                <img src='/imagens/gst_bg_054_07.jpg' alt='img error'/>
            </section>
}

export default NaoEncontrado;