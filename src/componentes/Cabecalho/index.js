import { Link } from "react-router-dom";
import logo from "./logo.png"
import styles from "./Cabecalho.module.css"
import CabecalhoLink from "componentes/CabecalhoLink";

function Cabecalho () {
    return (
        <header className={styles.cabecalho}>
            <Link className={styles.cabecalho_img} to="./">
                <img src={logo} alt="logo cinetag"/>
            </Link>
            <nav>
                <CabecalhoLink url="/">
                    Home
                </CabecalhoLink>
                <CabecalhoLink url="./Favoritos">
                    Favoritos
                </CabecalhoLink>
            </nav>
        </header>
    )
}

export default Cabecalho;