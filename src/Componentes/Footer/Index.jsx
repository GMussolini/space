import React from 'react'
import instagram from "./instagram.svg";
import styles from "./footer.module.scss"

export default function Footer() {
  return (
    <footer className={styles.rodape}>
      <div className={styles.rodape__icones}>
        <a
          href="https://www.instagram.com/gihco_/?hl=en"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagram} alt="ícone do instagram" />
        </a>
      </div>
      <p>Desenvolvido por Giovanni Mussolini</p>
    </footer>
  )
}
