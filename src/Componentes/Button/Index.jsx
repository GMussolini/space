import React from 'react'
import styles from './button.module.scss'

export default function Button({children}) {
  return (
    <button className={styles.botao}>{children}</button>
  )
}
