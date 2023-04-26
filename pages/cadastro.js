import styles from "../styles/Cadastro.module.css";

import LoginCard from "@/src/components/loginCard/";
import Input from "@/src/components/Input"
import Button from "@/src/components/Button"
import Link from "next/link";

export default function Cadastro() {
    return (
        <div className={styles.cadastro}>
            <LoginCard title="Cadastro">
                <form className={styles.form}>
                    <Input type="text" placeholder="Seu nome" />
                    <Input type="email" placeholder="Seu e-mail" />
                    <Input type="password" placeholder="Sua senha" />
                    <Input type="password" placeholder="confirmar senha" />
                    <Button>Criar conta</Button>
                    <Link href="/login">Já possui uma conta?</Link>
                </form>
            </LoginCard>
        </div>
    )
}
