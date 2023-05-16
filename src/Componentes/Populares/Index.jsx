import React from 'react'
import fotosPopulares from './fotos-populares.json'
import styles from './populares.module.scss'
import Button from 'Componentes/Button/Index'

export default function Populares() {
    return (
        <aside className={styles.populares}>
            <h2>Populares</h2>
            <ul className={styles.populares__imagens}>
                {fotosPopulares.map((popular) => {
                    return(
                        <li key={popular.id}>
                            <img src={popular.path} alt={popular.alt} />
                        </li>
                    )
                })}
            </ul>
            <Button>Ver mais fotos</Button>
        </aside>
    )
}
