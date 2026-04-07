import Image from "next/image"
import Link from "next/link"
import styles from "./header.module.css"

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Link href="/">
                    <Image src="/assets/images/logo.png" alt="logo" width={150} height={100}/>
                </Link>
                <div className={styles.headerLinks}>
                    <Link href="/loja#produtos" className={styles.headerLink}>Produtos</Link> 
                    <Link href="/" className={styles.headerLink}>Categorias</Link> 
                    <Link href="/loja/sobre" className={styles.headerLink}>Sobre</Link> 
                    <Link href="#footer" className={styles.headerLink}>Contato</Link> 
                </div>
            </div>
        </header>
    )
}