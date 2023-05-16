import React, { useState } from 'react'
import Tags from '../Tags/Index'
import styles from './gallery.module.scss'
import Cards from './Cards'
import fotosData from './fotos.json'

export default function Gallery() {

    const [fotos, setFotos] = useState([...fotosData]);
    const tags = [...new Set(fotosData.map((x) => x.tag))]

    const filtrarFotos = (tag) => {
        const novasFotos = fotosData.filter((x) => {
            return x.tag === tag;
        })

        setFotos(novasFotos);
    }

    const todasFotos = (e) => {
        setFotos(fotosData);
    }

    return (
        <section className={styles.galeria}>
            <h2>Navegue pela galeria</h2>
            <Tags tags={tags} filtrarFotos={filtrarFotos} setTodasFotos={todasFotos}/>
            <Cards fotos={fotos}/>
        </section>
    )
}
