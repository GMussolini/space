import Banner from "./banner.png"
import styles from "./initialPage.module.scss"

import Footer from "Componentes/Footer/Index";
import Gallery from "Componentes/Gallery/Index";
import Header from "Componentes/Header/Index";
import Menu from "Componentes/Menu/Index";
import Populares from "Componentes/Populares/Index";


export default function InitialPage() {
    return (
        <>
            <Header />
            <main>
                <section className={styles.principal}>
                    <Menu />
                    <div className={styles.principal__imagem}>
                        <h1>A galeria mais completa do espaço</h1>
                        <img src={Banner} alt="A imagem da terra vista do espaço" />
                    </div>
                </section>
                <div className={styles.principal__galeria}>
                    <Gallery />
                    <Populares />
                </div>
            </main>
            <Footer />
        </>
    )
}