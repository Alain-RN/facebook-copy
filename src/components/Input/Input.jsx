import React, { useState } from 'react'
import styles from "./Input.module.css"
import { FaEye, FaEyeSlash } from 'react-icons/fa';

export default function Input({ type, placeholder }) {
    const [showPassword, setShowPassword] = useState(false);

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    }

    return (
        <div className={styles.inputContainer}>
            <input
                className={styles.inputComponent}
                type={ type == "password" ? !showPassword ? type : "text": type }
                placeholder={placeholder}
                aria-label={placeholder}
            />
            {
                type == "password" &&
                <span
                    className= {styles.eye}
                    onClick={handleTogglePassword}
                >
                    { showPassword ? <FaEye size={16}></FaEye>  : <FaEyeSlash size={16}></FaEyeSlash>}
                </span>
            }
        </div>
    )
}
