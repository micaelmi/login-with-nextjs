import styles from "../styles/Login.module.css";

import LoginCard from "@/src/components/loginCard/";
import Input from "@/src/components/Input"
import Button from "@/src/components/Button"
import Link from "next/link";

export default function Login() {
    return (
        <div className={styles.login}>
            <LoginCard title="Login">
                <form className={styles.form}>
                    <Input type="email" placeholder="Seu e-mail" />
                    <Input type="password" placeholder="Sua senha" />
                    <Button>Entrar</Button>
                    <Link href="/cadastro">Ainda não possui conta?</Link>
                </form>
            </LoginCard>
        </div>
    )
}
