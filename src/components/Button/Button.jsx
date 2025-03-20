import React from 'react'
import styles from "./Button.module.css"

export default function Button({ btnCol, width, children }) {
    return (
        <button
            className={`${styles.btn} ${styles[btnCol]}`}
            style={{width: width }}
        >
            { children }
        </button>
    )
}
