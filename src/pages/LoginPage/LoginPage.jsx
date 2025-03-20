/* eslint-disable no-unused-vars */
import { useState } from "react"
import styles from "./LoginPage.module.css"
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

export default function LoginPage() {
    const [accountList, setAccountList] = useState([]);
    return (
        <div className={styles.container}>

            {
                (accountList.length == 0)?

                    <div className={styles.introduction}>
                        <img 
                            className={styles.facebook}
                            src="/facebookImg/facebook.svg" 
                            alt="Facebook" />
                        <h2
                            className={styles.introH2}
                        >
                            Avec Facebook, partagez et restez en contact avec votre entourage.
                        </h2>
                    </div>

                    :
                    
                    <div className={styles.recentAccount}>
                
                    </div>
            }
            <div className={styles.LoginForm}>
                <form action="" className={styles.form}>
                    <Input
                        type={"text"} 
                        placeholder="Adresse e-mail ou numéro de tél."
                    ></Input>
                    <Input
                        type={"password"} 
                        placeholder="Mot de passe"
                    ></Input>
                    <Button
                        btnCol={"btnPrimary"}
                        width={"100%"}
                    >Se Connecte</Button>

                    <span className={styles.forgetMdp}>
                        Mot de passe oublié ?
                    </span>

                    <div 
                        style={{
                            width:"100%",
                            borderTop: "1px solid #dddfe2"
                        }}
                    >
                    </div>

                    <Button
                        btnCol={"btnGreen"}
                        width={"75%"}
                    >
                     Créer un nouveau compte
                    </Button>
                </form>
            </div>

        </div>
    )
}
