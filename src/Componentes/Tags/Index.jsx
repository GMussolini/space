import React from 'react'
import styles from './tags.module.scss'

export default function Tags({ tags, filtrarFotos, setTodasFotos }) {

    return (
        <div className={styles.tags}>
            <p className={styles.tags__p}>Filtre por tags:</p>
            <ul className={styles.tags__lista}>
                {tags.map((tag) => {
                    return <li onClick={() => filtrarFotos(tag)} key={tag}>{tag}</li>
                })}

                <li onClick={() => setTodasFotos()}>Todas</li>
            </ul>
        </div>
    )
}
